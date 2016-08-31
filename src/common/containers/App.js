import React, { Component, PropTypes } from 'react'
import { AppBar, IconButton, Layout,  NavDrawer, List, ListItem, Panel } from 'react-toolbox'
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap'
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
      <Layout>
        <NavDrawer
          active={this.state.drawerActive}
          pinned={this.state.drawerPinned}
          onOverlayClick={this.toggleDrawerActive}
          permanentAt='md'
          width='normal'
        >
          <List>
            <IndexLinkContainer to='/'>
              <ListItem caption='Home' leftIcon='home' selectable ripple />
            </IndexLinkContainer>
            <LinkContainer to='portfolio'>
              <ListItem caption='My Portfolio' leftIcon='fingerprint' selectable ripple />
            </LinkContainer>
            <LinkContainer to='services'>
              <ListItem caption='My Services' leftIcon='build' selectable ripple />
            </LinkContainer>
            <LinkContainer to='about'>
              <ListItem caption='About' leftIcon='face' selectable ripple />
            </LinkContainer>
          </List>
        </NavDrawer>

        <Panel>
          <AppBar>
            <IconButton icon='menu' inverse={true} onClick={this.toggleDrawerActive} />
          </AppBar>

          {children}

        </Panel>
      </Layout>
    );
  }
}

App.propTypes = {
  children: PropTypes.node,
}

export default App;
