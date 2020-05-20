<script>
  import { sleep } from '../lib/utils';
  import { fade } from 'svelte/transition';
  import { viewState, INFO_PAGE_STATE } from '../stores/view-store';
  import Button from '../components/Button.svelte';
  import Loader from '../components/Loader.svelte';

  const code =
    '<div class="imports">' +
    '<div><span class="keyword">import</span> { <br/> <span class="const tab-1">loadProjects</span> <br />} <span class="keyword">from</span> "@drejohnson/portfolio"</div>' +
    '</div>' +
    '<div class="comment">// hey 👋🏾 what\'s up? welcome!</div>' +
    '<div class="comment">// go ahead and press run!</div>' +
    '<div><span class="keyword">const</span> main = (<span class="const">msg</span>) => {</div>' +
    '<div class="tab-1"><span class="static-fun">console.log</span>(<span class="const">msg.GREETING</span>)</div>' +
    '<div class="tab-1">loadProjects()</div>' +
    '<div>}</div>';

  let currentCode = '';
  let isButtonVisible = false;
  let isLoaderVisible = false;

  // text animation
  const animate = async () => {
    let toAdd = ''; // so that < and /> are not displayed in typing animations
    for (let i = 0; i < code.length; i++) {
      // check if the current character is the beginning or end of the HTML tag
      if (code[i] === '<' || code[i] === '>' || code[i] === '/') {
        toAdd += code[i];
      }

      // if there are no service HTML characters to add to the string, then add the next character
      if (!toAdd && code[i] !== '>') {
        currentCode = currentCode + code[i];
        await sleep(10);
      } else {
        // otherwise, add characters to code and clear toAdd
        currentCode += toAdd;
        toAdd = '';
      }

      if (i === code.length - 1) {
        isButtonVisible = true;
      }
    }
  };

  const onRunClick = async () => {
    isLoaderVisible = true;
    await sleep(2000);
    isLoaderVisible = false;
    viewState.set(INFO_PAGE_STATE);
  };

  animate();
</script>

<style>
  @media screen and (min-width: 900px) {
    .preview-content {
      font-size: 2.5em;
    }
  }

  @media screen and (max-width: 900px) {
    .preview-content {
      font-size: 2em;
    }
  }

  @media screen and (max-width: 500px) {
    .preview-content {
      font-size: 1.3em;
    }
  }

  .button {
    margin-top: 2em;
  }
</style>

<div class="preview-content">
  {@html currentCode}
  {#if isButtonVisible}
    <div class="button" transition:fade>
      <Button onClick={() => onRunClick()} text="Run the code" />
    </div>
  {/if}
  {#if isLoaderVisible}
    <div transition:fade>
      <Loader />
    </div>
  {/if}
</div>
