<template>
  <div class="nav">
    <input type="checkbox" id="nav-check">
    <div class="nav-btn">
      <label for="nav-check">
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
    <div class="nav-links" >
      <a href="#">Home</a>
      <a href="#">Scores</a>
    </div>
    <div class="scores">
      <p>Scores</p>
    </div>
  <search-bar></search-bar>
  </div>

</template>

<script>
import SearchBar from "@/components/header/searchBar";
export default {
  name: "navbar",
  components: {SearchBar}
}
</script>

<style scoped>
/* Nav BAR CSS */
.nav {
  height: 50px;
  width: 100%;
  background-color: #00b232;
  position: relative;
}


.nav > .nav-header {
  display: inline;
}

.nav > .nav-header > .nav-title {
  display: inline-block;
  font-size: 22px;
  color: #fff;
  padding: 10px 10px 10px 10px;
}


.nav > .nav-links {
  display: inline;
  float: right;
  font-size: 18px;
  z-index: 1;
}

.nav > .nav-links > a {
  display: inline-block;
  padding: 13px 10px 13px 10px;
  text-decoration: none;
  color: #efefef;
}

.nav > #nav-check {
  display: none;
}


.nav > .nav-btn {
  display: inline-block;
  right: 0px;
  top: 0px;
}

.nav > .nav-btn > label {
  display: inline-block;
  width: 50px;
  height: 50px;
  padding: 13px;
}

.nav > .nav-btn > label > span {
  display: block;
  width: 25px;
  height: 10px;
  border-top: 3px solid #ffffff;
}

.nav > .nav-links {
  position: absolute;
  display: block;
  width: 100%;
  background-color: #00b232;
  height: 0px;
  transition: all 0.3s ease-in;
  overflow-y: hidden;
  top: 50px;
  left: 0px;
}

.nav > .nav-links > a {
  display: block;
  width: 100%;
}

.nav > #nav-check:not(:checked) ~ .nav-links {
  height: 0px;
}

.nav > #nav-check:checked ~ .nav-links {
  height: calc(100vh - 400px);
  overflow-y: auto;
}
/* Nav BAR CSS */

.scores {
  margin-top: 8px;
  color: white;
  font-size: 20px;
  font-weight: 500;
  margin-left: 0.75rem;
}
</style>