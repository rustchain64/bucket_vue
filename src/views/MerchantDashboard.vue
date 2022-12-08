<script setup>
import { storeToRefs } from "pinia";

import { useAuthStore } from "../stores";
import PieChart from "../components/charts/PieChart";
import LineChart from "../components/charts/LineChart.vue";

const authStore = useAuthStore();
const { user } = storeToRefs(authStore);
</script>

<template>
  <div v-if="user">
    <div class="wrapper">
      <div class="charting">
        <div class="pie" id="pie_left">
          <h2>Referrals by Status</h2>
          <PieChart />
        </div>
        <div class="line" id="line_right">
          <h2>Referrals Rewards</h2>
          <LineChart />
        </div>
      </div>

      <div class="line-spread">
        <h2>Referrals Details</h2>
        <div class="table-wrapper">
          <div class="card-header" id="details_header">
            <span class="spread">Merchant Name</span>
            <span class="spread">Representative</span>
            <span class="spread">Email</span>
            <span class="spread">Status</span>
          </div>
          <div class="card-body" id="details_content">
            <span class="spread">Kit Carson</span>
            <span class="spread">John@Bill</span>
            <span class="spread">billy.bob@gmail.com</span>
            <span class="spread">pending</span>
          </div>
          <div class="card-body" id="details_content">
            <span class="spread">Briton Paris</span>
            <span class="spread">John@Bill</span>
            <span class="spread">bleen.kong@gmail.com</span>
            <span class="spread">completed</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  background-color: silver;
  width: 75vw;
}

.table-wrapper {
  width: 85%;
}

#pie_left {
  width: 45%;
  /* float: left; */
}

#line_right {
  width: 40%;
  /* float: right; */
}
.charting {
  display: flex;
  flex-direction: row;
  background-color: whitesmoke;
  width: 100%;
  padding-top: 1%;
  padding-right: 1%;
  padding-left: 2%;
}
.line-spread {
  clear: both;
  background-color: rgb(208, 206, 206);
  margin-top: 1%;
  margin-bottom: 1%;
  padding-left: 2%;
}
.welcome-text {
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  font-size: 32px;
  font-weight: bold;
  color: rgb(22, 143, 6);
  margin-left: 25px;
  clear: both;
}
</style>
