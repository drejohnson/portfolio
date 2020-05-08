<script>
  import React from '../assets/react.svg';
  import Svelte from '../assets/svelte.svg';
  import Flutter from '../assets/flutter.svg';
  import Javascript from '../assets/javascript.svg';
  import Nodejs from '../assets/nodejs.svg';
  import Graphql from '../assets/graphql.svg';
  import Html5 from '../assets/html5.svg';
  import Mongodb from '../assets/mongodb.svg';
  import Postgresql from '../assets/postgresql.svg';
  import Python from '../assets/python.svg';
  import Sass from '../assets/sass.svg';
  import Css3 from '../assets/css3.svg';
  import Reason from '../assets/reason.svg';
  import Redux from '../assets/redux.svg';
  import Typescript from '../assets/typescript.svg';
  import Linux from '../assets/linux.svg';
</script>

<style>
  .tech-stack {
      width: 100%;
      margin-top: 4rem;
  }

  .title {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 1rem;
  }

  .tech-stack-icons {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
  }

  span {
    display: flex;
    width: 50px;
    height: 50px;
    justify-content: center;
    align-items: center;
  }
</style>

<div class="tech-stack">
  <div class="title">Tech Stack...</div>

  <div class="tech-stack-icons">
    <span><React /></span>
    <span><Svelte /></span>
    <span><Flutter /></span>
    <span><Javascript /></span>
    <span><Typescript /></span>
    <span><Html5 /></span>
    <span><Css3 /></span>
    <span><Sass /></span>
    <span><Nodejs /></span>
    <span><Python /></span>
    <span><Reason /></span>
    <span><Redux /></span>
    <span><Graphql /></span>
    <span><Mongodb /></span>
    <span><Postgresql /></span>
    <span><Linux /></span>
  </div>
</div>