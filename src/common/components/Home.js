import React from 'react'
import styles from './Home.scss'
import { Button } from 'react-foundation'

const Home = () => (
  <div>
    <Button color='success'>Button</Button>
    <div style={{ flex: 1, overflow: 'auto', padding: '1.8rem'}}>
      <h1 className={styles.test}>Hello Home!</h1>
      <p>Here will be beautiful content</p>
    </div>
  </div>
)

export default Home
