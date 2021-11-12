<template>
  <div class="stats segments-page">
    <div class="container mt-3">
      <div class="wrappers">
        <div class="wrap-content">
          <template>
            <match-card :league-record="franceLeague" :leagueName="'France - Coupe De la liga'"></match-card>
          </template>

        </div>
      </div>
      <div class="wrappers">
        <div class="wrap-content">
          <template>
            <match-card :league-record="saLeague" :leagueName="'SA - Premier League'"></match-card>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MatchCard from "@/components/matchCard";
export default {
  name: "scoreCard",
  components: {MatchCard},
  props: {
    tabName: {
      type: String
    },
    league1: {
      type: Array
    },
    league2: {
      type: Array
    },
  },
  data() {
    return {
      franceLeague: [],
      saLeague: [],
    }
  },
  created() {
    this.tabRecordManage(); //on component create it call the function and update the record of the matches based on Main Tab Values
  },
  methods:{
    tabRecordManage(){
      this.saLeague = this.league2;
      this.franceLeague = this.league1;
  },
}
}
</script>

<style scoped>
.stats .wrappers {
  margin-bottom: 30px;
  background: #ffffff;
}

.stats .wrap-content {
  padding: 15px;
  box-shadow: 0 3px 11px rgb(0 0 0 / 15%);
  border-radius: 12px;
}


</style>
