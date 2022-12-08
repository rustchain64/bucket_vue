<script setup>
import { storeToRefs } from "pinia";
import { useAuthStore } from "@/stores";
const authStore = useAuthStore();
const { user } = storeToRefs(authStore);
console.log("user is: ", user);
</script>

<template>
  <!-- TutorialDataService methods:
       getAll()
       deleteAll()
       findByTitle()
  -->
  <div id="form_bg">
    <h4 id="card-header">Update Referral's info to Complete Registration</h4>
    <!-- <div class="card-body"> -->
    <!-- <div class="list row"> -->
    <div class="col-md-8">
      <div class="input-group">
        <input
          type="text"
          class="form-control"
          placeholder="Search by Your Name"
          v-model="yourname"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="button"
            @click="searchReferral"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4><em>Referrals List</em></h4>
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(referral, index) in referrals"
          :key="index"
          @click="setActiveReferral(referral, index)"
        >
          {{ referral.referralname }}
          <!-- {{ referral.agentName }}
              {{ referral.agentCode }}
              {{ referral.phone }} -->
        </li>
      </ul>
    </div>
    <div class="col-md-6">
      <div v-if="currentReferral">
        <h4><em>Referral Info</em></h4>
        <div>
          <label><strong>Merchant Name:</strong></label>
          {{ currentReferral.yourname }}
        </div>
        <div>
          <label><strong>Referral Name:</strong></label>
          {{ currentReferral.referralname }}
        </div>
        <div>
          <label><strong>Agent Name:</strong></label>
          {{ currentReferral.agentname }}
        </div>
        <div>
          <label><strong>Agent Code:</strong></label>
          {{ currentReferral.agentcode }}
        </div>
        <div>
          <label><strong>BusinessName:</strong></label>
          {{ currentReferral.businessname }}
        </div>
        <div>
          <label><strong>Phone:</strong></label>
          {{ currentReferral.phone }}
        </div>
        <div>
          <label><strong>Email:</strong></label>
          {{ currentReferral.email }}
        </div>
        <div>
          <label><strong>Note:</strong></label>
          {{ currentReferral.title }}
        </div>
        <div>
          <label><strong>Description:</strong></label>
          {{ currentReferral.description }}
        </div>
        <div>
          <label><strong>Status:</strong></label>
          {{ currentReferral.published ? "Published" : "Pending" }}
        </div>

        <router-link
          :to="{ name: 'Referral', params: { id: currentReferral.id } }"
          class="badge badge-primary"
        >
          Edit
        </router-link>
      </div>

      <div v-else>
        <br />
        <p>Please click on a Referral...</p>
      </div>
    </div>
    <!-- </div> -->
  </div>
  <!-- </div> -->
</template>

<script>
// import DataService from "../services/DataService";

export default {
  name: "referral-list",
  data() {
    return {
      referrals: [],
      currentReferral: null,
      currentIndex: -1,
      title: "",
      yourname: "",
      userData: "",
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
    // retrieveReferrals() {
    //   console.log("GETTING ALL REFERRALS");
    //   DataService.getAll()
    //     .then((response) => {
    //       this.referrals = response.data;
    //       console.log(response.data);
    //     })
    //     .catch((e) => {
    //       console.log(e);
    //     });
    // },

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

    refreshList() {
      this.retrieveReferrals();
      this.currentReferral = null;
      this.currentIndex = -1;
    },

    setActiveReferral(tutorial, index) {
      this.currentReferral = tutorial;
      this.currentIndex = tutorial ? index : -1;
    },
    // searchReferral() {
    //   DataService.findByTitle(this.currentReferral.yourname)
    //     .then((response) => {
    //       this.referrals = response.data;
    //       this.setActiveReferral(null);
    //       console.log("SEARCH TITLE RESPONSE DATA:::  ", response.data);
    //     })
    //     .catch((e) => {
    //       console.log(e);
    //     });
    // },
    async searchReferral() {
      console.log("GET referral by yourname ", this.yourname);
      this.url = "/api/referrals/" + this.yourname;
      const referralResults = await fetch(this.url, {
        method: "GET",
      });
      if (referralResults.ok) {
        const resultData = await referralResults.json();
        this.referrals = resultData;
        console.log("SEARCH TITLE RESPONSE DATA:::  ", resultData);
      }
    },
  },
  mounted() {
    // let currentUser = user;
    //this.userData = currentUser.agentCode;
    //this.question = currentUser.agentCode;
    //console.log("REFERRALS LIST USER AGENT CODE IS : ", this.userData);
    this.searchReferral();
  },
};
</script>

<style scoped>
#form_bg {
  width: 75vw;
  background-color: rgba(255, 255, 255, 0.4);
  border-style: solid;
  border-width: 1px;
  border-color: whitesmoke;
}
.list {
  text-align: left;
  width: 90vw;
  margin: auto;
}

#card-header {
  display: flex;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0.4);
}

#card-body-bg {
  background-color: rgba(255, 255, 255, 0.4);
  width: 90vw;
}
</style>
