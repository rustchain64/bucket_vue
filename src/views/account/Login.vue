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
      <div class="login-header">
        <img
          alt="Pile Logo"
          class="pie-logo"
          src="@/assets/images/pie_logo.png"
          width="300"
        />
        <!-- <div class="login-text">Login</div> -->
      </div>

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
        <div>
          <router-link to="register" class="btn btn-link" id="forgot-pwd"
            >Forgot Password</router-link
          >
        </div>
        <div class="center-btns">
          <button
            class="btn btn-success"
            id="login-button"
            :disabled="isSubmitting"
          >
            Login
          </button>
        </div>
      </Form>
      <div v-if="test == true">
        <UserWorld />
      </div>
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
      test: false,
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
          router.push(this.returnUrl || "/merchant");
        }
        if (resultData.persona == "agent") {
          console.log("PERSONA is agent? : ", resultData.persona);
          router.push(this.returnUrl || "/agent");
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
label {
  color: rgb(31, 30, 30);
  font-weight: 700;
}
main {
  width: 100vw;
  background-color: white;
}
#form_bg {
  width: 75vw;
  background-color: rgba(255, 255, 255, 1);
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
.login-header {
  display: flex;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.4);
  padding-left: 3%;
  padding-top: 1%;
  padding-bottom: 1%;
}

.pie-logo {
  margin-right: 5%;
}
.login-text {
  color: rgb(31, 30, 30);
  font-size: 3em;
  font-weight: 600;
  padding-top: 3%;
  padding-right: 6%;
}
.center-btns {
  display: flex;
  flex-direction: row;
  justify-content: center;
  right: 1px;
  margin-bottom: 2%;
  margin-top: 2%;
}

#forgot-pwd {
  display: flex;
  justify-content: right;
  width: 93%;
  color: rgb(31, 30, 30);
  background-color: transparent;
}

#login-button {
  width: 85%;
  height: 40pt;
  margin-bottom: 10%;
  border-radius: 20pt;
  border: 1pt solid #f48ace;
  text-align: center;
  background: linear-gradient(45deg, #5fbceb 0%, #f48ace 100%);
}

/* Form {
  width: 100%;
  margin-left: 1%;
  margin-right: 1%;
  margin-top: 1%;
} */
#input-width {
  margin-left: 5%;
  width: 90%;
}
</style>
