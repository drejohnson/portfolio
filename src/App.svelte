<script>
  import { onMount } from 'svelte';
  import urql from './lib/urql.js';
  import Main from './views/Main.svelte';

  urql.OnInit();
</script>

<Main />
