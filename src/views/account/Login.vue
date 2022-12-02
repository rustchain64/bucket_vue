<script setup>
// import { storeToRefs } from "pinia";
import { Form, Field } from "vee-validate";
import * as Yup from "yup";
import UserWorld from "@/components/UserWorld.vue";
// import { useReferralStore } from "@/stores";
import { router } from "@/router";
// import { useAlertStore } from "@/stores";
import { useAuthStore } from "@/stores";
// const authStore = useAuthStore();
// const { user } = storeToRefs(authStore);

const schema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});
</script>

<template>
  <div class="main">
    <div id="form_bg">
      <img
        alt="Go Free logo"
        class="logo"
        src="@/assets/images/pie_logo.png"
        width="400"
      />
      <h4 class="my-header">Login</h4>

      <Form
        @submit="redirect_to_referrals"
        :validation-schema="schema"
        v-slot="{ errors, isSubmitting }"
      >
        <div class="row" id="input-width">
          <label>Username</label>
          <Field
            name="username"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors.username }"
          />
          <div class="invalid-feedback">{{ errors.username }}</div>
        </div>
        <div class="row" id="input-width">
          <label>Password</label>
          <Field
            name="password"
            type="password"
            class="form-control"
            :class="{ 'is-invalid': errors.password }"
          />
          <div class="invalid-feedback">{{ errors.password }}</div>
        </div>
        <div class="form-group">
          <button
            class="btn btn-success"
            id="login_button"
            :disabled="isSubmitting"
          >
            Login
          </button>
          <router-link to="register" class="btn btn-link">Register</router-link>
        </div>
      </Form>
      <UserWorld />
    </div>
  </div>
</template>

<script>
export default {
  name: "UserLogin",
  data() {
    return {
      user: "",
      username: "",
      password: "",
      persona: "",
    };
  },
  methods: {
    async redirect_to_referrals(values) {
      console.log("GET USER by username ", values.username);
      this.url = "/api/users/" + values.username;
      const referralResults = await fetch(this.url, {
        method: "GET",
      });
      if (referralResults.ok) {
        const resultData = await referralResults.json();
        useAuthStore().login(resultData);
        localStorage.setItem("user", JSON.stringify(resultData));
        // DECIDE WHICH PERSONA PROFILE PAGE TO LOAD
        if (resultData.persona == "merchant") {
          console.log("PERSONA is merchant? : ", resultData.persona);
          router.push(this.returnUrl || "/home");
        }
        if (resultData.persona == "agent") {
          console.log("PERSONA is agent? : ", resultData.persona);
          router.push(this.returnUrl || "/referrals");
        }
        if (resultData.persona == "admin") {
          console.log("PERSONA is admin? : ", resultData.persona);
          router.push("/adminDashboard");
        }
        localStorage.setItem("user", JSON.stringify(resultData));
        this.user = resultData;
      } else {
        console.log(referralResults.statusText);
      }
    },
  },
};
</script>

<style scoped>
#form_bg {
  width: 75vw;
  background-color: rgba(255, 255, 255, 0.4);
  border-style: solid;
  border-width: 1px;
  border-color: whitesmoke;
}

/*  
.content {
    background-color:rgba(255,255,255,.8);
    border-radius:.25em;
    box-shadow:0 0 .25em rgba(0,0,0,.25);
    box-sizing:border-box;
    left:50%;
    padding:10vmin;
    position:fixed;
    text-align:center;
    top:50%;
    transform:translate(-50%, -50%);
} */
.my-header {
  display: flex;
  background-color: rgba(255, 255, 255, 0.1);
  padding-left: 3%;
}

/* Form {
  width: 100%;
  margin-left: 1%;
  margin-right: 1%;
  margin-top: 1%;
} */
#input-width {
  width: 99%;
}
</style>
