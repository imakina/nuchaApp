import React from "react";

export default function SelectedFoods(props) {
  const { foods } = props;

  const foodRows = foods.map((producto, idx) => (
    <tr key={idx} onClick={() => props.onFoodClick(idx)}>
      <td>{producto.descripcion}</td>
      <td className="right aligned">{producto.codigo}</td>
      <td className="right aligned">{producto.precio}</td>
      <td className="right aligned"></td>
      <td className="right aligned"></td>
    </tr>
  ));

  return (
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
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {foodRows}
      </tbody>
      <tfoot>
        <tr>
          <th>Total</th>
          <th className="right aligned" id="total-kcal">
            {sum(foods, "kcal")}
          </th>
          <th className="right aligned" id="total-protein_g">
            {sum(foods, "precio")}
          </th>
          <th className="right aligned" id="total-fat_g">
            {sum(foods, "fat_g")}
          </th>
          <th className="right aligned" id="total-carbohydrate_g">
            {sum(foods, "carbohydrate_g")}
          </th>
        </tr>
      </tfoot>
    </table>
  );
}

function sum(foods, prop) {
  return foods
    .reduce((memo, food) => parseInt(food[prop], 10) + memo, 0.0)
    .toFixed(2);
}
