<script>
  import { onMount } from 'svelte';
  import { query } from '@urql/svelte';
  import { viewState, INFO_PAGE_STATE } from '../stores/view-store';
  import Footer from '../components/Footer.svelte';
  import Loader from '../components/Loader.svelte';
  import Project from '../components/Project.svelte';

  const onInfoClick = () => {
    viewState.set(INFO_PAGE_STATE);
  };

  export const PROJECTS_QUERY = /* GraphQL */ `
    query {
      project {
        id
        name
        description
        github_link
        role
        color
        images {
          link
        }
        project_tags {
          tag {
            id
            name
          }
        }
      }
    }
  `;

  $: projects = query({
    query: PROJECTS_QUERY,
  });

  onMount(() => window.scrollTo(0, 0));
</script>

<style>
  @media screen and (min-width: 900px) {
    .header {
      font-size: 2.5em;
    }

    .link {
      font-size: 1.25em;
    }
  }

  @media screen and (max-width: 900px) {
    .header {
      font-size: 2em;
    }

    .link {
      font-size: 1.25em;
    }
  }

  @media screen and (max-width: 500px) {
    .header {
      font-size: 1.5em;
    }

    .link {
      font-size: 1em;
    }
  }

  .header {
    font-weight: 700;
    margin-bottom: 1em;
  }

  .projects-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(49%, 1fr));
    grid-gap: 1rem;
    align-items: center;
    justify-items: center;
  }

  .link-content {
    margin-top: 3em;
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

<div>
  <div class="header">Projects</div>

  {#if $projects.fetching}
    <Loader />
  {:else if $projects.error}
    <p style="color: red">{$projects.error.message}</p>
  {:else}
    <div class="projects-content">
      {#each $projects.data.project as project}
        <Project {project} />
      {/each}
    </div>
  {/if}

  <div class="link-content">
    <div class="link" on:click={onInfoClick}>Back to info</div>
  </div>

  <Footer />
</div>
