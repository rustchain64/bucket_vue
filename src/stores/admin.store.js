import { defineStore } from "pinia";

// import { fetchWrapper } from "@/helpers";
//import { router } from "@/router";
// import { useAlertStore } from "@/stores";

export const useAdminStore = defineStore({
  id: "admin",
  state: () => ({
    // initialize state from local storage to enable user to stay logged in
    user: JSON.parse(localStorage.getItem("user")),
    currentList: "referrals",
  }),
  actions: {
    loadMerchants() {
      console.log("Show Merchants List");
      this.currentList = "merchants";
    },
    loadReferrals() {
      console.log("Show Referrals List");
      this.currentList = "referrals";
    },
    getCurrentList() {
      return this.currentList;
    },
  },
});
