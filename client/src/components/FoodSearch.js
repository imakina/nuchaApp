import React from "react";
import Client from "./Client";

const MATCHING_ITEM_LIMIT = 25;

class FoodSearch extends React.Component {
  state = {
    foods: [],
    showRemoveIcon: false,
    searchValue: ""
  };

  handleSearchChange = e => {
    const value = e.target.value;

    this.setState({
      searchValue: value
    });

    if (value === "") {
      this.setState({
        foods: [],
        showRemoveIcon: false
      });
    } else {
      this.setState({
        showRemoveIcon: true
      });

      // Client.search(value, foods => {
      //   this.setState({
      //     foods: foods.slice(0, MATCHING_ITEM_LIMIT)
      //   });
      // });

      Client.productos(value, foods => {
        this.setState({
          foods: foods.slice(0, MATCHING_ITEM_LIMIT)
        });
      });

    }
  };

  handleSearchCancel = () => {
    this.setState({
      foods: [],
      showRemoveIcon: false,
      searchValue: ""
    });
  };

  render() {
    const { showRemoveIcon, foods } = this.state;
    const removeIconStyle = showRemoveIcon ? {} : { visibility: "hidden" };

    const foodRows = foods.map((food, idx) => (
      <tr key={idx}>
        <td>{food.descripcion}</td>
        <td className="right aligned">{food.codigo}</td>
        <td className="right aligned">{food.precio}</td>
        <td className="right aligned"><input type='text'></input></td>
        <td className="right aligned">
            <button
            className="btn btn-default"
            onClick={() => this.props.onFoodClick(food)}>ok</button>
        </td>
      </tr>
    ));

    return (
      <div id="food-search">
        <table className="ui selectable structured large table">
          <thead>
            <tr>
              <th colSpan="7">
                <div className="ui fluid search">
                  <div className="ui icon input">
                    <input
                      className="prompt"
                      type="text"
                      placeholder="Search foods..."
                      value={this.state.searchValue}
                      onChange={this.handleSearchChange}
                    />
                    <i className="search icon" />
                  </div>
                  <i
                    className="remove icon"
                    onClick={this.handleSearchCancel}
                    style={removeIconStyle}
                  />
                </div>
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
        </table>
      </div>
    );
  }
}

export default FoodSearch;
