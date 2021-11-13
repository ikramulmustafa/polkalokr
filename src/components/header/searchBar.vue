<template>
  <div class="search-box">
    <b-form-input v-if="search" type="search" placeholder="Enter your name"></b-form-input>
    <b-icon icon="search" @click="searchBarOpen" v-model="searchIcon" style="color: #ffffff;"></b-icon>
  </div>
</template>

<script>
export default {
  name: "searchBar",
  data() {
    return {
      search:false,
      searchIcon : 'close'
    }
  },
  methods:{
    searchBarOpen(){ //it handle the functionally of Search bar open or close on click on search icon
      if(this.searchIcon === 'close'){
        this.search = true;
        this.searchIcon = 'open';
      } else {
        this.search = false;
        this.searchIcon = 'close';
      }
    },
  }
}
</script>

<style scoped>
.search-box {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 14px;
  position: absolute;
  right: 0;
  margin-right: 14px;
}
</style>