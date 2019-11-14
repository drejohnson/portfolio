import { h } from 'preact'
import style from './style'

const Project = ({ title, img, link, text }) => (
  <li className={style.project}>
    <a href={link}>
      <img src={img} alt="Astronomy Photo Of The Day Project" />
      <h3>{title}</h3>
      <p>{text}</p>
    </a>
  </li>
)

export default Project
