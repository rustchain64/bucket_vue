import { defineStore } from "pinia";

export const useTermsStore = defineStore({
  id: "terms",
  state: () => ({
    termsIsOpen: false,
  }),
  actions: {
    termsOpen() {
      console.log("termsOpen");
      this.termsIsOpen = true;
    },
    termsClose() {
      console.log("termsClose");
      this.termsIsOpen = false;
    },
  },
});
