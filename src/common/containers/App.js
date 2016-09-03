import React, { Component, PropTypes } from 'react'
// import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap'
import { Link, IndexLink } from 'react-router'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      drawerActive: false,
      drawerPinned: false
    }
  }

  toggleDrawerActive = () => {
    this.setState({ drawerActive: !this.state.drawerActive })
  }

  toggelDrawerPinned = () => {
    this.setState({ drawerPinned: !this.state.drawerPinned })
  }

  render() {
    const { children } = this.props

    return (
      <div>
        <ul>
          <IndexLink to='/'>
            <li>Home</li>
          </IndexLink>
          <Link to='portfolio'>
            <li>Portfolio</li>
          </Link>
          <Link to='services'>
            <li>Services</li>
          </Link>
          <Link to='about'>
            <li>About</li>
          </Link>
        </ul>
        {children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node,
}

export default App;
