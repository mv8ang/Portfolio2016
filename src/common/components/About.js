import React from 'react'
import { Row, Column } from 'react-foundation'
import styles from './About.scss'

const About = () => (
  <div className="page">
    <Row>

      <Column small={12}>
        <img
          src="http://res.cloudinary.com/dpbwxqq7k/image/upload/v1475338314/portfolio_about_image.jpg"
          alt="Mladen Angelov"
          role="presentation"
          className={styles.profileImage}
        />
      </Column>
      <Column small={12} className={styles.aboutContent}>
        <h1 className={styles.pageTitle}>Woah. Who's that handsome devil?</h1>
        <p>My name is Mladén and I'm a fresh graduate of Business Academy Aarhus, Denmark.
        There I got my Multimedia Design and Communication AP degree in 2015, and went on to
        complete the Digital Concept Development bachelor top-up in January 2017.</p>
        <p>At heart, I'm a front-end developer with over 3 years of experience, and an affinity
        for SCSS and JS frameworks. I like poking around and exploring new technologies,
        tools and frameworks, though lately I've been mostly focused on React and its ecosystem.</p>
        <p>My studies and a seemingly random series of events have made me join many different
        projects in the last couple of years. Working on such a variety of teams has
        taught me to stick to best practices, and always try to make the code I push
        well thought-out and easy to reason about.</p>
        <p>Make sure to also check out <a href="https://github.com/mv8ang?tab=repositories" target="_blank">my GitHub profile</a>.
        That's where you can find all the random bits and pieces of code that
        I’ve done for myself throughout the years, including <a href="https://github.com/mv8ang/Portfolio2016" target="_blank">this portfolio</a>.</p>
        <p>The repositories include random CSS trickery
        (<a href="http://mladenangelov.net/testsilo/index.html" target="_blank">css-playground</a>),
        trying out technologies for the first time (Redux, React-Router, Meteor),
        as well as templates set-up for later use: bare-bone React and Meteor apps,
        a simple CSS framework, and a set-up ready to work with Bower and Gulp.</p>
      </Column>
    </Row>
  </div>
)

export default About
