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
        <b-input-group v-b-modal="modalId">
        <p :class="[activeTab === 'tomorrow' ? 'tab-title' : 'tab-not-active' ]">
          <b-icon icon="calendar2-event" style="color: #ffffff;"></b-icon></p>
        </b-input-group>

        <b-modal :id="modalId" centered hide-header hide-footer no-fade static content-class="w-auto mx-auto">
          <b-calendar v-model="date" @context="ctx => dateContext = ctx"></b-calendar>
        </b-modal>
           </div>
    </div>

    <div class="self-care-content-container content border-radius-8 pb-0">
      <div v-if="activeTab === 'yesterday'">

        <div class="sub-tab d-flex">
          <div class="flex-column justify-content-center pointer"
               :class="[activeSubTab === 'all' ? 'active' : '' ]"
               @click="openSubTab('all')">
            <p class="secondary">All</p>
            <div :class="[activeSubTab === 'all' ? 'sub-tab-bar' : '' ]"></div>
          </div>
          <div class="flex-column justify-content-center pointer m-l-25"
               :class="[activeSubTab === 'live' ? 'active' : '' ]"
               @click="openSubTab('live')">
            <p class="secondary">Live</p>
            <div :class="[activeSubTab === 'live' ? 'sub-tab-bar' : '' ]"></div>
          </div>

          <div class="flex-column justify-content-center pointer m-l-25"
               :class="[activeSubTab === 'favorites' ? 'active' : '' ]"
               @click="openSubTab('favorites')">
            <p class="secondary">Favorites</p>
            <div :class="[activeSubTab === 'favorites' ? 'sub-tab-bar' : '' ]"></div>
          </div>
        </div>
        <div v-if="activeSubTab === 'all'">
          <score-card :tab-name="activeTab"
                      :league1="franceLeague"
                      :league2="saLeague"
          >
          </score-card>
        </div>
        <div v-if="activeSubTab === 'live'">
          <score-card :tab-name="activeTab"></score-card>
        </div>
        <div v-if="activeSubTab === 'favorites'">
          <score-card :tab-name="activeTab"></score-card>
        </div>
      </div>

      <div v-else-if="activeTab === 'today'">

        <div class="sub-tab d-flex">
          <div class="flex-column justify-content-center pointer"
               :class="[activeSubTab === 'all' ? 'active' : '' ]"
               @click="openSubTab('all')">
            <p class="secondary">All</p>
            <div :class="[activeSubTab === 'all' ? 'sub-tab-bar' : '' ]"></div>
          </div>
          <div class="flex-column justify-content-center pointer m-l-25"
               :class="[activeSubTab === 'live' ? 'active' : '' ]"
               @click="openSubTab('live')">
            <p class="secondary">Live</p>
            <div :class="[activeSubTab === 'live' ? 'sub-tab-bar' : '' ]"></div>
          </div>

          <div class="flex-column justify-content-center pointer m-l-25"
               :class="[activeSubTab === 'favorites' ? 'active' : '' ]"
               @click="openSubTab('favorites')">
            <p class="secondary">Favorites</p>
            <div :class="[activeSubTab === 'favorites' ? 'sub-tab-bar' : '' ]"></div>
          </div>
        </div>
        <div v-if="activeSubTab === 'all'">
          <score-card :tab-name="activeTab"
                      :league1="franceLeague"
                      :league2="saLeague"
          >
          </score-card>
        </div>
        <div v-if="activeSubTab === 'live'">
          <score-card :tab-name="activeTab"></score-card>
        </div>
        <div v-if="activeSubTab === 'favorites'">
          <score-card :tab-name="activeTab"></score-card>
        </div>
      </div>

      <div v-else-if="activeTab === 'tomorrow'">

        <div class="sub-tab d-flex">
          <div class="flex-column justify-content-center pointer"
               :class="[activeSubTab === 'all' ? 'active' : '' ]"
               @click="openSubTab('all')">
            <p class="secondary">All</p>
            <div :class="[activeSubTab === 'all' ? 'sub-tab-bar' : '' ]"></div>
          </div>
          <div class="flex-column justify-content-center pointer m-l-25"
               :class="[activeSubTab === 'live' ? 'active' : '' ]"
               @click="openSubTab('live')">
            <p class="secondary">Live</p>
            <div :class="[activeSubTab === 'live' ? 'sub-tab-bar' : '' ]"></div>
          </div>

          <div class="flex-column justify-content-center pointer m-l-25"
               :class="[activeSubTab === 'favorites' ? 'active' : '' ]"
               @click="openSubTab('favorites')">
            <p class="secondary">Favorites</p>
            <div :class="[activeSubTab === 'favorites' ? 'sub-tab-bar' : '' ]"></div>
          </div>
        </div>
        <div v-if="activeSubTab === 'all'">
          <score-card :tab-name="activeTab"></score-card>
        </div>
        <div v-if="activeSubTab === 'live'">
          <score-card :tab-name="activeTab"></score-card>
        </div>
        <div v-if="activeSubTab === 'favorites'">
          <score-card :tab-name="activeTab"></score-card>
        </div>
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
      date: null,
      modalId: 'date-picker-modal',
      dateContext: {},
      franceLeague: [
        {
          first_team: "Monaco",
          second_team: "Rennes",
          first_team_score: 1,
          second_team_score: 1,
          match_type: "End pens"
        },
        {
          first_team: "AC MILAN",
          second_team: "Jeventus",
          first_team_score: 1,
          second_team_score: 0,
          match_type:"End"
        }
      ],
      saLeague: [
        {
          first_team: "Man United",
          second_team: "Ars",
          first_team_score: 2,
          second_team_score: 1,
          match_type: "End"
        },
        {
          first_team: "Real Madrid",
          second_team: "Barcelona",
          first_team_score: 1,
          second_team_score: 0,
          match_type: "End"
        }
      ],
    }
  },
  methods: {
    openTab(value) {
      this.$emit('tabChanged', value);
      this.activeTab = value;
      this.activeSubTab = "all";
      this.tabRecordManage();

    },
    openSubTab(value) {
      this.$emit('tabChanged', value);
      this.activeSubTab = value;
    },
    tabRecordManage(){
      if(this.activeTab === 'today')
      {
        this.franceLeague = [
          {
            first_team: "Brazil",
            second_team: "Argentina",
            first_team_score: 2,
            second_team_score: 1,
            match_type: "End pens"
          },
          {
            first_team: "Athletico",
            second_team: "Port",
            first_team_score: 1,
            second_team_score: 0,
            match_type:"End"
          }
        ];
        this.saLeague = [
          {
            first_team: "LiverPool",
            second_team: "Chelsea",
            first_team_score: 2,
            second_team_score: 1,
            match_type: "End"
          },
          {
            first_team: "Man City",
            second_team: "Barcelona",
            first_team_score: 1,
            second_team_score: 0,
            match_type: "End"
          }
        ];
      } else if (this.activeTab === 'tomorrow'){
        this.franceLeague = [
          {
            first_team: "France",
            second_team: "Spain",
            first_team_score: 2,
            second_team_score: 1,
            match_type: "End pens"
          },
          {
            first_team: "Germany",
            second_team: "Port",
            first_team_score: 1,
            second_team_score: 0,
            match_type:"End"
          }
        ];
        this.saLeague = [
          {
            first_team: "Valencia",
            second_team: "Chelsea",
            first_team_score: 2,
            second_team_score: 1,
            match_type: "End"
          },
          {
            first_team: "ManU",
            second_team: "Barcelona",
            first_team_score: 1,
            second_team_score: 0,
            match_type: "End"
          }
        ];
      }
    }

  },
  watch: {
    /* Close the modal when the date changes */
    date(newVal, oldVal) {
      if(newVal !== oldVal) {
        this.$bvModal.hide(this.modalId)
      }
    }
  }


}
</script>

<style scoped>
.tabs {
  background: #00b232;
  cursor: pointer;
}
.sub-tab{
  background: #ffffff;
  margin-top: 5px;
  cursor: pointer;
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
