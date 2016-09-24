import React from 'react'
import { Row, Column, Button, Label } from 'react-foundation'
import { ProjectListViewData } from '../../lib/ProjectListViewData'
import styles from './ProjectView.scss'

const _generateTags = (project) => (
  project.technologies.map(tech => (
    <Label className={styles.projectTechLabel}>{tech}</Label>
  ))
)

const ProjectView = (props) => {
  const project = ProjectListViewData.find(x => x.name === props.params.projectName)

  return (
    <div className="page">
      <Row>

        <Column small={12} style={{ display: 'flex', alignItems: 'center'}}> {/* ouch */}
          <h1 className={styles.pageTitle}>{project.name}</h1>
          <Label color='success' className={styles.projectTypeLabel}>
            {project.type}
          </Label>
        </Column>
      </Row>
      <Row>
        <Column small={12} large={4} pushOnLarge={8}>
          <h5 className={styles.projectSubtitles}>about the project:</h5>
          {project.description}
          <br /><br />
          <h5 className={styles.projectSubtitles}>what I  used:</h5>
          <div className={styles.tagContainer}>
            {_generateTags(project)}
          </div>
          {project.url ? (
            <span>
              <br />
              <h5 className={styles.projectSubtitles}>visit website</h5>
              <a href={project.url} target="_blank">
                <Button>{project.url}</Button>
              </a>
            </span>
          ) : ''}
        </Column>

        <Column small={12} large={8} pullOnLarge={4}>
          <div className={styles.projectImage}>
            <img src={project.image} alt=""/>
          </div>
          <div className={styles.projectImage}>
            <img src={project.image} alt=""/>
          </div>
          <div className={styles.projectImage}>
            <img src={project.image} alt=""/>
          </div>
        </Column>

      </Row>
    </div>
  )
}

export default ProjectView
