<template>
  <div>
    <div class="wrap-header">
      <div class="row">
        <div class="col-sm-10">
          <div class="content-left">
            <h6><img width="24px" height="20px" class="flag" src="../assets/france.png">{{leagueName}}</h6>
          </div>
        </div>
        <div class="col-sm-2">
          <div class="content-right">
            <b-icon icon="star" style="color: #00b232;"></b-icon>
          </div>
        </div>
      </div>
    </div>
    <div class="wrap-player bg-grey" v-for="(league,index) in leagueRecord" :key="index">
      <div class="row">
        <div class="col-sm-3">
          <div class="content-left">
            <ul>
              <li class="matchTypeWidth">{{ league.match_type }}</li>
            </ul>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="content-left">
            <ul>
              <li>{{ league.first_team }}</li>
              <li>{{ league.second_team }}</li>
            </ul>
          </div>
        </div>

        <div class="col-sm-2">
          <div class="content-right">
            <ul>
              <li>{{ league.first_team_score }}</li>
              <li>{{ league.second_team_score }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "matchCard",
  props: {
    leagueRecord: {
      type: Array
    },
    leagueName: {
      type: String
    }
  }
}
</script>

<style scoped>
.wrap-header {
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;
}

.row {
  margin-bottom: 0;
}

.wrap-header h6 {
  color: #888;
}


.content-right {
  text-align: right;
}

.wrap-player {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}


.content-left ul {
  padding: 0;
  margin: 0;
}

.content-left ul li {
  margin-bottom: 5px;
  font-size: 14px;
  color: #333;
}

ul:not(.browser-default) > li {
  list-style-type: none;
}

.content-right span {
  color: #333;
  font-size: 14px;
  font-weight: 500;
}

.flag {
  margin-right: 10px;
}

.matchTypeWidth {
  width: 50px;
}
</style>