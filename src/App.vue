<template>
  <TonConnectUIProvider :options="options">
    <router-view/>
  </TonConnectUIProvider>
</template>

<script>
import { TonConnectUIProvider } from '@townsquarelabs/ui-vue';

export default {
  components: {
    TonConnectUIProvider
  },
  setup(){
    const options = {
      manifestUrl: "https://spacedogtoken.netlify.app/tonconnect-manifest.json",
    };
    return {
      options
    }
  }
}
</script>

<style lang="scss">
  body{
    background: #1e272e;
    font-family: "Rubik", sans-serif;
    color: #fff;
    padding: 0;
  }
</style>