import React from 'react'
import { Link, IndexLink } from 'react-router'
import { menuItems } from '../../lib/menuItems'
import EmailButton from '../EmailButton/EmailButton'
import styles from './NavBar.scss'

const _generateItems = menuItems.map(item => {
  return (
    <li>
      <Link to={item.name} key={item.name} className={styles.navLink} activeClassName={styles.activeLink}>
        {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
      </Link>
    </li>
  )
})

const NavBar = () => (
  <nav className={styles.navBarOuter}>
    <div className={styles.navBarInner}>
      <span className={styles.navLogo}>
        <Link to='/' key='logo'>
          Mladen Angelov
        </Link>
      </span>
      <ul className={styles.navItems}>
        <li>
          <IndexLink to='/' key='showcase' className={styles.navLink} activeClassName={styles.activeLink}>
            Showcase
          </IndexLink>
        </li>
        {_generateItems}
      </ul>
      <EmailButton />
    </div>
  </nav>
)

export default NavBar
