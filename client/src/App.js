import React, { Component } from "react";
import SelectedFoods from "./components/SelectedFoods";
import FoodSearch from "./components/FoodSearch";
import Layout from "./components/Layout";
import Client from "./components/Client";

class App extends Component {
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
      <Layout>
        <div className="App">
          <div className="ui text container">
            <SelectedFoods
              foods={selectedFoods}
              onFoodClick={this.removeFoodItem}
              onPedidoClick={this.confirmPedido}
            />
            <FoodSearch onFoodClick={this.addFood} />
          </div>
        </div>
      </Layout>
    );
  }
}

export default App;
