<!-- eslint-disable prettier/prettier -->
<script setup>
import { router } from "@/router";
import { useAlertStore } from "@/stores/alert.store";
import { useReferralStore } from "@/stores/refer.store";
import { useAuthStore } from "@/stores";
import { Form, Field } from "vee-validate";
import * as Yup from "yup";

const schema = Yup.object().shape({
  yourname: Yup.string().required("Persona is required"),
  referralname: Yup.string().required("Agent Code is required"),
  agentname: Yup.string().required("First Name is required"),
  agentcode: Yup.string().required("Last Name is required"),
  businessname: Yup.string().required("Username is required"),
  phone: Yup.string().required("Username is required"),
  title: Yup.string().required("Username is required"),
  description: Yup.string().required("Username is required"),
});
</script>

<template>
  <div v-if="referred == false" id="form_bg">
    <div class="my-header">
      <div v-if="userfirstname == null">
        <img
          alt="Pie logo"
          class="pie-header_logo"
          src="@/assets/images/pie_logo.png"
          height="60"
        />
      </div>

      <div v-if="userfirstname != null" class="dash-row">
        <span
          >Hello <em>{{ userfirstname }}</em> make a referral?
        </span>
        <span id="line-space">&nbsp;</span>
        <button @click="merchantDashboard" id="dash-button">Dashboard</button>
      </div>
      <div v-else class="dash-row-default">
        <div>Refer Someone!</div>
      </div>
    </div>

    <template v-if="!(user?.loading || user?.error)">
      <Form
        @submit="updateUser"
        :validation-schema="schema"
        v-slot="{ errors, isSubmitting }"
      >
        <div class="my-row">
          <div class="form-group" id="input-width">
            <label id="enhance-text">Your Name</label>
            <Field
              name="yourname"
              type="text"
              v-model="user.yourname"
              class="form-control"
              :class="{ 'is-invalid': errors.yourname }"
            />
            <div class="invalid-feedback">{{ errors.yourname }}</div>
          </div>

          <div class="form-group" id="input-width">
            <label id="enhance-text">Referral's Name</label>
            <Field
              name="referralname"
              type="text"
              v-model="user.referralname"
              value="referralname"
              class="form-control"
              :class="{ 'is-invalid': errors.referralname }"
            />
            <div class="invalid-feedback">{{ errors.referralname }}</div>
          </div>
        </div>

        <div class="my-row">
          <div class="form-group" id="input-width">
            <label id="enhance-text">Agent's Name</label>
            <Field
              name="agentname"
              type="text"
              v-model="user.agentname"
              class="form-control"
              :class="{ 'is-invalid': errors.agentname }"
            />
            <div class="invalid-feedback">{{ errors.agentname }}</div>
          </div>
          <div class="form-group" id="input-width">
            <label id="enhance-text">Agent's Code</label>
            <Field
              name="agentcode"
              type="text"
              v-model="user.agentcode"
              class="form-control"
              :class="{ 'is-invalid': errors.agentcode }"
            />
            <div class="invalid-feedback">{{ errors.agentcode }}</div>
          </div>
        </div>

        <div class="my-row">
          <div class="form-group" id="input-width">
            <label id="enhance-text">Business Name</label>
            <Field
              name="businessname"
              type="text"
              v-model="user.businessname"
              class="form-control"
              :class="{ 'is-invalid': errors.businessname }"
            />
            <div class="invalid-feedback">{{ errors.businessname }}</div>
          </div>
          <div class="form-group" id="input-width">
            <label id="enhance-text">Phone</label>
            <Field
              name="phone"
              type="text"
              v-model="user.phone"
              class="form-control"
              :class="{ 'is-invalid': errors.phone }"
            />
            <div class="invalid-feedback">{{ errors.phone }}</div>
          </div>
        </div>

        <div class="my-row">
          <div class="form-group" id="input-width">
            <label id="enhance-text">Notes</label>
            <Field
              name="title"
              type="text"
              v-model="user.title"
              class="form-control"
              :class="{ 'is-invalid': errors.title }"
            />
            <div class="invalid-feedback">{{ errors.title }}</div>
          </div>
          <div class="form-group" id="input-width">
            <label id="enhance-text">Description</label>
            <Field
              name="description"
              type="text"
              v-model="user.description"
              class="form-control"
              :class="{ 'is-invalid': errors.description }"
            />
            <div class="invalid-feedback">{{ errors.description }}</div>
          </div>
        </div>

        <div class="center-btns">
          <button
            class="btn btn-primary"
            :disabled="isSubmitting"
            id="submit-style"
          >
            <span
              v-show="isSubmitting"
              class="spinner-border spinner-border-sm mr-1"
            ></span>
            Refer Now
          </button>
          <div v-if="userfirstname == null" id="vert-align">
            <span class="or"><em>OR</em></span>
            <button @click="redirect_to_login" id="login-button">Login</button>
          </div>
          <!-- <router-link to="/users" class="btn btn-link">Cancel</router-link> -->
        </div>

        <!-- <div class="center-btns">
          <div v-if="userfirstname == null" id="vert-align">
            <span class="or"><em>OR</em></span>
            <button @click="redirect_to_login" id="login-button">Login</button>
          </div>
        </div> -->
      </Form>
    </template>
    <template v-if="user?.loading">
      <div class="text-center m-5">
        <span class="spinner-border spinner-border-lg align-center"></span>
      </div>
    </template>
    <template v-if="user?.error">
      <div class="text-center m-5">
        <div class="text-danger">Error loading user: {{ user.error }}</div>
      </div>
    </template>
  </div>

  <div v-if="referred == true" class="thanks">
    <!-- <div class="thanks"> -->
    <img
      alt="Pie Logo"
      class="thanks_logo"
      src="@/assets/images/pie_logo.png"
    />

    <div v-if="userfirstname != null">
      <h3>Success!! {{ userfirstname }} your merchant</h3>
      <p>has been created!</p>
    </div>
    <div v-else>
      <h3>Success!! {{ userfirstname }} your merchant</h3>
      <p>has been created!</p>
    </div>

    <!-- <h4>Thanks {{ user.firstName }}</h4> -->
    <!-- <h4>Agent {{ user.agentName }} will contact you shortly!</h4> -->
    <button class="btn btn-success" @click="newReferral">Add Another</button>
  </div>
</template>

<script>
export default {
  name: "my-add-user",
  data: () => ({
    length: 0,
    referCode: "",
    agentcode: "",
    user: {
      id: -1,
      yourname: "",
      referralname: "",
      agentname: "James Bond",
      agentcode: "AGU0W5",
      businessname: "",
      phone: "",
      title: "",
      description: "",
    },
    referred: false,
    userfirstname: null,
  }),
  methods: {
    redirect_to_login() {
      console.log("COMMIT FORM VALUES TO STORE v-model : ", this.data);
      //force a login in order to Submit Referral
      router.push("/account/login");
      // set loggedIn state
      // let message;
      // message = "User added";
      useAlertStore().success;
      useReferralStore().success(true);
      // commit form data
      useReferralStore().register(this.data);
    },
    async updateUser() {
      this.referred = true;
      console.log("user ID ", this.user.id);
      if (this.user.id == -1) {
        console.log("CREATE user by POST ", this.user.id);
        this.method = "POST";
        this.url = "/api/referrals";
        await fetch(this.url, {
          method: this.method,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.user),
        })
          .then(this._referralSuccess)
          .catch(this._referralError);
        console.log("USER.DATA POST", this.user);
      } else {
        console.log("UPDATE USER by PUT");
        this.method = "PUT";
        this.url = "/api/referrals/" + this.user.id;
        await fetch(this.url, {
          method: this.method,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.user),
        })
          .then(this._referralSuccess)
          .catch(this._referralError);
      }
    },
    _referralSuccess(response) {
      console.log("response referrals data: ", response);
      this._clearReferralForm();
      setTimeout(this._fun, 3000);
    },
    _fun() {
      this.referred = false;
      // this._refreshReferralData();
    },
    _referralError(response) {
      console.log("COULDN'T fetch referrals data _error,", response);
      // alert(response.data ? JSON.stringify(response.data) : response.statusText);
    },
    newReferral() {
      this.referred = false;
      this._clearReferralForm();
    },
    _clearReferralForm() {
      this.user.yourname = "";
      this.user.referralname = "";
      this.user.agentname = "James Bond";
      this.user.refagentcode = "AGU0W5";
      this.user.businessname = "";
      this.user.phone = "";
      this.user.title = "";
      this.user.description = "";
      this.user.id = -1;
    },
    merchantDashboard() {
      console.log("dashboard Merchant");
      router.push("/merchantDashboard");
    },
  },
  mounted: function () {
    //this._refreshReferralData();

    console.log("is there a AUTHENTICATE user? ", useAuthStore().user);
    if (useAuthStore().user) {
      console.log("POST AUTH USER STATE IS: ", useAuthStore().user);
      this.userfirstname = useAuthStore().user.firstname;
    } else {
      console.log("else INIT AUTH USER STATE IS: ", useAuthStore().user);
    }
  },
};
</script>

<style scoped>
@import "@/assets/main.css";

#submit-style {
  color: white;
  background-color: limegreen;
  border-radius: 20pt;
  border-right: 1pt solid rgb(1, 54, 25, 0.5);
  border-bottom: 2pt solid rgb(1, 54, 25, 0.5);
  height: 40px;
  padding-left: 5%;
  padding-right: 5%;
}

#vert-align {
  vertical-align: baseline;
  padding-top: 7px;
}
.or {
  font-size: medium;
  font-weight: bolder;
  margin-top: 16px;
}

#login-button {
  color: white;
  background-color: limegreen;
  border-radius: 5pt;
  border-right: 1pt solid rgb(1, 54, 25, 0.5);
  border-bottom: 2pt solid rgb(1, 54, 25, 0.5);
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 8px;
  padding-right: 8px;
  height: 25px;
}

#enhance-text {
  font-weight: bold;
  margin-right: 2%;
}
.persona_label {
  margin-right: 3%;
  margin-left: 1%;
}

.my-row {
  display: flex;
  flex-direction: row;
  width: 100%;
}

#form-group {
  width: 80%;
}

.my-form-control {
  width: 70%;
}

.center-btns {
  display: flex;
  flex-direction: row;
  justify-content: center;
  right: 15px;
  margin-bottom: 2%;
  margin-top: 2%;
}
.pie-header_logo {
  margin-right: 2%;
}
.dash-row {
  color: rgb(31, 30, 30);
  font-size: 2em;
  font-weight: 400;
  margin-top: 1vh;
}
.dash-row-default {
  color: rgb(31, 30, 30);
  font-size: 2em;
  font-weight: 400;
  margin-top: 1vh;
  margin-left: 1%;
}

#dash-button {
  color: rgb(31, 30, 30);
  font-weight: 600;
  width: 120px;
  background: url(@/assets/images/dash_button.png) 3px 5px no-repeat;
  background-color: white;
}

.thanks {
  margin-left: -10%;
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 105vw;
  text-align: center;
  background-color: rgb(222, 221, 221);
  z-index: 10;
}

.thanks_logo {
  width: 50vw;
  margin: 0 auto;
}
@media only screen and (min-width: 1025px) {
  .my-header {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 3vh;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.4);
    border-bottom: 1pt solid rgb(1, 54, 25, 0.4);
  }
  .form_bg {
    width: 75vw;
    margin-top: 10vh;
    margin-right: auto;
    padding: 1%;
    border-radius: 5pt;
    background-color: rgba(255, 255, 255, 0.4);
    border-style: solid;
    border-width: 1px;
    border-color: whitesmoke;
  }

  #fetch-btn {
    color: white;
    background-color: red;
    margin-left: 25%;
    height: 75%;
  }

  #input-width {
    margin-left: 2%;
    width: 47%;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) {
  .my-header {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 3vh;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.4);
    border-bottom: 1pt solid rgb(1, 54, 25, 0.5);
  }
  .form_bg {
    width: 80vw;
    margin-top: 8vh;
    margin-left: auto;
    margin-right: auto;
    padding: 1%;
    border-radius: 5pt;
    background-color: rgba(255, 255, 255, 0.4);
    border-style: solid;
    border-width: 1px;
    border-color: whitesmoke;
  }

  #fetch-btn {
    color: white;
    background-color: red;
    margin-left: 25%;
    height: 75%;
  }

  #input-width {
    margin-left: 2%;
    width: 46%;
  }
}

@media only screen and (min-width: 375px) and (max-width: 767px) and (-webkit-device-pixel-ratio: 2) {
  .my-header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 2vh;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.4);
    border-bottom: 1pt solid rgb(1, 54, 25, 0.5);
  }
  .my-row {
    display: flex;
    flex-direction: column;
  }
  .form_bg {
    margin-top: 0px;
    margin-left: 4%;
    margin-right: 0px;
    padding-top: 0px;
    padding-left: 0px;
    padding-right: 0px;
    background-color: rgba(255, 255, 255, 0.4);
    border-style: solid;
    border-width: 1px;
    border-color: whitesmoke;
  }

  #fetch-btn {
    color: white;
    background-color: red;
    height: 30%;
    width: 90%;
  }

  #input-width {
    margin-left: 2%;
    width: 92%;
  }
}

@media only screen and (min-width: 375px) and (max-width: 767px) {
  .my-header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 2vh;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.4);
    border-bottom: 1pt solid rgb(1, 54, 25, 0.5);
  }
  .my-row {
    display: flex;
    flex-direction: column;
  }
  .form_bg {
    margin-top: 0px;
    margin-left: 4%;
    margin-right: 0px;
    padding-top: 0px;
    padding-left: 0px;
    padding-right: 0px;
    background-color: rgba(255, 255, 255, 0.4);
    border-style: solid;
    border-width: 1px;
    border-color: whitesmoke;
  }

  #fetch-btn {
    color: white;
    background-color: red;
    height: 30%;
    width: 90%;
  }

  #input-width {
    margin-left: 2%;
    width: 92%;
  }
}
</style>
