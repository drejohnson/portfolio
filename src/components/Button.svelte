<script>
  export let text;
  export let onClick;
</script>

<style>
  .button {
    display: block;
    padding: 1rem 2rem;
    font-size: 1.25rem;
    color: var(--body-text);
    border-style: none;
    background: var(--darcula-comment);
    transition: box-shadow 0.3s ease-in-out, background 0.2s ease-in-out,
      display 0.3s ease-in-out;
    outline: none;
    min-width: 10rem;
    border-radius: 30px;
  }

  .button:hover {
    box-shadow: 0 5px 11px 0 rgba(255, 255, 255, 0.1);
  }

  .button:active {
    background: var(--darcula-comment-dark);
  }
</style>

<button class="button" on:click={onClick}>{text}</button>
