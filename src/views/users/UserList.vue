<script setup>
// import { storeToRefs } from "pinia";
// import { useAgentReferCodeStore } from "@/stores";

// const referallCodeStore = useAgentReferCodeStore();
// const { refUsers } = storeToRefs(referallCodeStore);
</script>

<template>
  <div class="main">
    <h4>REF USERS LIST</h4>
    <div class="user-list-header">
      <h4>Users List</h4>
      <!-- <div>
        <button
          @click="fetchReferralCodes"
          class="btn btn-sm btn-danger"
          id="fetch-btn"
        >
          Fetch User Code
        </button>
        {{ referCode }}
      </div> -->

      <div>
        <router-link to="/users/add" class="add-user-button"
          >Add User Link</router-link
        >
      </div>
    </div>

    <table class="table table-striped" id="table-width">
      <thead>
        <tr>
          <th style="width: 10%">Persona Type</th>
          <th style="width: 10%">Agent Code</th>
          <th style="width: 10%">First Name</th>
          <th style="width: 10%">Last Name</th>
          <th style="width: 10%">Username</th>
          <th style="width: 10%">Password</th>
          <th style="width: 10%">Edit</th>
          <th style="width: 10%">Delete</th>
          <th style="width: 5%"></th>
        </tr>
      </thead>
      <tbody v-if="users.length">
        <template v-for="user in users" :key="user.id">
          <tr>
            <td>{{ user.persona }}</td>
            <td>{{ user.agentcode }}</td>
            <td>{{ user.firstname }}</td>
            <td>{{ user.lastname }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.password }}</td>
            <td style="white-space: nowrap">
              <router-link
                :to="`/users/edit/${user.id}`"
                class="btn btn-sm btn-primary mr-1"
                >[E]</router-link
              >
              <button
                @click="deleteUser(user.id)"
                class="btn btn-sm btn-danger btn-delete-user"
                :disabled="user.isDeleting"
              >
                <span
                  v-if="user.isDeleting"
                  class="spinner-border spinner-border-sm"
                ></span>
                <span v-else>[X]</span>
              </button>
            </td>
          </tr>
        </template>
        <tr v-if="users.loading">
          <td colspan="4" class="text-center">
            <span class="spinner-border spinner-border-lg align-center"></span>
          </td>
        </tr>
        <tr v-if="users.error">
          <td colspan="4">
            <div class="text-danger">
              Error loading users: {{ users.error }}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "my-add-list",
  data() {
    return {
      id: null,
      length: 0,
      referCode: "test333",
      users: [],
    };
  },
  methods: {
    async getUsers() {
      console.log("GET USERS");
      const userResults = await fetch("/api/users", {
        method: "GET",
      });
      if (userResults.ok) {
        const resultData = await userResults.json();
        console.log("USER RESULT DATA: ", resultData);
        this.users = resultData;
      } else {
        console.log(userResults.statusText);
      }
    },
    async deleteUser(user) {
      console.log("DELETE USER by id ", user);
      this.url = "/api/users/" + user;
      const userResults = await fetch(this.url, {
        method: "DELETE",
      });
      if (userResults.ok) {
        this.getUsers();
        const resultData = await userResults.json();
        console.log("USER RESULT DATA: ", resultData);
        // this.users = resultData;
      } else {
        console.log(userResults.statusText);
      }
    },
    // fetchReferralCodes() {
    //   let returnCodes = refUsers.agentCodes;
    //   console.log("User List : ", returnCodes[0]);
    //   let codesLength = returnCodes[0].length - 1;
    //   this.length = codesLength;
    //   console.log("Fetched Codes length: ", codesLength);
    //   console.log("Fetched Code : ", returnCodes[0][codesLength].agentCode);
    //   this.referCode = returnCodes[0][codesLength].agentCode;
    // },
  },
  created: function () {
    this.getUsers();
  },
};
</script>

<style scoped>
.main {
  width: 100%;
  background-color: whitesmoke;
}

#table-width {
  width: 95%;
}
.user-list-header {
  margin-top: 0px;
  display: flex;
  justify-content: space-between;
  height: 5%;
  width: 100%;
  background-color: rgba(181, 173, 173, 0.3);
}

#fetch-btn {
  height: 50%;
  padding-top: 2%;
  padding-bottom: 2%;
  background: limegreen;
  background: -webkit-linear-gradient(limegreen, rgb(31, 179, 229));
  background: -o-linear-gradient(limegreen, rgb(31, 179, 229));
  background: -moz-linear-gradient(limegreen, rgb(31, 179, 229));
  background: linear-gradient(limegreen, rgb(31, 179, 229));
}
.add-user-button {
  height: 80%;
  color: white;
  font-weight: 600;
  background: limegreen;
  /* background: -webkit-linear-gradient(limegreen, rgb(31, 179, 229));
  background: -o-linear-gradient(limegreen, rgb(31, 179, 229));
  background: -moz-linear-gradient(limegreen, rgb(31, 179, 229));
  background: linear-gradient(limegreen, rgb(31, 179, 229)); */
}
</style>
