import React from 'react'
import { Link, IndexLink } from 'react-router'
import { Menu, MenuItem } from 'react-foundation'

const menuItems = [
  {name: 'about'},
  {name: 'services'},
  {name: 'portfolio'},
]

let items = menuItems.map(item => {
  return (
    <MenuItem>
      <Link to={item.name}>
        {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
      </Link>
    </MenuItem>
  )
})

const NavBar = () => (
  <Menu alignment='right'>
    {items}
    <MenuItem>
      <IndexLink to='/'>Home</IndexLink>
    </MenuItem>
  </Menu>
)

export default NavBar
