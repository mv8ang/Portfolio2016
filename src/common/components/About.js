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
      <Column small={12} className={styles.alignCenter}>
        <h1 className={styles.pageTitle}>Woah. Who's that handsome devil?</h1>
        <p>My name is Mladen! I'm coming straight out of Business Academy Aarhus,
        where I got my Multimedia Design and Communication degree, and am currently
        finishing my Digital Concept Development BA top-up programme.</p>
        <p>I'm a front-end developer with over 2 years of experience, and an affinity
        for SCSS and JS frameworks. I stick to best practices, and I always try to
        make the code I push well thought-out and easy to reason about.</p>
        <p>Make sure to also check out <a href="https://github.com/mv8ang?tab=repositories" target="_blank">my GitHub profile</a>.
        That's where you can find all the random bits and pieces of code that
        I’ve done for myself throughout the years, including this portfolio.</p>
        <p>The repositories include random CSS trickery
        (<a href="http://mladenangelov.net/testsilo/index.html" target="_blank">css-playground</a>),
        trying out technologies for the first time (Redux, React-Router, Meteor),
        as well as templates set-up for later use: bare-bone React and Meteor apps,
        a simple CSS framework, and a set-up ready to work with Bower and Gulp.</p>
          {/* coverImage: 'https://placeimg.com/880/500/tech',
          images: [
            'https://placeimg.com/880/500/tech/grayscale',
            'https://placeimg.com/880/500/tech/grayscale',
            'https://placeimg.com/880/500/tech/grayscale',
            'https://placeimg.com/880/500/tech/grayscale',
          ],
          name: 'repository',
          type: 'Miscellaneous',
          technologies: ['React', 'JS', 'ES6', 'CSS', 'SCSS/modules', 'Gulp', 'Webpack'],
          description: [
            'My GitHub account is where you can find all the random bits and pieces of coding that I’ve done for myself throughout the years, including this portfolio.',
            'The repositories include cool CSS trickery (css-playground), trying out technologies for the first time (Redux, React-Router, Meteor), as well as templates set-up for later use: bare-bone React and Meteor apps, a CSS framework, and a set-up ready to work with Bower and Gulp.',
          ],
          url: 'https://github.com/mv8ang?tab=repositories', */}

      </Column>
    </Row>
  </div>
)

export default About
