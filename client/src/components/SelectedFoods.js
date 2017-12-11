import React from "react";

export default function SelectedFoods(props) {
  const { foods } = props;

  const foodRows = foods.map((producto, idx) => (
    <tr key={idx} onClick={() => props.onFoodClick(idx)}>
      <td>{producto.descripcion}</td>
      <td className="right aligned">{producto.codigo}</td>
      <td className="right aligned">{producto.precio}</td>
      <td className="right aligned">{producto.cantidad}</td>
      <td className="right aligned">{producto.precio * producto.cantidad}</td>
    </tr>
  ));

  return (
    <div>
    <table className="ui selectable structured large table">
    <thead>
      </thead>
      <tbody>
      <tr>
        <td className="right aligned">
          <button onClick={() => props.onPedidoClick()}>Confirmar Pedido</button>
        </td>
      </tr>
      </tbody>
    </table>
    <table className="ui selectable structured large table">
      <thead>
        <tr>
          <th colSpan="5">
            <h3>Selected foods</h3>
          </th>
        </tr>
        <tr>
          <th className="eight wide">Descripcion</th>
          <th>Codigo</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <th>Importe</th>
        </tr>
      </thead>
      <tbody>
        {foodRows}
      </tbody>
      <tfoot>
        <tr>
          <th>Total</th>
          <th className="right aligned" id="total-kcal">
            
          </th>
          <th className="right aligned" id="total-protein_g">
            {sum(foods, "precio")}
          </th>
          <th className="right aligned" id="total-fat_g">
            {sum(foods, "cantidad")}
          </th>
          <th className="right aligned" id="total-fat_g">
            
          </th>
        </tr>
      </tfoot>
    </table>
    </div>
  );
}

function sum(foods, prop) {
  return foods
    .reduce((memo, food) => parseInt(food[prop], 10) + memo, 0.0)
    .toFixed(2);
}
