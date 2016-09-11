import React from 'react'
import { ProjectListViewData } from '../../lib/ProjectListViewData.js'
import { Link } from 'react-router'
import styles from './ProjectListView.scss'

const generateProjectListView = ProjectListViewData.map(item => {
  return (
    <Link to={`showcase/${item.name}`}>
      <div className={styles.projectPreviewContainer}>
        <img src={item.image} alt="" />

        <div className={styles.projectPreviewInfo}>
            <h2>{item.name}</h2>
            <p className="icon-links">
              <a href="#">
                  <span className="fa fa-twitter">{item.type}</span>
              </a>
              <a href="#">
                  <span className="fa fa-facebook">two</span>
              </a>
              <a href="#">
                  <span className="fa fa-instagram">tre</span>
              </a>
            </p>
        </div>
      </div>
    </Link>
  )
})

const ProjectListView = () => (
  <div>
    {generateProjectListView}
  </div>
)

export default ProjectListView
