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
    <h4 id="card-header">Referral's List</h4>
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
      </div>
    </div>
    <div class="list-wrapper">
      <div class="left-list">
        <h4><em>Referral's List</em></h4>
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
          <p>Please click on a Referral...</p>
        </div>
      </div>

      <div class="right-list">
        <div v-if="currentReferral">
          <div class="right-list-header" v-if="edit == true">
            <h4><em>Referral's Info</em></h4>
          </div>
          <div class="right-list-header-edit" v-if="edit == false">
            <h4><em>Edit Referral's Info</em></h4>
          </div>
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
  </div>
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
    onEdit() {
      this.edit = false;
    },
    async onSave() {
      console.log("On Save:: user ID ", this.currentReferral.referralname);
      //console.log("GET referrals by business name ", this.yourname);
      this.url = "/api/referrals/" + this.currentReferral.id;
      const referralResults = await fetch(this.url, {
        method: "PUT",
      });
      if (referralResults.ok) {
        const resultData = await referralResults.json();
        this.referrals = resultData;
        console.log("UPDATE :: RESPONSE DATA:::  ", resultData);
      }
    },
    // async onSave() {
    //   console.log("On Save:: user ID ", this.referrals[this.user.id]);
    //   if (this.user.id == 0) {
    //     console.log("UPDATE USER by PUT");
    //     this.method = "PUT";
    //     this.url = "/api/referrals/" + this.user.yourname;
    //     await fetch(this.url, {
    //       method: this.method,
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(this.referral),
    //     })
    //       .then(this._referralSuccess)
    //       .catch(this._referralError);
    //   }
    // },
    // _referralSuccess(response) {
    //   console.log("response referrals data: ", response);
    //   console.log("What USer is it to Edit:: ", response.user);
    //   alert(
    //     response.data ? JSON.stringify(response.data) : response.statusText
    //   );

    //   // this.user.id = response.user.id;
    //   this.edit = true;
    // },
    // _referralError(response) {
    //   console.log("COULDN'T fetch referrals data _error,", response);
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
    async searchReferral() {
      console.log("GET referrals by business name ", this.businessname);
      this.url = "/api/referrals/" + this.businessname;
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
      console.log("GET referrals by business name ", this.yourname);
      this.url = "/api/referrals/" + this.yourname;
      const referralResults = await fetch(this.url, {
        method: "GET",
      });
      if (referralResults.ok) {
        const resultData = await referralResults.json();
        this.referrals = resultData;
        console.log("Initial Load RESPONSE DATA:::  ", resultData);
      }
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
  width: 98%;
  color: var(--adm-text-green);
  background-color: rgba(255, 255, 255, 0.4);
  border-style: solid;
  border-width: 0px;
  border-color: whitesmoke;
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

.right-list label {
  color: white;
  padding-left: 14px;
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
