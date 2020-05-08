<script>
  import GitHub from '../assets/github.svg';
  import LinkedIn from '../assets/linkedin.svg';
  import Twitter from '../assets/twitter.svg';

  let date = new Date();
  let year = date.getFullYear();
  console.log(year);
</script>

<style>
  @media screen and (min-width: 900px) {
    .footer {
      margin-top: 4em;
    }

    .link-content {
      margin-top: 1em;
    }

    .link {
      width: 2em;
    }
  }

  @media screen and (max-width: 900px) {
    .footer {
      margin-top: 2em;
    }

    .link-content {
      margin-top: 1em;
    }

    .link {
      width: 1.3em;
    }
  }

  @media screen and (max-width: 900px) {
    .footer {
      margin-top: 3em;
    }
  }

  .link {
    fill: var(--body-text);
    display: inline-block;
    margin-right: 1em;
    transition: fill 0.3s ease-in-out;
  }

  .svelte-link {
    color: #49aae0;
    display: inline-block;
    text-decoration: underline;
  }

  .comment {
    color: var(--darcula-comment);
  }

  .link:hover {
    fill: var(--link);
  }
</style>

<div class="footer">
  <div>
    built with
    <span class="link-content">
      <a href="https://svelte.dev/" class="svelte-link" target="_blank">
        svelte
      </a>
    </span>
    and love, drejohnson
    <span class="comment">// {year}</span>
  </div>
  <div class="link-content">
    <div class="link">
      <a href="https://github.com/drejohnson" class="link" target="_blank">
        <GitHub />
      </a>
    </div>
    <div class="link">
      <a
        href="https://www.linkedin.com/in/deandrejohnson/"
        class="link"
        target="_blank">
        <LinkedIn />
      </a>
    </div>
    <div class="link">
      <a href="https://twitter.com/dre_jhsn" class="link" target="_blank">
        <Twitter />
      </a>
    </div>
  </div>
</div>
