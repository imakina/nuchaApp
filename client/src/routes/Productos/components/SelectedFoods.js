import React from 'react'

export default function SelectedFoods(props) {
  const { foods } = props

  const foodRows = foods.map((food, idx) => (
    <tr key={idx} onClick={() => props.onFoodClick(idx)}>
      <td>{food.descripcion}</td>
      <td className='right aligned'>{food.codigo}</td>
      <td className='right aligned'>{food.precio}</td>     
    </tr>
  ))

  return (
    <table className='ui selectable structured table'>
      <thead>
        <tr>
          <th colSpan='5'>
            <h3>Productos Seleccionados</h3>
          </th>
        </tr>
        <tr>
          <th className='eight wide'>Descripción</th>
          <th>Código</th>
          <th>Precio</th>          
        </tr>
      </thead>
      <tbody>
        {foodRows}
      </tbody>
      <tfoot>
        <tr>
          <th>Total</th>
          <th className='right aligned' id='total-codigo'>
            {sum(foods, 'codigo')}
          </th>
          <th className='right aligned' id='total-precio'>
            {sum(foods, 'precio')}
          </th>        
          
        </tr>
      </tfoot>
    </table>
  )
}

function sum(foods, prop) {
  return foods
    .reduce((memo, food) => parseInt(food[prop], 10) + memo, 0.0)
    .toFixed(2)
}
