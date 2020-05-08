import { initClient } from '@urql/svelte';

function OnInit() {
  initClient({
    url: process.env.GRAPHQL_ENDPOINT,
    fetchOptions: {
      headers: {
        'x-hasura-admin-secret': process.env.HASURA_ACCESS_KEY,
      },
    },
  });
}

export default {
  OnInit,
};
