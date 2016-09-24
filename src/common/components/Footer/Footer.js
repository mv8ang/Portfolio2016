import React from 'react'
import { Row, Column } from 'react-foundation'
import ScrollToTop from 'react-scroll-up'
import styles from './Footer.scss'

const toTopStyles = {
  position: 'fixed',
  bottom: '90',
  right: '90',
  background: 'rgba(34, 34, 34, .98)',
  color: '#fff',
  width: '50',
  height: '50',
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
        <Column small={12}>
          <p className={styles.footerText}>Mladen Angelov - front-end developer</p>
          <ScrollToTop showUnder={700} duration={300} easing='easeInCubic' style={toTopStyles}>
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
