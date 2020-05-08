<script>
  import { viewState, PROJECTS_PAGE_STATE } from '../stores/view-store';
  import Technology from '../components/Technology.svelte';
  import Footer from '../components/Footer.svelte';

  const onProjectsClick = () => {
    viewState.set(PROJECTS_PAGE_STATE);
  };
</script>

<style>
  @media screen and (min-width: 900px) {
    /* .info-content {
            max-width: 60vw;
        } */

    .title-content {
      font-size: 3rem;
      font-weight: 700;
    }

    .sub-title-content {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }

    .info-small-content {
      font-size: 1.5rem;
      font-weight: 400;
      margin-top: 2em;
    }
  }

  @media screen and (max-width: 900px) {
    .title-content {
      font-size: 2.5rem;
      font-weight: 700;
    }

    .info-small-content {
      font-size: 1.25rem;
      font-weight: 400;
      margin-top: 2em;
    }
  }

  @media screen and (max-width: 500px) {
    .title-content {
      font-size: 1.6rem;
      font-weight: 700;
    }

    .info-small-content {
      font-size: 1rem;
      font-weight: 400;
      margin-top: 2rem;
      width: 90%;
    }
  }

  .introduction {
    margin-bottom: 1rem;
  }

  .accent {
    color: var(--accent);
  }

  .link-content {
    margin-top: 2rem;
  }

  .link {
    color: #49aae0;
    display: inline-block;
    text-decoration: underline;
  }

  .link:hover {
    cursor: pointer;
  }
</style>

<div class="info-content">
  <div class="title-content">
    <div>Hello,</div>
    <div>
      I'm
      <span class="accent">DeAndre</span>
    </div>
    <div>Full Stack Developer</div>
  </div>
  <div class="info-small-content">
    <div class="introduction">
      <p>
        My name is
        <span class="accent">DeAndre Johnson</span>
        <br />
        I'm a
        <span class="accent">
          full stack developer currently living in Shanghai, China
        </span>
      </p>
    </div>
    <div class="about-me">
      <div class="sub-title-content">A bit about me...</div>
      <div>
        Spent a couple of years working as a self taught
        <span class="accent">front end developer</span>
      </div>
      <div>
        I've Built websites for various companies using
        <span class="accent">WordPress, AngularJS and React</span>
      </div>
      <div>
        My preferred toolkit for building front end applications include
        <span class="accent">React, Preact, Svelte and Flutter</span>
      </div>
      <div>
        I love the challenges that comes with being a software engineer. The
        Problem solving and creative collaboration it takes to build unique and
        useful applictions is what drives me to constantly learn and grow as a
        developer
      </div>
    </div>

    <div class="link-content">
      <div class="link" on:click={onProjectsClick}>See projects</div>
    </div>

    <Technology />
  </div>

  <Footer />
</div>
