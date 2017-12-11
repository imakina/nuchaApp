import React, { Component } from 'react'
import MiOrdenLayout from './layout'
import Home from './routes/Home/'
import Productos from './routes/Productos/'

import Client from './routes/Productos/components/Client'
import { Route } from 'react-router'
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  confirmPedido = () => {
    Client.pedido(this.state.selectedFoods, message => {
      alert(message);
    });
  }

  render() {
    return (
      <MiOrdenLayout>
        <div className='App'>
          <div className='ui text container'>
            <Route path='/' exact component={Home} />
            <Route path='/productos' component={Productos} />
          </div>
        </div>
      </MiOrdenLayout>
    );
  }
}

export default App
