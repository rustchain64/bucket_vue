<script setup>
// import referralCodeGenerator from "referral-code-generator";

// import { useAgentReferCodeStore } from "@/stores";

// const agentReferStore = useAgentReferCodeStore();
</script>

<template>
  <div class="bg-form">
    <div class="export_actions-header">
      <h3>Export Tools : Generate CVS data</h3>
      <h3>Export CVS to Downloads</h3>
    </div>
    <div class="export_actions">
      <div class="export_actions_row">
        <button @click="getUserData" class="btn btn-danger">
          Get Code Data
        </button>
        <div v-if="codesLoading == true">Code Data is loading !!!</div>
      </div>

      <div class="export_actions_row">
        <button @click="getUserData" class="btn btn-danger">
          Get User Data
        </button>
        <div v-if="usersLoading == true">User Data is loading !!!</div>
      </div>

      <div class="export_actions_row">
        <button @click="getReferralData" class="btn btn-danger">
          Get Referral Data
        </button>
        <div v-if="referralsLoading == true">Referral Data is loading !!!</div>
      </div>

      <div class="export_actions_row">
        <button @click="getMerchantData" class="btn btn-danger">
          Get Merchant Data
        </button>
        <div v-if="marchantsLoading == true">Merchant Data is loading !!!</div>
      </div>

      <div class="export_actions_row">
        <button @click="getAllData" class="btn btn-danger">Get All Data</button>
        <div v-if="allDataLoading == true">All Data is loading !!!</div>
      </div>
    </div>
  </div>
</template>

<script>
// import AgentCodeDataService from "../services/AgentCodeDataService";

export default {
  name: "export-get-data",
  data() {
    return {
      id: -1,
      title: "CVS data",
      codesLoading: false,
      usersLoading: false,
      referralsLoading: false,
      merchantsLoading: false,
      allDataLoading: false,
      allAgentCodes: null,
      allUsersData: null,
      allRefferalData: null,
      allMerchantData: null,
      allAllData: null,
    };
  },
  methods: {
    async getCodeData() {
      console.log("GET CODE DATA");
      this.codesLoading = true;
      const codeResults = await fetch("/api/codes", {
        method: "GET",
      });
      if (codeResults.ok) {
        const resultData = await codeResults.json();
        this.allAgentCodes = resultData;
        console.log("GET ALL CODES resultData ", resultData);
        this.loadComplete();
      } else {
        console.log(codeResults.statusText);
      }
    },

    async getUserData() {
      console.log("GET USER DATA");
      this.usersLoading = true;
      const codeResults = await fetch("/api/users", {
        method: "GET",
      });
      if (codeResults.ok) {
        const resultData = await codeResults.json();
        this.allUsersData = resultData;
        console.log("GET USER resultData ", resultData);
        this.loadComplete();
      } else {
        console.log(codeResults.statusText);
      }
    },

    async getReferralData() {
      console.log("GET REFERRAL DATA");
      this.referralsLoading = true;
      const codeResults = await fetch("/api/referrals", {
        method: "GET",
      });
      if (codeResults.ok) {
        const resultData = await codeResults.json();
        this.allRefferalData = resultData;
        console.log("GET REFERRAL resultData ", resultData);
        this.loadComplete();
      } else {
        console.log(codeResults.statusText);
      }
    },

    async getMerchantData() {
      console.log("GET MERCHANT DATA");
      this.merchantsLoading = true;
      const codeResults = await fetch("/api/merchants", {
        method: "GET",
      });
      if (codeResults.ok) {
        const resultData = await codeResults.json();
        this.allMerchantData = resultData;
        console.log("GET MERCHANT resultData ", resultData);
        this.loadComplete();
      } else {
        console.log(codeResults.statusText);
      }
    },

    async getAllData() {
      console.log("GET ALL DATA");
      this.allDataLoading = true;
      const codeResults = await fetch("/api/referrals", {
        method: "GET",
      });
      if (codeResults.ok) {
        const resultData = await codeResults.json();
        this.allAllData = resultData;
        console.log("GET ALL DATA resultData ", resultData);
        this.loadComplete();
      } else {
        console.log(codeResults.statusText);
      }
    },
    loadComplete() {
      this.codesLoading = false;
      this.usersLoading = false;
      this.referralsLoading = false;
      this.merchantsLoading = false;
      this.allDataLoading = false;
    },
  },
};
</script>

<style scoped>
@import "@/assets/main.css";

.bg-form {
  background-color: rgb(128, 128, 128, 0.8);
  height: 100vh;
  width: 100%;
}
.export_actions_header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 0.9em;
  font-weight: 600;
  font-family: Verdana, sans-serif;
  color: whitesmoke;
  margin-left: 15px;
  margin-right: 15px;
}
.export_actions_row {
  display: flex;
  flex-direction: column;
}
.export_actions {
  display: flex;
  flex-direction: column;
}
.tool_actions button {
  width: 20vw;
  justify-content: center;
}
</style>
