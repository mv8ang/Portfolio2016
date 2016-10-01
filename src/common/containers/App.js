import React, { Component, PropTypes } from 'react'
import NavBar from '../components/NavBar/NavBar'
import ScrollToTop from 'react-scroll-up'
import Footer from '../components/Footer/Footer'
import './App.css';


const toTopStyles = {
  position: 'fixed',
  bottom: '66px',
  right: '66px',
  background: 'rgba(34, 34, 34, .98)',
  color: '#fff',
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  textAlign: 'center',
  lineHeight: '60px',
  cursor: 'pointer',
  transitionDuration: '0.3s'
}

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
        <ScrollToTop showUnder={500} duration={900} easing='easeOutBounce' style={toTopStyles}>
          <span>
            <i className="material-icons">vertical_align_top</i>
          </span>
        </ScrollToTop>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node,
}

export default App;
