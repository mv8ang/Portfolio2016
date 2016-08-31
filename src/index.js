import React from 'react'
import { render } from 'react-dom'
import { Router, IndexRoute, Route, browserHistory } from 'react-router'
import App from './common/containers/App'
import Home from './common/components/Home'
import Portfolio from './common/components/Portfolio'
import Services from './common/components/Services'
import About from './common/components/About'
import './index.css';

render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='portfolio' component={Portfolio} />
      <Route path='services' component={Services} />
      <Route path='about' component={About} />
    </Route>
  </Router>,
  document.getElementById('root')
)
