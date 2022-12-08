import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore, useAlertStore } from "../stores";
import { Home } from "../views/Home.vue";
import accountRoutes from "./account.routes";
import usersRoutes from "./users.routes";
import referralsRoutes from "./referrals.routes";
import AdminDashboard from "../views/AdminDashboard.vue";
import MerchantDashboard from "../views/MerchantDashboard.vue";
import AgentDashboard from "../views/AgentDashboard.vue";
import ListView from "../views/referrals/ListView.vue";
import ReferralWorld from "@/components/ReferralWorld.vue";

export const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "active",
  routes: [
    { path: "/", component: Home },
    { path: "/home", component: Home },
    { ...accountRoutes },
    { ...usersRoutes },
    { ...referralsRoutes },
    { path: "/merchant", component: ReferralWorld },
    { path: "/agent", component: ListView },
    { path: "/adminDashboard", component: AdminDashboard },
    { path: "/merchantDashboard", component: MerchantDashboard },
    { path: "/agentDashboard", component: AgentDashboard },
    // catch all redirect to home page
    // { path: "/:pathMatch(.*)*", redirect: "/" },
  ],
});

router.beforeEach(async (to) => {
  // clear alert on route change
  const alertStore = useAlertStore();
  alertStore.clear();

  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = [
    "/account/login",
    "/account/register",
    "/referrals/addl",
  ];
  const authRequired = !publicPages.includes(to.path);
  const authStore = useAuthStore();

  // because there is not a user
  if (authRequired && !authStore.user) {
    authStore.returnUrl = to.fullPath;
    //return '/account/login';
    return "/referrals/addl";
  }
});
