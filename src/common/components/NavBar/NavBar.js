import React from 'react'
import { Link, IndexLink } from 'react-router'
import { menuItems } from '../../lib/menuItems.js'
import styles from './NavBar.scss'

const items = menuItems.map(item => {
  return (
    <li>
      <Link to={item.name} key={item.name}>
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
        <p>front-end developer</p>
      </span>
      <ul className={styles.navItems}>
        <li>
          <IndexLink to='/' key='showcase'>Showcase</IndexLink>
        </li>
        {items}
      </ul>
      <span className={styles.navEmail}>mv8.angelov@gmail.com</span>
    </div>
  </nav>
)

export default NavBar
