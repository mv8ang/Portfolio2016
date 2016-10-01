import React from 'react'
import { Row, Column, Button, Label } from 'react-foundation'
import { ProjectListViewData } from '../../lib/ProjectListViewData'
import styles from './ProjectView.scss'

const _generateTags = (technologies) => (
  technologies.map(tech => (
    <Label className={styles.projectTechLabel}>{tech}</Label>
  ))
)

const _generateImages = (thumbnails) => (
  thumbnails.map(thumbnail => (
    <div className={styles.projectImage}>
      <img src={thumbnail} alt=""/>
    </div>
  ))
)

const _generateDescriptionParagraphs = (paragraphs) => (
  paragraphs.map(paragraph => (
    <p>{paragraph}</p>
  ))
)

const ProjectView = (props) => {
  const project = ProjectListViewData.find(x => x.name === props.params.projectName)
  const { name, description, technologies, thumbnails, type, url } = project

  return (
    <div className="page">
      <Row>

        <Column small={12} style={{ display: 'flex', alignItems: 'center'}}> {/* ouch */}
          <h1 className={styles.pageTitle}>{name}</h1>
          <Label color='success' className={styles.projectTypeLabel}>
            {type}
          </Label>
        </Column>
      </Row>
      <Row>
        <Column small={12} large={4} pushOnLarge={8}>
          <h4 className={styles.subtitle}>about the project:</h4>
          {_generateDescriptionParagraphs(description)}
          <br />

          <h4 className={styles.subtitle}>what I  used:</h4>
          <div className={styles.tagContainer}>
            {_generateTags(technologies)}
          </div>

          {url ? (
            <span>
              <br />
              <h4 className={styles.subtitle}>visit website</h4>
              <a href={url} target="_blank">
                <Button color="alert">{url}</Button>
              </a>
            </span>
          ) : ''}
        </Column>

        <Column small={12} large={8} pullOnLarge={4}>
          {_generateImages(thumbnails)}
        </Column>

      </Row>
    </div>
  )
}

export default ProjectView
