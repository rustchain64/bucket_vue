<script setup>
//import { storeToRefs } from "pinia";
import { useAuthStore } from "@/stores";
const authStore = useAuthStore();
</script>

<template>
  <div class="bg"></div>
  <div class="bg bg2"></div>
  <div class="bg bg3"></div>

  <div class="wrapper">
    <div class="nav_wrapper" v-show="authStore.user">
      <!-- <div class="nav_wrapper"> -->
      <img
        alt="Pie Logo"
        class="nav_logo"
        src="@/assets/images/pie_logo.png"
        height="80"
      />
      <div class="nav_links">
        <div class="greeting-text">Hi {{ authStore.firstname }}</div>
        <!-- <RouterLink to="/referrals" class="nav-item nav-link" id="nav-text"
          >Referrals</RouterLink
        > -->
        <!-- <RouterLink to="/users" class="nav-item nav-link" id="nav-text"
          >Users</RouterLink
        >
        <RouterLink to="/list" class="nav-link" id="nav-text"
          >Referrals</RouterLink
        > -->
        <!-- <RouterLink to="/referral" class="nav-item nav-link" id="nav-text"
          >Referral</RouterLink
        >
        <RouterLink to="/add" class="nav-item nav-link" id="nav-text"
          >Add</RouterLink
        > -->
        <div>
          <div @click="authStore.logout()">
            <img
              alt="Log Out"
              class="log_out"
              src="@/assets/images/logOut.png"
              height="30"
            />
          </div>
        </div>
      </div>
    </div>

    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
import { useAgentReferCodeStore } from "@/stores";
export default {
  name: "my-add-user",
  data: () => ({
    agentCode: "",
    firstname: "",
  }),
  mounted() {
    localStorage.removeItem("user");
    // console.log(">>>>> USER DATA ", this.authStore.user);
    // console.log(">>>>> USER FIRSTNAME ", this.authStore.user.firstname);
    // this.firstname = authStore.user.firstname;
    // useAgentReferCodeStore().getAllAgentCode();
    // authStore.logout();
    // localStorage.removeItem("user");
  },
  created() {
    localStorage.removeItem("user");
    useAgentReferCodeStore().getAllAgentCode();
  },
};
</script>

<style scoped>
@import "@/assets/main.css";
.nav_links {
  display: flex;
}
#nav-text {
  color: darkgreen;
  font-weight: 900;
  margin-right: 10%;
}

.bg {
  animation: slide 4s ease-in-out infinite alternate;
  background-image: linear-gradient(-60deg, #6c3 50%, #09f 50%);
  bottom: 0;
  left: -50%;
  opacity: 0.5;
  position: fixed;
  right: -50%;
  top: 0;
  z-index: -1;
}

.bg2 {
  animation-direction: alternate-reverse;
  animation-duration: 2s;
}

.bg3 {
  animation-duration: 4s;
}

@keyframes slide {
  0% {
    transform: translateX(-25%);
  }

  100% {
    transform: translateX(25%);
  }
}

@media only screen and (min-width: 1025px) {
  .wrapper {
    display: flex;
    flex-direction: column;
    width: 75vw;
  }
  .nav_wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    place-items: center;
  }

  .greeting-text {
    color: rgb(31, 30, 30);
    font-size: 1.8em;
    font-weight: 400;
    right: 50%;
  }
  .log_out {
    margin-top: 1%;
    margin-right: 1%;
    background-color: transparent;
  }
}
@media only screen and (min-width: 768px) and (max-width: 1024px) {
  .wrapper {
    display: flex;
    flex-direction: column;
    width: 100vw;
  }
  .nav_wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    place-items: center;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.7);
  }

  .greeting-text {
    color: rgb(31, 30, 30);
    font-size: 1.8em;
    font-weight: 400;
    right: 50%;
  }
  .log_out {
    background-color: transparent;
    right: 25%;
  }
}

@media only screen and (min-width: 375px) and (max-width: 767px) and (-webkit-device-pixel-ratio: 2) {
  .wrapper {
    display: flex;
    flex-direction: column;
    width: 100vw;
  }
  .nav_wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    place-items: center;
    width: 100vw;
  }

  .greeting-text {
    color: rgb(31, 30, 30);
    font-size: 1.8em;
    font-weight: 400;
    right: 35%;
  }
  .log_out {
    background-color: transparent;
    right: 30%;
    margin-top: 2%;
  }
}

@media only screen and (min-width: 375px) and (max-width: 767px) {
  .wrapper {
    display: flex;
    flex-direction: column;
    width: 100vw;
  }
  .nav_wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    place-items: center;
    width: 100vw;
    background-color: rgba(255, 255, 255, 0.7);
  }

  .greeting-text {
    color: rgb(31, 30, 30);
    font-size: 1.8em;
    font-weight: 400;
    right: 35%;
  }
  .log_out {
    background-color: transparent;
    margin-top: 2%;
    right: 30%;
  }
}
</style>
