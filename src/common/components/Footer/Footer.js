import React from 'react'
import { Row, Column } from 'react-foundation'
import { SocialIcon } from 'react-social-icons'
import styles from './Footer.scss'

const Footer = () => {
  return (
    <footer>
      <Row>
        <hr className={styles.horizontalDivider} />
        <Column small={12}>
            <SocialIcon url='https://github.com/mv8ang?tab=repositories' color='black' className={styles.socialIcon} />
            <SocialIcon url='https://twitter.com/mv8ang' color='black' className={styles.socialIcon} />
        </Column>
        <Column small={12}>
          <p className={styles.footerText}>Mladen Angelov <br/> front-end developer</p>
        </Column>
      </Row>
    </footer>
  )
}

export default Footer
