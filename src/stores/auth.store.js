import { defineStore } from "pinia";

// import { fetchWrapper } from "@/helpers";
import { router } from "@/router";
// import { useAlertStore } from "@/stores";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    // initialize state from local storage to enable user to stay logged in
    user: JSON.parse(localStorage.getItem("user")),
    firstname: "",
    returnUrl: null,
  }),
  actions: {
    async login(userData) {
      console.log("from auth.store: userData ", userData);
      // PASS THE INFO INOT AUTH STORE DIRECTLY AS WE NOW HAVE IT
      // update pinia state
      this.user = userData;
      console.log("from auth.store: userData ", userData.firstname);
      this.firstname = userData.firstname;

      // store user details and jwt in local storage to keep user logged in between page refreshes
      localStorage.setItem("user", JSON.stringify(userData.persona));
      localStorage.setItem("firstname", JSON.stringify(userData));

      router.push(this.returnUrl || "/");
      // } catch (error) {
      //   const alertStore = useAlertStore();
      //   alertStore.error(error);
      // }
    },
    logout() {
      console.log("USER LOGGING OUT");
      this.user = null;
      localStorage.removeItem("user");
      router.push("/account/login");
    },
  },
});
