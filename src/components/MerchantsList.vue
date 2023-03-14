<script setup>
import { storeToRefs } from "pinia";
import { useAuthStore, useAdminStore } from "@/stores";
const authStore = useAuthStore();
const { user } = storeToRefs(authStore);
console.log("user is: ", user);

const adminStore = useAdminStore();
console.log("CHECK firstName LIST >> STORE: ", adminStore.currentList);
</script>

<template>
  <!-- TutorialDataService methods:
      getAll()
      deleteAll()
      findByTitle()
  -->
  <div id="form_bg">
    <h4 id="card-header">Merchants's List</h4>
    <!-- <div class="card-body"> -->
    <!-- <div class="list row"> -->
    <div>
      <div class="search-row">
        <input
          type="text"
          class="form-control"
          placeholder="Search by Business Name"
          v-model="yourname"
        />
        <div class="search-btn">
          <button
            class="btn btn-outline-primary"
            type="button"
            @click="searchReferral"
          >
            Search
          </button>
        </div>
        <div class="search-btn">
          <button
            class="btn btn-outline-primary"
            type="button"
            @click="flipToReferrals"
          >
            Referral List
          </button>
        </div>
      </div>
    </div>
    <div class="list-wrapper">
      <div class="left-list">
        <h4><em>Merchant's List</em></h4>
        <button @click="getMerchantData()">Copy Merchant Data</button>
        <ul id="list-group">
          <li
            class="list-business-item"
            :class="{ active: index == currentIndex }"
            v-for="(referral, index) in referrals"
            :key="index"
            @click="setActiveReferral(referral, index)"
          >
            {{ referral.businessname }}
            <!-- {{ referral.agentName }}
              {{ referral.agentCode }}
              {{ referral.phone }} -->
          </li>
        </ul>
        <div>
          <br />
          <p>Please click on a Merchant...</p>
        </div>
      </div>

      <div class="right-list">
        <div v-if="currentReferral">
          <div class="right-list-header" v-if="edit == true">
            <h4><em>Merchant's Info</em></h4>
          </div>
          <div class="right-list-header-edit" v-if="edit == false">
            <h4><em>Edit Merchants's Info</em></h4>
          </div>
          <div class="ref-row">
            <label><strong>Merchant Name:</strong></label>
            <!-- {{ currentReferral.yourname }} -->
            <input
              class="ref-input"
              type="text"
              v-model="currentReferral.yourname"
              name="volume"
            />
          </div>
          <div>
            <label><strong>Referral Name:</strong></label>
            <!-- {{ currentReferral.referralname }} -->
            <input
              class="ref-input"
              type="text"
              v-model="currentReferral.referralname"
              name="volume"
            />
          </div>
        </div>
        <div>
          <label><strong>Agent Name:</strong></label>
          <!-- {{ currentReferral.agentname }} -->
          <input
            class="ref-input"
            type="text"
            v-model="currentReferral.agentname"
            name="agentname"
          />
        </div>
        <div>
          <label><strong>Agent Code:</strong></label>
          <!-- {{ currentReferral.agentcode }} -->
          <input
            class="ref-input"
            type="text"
            v-model="currentReferral.agentcode"
            name="agentcode"
          />
        </div>
        <div>
          <label><strong>BusinessName:</strong></label>
          {{ currentReferral.businessname }}
          <input
            class="ref-input"
            type="text"
            v-model="currentReferral.businessname"
            name="businessname"
          />
        </div>
        <div>
          <label><strong>Phone:</strong></label>
          <!-- {{ currentReferral.phone }} -->
          <input
            class="ref-input"
            type="text"
            v-model="currentReferral.phone"
            name="phone"
          />
        </div>
        <div>
          <label><strong>Note:</strong></label>
          <!-- {{ currentReferral.title }} -->
          <input
            class="ref-input"
            type="text"
            v-model="currentReferral.title"
            name="title"
          />
        </div>
        <div>
          <label><strong>Description:</strong></label>
          <!-- {{ currentReferral.description }} -->
          <input
            class="ref-input"
            type="text"
            v-model="currentReferral.description"
            name="description"
          />
        </div>
        <div>
          <label><strong>Status:</strong></label>
          {{ currentReferral.published ? "Published" : "Pending" }}
        </div>
        <div class="right-edit-btn" v-if="edit == true">
          <button @click="onEdit">Edit Referral {{ user.id }}</button>
        </div>
        <div class="right-save-btn" v-if="edit == false">
          <!-- <router-link
              :to="{ name: 'Referral', params: { id: currentReferral.id } }"
              class="badge"
            >
              Edit
            </router-link> -->
          <button @click="onSave" class="save-btn">
            Save {{ currentReferral.id }}
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- </div> -->
  <!-- </div> -->
</template>

<script>
// import DataService from "../services/DataService";

export default {
  name: "my-referral-list",
  data() {
    return {
      referrals: [],
      currentReferral: null,
      currentIndex: -1,
      title: "",
      yourname: "",
      userData: "",
      edit: true,
      user: {
        id: 0,
      },
    };
  },
  created() {
    // let currentUser = user;
    // this.userData = currentUser.agentCode;
    // this.question = currentUser.agentCode;
    // console.log("REFERRALS LIST USER AGENT CODE IS : ", this.userData);
    //this.searchReferral();
  },
  methods: {
    getMerchantData() {
      console.log("Get Merchant Data");
    },
    flipToReferrals() {
      useAdminStore().loadReferrals();
    },
    onEdit() {
      this.edit = false;
    },
    async onSave() {
      this.edit = true;
      console.log("On Save:: user ID ", this.currentReferral.id);
      console.log("On Save:: Current Referral ", this.currentReferral);
      this.url = "/api/referrals/" + this.currentReferral.id;
      await fetch(this.url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.currentReferral),
      }).then(this._referralSuccess);
    },
    _referralSuccess(response) {
      console.log("_REFERRAL SUCCESS UPDATE referrals data: ", response);
    },
    async retrieveReferrals() {
      // this.referred = false;
      console.log("GET ALL REFERRAL DATA get referrals ");
      const referralResults = await fetch("/api/referrals", {
        method: "GET",
      });
      if (referralResults.ok) {
        const resultData = await referralResults.json();
        this.referrals = resultData;
      } else {
        console.log(referralResults.statusText);
      }
    },

    // refreshList() {
    //   this.retrieveReferrals();
    //   this.currentReferral = null;
    //   this.currentIndex = -1;
    // },

    setActiveReferral(referral, index) {
      console.log("> Set Active Referral:: ", referral);
      this.currentReferral = referral;
      this.currentIndex = referral ? index : -1;
    },
    async searchReferral() {
      console.log("GET merchants by business name ", this.businessname);
      this.url = "/api/merchants/" + this.businessname;
      const referralResults = await fetch(this.url, {
        method: "GET",
      });
      if (referralResults.ok) {
        const resultData = await referralResults.json();
        this.referrals = resultData;
        console.log("SEARCH RESPONSE DATA:::  ", resultData);
      }
    },
    async loadReferrals() {
      console.log("GET merchants by business name ", this.yourname);
      this.url = "/api/merchants/" + this.yourname;
      const referralResults = await fetch(this.url, {
        method: "GET",
      });
      if (referralResults.ok) {
        const resultData = await referralResults.json();
        this.referrals = resultData;
        console.log("Initial Load RESPONSE DATA:::  ", resultData);
      }
      this.setActiveReferral(this.referrals[0], 0);
    },
  },
  mounted() {
    // let currentUser = user;
    //this.userData = currentUser.agentCode;
    //this.question = currentUser.agentCode;
    //console.log("REFERRALS LIST USER AGENT CODE IS : ", this.userData);
    this.loadReferrals();
  },
};
</script>

<style scoped>
#form_bg {
  width: 100%;
  height: 100vh;
  color: var(--adm-text-green);
  background-color: rgba(255, 255, 255, 0.4);
  border-style: solid;
  border-width: 2px;
  border-color: rgba(0, 33, 0, 0.4);
}

#form_bg-edit-mode {
  width: 98%;
  color: var(--adm-text-green);
  background-color: rgba(250, 126, 126, 0.4);
  border-style: solid;
  border-width: 0px;
  border-color: rgb(244, 6, 6);
}

.search-row {
  display: flex;
  flex-direction: row;
  padding-left: 10px;
}
.search-btn {
  color: whitesmoke;
  background-color: transparent;
}

#list-header {
  display: flex;
}

#card-header {
  display: flex;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0.4);
  align-items: center;
  justify-content: center;
  margin-bottom: 0px;
}

#card-body-bg {
  background-color: rgba(255, 255, 255, 0.4);
  width: 90vw;
}

.list-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-left: 2%;
  padding-right: 2%;
}

.left-list {
  margin-right: 5%;
}
#list-group {
  display: flex;
  flex-direction: column;
  margin-left: 0px;
}
#list-group li {
  text-decoration: none;
}

.right-list {
  width: 60%;
  height: 80%;
  margin-top: 10px;
  margin-right: 0px;
  padding-right: 0px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  border-radius: 10pt;
  border: 1px solid rgb(128, 128, 128, 0.3);
  background-color: rgb(0, 128, 0, 0.4);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.right-list-edit-mode {
  width: 60%;
  height: 80%;
  margin-top: 10px;
  margin-right: 0px;
  padding-right: 0px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  border-radius: 10pt;
  border: 1px solid red;
  background-color: rgb(0, 128, 0, 0.4);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.right-list-header {
  color: whitesmoke;
  background-color: var(--adm-text-green);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-right: 0px;
  margin-bottom: 0px;
  border-top-right-radius: 10pt;
  border-top-left-radius: 10pt;
  padding-top: 5px;
  padding-bottom: 5px;
}

.right-list-header-edit {
  color: whitesmoke;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-right: 0px;
  border: 2px solid red;
  border-top-right-radius: 10pt;
  border-top-left-radius: 10pt;
  padding-top: 5px;
  padding-bottom: 5px;
}

.ref-row {
  display: flex;
  flex-direction: row;
}
.right-list label {
  color: white;
  padding-left: 14px;
}

.ref-input {
  font-size: 0.9em;
  font-weight: 400;
  font-family: Verdana, sans-serif;
  color: var(--adm-text-green);
  background-color: transparent;
  height: 20px;
  width: 60%;
  margin-top: 1px;
  margin-left: 5px;
  padding-left: 0px;
  margin-bottom: 1px;
  border: none;
}
.right-edit-btn {
  color: whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--adm-text-green);
  border-bottom-right-radius: 10pt;
  border-bottom-left-radius: 10pt;
  padding-top: 5px;
  padding-bottom: 5px;
}
.right-save-btn {
  color: whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  border: 2px solid red;
  border-bottom-right-radius: 10pt;
  border-bottom-left-radius: 10pt;
  padding-top: 5px;
  padding-bottom: 5px;
}
</style>
