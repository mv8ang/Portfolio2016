import React from 'react'
import { Row } from 'react-foundation'
import ProjectListView from './ProjectListView/ProjectListView'

const Showcase = () => (
  <div className='page'>
    <Row>
      <h1>Selected Projects</h1>
    </Row>
    <Row>
      <ProjectListView />
    </Row>
  </div>
)

export default Showcase
