<script setup>
import referralCodeGenerator from "referral-code-generator";

// import { useAgentReferCodeStore } from "@/stores";

// const agentReferStore = useAgentReferCodeStore();
</script>

<template>
  <h2>Admin Tools : Generate Referral Codes</h2>
  <div class="tool_actions">
    <h3>Generate Batch Code</h3>
    <span
      ><button @click="deleteAll" class="btn btn-danger">
        Delete All Codes
      </button></span
    >
    <span>Number of Agent Referral Codes: {{ numberOfCodes }}</span>
    <span
      ><button @click="generateCode" class="btn btn-primary">
        Generate Code
      </button></span
    >
    <span>Code: {{ agentCode }}</span>
    <span
      ><button @click="commitAgentCode" class="btn btn-success">
        Commit Code
      </button></span
    >
    <span>Code: {{ agentCode }}</span>
    <span
      ><button @click="getAllAgentCode" class="btn btn-warning">
        Get All Codes
      </button></span
    >

    <div>
      <ul>
        <li
          v-for="code in allAgentCodes"
          :value="code.value"
          :key="code.value"
          class="code_list"
        >
          {{ code.agentcode }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import AgentCodeDataService from "../services/AgentCodeDataService";

export default {
  name: "tooling-genrateAgentCode",
  data() {
    return {
      codeForm: {
        id: -1,
        agentCode: "",
        allAgentCodes: "",
        numberOfCodes: "",
      },
      id: -1,
      title: " NO NO",
      agentCode: "",
      allAgentCodes: "",
      numberOfCodes: 0,
    };
  },
  methods: {
    generateCode() {
      let newRefferalCode = referralCodeGenerator.alphaNumeric(
        "uppercase",
        2,
        1
      );
      console.log("TOOLING GENERATED CODE,", newRefferalCode);
      this.agentCode = "AG" + newRefferalCode;
      console.log("TOOLING AG + GENERATED CODE,", this.agentCode);
    },

    async commitAgentCode() {
      fetch("api/codes", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ agentCode: this.agentCode }),
      })
        .then((response) => response.json())
        .then((response) => console.log(JSON.stringify(response)));
    },

    async getAllAgentCode() {
      console.log("GET ALL CODES");
      const codeResults = await fetch("/api/codes", {
        method: "GET",
      });
      if (codeResults.ok) {
        const resultData = await codeResults.json();
        this.allAgentCodes = resultData;
        console.log("GET ALL CODES resultData ", resultData);
      } else {
        console.log(codeResults.statusText);
      }
    },
    // when assigned we must delete the code
    deleteOneById() {
      console.log("DELETE ALL CODES length : ");
    },
  },
};
</script>

<style scoped>
@import "@/assets/main.css";

.tool_actions_row {
  display: flex;
  flex-direction: column;
}
.tool_actions {
  display: flex;
  flex-direction: column;
}
.tool_actions button {
  width: 20vw;
  justify-content: center;
}

.code_list {
  list-style-type: none; /* Remove bullets */
  padding: 0; /* Remove padding */
  margin: 0; /* Remove margins */
}
</style>
