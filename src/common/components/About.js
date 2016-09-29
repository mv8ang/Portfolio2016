import React from 'react'
import { Row } from 'react-foundation'

const About = () => (
  <div className="page">
    <Row>
      <h1>Hello About!</h1>
      <p>Here will be beautiful content</p>
      <p>

      
        coverImage: 'https://placeimg.com/880/500/tech',
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
        url: 'https://github.com/mv8ang?tab=repositories',


      </p>
    </Row>
  </div>
)

export default About
