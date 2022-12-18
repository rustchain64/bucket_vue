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
  name: "my-UserLogin",
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
      console.log("GET USER by password ", values.password);
      this.url = "/api/users/" + values.username + "," + values.password;
      console.log(">>> GET USER url ", this.url);
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
Field {
  border-left: none;
  border-right: none;
  border-top: 1px solid rgb(1, 54, 25, 0.5);
  border-bottom: 2px solid rgb(1, 54, 25, 0.5);
}

label {
  color: rgb(31, 30, 30);
  font-weight: 700;
}

.login-header {
  display: flex;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.4);
  padding-top: 0%;
}
.pie-logo {
  margin-right: 5%;
}

button {
  color: white;
  font-size: 2em;
  font-weight: 600;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.login-text {
  color: rgb(31, 30, 30);
  font-size: 3em;
  font-weight: 400;
  padding-top: 2%;
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
  margin-right: 10%;
  color: rgb(31, 30, 30);
  background-color: transparent;
}

#login-button {
  width: 80%;
  height: 40pt;
  margin-bottom: 10%;
  border-radius: 20pt;
  border-bottom: 3pt solid #2a55f1;
  border-right: 1pt solid #2a55f1;
  text-align: center;
  background: linear-gradient(60deg, #5f7deb 0%, #45ed50 100%);
}

#input-width {
  margin-left: 5%;
  width: 90%;
}

@media only screen and (min-width: 1025px) {
  .main {
    width: 75vw;
    height: 75vh;
    margin-left: 0px;
    margin-top: 0px;
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 5pt;
    border-style: solid;
    border-width: 2px;
    border-color: whitesmoke;
  }

  #form_bg {
    width: 100%;
    height: 100%;
  }
}
@media only screen and (min-width: 768px) and (max-width: 1024px) {
  .main {
    width: 100vw;
    height: 100vh;
    margin-left: 0px;
    margin-top: 0px;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 4pt;
    border-style: solid;
    border-width: 1px;
    border-color: whitesmoke;
  }

  #form_bg {
    width: 100;
    height: 100%;
  }
}

@media only screen and (min-width: 375px) and (max-width: 767px) and (-webkit-device-pixel-ratio: 2) {
  .main {
    width: 100vw;
    height: 100vh;
    margin-left: 0px;
    margin-top: 0px;
  }

  #form_bg {
    width: 100%;
    height: 100%;
    padding: 0px;
    background-color: rgba(255, 255, 255, 0.8);
  }
}

@media only screen and (min-width: 375px) and (max-width: 767px) {
  .main {
    width: 100vw;
    height: 100vh;
    margin-left: 0px;
    margin-top: 0px;
  }

  #form_bg {
    width: 100%;
    height: 100%;
    padding: 0px;
    background-color: rgba(255, 255, 255, 0.9);
  }
}
</style>
