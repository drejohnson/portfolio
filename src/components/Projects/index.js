import { h } from 'preact'
import style from './style'

const Projects = () => (
  <section class={style.projects}>
    <h2>Thing's I've Built</h2>
    <ul>
      <li>
        <a href="https://github.com/drejohnson">
          <img
            src="https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
            alt="Code"
          />
          <h3>Prject</h3>
          <p>Esse nostrud ex officia pariatur enim eu velit ad.</p>
        </a>
      </li>
      <li>
        <a href="https://github.com/drejohnson">
          <img
            src="https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
            alt="Code"
          />
          <h3>Prject</h3>
          <p>Esse nostrud ex officia pariatur enim eu velit ad.</p>
        </a>
      </li>
      <li>
        <a href="https://github.com/drejohnson">
          <img
            src="https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
            alt="Code"
          />
          <h3>Prject</h3>
          <p>Esse nostrud ex officia pariatur enim eu velit ad.</p>
        </a>
      </li>
    </ul>
  </section>
)

export default Projects
