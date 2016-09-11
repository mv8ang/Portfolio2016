import React from 'react'
import { render } from 'react-dom'
import { Router, IndexRoute, Route, browserHistory } from 'react-router'
import App from './common/containers/App'
import Showcase from './common/components/Showcase'
import About from './common/components/About'
import ProjectView from './common/components/ProjectView/ProjectView'
import './index.css';

render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Showcase} />
      <Route path='showcase' component={Showcase} />
      <Route path='showcase/:projectName' component={ProjectView} />
      <Route path='about' component={About} />
    </Route>
  </Router>,
  document.getElementById('root')
)
