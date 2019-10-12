import { h } from 'preact'
import { Linkedin, GitHub } from 'react-feather'
import style from './style'

import me from '../../../assets/images/me2.jpg'

const Intro = () => (
  <section class={style.intro}>
    <div class={style.content}>
      <div class={style.avatar}>
        <img src={me} alt="Avatar" />
      </div>
      <div class={style.info}>
        <h1>
          DeAndre Johnson - <span>Fullstack Developer</span>
        </h1>
        <div class={style.contact}>
          <span class="email">
            <a href="mailto:dre@phreshr.com">dre@phreshr.com</a>
          </span>
          <span class="resume">
            <a href="http://drejohnson.github.io/resume">
              http://drejohnson.github.io/resume
            </a>
          </span>
        </div>
        {/* could be components */}
        <div class={style.social}>
          <a href="https://www.linkedin.com/in/deandrejohnson/">
            <Linkedin />
          </a>
          <a href="https://github.com/drejohnson">
            <GitHub />
          </a>
        </div>
      </div>
    </div>
  </section>
)

export default Intro
