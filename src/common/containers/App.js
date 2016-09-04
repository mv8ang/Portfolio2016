import React, { Component, PropTypes } from 'react'
import NavBar from '../components/NavBar/NavBar'
import { Row } from 'react-foundation'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    const { children } = this.props

    return (
      <Row>
        <NavBar />
        {children}
      </Row>
    );
  }
}

App.propTypes = {
  children: PropTypes.node,
}

export default App;
