const express = require('express');
const fs = require('fs');
//const sqlite = require('sql.js');
var bodyParser = require('body-parser');
const mysql = require("mysql");

//const db = new sqlite.Database(filebuffer);

const app = express();

app.set("port", process.env.PORT || 3001);
// create application/json parser
var jsonParser = bodyParser.json()
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const connection = mysql.createConnection({
  host     : '192.168.10.10',
  user     : 'root',
  password : 'root',
  database : 'afsnextdb'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('mySQL Connected!');
});

const COLUMNS = [
  "carbohydrate_g",
  "protein_g",
  "fa_sat_g",
  "fa_mono_g",
  "fa_poly_g",
  "kcal",
  "description"
];

app.get("/api/food", (req, res) => {
  const param = req.query.q;

  if (!param) {
    res.json({
      error: "Missing required parameter `q`"
    });
    return;
  }

  // WARNING: Not for production use! The following statement
  // is not protected against SQL injections.
  const r = db.exec(
    `
    select ${COLUMNS.join(", ")} from entries
    where description like '%${param}%'
    limit 100
  `
  );

  if (r[0]) {
    res.json(
      r[0].values.map(entry => {
        const e = {};
        COLUMNS.forEach((c, idx) => {
          // combine fat columns
          if (c.match(/^fa_/)) {
            e.fat_g = e.fat_g || 0.0;
            e.fat_g = (parseFloat(e.fat_g, 10) +
              parseFloat(entry[idx], 10)).toFixed(2);
          } else {
            e[c] = entry[idx];
          }
        });
        return e;
      })
    );
  } else {
    res.json([]);
  }
});

app.get('/api/productos/search', (req,res) => {
  
  const param = req.query.q;
  const sqlquery = "SELECT * FROM producto where descripcion like '%"+param+"%'"
  //console.log(sqlquery)

  connection.query(sqlquery, function (error, results, fields) {
    if (error) throw error;
    res.json(results);
  });

});

app.post('/api/pedido', jsonParser,  (req,res) => {

  if (!req.body) return res.sendStatus(400)

  console.log(req.body)
  
  // connection.query(sqlquery, function (error, results, fields) {
  //   if (error) throw error;
  //   res.json(results);
  // });

  res.json("make it");

});

//api de pedidos
app.get('/api/pedidos/insert', (req,res) => {
  
  const param = req.query.q;
  //pedidos
  var sqlquery = "INSERT INTO pedido (fecha_hora,vendedor_id,mail_cliente, aplicacion_id, total) VALUES ('2017-11-16 22:57:00',1,null,1,1223)"// '%"+param+"%'
  //pedidos_productos, se debe insertar 1 registro por producto

  connection.query(sqlquery, function (error, results, fields) {
    if (!error) {

      //tomo el id del pedido
      var sqlquery = "SELECT id FROM pedido order by 1 desc LIMIT 1"
      connection.query(sqlquery, function (error, results, fields) {
        if (!error) {
          
          //Se inserta el detalle del pedido y sus productos con el di del pedido
          console.log(results)
          var ultimoid = results[0].id
          var sqlquery = "INSERT INTO  pedidos_productos  (producto_id,cantidad,pedido_id,aplicacion_id) VALUES (2,2,"+ultimoid+",1)"
          connection.query(sqlquery, function (error, results, fields) {
             if (!error) {
                
               //esta ok
               res.json('Se realizo el pedido exitosamente');
               }
               else
               {
                console.log(error)
                 throw error;
               }
               });

        }
        else
        {
          console.log(error)
          throw error;
        }

       });

    }
    else
    {
      console.log(error)
      throw error;
    }

   
  });

});



app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
});

