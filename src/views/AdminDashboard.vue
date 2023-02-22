<script setup>
//import { storeToRefs } from "pinia";
import { useAuthStore } from "@/stores";
import LandingPage from "../components/LandingPage.vue";
</script>

<template>
  <div class="wrapper">
    <div class="main_header">
      <img
        alt="Pie logo"
        class="pie-header_logo"
        src="@/assets/images/pie_logo.png"
      />
      <h2 id="header-font">
        {{ useAuthStore().user.firstname }}
        {{ useAuthStore().user.lastname }}'s Admin Dashboard
      </h2>
      <!-- <div>Admin BUtton</div> -->
      <div @click="useAuthStore().logout()">
        <img
          alt="Log Out"
          class="log-out"
          src="@/assets/images/logOut.png"
          height="30"
        />
      </div>
    </div>
    <div class="page-width">
      <LandingPage />
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  width: 85vw;
  margin-left: 2%;
}

.main_header {
  color: var(--adm-text-green);
  background-color: rgba(255, 255, 255, 0.6);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  padding-top: 1%;
  padding-left: 2%;
}

.pie-header_logo {
  margin-right: 0px;
  width: 120px;
  padding-bottom: 15px;
}

#header-font {
  font-size: 2.4em;
  font-weight: 400;
  font-family: Verdana, sans-serif;
  padding-top: 5px;
}

.log-out {
  align-items: center;
  padding-bottom: 6px;
  padding-right: 20px;
}

.page-width {
  width: 90%;
}
</style>
