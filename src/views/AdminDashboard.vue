<script setup>
//import { storeToRefs } from "pinia";
import { useAuthStore } from "@/stores";
import LandingPage from "../components/LandingPage.vue";

//const authStore = useAuthStore();
//const { user } = storeToRefs(authStore);
</script>

<template>
  <div>
    <div class="main_header">
      <h2>Admin {{ useAuthStore().user.firstname }} Dashboard</h2>
      <div>Admin BUtton</div>
    </div>
    <div class="page-width">
      <LandingPage />
    </div>
  </div>
</template>

<style scoped>
.main_header {
  background-color: rgba(255, 255, 255, 0.4);
  display: flex;
  justify-content: space-between;
}

.page-width {
  width: 90vw;
}
</style>
