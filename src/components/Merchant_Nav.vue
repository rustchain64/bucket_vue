<script setup>
import { useAuthStore } from "@/stores";
//import { storeToRefs } from "pinia";

const authStore = useAuthStore();

// const usersStore = useUsersStore();
// const { users } = storeToRefs(usersStore);
</script>

<template>
  <!-- <div>{{user.picked}}</div> -->
  <nav
    v-show="authStore.user"
    class="navbar navbar-expand navbar-dark bg-light"
  >
    <img
      alt="GoFree logo"
      class="logo"
      src="@/assets/images/.jpg"
      height="80"
    />

    <!-- <div>{{user.picked}}</div> -->
    <div class="navbar-nav nav-text nav-text">
      <router-link to="/referralsList" class="nav-link"
        >Referrals List</router-link
      >
      <router-link to="/merchantDashboard" class="nav-item nav-link"
        >Dashboard</router-link
      >
      <router-link to="/users" class="nav-item nav-link">Users</router-link>
      <!-- <router-link to="/users" class="nav-item nav-link" v-if="authStore.user.picked=='Admin'">Users</router-link> -->

      <div class="logout_button">
        <button
          @click="authStore.logout()"
          class="btn btn-link nav-item nav-link"
        >
          <img
            alt="Log Out"
            class="nav_logo"
            src="@/assets/images/logOut.png"
            height="30"
          />
        </button>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav-text {
  color: grey;
}
</style>
