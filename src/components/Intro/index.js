import { h } from 'preact'
import style from './style'

const Intro = () => (
  <section class={style.intro}>
    <div class={style.content}>
      <img
        src="https://aboutme.imgix.net/background/deandre.johnson_1339005834_16.jpg?q=40&dpr=2&auto=format&fit=max&w=1200&h=820.3125"
        alt="Avatar"
      />
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
      </div>
    </div>
  </section>
)

export default Intro
