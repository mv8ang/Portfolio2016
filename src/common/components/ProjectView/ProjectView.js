import React from 'react'
import { Row } from 'react-foundation'
import { ProjectListViewData } from '../../lib/ProjectListViewData'

const ProjectView = (props) => {
  const project = ProjectListViewData.find(x => x.name === props.params.projectName)

  return (
    <div className="page">
      <Row>
        <p>test</p>
        {project.name}
        {project.description}
      </Row>
    </div>
  )
}

export default ProjectView
