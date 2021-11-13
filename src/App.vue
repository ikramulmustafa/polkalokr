<template>
  <div id="app">
    <div class="header">
      <navbar></navbar>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/header/navbar";
export default {
  name: 'App',
  components: {
    Navbar,
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
