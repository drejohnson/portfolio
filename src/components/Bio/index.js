import { h } from 'preact'
import style from './style'

const Bio = () => (
  <section class={style.bio}>
    <h2>A Little About Me</h2>
    <p>
      Hi, my name is DeAndre Johnson and I'm a full-stack developer. I love the
      challenges that comes with being a software engineer. The ideation, the
      problem solving and the chance to build something unique and useful is
      what drives me to learn and grow every day as a developer. I consider
      myself very self motivated and resourceful. If I don't know how to solve a
      particular problem today, I know how to research for answers to be able
      solve the problem in the future. I'm confident in my ability to provide
      value to any company, team or project, whether building frontend apps with
      React.js, constructing API's on the backend in Node.js or querying data
      from a serverless GraphQL endpoint. It's perpetual journey and I'm
      constantly striving to be the best I can be in ths rapidly evolving
      landscape of web development.
    </p>
  </section>
)

export default Bio
