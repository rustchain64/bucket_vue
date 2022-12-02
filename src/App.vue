<script setup>
//import { storeToRefs } from "pinia";
import { useAuthStore } from "@/stores";

const authStore = useAuthStore();
//const { user } = storeToRefs(authStore);
</script>

<template>
  <div class="bg"></div>
  <div class="bg bg2"></div>
  <div class="bg bg3"></div>

  <!-- <div v-show="authStore.user" navbar-nav> -->
  <div class="wrapper">
    <div class="nav_wrapper">
      <img
        alt="Pie Logo"
        class="nav_logo"
        src="@/assets/images/pie_logo.png"
        height="80"
      />
      <div class="nav_links">
        <RouterLink to="/referrals" class="nav-item nav-link" id="nav-text"
          >Referrals</RouterLink
        >
        <RouterLink to="/users" class="nav-item nav-link" id="nav-text"
          >Users</RouterLink
        >
        <RouterLink to="/list" class="nav-link" id="nav-text"
          >Referrals</RouterLink
        >
        <RouterLink to="/referral" class="nav-item nav-link" id="nav-text"
          >Referral</RouterLink
        >
        <RouterLink to="/add" class="nav-item nav-link" id="nav-text"
          >Add</RouterLink
        >
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

<style scoped>
@import "@/assets/main.css";
.nav_wrapper {
  display: flex;
  justify-content: space-between;
  width: 80%;
}
.wrapper {
  display: flex;
  flex-direction: column;
  width: 83vw;
}
.log_out {
  background-color: transparent;
  margin-top: 1%;
}
.nav_links {
  display: flex;
  margin-top: 2%;
}
#nav-text {
  color: darkgreen;
  font-weight: 900;
  margin-right: 10%;
}

.logout_button {
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

.content {
  float: left;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 0.25em;
  box-shadow: 0 0 0.25em rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  padding: 1vmin;
  /* position: fixed; */
  text-align: center;
  top: 1%;
  /* transform: translate(50%, -40%); */
}

@keyframes slide {
  0% {
    transform: translateX(-25%);
  }

  100% {
    transform: translateX(25%);
  }
}
</style>
