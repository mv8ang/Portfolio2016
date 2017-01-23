import React from 'react'
import { Link, IndexLink } from 'react-router'
import { Block } from 'react-foundation'
import { menuItems } from '../../lib/menuItems'
import EmailButton from '../EmailButton/EmailButton'
import styles from './NavBar.scss'

const _generateItems = menuItems.map(item => (
  <li>
    <Link to={item.name} key={`key-${item.name}`} className={styles.navLink} activeClassName={styles.activeLink}>
      {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
    </Link>
  </li>
))

const NavBar = () => (
  <nav className={styles.navBarOuter}>
    <div className={styles.navBarInner}>
      <span className={styles.navLogo}>
        <Link to='/' key='logo'>
          Mladen Angelov
        </Link>
      </span>
      <Block className={styles.navItems} showFor="medium">
        <li>
          <IndexLink to='/' key='index' className={styles.navLink} activeClassName={styles.activeLink}>
            Showcase
          </IndexLink>
        </li>
        {_generateItems}
      </Block>
      <EmailButton />
    </div>

    {/* mobile navigation */}
    <Block showOnlyFor="small">
      <div className={styles.navBarOuter}>
        <div className={styles.navBarInnerMobile}>
          <ul className={styles.navItemsMobile}>
            <li>
              <IndexLink to='/' key='index' className={styles.navLink} activeClassName={styles.activeLink}>
                Showcase
              </IndexLink>
            </li>
            {_generateItems}
          </ul>
        </div>
      </div>
    </Block>
  </nav>
)

export default NavBar
