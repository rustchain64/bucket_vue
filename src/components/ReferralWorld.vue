<!-- eslint-disable prettier/prettier -->
<script setup>
import { router } from "@/router";
import Rewards from "@/components/Rewards";
import Videos from "@/components/Videos";
import WhyPie from "@/components/WhyPie";
import Give from "@/components/Give";
import Anyone from "@/components/Anyone";
import Footer from "@/components/Footer";
import { useAlertStore } from "@/stores/alert.store";
import { useReferralStore } from "@/stores/refer.store";
import { useAuthStore } from "@/stores";
import { Form, Field } from "vee-validate";
import * as Yup from "yup";
import People from "@/components/People";

const schema = Yup.object().shape({
  yourname: Yup.string().required("Your Name is required"),
  referralname: Yup.string().required("Referral Name is required"),
  agentname: Yup.string().required("Agent Name is required"),
  agentcode: Yup.string().required("Agent Code is required"),
  businessname: Yup.string().required("Business Name is required"),
  phone: Yup.string().required("Phone is required"),
  title: Yup.string().required("Notes is required"),
  description: Yup.string().required("Description is required"),
});
</script>

<template>
  <div v-if="referred == false" class="form_bg">
    <div class="my-header">
      <!-- <div v-if="userfirstname == null"> -->
      <button @click="scrollToTop()" class="pie-logo-btn">
        <img
          alt="Pie logo"
          class="pie-header_logo"
          src="@/assets/images/pie_logo.png"
        />
      </button>
      <!-- </div> -->
      <div v-if="userfirstname == null">
        <button @click="redirect_to_login" id="header-login-button">
          Login
        </button>
      </div>

      <div v-if="userfirstname != null" class="dash-row">
        <!-- <span
          >Hello <em>{{ userfirstname }}</em> make a referral?
        </span> -->
        <!-- <span>Make a referral? </span> -->
        <span id="line-space">&nbsp;</span>
        <button @click="merchantDashboard" id="dash-button">Dashboard</button>
        <div @click="useAuthStore().logout()">
          <img
            alt="Log Out"
            class="log-out"
            src="@/assets/images/logOut.png"
            height="30"
          />
        </div>
      </div>
      <!-- <div v-else class="dash-row-default"></div> -->
    </div>

    <template v-if="!(user?.loading || user?.error)">
      <div class="main-content-wrapper">
        <div class="left-side-content">
          <div class="left-side-header">
            <div class="left-side-header-text">Side Hustle</div>
            <div class="left-side-header-text">&nbsp;Without the</div>
            <div class="left-side-header-text">&nbsp;Hassle!</div>
          </div>
          <div class="left-side-text">Refer Owners</div>
          <div class="left-side-text">And</div>
          <div class="left-side-text">Make Cash Monthly!</div>

          <People />
        </div>

        <div class="right-side-content">
          <div class="right-side-header">Refer Someone</div>
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
                  aria-placeholder="Your Name"
                  placeholder="Your Name"
                  v-model="user.yourname"
                  class="form-control"
                  :class="{ 'is-invalid': errors.yourname }"
                />
                <div class="invalid-feedback" id="v-red">
                  {{ errors.yourname }}
                </div>
              </div>

              <div class="form-group" id="input-width">
                <label id="enhance-text">Referral's Name</label>
                <Field
                  name="referralname"
                  type="text"
                  aria-placeholder="Referral's Name"
                  placeholder="Referral's Name"
                  v-model="user.referralname"
                  value="referralname"
                  class="form-control"
                  :class="{ 'is-invalid': errors.referralname }"
                />
                <div class="invalid-feedback" id="v-red">
                  {{ errors.referralname }}
                </div>
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
                <div class="invalid-feedback" id="v-red">
                  {{ errors.agentname }}
                </div>
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
                <div class="invalid-feedback" id="v-red">
                  {{ errors.agentcode }}
                </div>
              </div>
            </div>

            <div class="my-row">
              <div class="form-group" id="input-width">
                <label id="enhance-text">Business Name</label>
                <Field
                  name="businessname"
                  type="text"
                  aria-placeholder="Business Name"
                  placeholder="Business Name"
                  v-model="user.businessname"
                  class="form-control"
                  :class="{ 'is-invalid': errors.businessname }"
                />
                <div class="invalid-feedback" id="v-red">
                  {{ errors.businessname }}
                </div>
              </div>
              <div class="form-group" id="input-width">
                <label id="enhance-text">Phone</label>
                <Field
                  name="phone"
                  type="text"
                  aria-placeholder="Phone"
                  placeholder="Phone"
                  v-model="user.phone"
                  class="form-control"
                  :class="{ 'is-invalid': errors.phone }"
                />
                <div class="invalid-feedback" id="v-red">
                  {{ errors.phone }}
                </div>
              </div>
            </div>

            <div class="my-row">
              <div class="form-group" id="input-width">
                <label id="enhance-text">Notes</label>
                <Field
                  name="title"
                  type="text"
                  aria-placeholder="Notes"
                  placeholder="Notes"
                  v-model="user.title"
                  class="form-control"
                  :class="{ 'is-invalid': errors.title }"
                />
                <div class="invalid-feedback" id="v-red">
                  {{ errors.title }}
                </div>
              </div>
              <div class="form-group" id="input-width">
                <label id="enhance-text">Description</label>
                <Field
                  name="description"
                  type="text"
                  aria-placeholder="Description"
                  placeholder="Description"
                  v-model="user.description"
                  class="form-control"
                  :class="{ 'is-invalid': errors.description }"
                />
                <div class="invalid-feedback" id="v-red">
                  {{ errors.description }}
                </div>
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
              <button @click="redirect_to_login" id="login-button">
                Login
              </button>
              <!-- <router-link to="/users" class="btn btn-link">Cancel</router-link> -->
            </div>
          </Form>
        </div>
      </div>
      <div class="how-much-row">
        <Rewards />
        <Videos />
        <WhyPie />
        <Give />
        <Anyone />
        <Footer />
      </div>
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
    count: 1,
  }),
  methods: {
    scrollToTop() {
      console.log("scroll to top");
      window.scrollTo(0, 0);
    },
    increment() {
      this.count++;
    },
    decrement() {
      if (this.count > 1) this.count--;
    },
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
    window.scrollTo(0, 0);
    console.log("is there a AUTHENTICATE user? ", useAuthStore().user);
    if (useAuthStore().user) {
      console.log("POST AUTH USER STATE IS: ", useAuthStore().user);
      this.userfirstname = useAuthStore().user.firstname;
    } else {
      console.log("else INIT AUTH USER STATE IS: ", useAuthStore().user);
    }
  },
  created: function () {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
@import "@/assets/main.css";

#v-red {
  color: red;
  font-weight: bolder;
  float: right;
}

#submit-style {
  color: white;
  text-align: center;
  background-color: limegreen;
  border-top-left-radius: 20pt;
  border-top-right-radius: 0pt;
  border-right: 2px solid rgb(1, 54, 25, 0.5);
  border-bottom-left-radius: 20pt;
  border-bottom-right-radius: 0pt;
  border-bottom: 3pt solid rgb(1, 54, 25, 0.5);
  background: linear-gradient(45deg, #1acd26 0%, #b5f4b9 100%);
  height: 40pt;
  width: 45%;
  padding-left: 5%;
  padding-right: 5%;
  margin-right: 0px;
}
/* width: 80%; */

#login-button {
  color: white;
  text-align: center;
  background-color: limegreen;
  border-top-right-radius: 20pt;
  border-top-left-radius: 0pt;
  border-left: 2px solid rgb(1, 54, 25, 0.5);
  border-bottom-right-radius: 20pt;
  border-bottom-left-radius: 0pt;
  border-left: 0pt solid rgb(1, 54, 25, 0.5);
  border-right: 2pt solid rgb(1, 54, 25, 0.5);
  border-bottom: 3pt solid rgb(1, 54, 25, 0.5);
  background: linear-gradient(-45deg, #1c49ee 0%, #a5b5ec 100%);
  height: 40pt;
  width: 45%;
  padding-left: 6%;
  padding-right: 6%;
  margin-left: 0px;
}
.center-btns {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 1%;
  margin-top: 1%;
}
.persona_label {
  margin-right: 3%;
  margin-left: 1%;
}

#form-group {
  padding-left: 10px;
  padding-right: 10px;
}
.pie-header_logo {
  margin-right: 2%;
  width: 120px;
}
.dash-row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: rgb(31, 30, 30);
  font-size: 2em;
  font-weight: 400;
  margin-top: 5px;
  margin-right: 15px;
}
.dash-row-default {
  color: rgb(31, 30, 30);
  font-size: 1.8em;
  font-weight: 400;
  margin-top: 1.5vh;
  margin-left: 1%;
  margin-right: 7%;
}

#dash-button {
  color: rgb(31, 30, 30);
  font-weight: 600;
  width: 120px;
  background: url(@/assets/images/dash_button.png) 3px 5px no-repeat;
  background-color: white;
  padding-top: 7px;
  padding-bottom: 5px;
  border-right: 1pt solid rgb(1, 54, 25, 0.8);
  border-bottom: 2pt solid rgb(1, 54, 25, 0.8);
}
.log-out {
  margin-top: 10px;
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
.pie-logo-btn {
  background-color: transparent;
  margin: 0px;
  padding: 0px;
}

@media only screen and (min-width: 1025px) {
  .my-header {
    position: fixed;
    z-index: 10;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 75vw;
    margin-top: -3px;
    margin-left: 0px;
    margin-bottom: 0px;
    padding-right: 0px;
    background-color: rgba(141, 194, 141, 0.9);
    border-right: 0pt solid rgb(1, 54, 25, 0.4);
    border-bottom: 1pt solid rgb(1, 54, 25, 0.4);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  #header-login-button {
    color: white;
    text-align: center;
    background-color: limegreen;
    border-top-right-radius: 20pt;
    border-top-left-radius: 20pt;
    border-left: 2px solid rgb(1, 54, 25, 0.5);
    border-bottom-right-radius: 20pt;
    border-bottom-left-radius: 20pt;
    border-left: 0pt solid rgb(1, 54, 25, 0.5);
    border-right: 2pt solid rgb(1, 54, 25, 0.5);
    border-bottom: 3pt solid rgb(1, 54, 25, 0.5);
    background: linear-gradient(-45deg, #1c49ee 0%, #22f74c 100%);
    height: 30pt;
    padding-left: 15px;
    padding-right: 15px;
    margin-left: 0px;
  }
  .form_bg {
    margin-top: 0px;
    margin-left: 0px;
    margin-right: 0px;
    padding: 0px;
    border-radius: 5pt;
    background-color: rgba(255, 255, 255, 0.7);
    border-style: solid;
    border-left: 1px;
    border-right: 1px;
    border-color: whitesmoke;
  }

  #fetch-btn {
    color: white;
    background-color: red;
    margin-left: 15%;
    height: 75%;
  }
  .main-content-wrapper {
    display: flex;
    flex-direction: row;
    margin-top: 60px;
    background-color: rgb(0, 128, 0, 0.1);
  }
  .left-side-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5pt;
    padding-left: 1%;
    padding-right: 1%;
    width: 62%;
  }
  .left-side-header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .left-side-header-text {
    color: rgb(3, 93, 30);
    font-size: 2.7em;
    font-weight: 600;
    font-family: Verdana, sans-serif;
    padding-left: 5px;
    padding-right: 5px;
    padding-bottom: 25px;
  }
  .left-side-text {
    color: rgb(3, 93, 30);
    font-family: Verdana, sans-serif;
    font-size: 1.5em;
    font-weight: 400;
    padding-bottom: 0px;
  }
  .right-side-content {
    width: 40%;
    height: 80%;
    margin-top: 10px;
    margin-right: 15px;
    padding-right: 7px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    border-radius: 10pt;
    border: 2px solid rgb(128, 128, 128, 0.3);
    background-color: rgb(0, 128, 0, 0.4);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  .right-side-header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: rgb(3, 93, 30);
    font-size: 1.8em;
    font-weight: 600;
    padding-top: 5px;
    padding-bottom: 5px;
  }
  .my-row {
    display: flex;
    flex-direction: column;
  }
  #input-width {
    margin-left: 2%;
    padding-left: 2%;
    padding-right: 2%;
  }
  #enhance-text {
    display: none;
    /* font-weight: bold;
    margin-right: 2%; */
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) {
  .my-header {
    position: fixed;
    z-index: 10;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100vw;
    margin-top: -3px;
    margin-left: 0px;
    margin-bottom: 0px;
    padding-right: 0px;
    background-color: rgba(141, 194, 141, 0.9);
    border-right: 0pt solid rgb(1, 54, 25, 0.4);
    border-bottom: 1pt solid rgb(1, 54, 25, 0.4);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  #header-login-button {
    color: white;
    text-align: center;
    background-color: limegreen;
    border-top-right-radius: 20pt;
    border-top-left-radius: 20pt;
    border-left: 2px solid rgb(1, 54, 25, 0.5);
    border-bottom-right-radius: 20pt;
    border-bottom-left-radius: 20pt;
    border-left: 0pt solid rgb(1, 54, 25, 0.5);
    border-right: 2pt solid rgb(1, 54, 25, 0.5);
    border-bottom: 3pt solid rgb(1, 54, 25, 0.5);
    background: linear-gradient(-45deg, #1c49ee 0%, #22f74c 100%);
    height: 30pt;
    padding-left: 15px;
    padding-right: 15px;
    margin-left: 0px;
    margin-right: 20px;
  }
  .form_bg {
    /* width: 75vw; */
    margin-top: 0px;
    margin-left: auto;
    margin-right: auto;
    padding: 0px;
    border-radius: 5pt;
    background-color: rgba(255, 255, 255, 0.7);
    border-style: solid;
    border-left: 1px;
    border-right: 1px;
    border-color: whitesmoke;
  }

  #fetch-btn {
    color: white;
    background-color: red;
    margin-left: 25%;
    height: 75%;
  }
  .main-content-wrapper {
    display: flex;
    flex-direction: row;
    margin-top: 60px;
    background-color: rgb(0, 128, 0, 0.1);
  }
  .left-side-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5pt;
    padding-left: 1%;
    padding-right: 1%;
    width: 62%;
  }
  .left-side-header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .left-side-header-text {
    color: rgb(3, 93, 30);
    font-size: 2.7em;
    font-weight: 600;
    font-family: Verdana, sans-serif;
    padding-left: 5px;
    padding-right: 5px;
    padding-bottom: 25px;
  }
  .left-side-text {
    color: rgb(3, 93, 30);
    font-family: Verdana, sans-serif;
    font-size: 1.5em;
    font-weight: 400;
    padding-bottom: 0px;
  }
  .right-side-content {
    width: 40%;
    height: 80%;
    margin-top: 10px;
    margin-right: 20px;
    padding-right: 7px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    border-radius: 10pt;
    border: 2px solid rgb(128, 128, 128, 0.3);
    background-color: rgb(0, 128, 0, 0.4);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  .right-side-header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: rgb(3, 93, 30);
    font-size: 1.8em;
    font-weight: 600;
    padding-top: 5px;
    padding-bottom: 5px;
  }
  .my-row {
    display: flex;
    flex-direction: column;
  }
  #input-width {
    margin-left: 2%;
    padding-left: 2%;
    padding-right: 2%;
  }
  #enhance-text {
    display: none;
    /* font-weight: bold;
    margin-right: 2%; */
  }
}

@media only screen and (min-width: 360px) and (max-width: 767px) and (-webkit-device-pixel-ratio: 3) {
  .my-header {
    position: fixed;
    z-index: 10;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-top: -1px;
    margin-left: -1px;
    margin-bottom: 0px;
    padding-right: 1px;
    background-color: rgba(141, 194, 141, 0.9);
    border-bottom: 1pt solid rgb(1, 54, 25, 0.5);
  }
  #header-login-button {
    color: white;
    text-align: center;
    background-color: limegreen;
    border-top-right-radius: 20pt;
    border-top-left-radius: 20pt;
    border-left: 2px solid rgb(1, 54, 25, 0.5);
    border-bottom-right-radius: 20pt;
    border-bottom-left-radius: 20pt;
    border-left: 0pt solid rgb(1, 54, 25, 0.5);
    border-right: 2pt solid rgb(1, 54, 25, 0.5);
    border-bottom: 3pt solid rgb(1, 54, 25, 0.5);
    background: linear-gradient(-60deg, #1c49ee 0%, #22f74c 100%);
    height: 30pt;
    padding-left: 12px;
    padding-right: 12px;
    margin-left: 0px;
  }
  .left-side-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(0, 128, 0, 0.1);
    border-radius: 5pt;
    padding-left: 1px;
    padding-right: 1px;
    margin-top: 45px;
    width: 100%;
  }
  .left-side-header {
    display: flex;
    flex-direction: row;
  }
  .left-side-header-text {
    color: rgb(250, 9, 158);
    font-size: 1em;
    font-weight: 200;
    font-family: Verdana, sans-serif;
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 0px;
    padding-bottom: 0px;
  }
  .left-side-text {
    color: rgb(3, 93, 30);
    font-size: smaller;
    font-weight: 400;
    padding-bottom: 0px;
  }
  .right-side-content {
    padding-left: 0px;
    padding-right: 0px;
    display: flex;
    flex-direction: column;
    border-radius: 5pt;
  }
  .right-side-content Form {
    border-radius: 0pt;
    background-color: rgb(0, 128, 0, 0.6);
    padding-top: 1px;
    padding-bottom: 1px;
  }
  .right-side-header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: rgb(3, 93, 30);
    background-color: rgb(0, 128, 0, 0.4);
    font-size: 1.8em;
    font-weight: 600;
    padding-top: 10px;
    padding-bottom: 5px;
  }
  .my-row {
    display: flex;
    flex-direction: column;
  }
  .form_bg {
    margin-top: 0px;
    margin-left: 0px;
    margin-right: 0px;
    padding-top: 0px;
    padding-left: 0px;
    padding-right: 0px;
    background-color: rgba(255, 255, 255, 0.7);
    border-style: solid;
    border-width: 1px;
    border-color: whitesmoke;
    height: 100vh;
  }

  #fetch-btn {
    color: white;
    background-color: red;
    height: 30%;
    width: 90%;
  }

  #input-width {
    padding-left: 2%;
    padding-right: 2%;
  }
  #enhance-text {
    display: none;
  }
  .how-much-row {
    display: flex;
    flex-direction: column;
    color: white;
    font-size: 1.2em;
    font-weight: 600;
    background-color: orangered;
    align-items: center;
  }
  .how-much-text {
    padding: 3%;
  }
  #incr-btn {
    border-radius: 3pt;
    background-color: #29f537;
    height: 40%;
  }
  #decr-btn {
    border-radius: 3pt;
    background-color: #3b64f8;
    height: 40%;
  }

  .count {
    align-items: center;
  }
  .arrow {
    border: solid rgb(250, 246, 246);
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    margin-left: 6px;
    margin-right: 6px;
  }

  .up {
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
  }

  .down {
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }
}

@media only screen and (min-width: 360px) and (max-width: 767px) and (-webkit-device-pixel-ratio: 2) {
  .my-header {
    position: fixed;
    z-index: 10;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-top: -1px;
    margin-left: -1px;
    margin-bottom: 0px;
    padding-right: 1px;
    background-color: rgba(141, 194, 141, 0.9);
    border-bottom: 1pt solid rgb(1, 54, 25, 0.5);
  }

  #header-login-button {
    color: white;
    text-align: center;
    background-color: limegreen;
    border-top-right-radius: 20pt;
    border-top-left-radius: 20pt;
    border-left: 2px solid rgb(1, 54, 25, 0.5);
    border-bottom-right-radius: 20pt;
    border-bottom-left-radius: 20pt;
    border-left: 0pt solid rgb(1, 54, 25, 0.5);
    border-right: 2pt solid rgb(1, 54, 25, 0.5);
    border-bottom: 3pt solid rgb(1, 54, 25, 0.5);
    background: linear-gradient(-45deg, #1c49ee 0%, #22f74c 100%);
    height: 30pt;
    padding-left: 12px;
    padding-right: 12px;
    margin-left: 0px;
  }
  .left-side-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(0, 128, 0, 0.1);
    border-radius: 5pt;
    padding-left: 1px;
    padding-right: 1px;
    margin-top: 45px;
    width: 100%;
  }
  .left-side-header {
    display: flex;
    flex-direction: row;
  }
  .left-side-header-text {
    color: rgb(249, 115, 5);
    font-size: 1em;
    font-weight: 200;
    font-family: Verdana, sans-serif;
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 0px;
    padding-bottom: 0px;
  }
  .left-side-text {
    color: rgb(3, 93, 30);
    font-size: 0.7em;
    font-weight: 200;
    padding-bottom: 0px;
  }
  .right-side-content {
    padding-left: 0px;
    padding-right: 0px;
    display: flex;
    flex-direction: column;
    border-radius: 5pt;
  }
  .right-side-content Form {
    border-radius: 0pt;
    background-color: rgb(0, 128, 0, 0.6);
    padding-top: 1px;
    padding-bottom: 1px;
  }
  .right-side-header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: rgb(3, 93, 30);
    background-color: rgb(0, 128, 0, 0.4);
    font-size: 1.8em;
    font-weight: 600;
    padding-top: 10px;
    padding-bottom: 5px;
  }
  .my-row {
    display: flex;
    flex-direction: column;
  }
  .form_bg {
    margin-top: 0px;
    margin-left: 0px;
    margin-right: 0px;
    padding-top: 0px;
    padding-left: 0px;
    padding-right: 0px;
    background-color: rgba(255, 255, 255, 0.7);
    border-style: solid;
    border-width: 1px;
    border-color: whitesmoke;
    height: 100vh;
  }

  #fetch-btn {
    color: white;
    background-color: red;
    height: 30%;
    width: 90%;
  }

  #input-width {
    padding-left: 2%;
    padding-right: 2%;
  }
  #enhance-text {
    display: none;
  }
  .how-much-row {
    display: flex;
    flex-direction: column;
    color: white;
    font-size: 1.2em;
    font-weight: 600;
    background-color: orangered;
    align-items: center;
  }
  .how-much-text {
    padding: 3%;
  }
  #incr-btn {
    border-radius: 3pt;
    background-color: #29f537;
    height: 40%;
  }
  #decr-btn {
    border-radius: 3pt;
    background-color: #3b64f8;
    height: 40%;
  }

  .count {
    align-items: center;
  }
  .arrow {
    border: solid rgb(250, 246, 246);
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    margin-left: 6px;
    margin-right: 6px;
  }

  .up {
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
  }

  .down {
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }
}

@media only screen and (min-width: 360px) and (max-width: 767px) {
  .my-header {
    position: fixed;
    z-index: 10;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-top: -1px;
    margin-left: -1px;
    margin-bottom: 0px;
    padding-right: 1px;
    background-color: rgba(141, 194, 141, 0.9);
    border-bottom: 1pt solid rgb(1, 54, 25, 0.5);
  }

  #header-login-button {
    color: white;
    text-align: center;
    background-color: limegreen;
    border-top-right-radius: 20pt;
    border-top-left-radius: 20pt;
    border-left: 2px solid rgb(1, 54, 25, 0.5);
    border-bottom-right-radius: 20pt;
    border-bottom-left-radius: 20pt;
    border-left: 0pt solid rgb(1, 54, 25, 0.5);
    border-right: 2pt solid rgb(1, 54, 25, 0.5);
    border-bottom: 3pt solid rgb(1, 54, 25, 0.5);
    background: linear-gradient(-45deg, #1c49ee 0%, #22f74c 100%);
    height: 30pt;
    padding-left: 12px;
    padding-right: 12px;
    margin-left: 0px;
  }

  .left-side-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(0, 128, 0, 0.1);
    border-radius: 5pt;
    padding-left: 1%;
    padding-right: 1%;
    margin-top: 50px;
    width: 100%;
  }
  .left-side-header {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .left-side-header-text {
    color: rgb(3, 93, 30);
    font-size: 1.6em;
    font-weight: 800;
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 20px;
    padding-bottom: 3px;
  }
  .left-side-text {
    color: rgb(3, 93, 30);
    font-size: 1.5em;
    font-weight: 400;
    padding-bottom: 0px;
  }
  .right-side-content {
    padding-left: 0px;
    padding-right: 0px;
    display: flex;
    flex-direction: column;
    border-radius: 5pt;
  }
  .right-side-content Form {
    border-radius: 0pt;
    background-color: rgb(0, 128, 0, 0.6);
    padding-top: 1px;
    padding-bottom: 1px;
  }
  .right-side-header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: rgb(3, 93, 30);
    background-color: rgb(0, 128, 0, 0.4);
    font-size: 1.8em;
    font-weight: 600;
    padding-top: 10px;
    padding-bottom: 5px;
  }
  .my-row {
    display: flex;
    flex-direction: column;
  }
  .form_bg {
    margin-top: 0px;
    margin-left: 0px;
    margin-right: 0px;
    padding-top: 0px;
    padding-left: 0px;
    padding-right: 0px;
    background-color: rgba(255, 255, 255, 0.7);
    border-style: solid;
    border-width: 1px;
    border-color: whitesmoke;
    height: 100vh;
  }

  /* .people svg circle {
    padding: 45;
  } */

  #fetch-btn {
    color: white;
    background-color: red;
    height: 30%;
    width: 90%;
  }

  #input-width {
    padding-left: 2%;
    padding-right: 2%;
  }
  #enhance-text {
    display: none;
  }
  .how-much-row {
    display: flex;
    flex-direction: column;
    color: white;
    font-size: 1.2em;
    font-weight: 600;
    background-color: orangered;
    align-items: center;
  }
  .how-much-text {
    padding: 3%;
  }
  #incr-btn {
    border-radius: 3pt;
    background-color: #29f537;
    height: 40%;
  }
  #decr-btn {
    border-radius: 3pt;
    background-color: #3b64f8;
    height: 40%;
  }

  .count {
    align-items: center;
  }
  .arrow {
    border: solid rgb(250, 246, 246);
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    margin-left: 6px;
    margin-right: 6px;
  }

  .up {
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
  }

  .down {
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }
}
</style>
