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
  data() {
    return {
      franceLeague: [
        {
          "first_team": "Monaco",
          "second_team": "Rennes",
          "first_team_score": 1,
          "second_team_score": 1,
          "match_type": "End pens"
        },
        {
          "first_team": "AC MILAN",
          "second_team": "Jeventus",
          "first_team_score": 1,
          "second_team_score": 0,
          "match_type": "End"
        }
      ],
      saLeague: [
        {
          "first_team": "Man United",
          "second_team": "Ars",
          "first_team_score": 2,
          "second_team_score": 1,
          "match_type": "End"
        },
        {
          "first_team": "Real Madrid",
          "second_team": "Barcelona",
          "first_team_score": 1,
          "second_team_score": 0,
          "match_type": "End"
        }
      ],
    }
  }
}
</script>

<style scoped>
.stats .wrappers {
  margin-bottom: 30px;
  background: #ffffff;
}

.wrap-title {
  margin-bottom: 20px;
}

h4 {
  line-height: 110%;
  margin: 0;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  color: #333;
}

.stats .wrap-title-two {
  margin-bottom: 20px;
}

.stats .wrap-title-two h6 {
  padding: 6px 15px;
  background: #888;
  color: #fff;
  display: inline-block;
  border-radius: 20px;
  font-size: 13px;
}

.stats .wrap-content {
  padding: 15px;
  box-shadow: 0 3px 11px rgb(0 0 0 / 15%);
  border-radius: 12px;
}


</style>
