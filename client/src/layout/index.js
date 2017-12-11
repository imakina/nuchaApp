import React, { Component, PropTypes } from 'react'
import Header from './Header'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

class MiOrdenLayout extends Component {
  constructor(props) {
    super(props)
  
    this.state = {}
  }

  render () {
    return (
      <div style={layoutStyle}>
        <Header />       
        {this.props.children}
      </div>
    )
  }
}

MiOrdenLayout.defaultProps = {}

MiOrdenLayout.propTypes = {}

export default MiOrdenLayout