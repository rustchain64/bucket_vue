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
    <div>
      <div class="pie" id="pie_left">
        <h2>Referrals by Status</h2>
        <PieChart />
      </div>
      <div class="line" id="line_right">
        <h2>Referrals Rewards</h2>
        <LineChart />
      </div>
      <div class="line">
        <h2>Referrals Details</h2>
        <div>
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
.main_header {
  background-color: silver;
  display: flex;
  justify-content: space-between;
}

.page-width {
  width: 90vw;
}

#pie_left {
  float: left;
}

#line_right {
  float: right;
}

.line {
  clear: both;
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
