import React from 'react'
import { Badge } from 'react-foundation'
import { Link, IndexLink } from 'react-router'
import { menuItems } from '../../lib/menuItems.js'
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
        <p>Mladen Angelov</p>
      </span>
      <ul className={styles.navItems}>
        <li>
          <IndexLink to='/' key='showcase' className={styles.navLink} activeClassName={styles.activeLink}>
            Showcase
          </IndexLink>
        </li>
        {_generateItems}
      </ul>
      <a href='mailto:mv8.angelov@gmail.com'>
        <Badge color='alert' className={styles.navEmail}>
          mv8.angelov@gmail.com
        </Badge>
      </a>
    </div>
  </nav>
)

export default NavBar
