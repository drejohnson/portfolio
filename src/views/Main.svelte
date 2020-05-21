<script>
  import { fade, fly } from 'svelte/transition';
  import { inAnimationParams, outAnimationParams } from '../lib/utils';
  import {
    viewState,
    PREVIEW_PAGE_STATE,
    PROJECTS_PAGE_STATE,
    INFO_PAGE_STATE,
  } from '../stores/view-store';
  import Projects from './Projects.svelte';
  import Splash from './Splash.svelte';
  import Info from './Info.svelte';

  let currentViewState;

  viewState.subscribe(value => {
    currentViewState = value;
  });
</script>

<style>
  @media screen and (min-width: 900px) {
    .content {
      margin: 4rem;
    }

    .splash-wrapper {
      width: 60vw;
      margin: 0 auto;
    }
  }

  @media screen and (max-width: 900px) {
    .content {
      margin: 2rem;
    }
  }

  @media screen and (max-width: 500px) {
    .content {
      margin: 1.3rem;
    }
  }
</style>

<div class="content">
  {#if currentViewState === PREVIEW_PAGE_STATE}
    <div
      class="splash-wrapper"
      in:fade={{ duration: 500 }}
      out:fly={{ y: 400, duration: 500 }}>
      <Splash />
    </div>
  {:else if currentViewState === PROJECTS_PAGE_STATE}
    <div
      in:fly={{ y: -8000, duration: 2000 }}
      out:fly={{ y: 400, duration: 500 }}>
      <Projects />
    </div>
  {:else if currentViewState === INFO_PAGE_STATE}
    <div
      in:fly={{ y: -10000, duration: 2000 }}
      out:fly={{ y: 400, duration: 500 }}>
      <Info />
    </div>
  {/if}
</div>
