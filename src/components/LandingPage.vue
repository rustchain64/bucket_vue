<script setup>
import PieChart from "./charts/PieChart";
import LineChart from "./charts/LineChart.vue";
import UserList from "../views/users/UserList.vue";
//import UserListVue from "@/views/users/UserList.vue";
import ReferralsList from "./ReferralsList.vue";
import Tooling from "./Tooling.vue";
import Reporting from "./Reporting.vue";
</script>

<template>
  <div class="flex-container">Laning Page</div>
  <div class="flex_left_column">
    <button @click="userSplash">
      <img
        alt="user_list"
        class="export_pdf"
        src="@/assets/images/user_list.png"
      />
    </button>
    <button @click="referralListSplash">
      <img
        alt="referral_list"
        class="export_pdf"
        src="@/assets/images/list-256.png"
      />
    </button>
    <button @click="chartSplash">
      <img
        alt="charts"
        class="export_pdf"
        src="@/assets/images/chart_icon.png"
      />
    </button>
    <button @click="toolingSplash">
      <img alt="tools" class="export_pdf" src="@/assets/images/tool.png" />
    </button>
    <button @click="ecoSplash">
      <img
        alt="Go Free logo"
        class="export_pdf"
        src="@/assets/images/data_feedback.png"
      />
    </button>
    <button @click="exportPdf">
      <img
        alt="Go Free logo"
        class="export_pdf"
        src="@/assets/images/pdf_exp.jpg"
      />
    </button>
  </div>

  <div class="flex_right_column">
    <div v-if="view == 'exportPdf'">
      <img alt="Export as PDF" src="@/assets/images/pdf_exp.jpg" />
    </div>
    <div v-if="view == 'userList'"><UserList /></div>
    <div v-else-if="view == 'chart'" class="charting">
      <div>
        <h2>Referrals by Status</h2>
        <PieChart />
      </div>
      <div>
        <h2>Referrals Rewards</h2>
        <LineChart />
      </div>
    </div>
    <div v-else-if="view == 'tooling'"><Tooling /></div>
    <div v-else-if="view == 'eco'"><Reporting /></div>
    <div v-else-if="view == 'support'">
      <!-- <h2>Referrals Details</h2> -->
      <ReferralsList />
    </div>

    <div v-else-if="view == 'landing'">
      <div class="top_row">
        <div class="top_left">
          <div>
            <img
              alt="Go Free logo"
              class="logo"
              src="@/assets/images/dash_user_list.png"
              height="300px"
            />
          </div>
        </div>
        <div class="top_right">
          <div>
            <img
              alt="Go Free logo"
              class="logo"
              src="@/assets/images/referList.png"
              height="300px"
            />
          </div>
        </div>
      </div>

      <div class="bottom_row">
        <div class="bottom_left">
          <div>Bottom Left</div>
        </div>
        <div class="bottom_right">
          <div>
            <img
              alt="Go Free logo"
              class="logo"
              src="@/assets/images/charts_button.png"
              height="300px"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "admin_landing",
  props: {
    msg: String,
  },
  data() {
    return {
      referrals: [],
      fruits: [],
      method: "",
      url: "",
      data: {},
      view: "default",
      referral: "",
    };
  },

  mounted() {
    console.log("view ?", this.view);
  },
  methods: {
    userSplash() {
      console.log("user List view");
      this.view = "userList";
    },
    referralListSplash() {
      console.log("Support view");
      this.view = "support";
    },
    chartSplash() {
      console.log("Chart view");
      this.view = "chart";
    },
    toolingSplash() {
      console.log("tooling Test view");
      this.view = "tooling";
    },
    ecoSplash() {
      console.log("eco view");
      this.view = "eco";
    },
    exportPdf() {
      console.log("Export as PDF");
      this.view = "exportPdf";
    },
  },
};
</script>

<style scoped>
.row {
  display: flex;
}
.export_pdf {
  width: 3vw;
  height: 4vh;
}

.charting {
  display: flex;
  flex-direction: row;
}
.top_row {
  display: flex;
}
.bottom_row {
  display: flex;
}

.top_left {
  background-color: aquamarine;
}

.top_right {
  background-color: lemonchiffon;
}

.bottom_left {
  background-color: violet;
}

.bottom_right {
  background-color: silver;
}

@media only screen and (min-width: 1025px) and (max-width: 1200px) {
  .flex-container {
    display: flex;
    flex-direction: row;
  }
  .flex_left_column {
    width: 5%;
    height: 100vh;
  }
  .flex_right_column {
    width: 75%;
    margin: 5%;
    padding: 5%;
  }
}
/* Laptops */
@media only screen and (min-width: 769px) and (max-width: 1024px) {
  .flex-container {
    display: flex;
    flex-direction: row;
  }
  .flex_left_column {
    width: 5%;
    height: 100vh;
  }
  .flex_right_column {
    width: 75%;
    margin: 5%;
    padding: 5%;
  }
}
/* Tablet Devices */
@media only screen and (min-width: 481px) and (max-width: 768px) {
  .flex-container {
    display: flex;
    flex-direction: row;
  }
  .flex_left_column {
    width: 15%;
    height: 100vh;
  }
  .flex_right_column {
    width: 75%;
    margin: 5%;
    padding: 5%;
  }
}

/*  Mobile devices */
@media only screen and (min-width: 320px) and (max-width: 576px) {
  .flex-container {
    display: flex;
    flex-direction: column;
  }
  .flex_left_column {
    width: 100%;
    height: 5vh;
  }
  .flex_right_column {
    width: 100%;
    margin: 5%;
    padding: 5%;
  }
}

/* 320px—480px: Mobile devices
481px—768px: iPads, Tablets
769px—1024px: Small screens, laptops
1025px—1200px: Desktops, large screens
1201px and more— Extra large screens, TV */
</style>
