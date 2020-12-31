<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
import { version } from "../package.json";
export default {
  name: "App",
  version: version
};
</script>
