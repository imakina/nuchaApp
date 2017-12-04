const express = require('express');
const fs = require('fs');
var bodyParser = require('body-parser');
const logger = require('morgan');
// const sqlite = require('sql.js');
// const filebuffer = fs.readFileSync('db/usda-nnd.sqlite3');
// const db = new sqlite.Database(filebuffer);

const app = express();

app.use(logger('dev'));

// create application/json parser
var jsonParser = bodyParser.json()
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('port', (process.env.PORT || 3001));

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// const mysql = require('mysql');
// const connection = mysql.createConnection({
//   host     : '192.168.10.10',
//   user     : 'root',
//   password : 'root',
//   database : 'afsnextdb'
// });

// connection.connect((err) => {
//   if (err) throw err;
//   console.log('mySQL Connected!');
// });

const COLUMNS = [
  'carbohydrate_g',
  'protein_g',
  'fa_sat_g',
  'fa_mono_g',
  'fa_poly_g',
  'kcal',
  'description',
];

// app.get('/api/food', (req, res) => {
//   const param = req.query.q;

//   if (!param) {
//     res.json({
//       error: 'Missing required parameter `q`',
//     });
//     return;
//   }

//   // WARNING: Not for production use! The following statement
//   // is not protected against SQL injections.
//   const r = db.exec(`
//     select ${COLUMNS.join(', ')} from entries
//     where description like '%${param}%'
//     limit 100
//   `);

//   if (r[0]) {
//     res.json(
//       r[0].values.map((entry) => {
//         const e = {};
//         COLUMNS.forEach((c, idx) => {
//           // combine fat columns
//           if (c.match(/^fa_/)) {
//             e.fat_g = e.fat_g || 0.0;
//             e.fat_g = (
//               parseFloat(e.fat_g, 10) + parseFloat(entry[idx], 10)
//             ).toFixed(2);
//           } else {
//             e[c] = entry[idx];
//           }
//         });
//         return e;
//       })
//     );
//   } else {
//     res.json([]);
//   }
// });

// app.get('/api/productos/search', (req,res) => {
  
//   const param = req.query.q;
//   const sqlquery = "SELECT * FROM producto where descripcion like '%"+param+"%'"
//   //console.log(sqlquery)

//   connection.query(sqlquery, function (error, results, fields) {
//     if (error) throw error;
//     res.json(results);
//   });

// });

// app.post('/api/pedido', jsonParser,  (req,res) => {

//   if (!req.body) return res.sendStatus(400)

//   console.log(req.body)
  
//   // connection.query(sqlquery, function (error, results, fields) {
//   //   if (error) throw error;
//   //   res.json(results);
//   // });

//   res.json("make it");

// });

// Require our routes into the application.
require('./server/routes')(app);
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
