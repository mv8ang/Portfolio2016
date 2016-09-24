import React, { Component, PropTypes } from 'react'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    const { children } = this.props

    return (
      <div>
        <NavBar />
        {children}
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node,
}

export default App;
