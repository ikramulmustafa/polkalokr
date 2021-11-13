<template>
  <div id="app">
    <div class="header">
      <navbar></navbar>
      <tabs></tabs>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

import Tabs from "@/components/tabs";
import Navbar from "@/components/header/navbar";
export default {
  name: 'App',
  components: {
    Navbar,
    Tabs
  },

}
</script>

<style>
#app { /*  main div CSS */
  margin: 0 auto;
  width: 500px;
  box-shadow: 0px 3px 4px rgb(0 0 0 / 25%);
  background: #efefef87;
  font-family: 'Roboto', sans-serif;
}



</style>
