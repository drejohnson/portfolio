import { h } from 'preact'
import style from './style'

import Intro from '../../components/Intro'
import Bio from '../../components/Bio'
import Skills from '../../components/Skills'
import Projects from '../../components/Projects'

const Home = () => (
  <div class={style.home}>
    <Intro />
    <div class={style.middleContent}>
      <Bio />
      <Skills />
    </div>
    <Projects />
  </div>
)

export default Home
