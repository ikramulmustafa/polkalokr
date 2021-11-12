<template>
  <div class="content border-radius-8">
    <div class="tabs d-flex">
      <div class="flex-column justify-content-center pointer"
           :class="[activeTab === 'yesterday' ? 'active' : '' ]"
           @click="openTab('yesterday')">
        <p :class="[activeTab === 'yesterday' ? 'tab-title' : 'tab-not-active' ]">Yesterday</p>
        <div :class="[activeTab === 'yesterday' ? 'activeBar' : '' ]"></div>
      </div>
      <div class="flex-column justify-content-center pointer m-l-25"
          :class="[activeTab === 'today' ? 'active' : '' ]"
          @click="openTab('today')">
        <p :class="[activeTab === 'today' ? 'tab-title' : 'tab-not-active' ]">Today</p>
        <div :class="[activeTab === 'today' ? 'activeBar' : '' ]"></div>
      </div>

      <div class="flex-column justify-content-center pointer m-l-25"
          :class="[activeTab === 'tomorrow' ? 'active' : '' ]"
          @click="openTab('tomorrow')">
        <p :class="[activeTab === 'tomorrow' ? 'tab-title' : 'tab-not-active' ]">Tomorrow</p>
        <div :class="[activeTab === 'tomorrow' ? 'activeBar' : '' ]"></div>
      </div>
      <div class="flex-column justify-content-center pointer calendar">
        <p :class="[activeTab === 'tomorrow' ? 'tab-title' : 'tab-not-active' ]"><b-icon icon="calendar" style="color: #ffffff;"></b-icon></p>
           </div>
    </div>

    <div class="self-care-content-container content border-radius-8 pb-0">
      <div v-if="activeTab === 'yesterday'">

        <div class="sub-tab d-flex">
          <div class="flex-column justify-content-center pointer"
               :class="[activeSubTab === 'all' ? 'active' : '' ]"
               @click="openTab('all')">
            <p class="secondary">All</p>
            <div :class="[activeSubTab === 'all' ? 'sub-tab-bar' : '' ]"></div>
          </div>
          <div class="flex-column justify-content-center pointer m-l-25"
               :class="[activeSubTab === 'live' ? 'active' : '' ]"
               @click="openTab('live')">
            <p class="secondary">Live</p>
            <div :class="[activeSubTab === 'live' ? 'sub-tab-bar' : '' ]"></div>
          </div>

          <div class="flex-column justify-content-center pointer m-l-25"
               :class="[activeSubTab === 'favorites' ? 'active' : '' ]"
               @click="openTab('favorites')">
            <p class="secondary">Favorites</p>
            <div :class="[activeSubTab === 'favorites' ? 'sub-tab-bar' : '' ]"></div>
          </div>
        </div>
        <div v-if="activeSubTab === 'all'">
          <score-card></score-card>
        </div>
        <div v-if="activeSubTab === 'live'">
          <score-card></score-card>
        </div>
        <div v-if="activeSubTab === 'favorites'">
          <score-card></score-card>
        </div>
      </div>
      <div v-else-if="activeTab === 'today'">
        <score-card></score-card>
      </div>

      <div v-else-if="activeTab === 'tomorrow'">
        <score-card></score-card>
      </div>
    </div>
  </div>
</template>

<script>
import ScoreCard from "@/components/scoreCard";
export default {
  name: "tabs",
  components: {ScoreCard},
  data() {
    return {
      activeTab: "yesterday",
      activeSubTab: "all",
    }
  },
  methods: {
    openTab(value) {

      this.$emit('tabChanged', value);
      this.activeTab = value;
    },
  }
}
</script>

<style scoped>
.tabs {
  background: #00b232;
}
.sub-tab{
  background: #ffffff;
  margin-top: 5px;
}
.secondary {
  color: #283D47;
  font-size: 20px;
  line-height: 26px;
  padding-right: 6rem;
  padding-left: 2rem;
  margin-top: 20px;
  margin-bottom: 10px;
}
.tab-title {
  color: white;
  font-size: 20px;
  line-height: 26px;
  padding-right: 5rem;
  padding-left: 0.75rem;
  margin-top: 20px;
  margin-bottom: 10px;
}
.activeBar {
  background: white;
  width: 70%;
  height: 2px;
}
.sub-tab-bar {
  background: #00b232;
  width: 70%;
  height: 4px;
}
.tab-not-active {
  color: #d3d3d3;
  font-size: 20px;
  line-height: 26px;
  padding-right: 5rem;
  padding-left: 0.75rem;
  margin-top: 20px;
  margin-bottom: 10px;
}
.calendar {
  margin-left: -3rem;
}
</style>
