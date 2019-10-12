import { h } from 'preact'
import style from './style'

import apodImage from '../../../assets/images/nasa-photo-of-the-day.iamdrejohnson.now.sh_.png'
import calcImage from '../../../assets/images/lambda-calculator.png'
import newspaperImage from '../../../assets/images/lambda-times.png'

const Projects = () => (
  <section class={style.projects}>
    <h2>Thing's I've Built</h2>
    <ul>
      <li>
        <a href="https://github.com/drejohnson/nasa-photo-of-the-day">
          <img src={apodImage} alt="Astronomy Photo Of The Day Project" />
          <h3>NASA APOD Project</h3>
          <p>
            Used Axios to fetch the "Astronomy Photo Of The Day from the NASA
            API and React and Styled-Components for the UI"
          </p>
        </a>
      </li>
      <li>
        <a href="https://github.com/drejohnson/lambda-calculator">
          <img src={calcImage} alt="Lambda Calculator Project" />
          <h3>Lambda Calculator Project</h3>
          <p>
            With this project I built out a fully functional calculator using
            React
          </p>
        </a>
      </li>
      <li>
        <a href="https://github.com/drejohnson/Sprint-Challenge-Applied-Javascript">
          <img src={newspaperImage} alt="Lambda Newspaper Project" />
          <h3>Lambda Newspaper Project</h3>
          <p>
            Create this project using the DOM, DOM Events, functional
            Components, and data request by uing the axios library. Also built a
            fully functional carousel from scratch.
          </p>
        </a>
      </li>
    </ul>
  </section>
)

export default Projects
