import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SelectedFoods from './components/SelectedFoods'
import FoodSearch from './components/FoodSearch'
import { Button } from 'reactstrap'
import  Client from './components/Client'

class Productos extends Component {
  constructor (props) {
    super(props)

    this.state = {
      selectedFoods: []
    }
    this.addFood = this.addFood.bind(this)
    this.removeFoodItem = this.removeFoodItem.bind(this)
    this.onClick = this.onClick.bind(this)
  }

  addFood (food) {
    const newFoods = this.state.selectedFoods.concat(food)
    this.setState({ selectedFoods: newFoods })
  }

  removeFoodItem (itemIndex) {
    const filteredFoods = this.state.selectedFoods.filter(
      (item, idx) => itemIndex !== idx
    )
    this.setState({ selectedFoods: filteredFoods })
  }

  onClick () {
    //alert('test')
      Client.insert('jjjj', mensaje => {
        alert(mensaje)
      })
  }
/*
  confirmPedido () {
    Client.pedido(this.state.selectedFoods, message => {
      alert(message);
    });
  }
*/
  render() {
    return (
      <div>
        <Button
          color='Danger'
          onClick={this.onClick}
        >
          Realizar pedido!!
        </Button>
        <FoodSearch onFoodClick={this.addFood} />
        <SelectedFoods
          foods={this.state.selectedFoods}
          onFoodClick={this.removeFoodItem}
         // onPedidoClick={this.confirmPedido}

        />
      </div>
    )
  }
}

Productos.defaultProps = {}

Productos.propTypes = {}

export default Productos
