<script setup>
//import { storeToRefs } from "pinia";
import { useAuthStore } from "@/stores";
import LandingPage from "../components/LandingPage.vue";

//const authStore = useAuthStore();
//const { user } = storeToRefs(authStore);
</script>

<template>
  <div class="wrapper">
    <div class="main_header">
      <h2>
        {{ useAuthStore().user.firstname }}
        {{ useAuthStore().user.lastname }}'s Admin Dashboard
      </h2>
      <!-- <div>Admin BUtton</div> -->
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
  background-color: rgba(255, 255, 255, 0.6);
  display: flex;
  justify-content: space-between;
  width: 90%;
  padding-top: 1%;
  padding-left: 1%;
}

.page-width {
  width: 90%;
}
</style>
