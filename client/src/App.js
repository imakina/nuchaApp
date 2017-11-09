import React, { Component } from "react";
import SelectedFoods from "./components/SelectedFoods";
import FoodSearch from "./components/FoodSearch";
import Layout from "./components/Layout";

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

  render() {
    const { selectedFoods } = this.state;

    return (
      <Layout>
        <div className="App">
          <div className="ui text container">
          <FoodSearch onFoodClick={this.addFood} />
            <SelectedFoods
              foods={selectedFoods}
              onFoodClick={this.removeFoodItem}
            />
          </div>
        </div>
      </Layout>
    );
  }
}

export default App;
