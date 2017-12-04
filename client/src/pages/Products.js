import React, { Component } from "react";
import SelectedFoods from "../components/SelectedFoods";
import FoodSearch from "../components/FoodSearch";
import Client from "../components/Client";

class Products extends Component {
  state = {
    selectedFoods: []
  };

  removeFoodItem = itemIndex => {
    const filteredFoods = this.state.selectedFoods.filter(
      (item, idx) => itemIndex !== idx
    );
    this.setState({ selectedFoods: filteredFoods });
  };

  addFood = food => {
    const newFoods = this.state.selectedFoods.concat(food);
    this.setState({ selectedFoods: newFoods });
  };

  confirmPedido = () => {
    Client.pedido(this.state.selectedFoods, message => {
      alert(message);
    });
  }

  render() {
    const { selectedFoods } = this.state;

    return (
        <div className="Products">
          <div className="ui text container">
            <SelectedFoods
              foods={selectedFoods}
              onFoodClick={this.removeFoodItem}
              onPedidoClick={this.confirmPedido}
            />
            <FoodSearch onFoodClick={this.addFood} />
          </div>
        </div>
    );
  }
}

export default Products;
