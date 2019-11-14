import { h } from 'preact'
import style from './style'

import Project from '../Project'

const projects = [
  {
    title: 'Book Store Shopping Cart',
    image: '../../images/react-bookstore.png',
    text:
      'Built out the functionality of a shopping. Pulled book data from an API using Axios, Used the React Context API store data/state globally',
    link: 'https://github.com/drejohnson/react-shopping-cart',
  },
  {
    title: 'NASA APOD Project',
    image: '../../images/nasa-photo-of-the-day.iamdrejohnson.now.sh_.png',
    text:
      'Used Axios to fetch the "Astronomy Photo Of The Day from the NASA API and React and Styled-Components for the UI"',
    link: 'https://github.com/drejohnson/nasa-photo-of-the-day',
  },
  {
    title: 'Lambda Newspaper Project',
    image: '../../images/lambda-times.png',
    text:
      'Create this project using the DOM, DOM Events, functional Components, and data request by uing the axios library. Also built a fully functional carousel from scratch.',
    link: 'https://github.com/drejohnson/nasa-photo-of-the-day',
  },
  {
    title: 'Lambda Calculator',
    image: '../../images/lambda-calculator.png',
    text: 'Used React to built out a fully functional calculator',
    link: 'https://github.com/drejohnson/lambda-calculator',
  },
]

const Projects = () => (
  <section class={style.projects}>
    <h2>Thing's I've Built</h2>
    <ul>
      {projects.map((project, i) => {
        return (
          <Project
            key={i}
            title={project.title}
            img={project.image}
            text={project.text}
            link={project.link}
          />
        )
      })}
    </ul>
  </section>
)

export default Projects
