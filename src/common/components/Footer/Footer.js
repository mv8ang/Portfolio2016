import React from 'react'
import { Row, Column } from 'react-foundation'
import ScrollToTop from 'react-scroll-up'
import { SocialIcon } from 'react-social-icons'
import styles from './Footer.scss'

const toTopStyles = {
  position: 'fixed',
  bottom: '66px',
  right: '66px',
  background: 'rgba(34, 34, 34, .98)',
  color: '#fff',
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  textAlign: 'center',
  lineHeight: '60px',
  cursor: 'pointer',
  transitionDuration: '0.3s'
}
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
          <ScrollToTop showUnder={700} duration={900} easing='easeOutBounce' style={toTopStyles}>
            <span>
              <i className="material-icons">vertical_align_top</i>
            </span>
          </ScrollToTop>
        </Column>
      </Row>
    </footer>
  )
}

export default Footer
