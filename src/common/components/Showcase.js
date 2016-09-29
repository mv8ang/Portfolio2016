import React from 'react'
import { Row, Column, Badge } from 'react-foundation'
import { ProjectListViewData } from '../lib/ProjectListViewData'
import { LinkContainer } from 'react-router-bootstrap'
import styles from './Showcase.scss'

const generateProjectListView = ProjectListViewData.map(item => {
  return (
    <LinkContainer to={`showcase/${item.name}`} key={item.name}>
      <div className={styles.projectPreviewContainer}>
        <img src={item.coverImage} alt="" />

        <div className={styles.projectPreviewInfo}>
          <h2>{item.name}</h2>
          <div className={styles.tags}>

            {item.technologies.map((tech, i) => (
              <Badge className={styles.tagBadge} key={`tech-${i}`}>
                {tech}
              </Badge>
            ))}

            <Badge color='success'>
              {item.type}
            </Badge>
          </div>
        </div>
      </div>
    </LinkContainer>
  )
})

const Showcase = () => (
  <div className='page'>
    <Row>
      <Column small={12}>
        <h1 className={styles.pageTitle}>Selected Projects</h1>
      </Column>
    </Row>
    <Row>
      <Column small={12}>
        {generateProjectListView}
      </Column>
    </Row>
  </div>
)

export default Showcase
