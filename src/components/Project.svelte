<script>
  export let project;
</script>

<style>
  .project {
    background: var(--background-secondary);
    min-height: 380px;
    padding: 1rem;
  }

  @media screen and (min-width: 900px) {
    .project-title {
      font-size: 1.6rem;
    }

    .project-description,
    .project-role,
    .project-link {
      font-size: 1rem;
    }

    .project-tag {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 900px) {
    .project-title {
      font-size: 1.5rem;
    }

    .project-description,
    .project-role,
    .project-link {
      font-size: 1rem;
    }

    .project-tag {
      font-size: 0.8rem;
    }
  }

  .project-title {
    font-weight: 700;
    margin-bottom: 1rem;
  }

  .project-description,
  .project-role {
    margin-bottom: 0.7rem;
  }

  .project-tag {
    display: inline-block;
    margin-right: 1rem;
  }

  .project-link {
    color: #49aae0;
    margin-bottom: 2rem;
  }
</style>

<div class="project">
  <div class="project-title" style="color: {project.color}">{project.name}</div>
  <div class="project-description">{project.description}</div>
  <div class="project-role">
    role:
    <span style="color: indianred;">{project.role.toLowerCase()}</span>
  </div>
  <div class="project-link">
    <a class="project-link" href={project.github_link} target="_blank">
      GitHub
    </a>
  </div>
  {#each project.project_tags as { tag }}
    <div class="project-tag" style="color: {project.color}">#{tag.name}</div>
  {/each}
</div>
