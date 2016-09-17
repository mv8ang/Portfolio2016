import React from 'react'
import { Row, Column, Badge } from 'react-foundation'
import { ProjectListViewData } from '../lib/ProjectListViewData'
import { Link } from 'react-router'
import styles from './Showcase.scss'

const generateProjectListView = ProjectListViewData.map(item => {
  return (
    <Link to={`showcase/${item.name}`} key={item.name}>
      <div className={styles.projectPreviewContainer}>
        <img src={item.image} alt="" />

        <div className={styles.projectPreviewInfo}>
          <h2>{item.name}</h2>
          <Badge className='super-badge'>
            {item.type}
          </Badge>
        </div>
      </div>
    </Link>
  )
})

const Showcase = () => (
  <div className='page'>
    <Row>
      <Column small={12}>
        <h1>Selected Projects</h1>
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
