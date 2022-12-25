<script setup>
import { storeToRefs } from "pinia";

import { useAuthStore } from "@/stores";
import PieChart from "../components/charts/PieChart";
import LineChart from "../components/charts/LineChart.vue";

const authStore = useAuthStore();
const { user } = storeToRefs(authStore);
</script>

<template>
  <div v-if="user">
    <div class="main-bg">
      <div class="switch-header">
        <button @click="tableChart(true)" class="charts-btn">Charts</button>
        <button @click="tableChart(false)" class="table-btn">Table</button>
        <button @click="merchantForm()" class="table-btn">Form</button>
      </div>
      <div class="chart-wrapper" v-if="chart == true">
        <div class="pie-chart-wrapper">
          <div class="chart-text">Merchants by Status</div>
          <PieChart />
        </div>
        <div class="line-chart-wrapper">
          <div class="chart-text">Merchants Rewards</div>
          <LineChart />
        </div>
      </div>

      <div style="overflow-x: auto" class="table-wrapper" v-if="chart == false">
        <table>
          <div class="chart-text">Merchants Details</div>
          <tr>
            <th>Merchant Name</th>
            <th>Agent Name</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
          <tr>
            <td>Kit Carson</td>
            <td>John Bonjovi</td>
            <td>j.bonjovi@gmail.com</td>
            <td>pending</td>
          </tr>
          <tr>
            <td>Briton Paris</td>
            <td>Kill Bill</td>
            <td>bleen.kong@gmail.com</td>
            <td>completed</td>
          </tr>
          <tr>
            <td>Billy Sheehan</td>
            <td>John Bonham</td>
            <td>bleen.kong@gmail.com</td>
            <td>completed</td>
          </tr>
          <tr>
            <td>Joe Forman</td>
            <td>Billy Jean</td>
            <td>joe@froman_grills.com</td>
            <td>completed</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { router } from "@/router";
export default {
  name: "my-agent-dash",
  data: () => ({
    chart: true,
  }),
  methods: {
    tableChart(value) {
      this.chart = value;
      console.log("Chart state: ", this.chart);
    },
    merchantForm() {
      console.log("dashboard Agent");
      router.push("/agentDashboard");
    },
  },
  created() {
    localStorage.removeItem("user");
  },
};
</script>

<style scoped>
.switch-header {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  height: 7%;
  background-color: rgba(247, 248, 247, 0.5);
}

.charts-btn {
  color: rgb(2, 87, 15);
  font-size: 1em;
  font-weight: 600;
  background-color: limegreen;
  border-radius: 3pt;
  border-right: 1pt solid rgb(1, 54, 25, 0.5);
  border-bottom: 2pt solid rgb(1, 54, 25, 0.5);
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 8px;
  padding-right: 8px;
  height: 80%;
}

.table-btn {
  color: whitesmoke;
  font-size: 1em;
  font-weight: 600;
  background-color: rgb(50, 76, 205);
  border-radius: 3pt;
  border-right: 1pt solid rgb(18, 37, 134);
  border-bottom: 2pt solid rgb(18, 37, 134);
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 8px;
  padding-right: 8px;
  height: 80%;
}
.table-wrapper {
  margin-top: 1%;
}
table {
  border-collapse: collapse;
  width: 100%;
}

th {
  color: whitesmoke;
  background-color: rgb(2, 87, 15);
}

th,
td {
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: limegreen, 0.04;
}
.details_header {
  width: 95%;
}

.main-bg {
  width: 100%;
  height: 100%;
  background-color: rgb(245, 245, 245), 0.7;
}
.main_header {
  background-color: silver;
  display: flex;
  justify-content: space-between;
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

@media only screen and (min-width: 1025px) {
  /* router view determines parent width for Dashboards, called directly by router */
  .chart-text {
    color: rgb(2, 87, 15);
    font-size: 1.5em;
    font-weight: 600;
  }
  .chart-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 95%;
    background-color: rgb(127, 255, 170), 0.6;
  }
  .pie-chart-wrapper {
    width: 45%;
  }
  .line-chart-wrapper {
    width: 50%;
  }
}

/* this os for ipad */
@media only screen and (min-width: 768px) and (max-width: 1024px) {
  .chart-text {
    color: rgb(2, 87, 15);
    font-size: 1.5em;
    font-weight: 600;
  }
  .chart-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 95%;
  }
  .pie-chart-wrapper {
    width: 45%;
  }
  .line-chart-wrapper {
    width: 50%;
  }
}

/* this os for iphone */
@media only screen and (min-width: 375px) and (max-width: 767px) and (-webkit-device-pixel-ratio: 2) {
  .chart-text {
    color: rgb(2, 87, 15);
    font-size: 1.5em;
    font-weight: 600;
  }
  .chart-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 85%;
    height: 85%;
  }
}

@media only screen and (min-width: 375px) and (max-width: 767px) {
  .chart-text {
    color: rgb(2, 87, 15);
    font-size: 1.5em;
    font-weight: 600;
  }
  .chart-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 85%;
    height: 85%;
  }
}
</style>
