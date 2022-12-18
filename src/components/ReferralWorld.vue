<template>
  <div v-if="referred == false" id="form_bg">
    <!-- <div id="form_bg"> -->
    <div class="my-header">
      <div v-if="this.userfirstname == null">
        <img
          alt="Pie logo"
          class="pie-header_logo"
          src="@/assets/images/pie_logo.png"
          height="60"
        />
      </div>

      <div v-if="this.userfirstname != null" class="dash-row">
        <span
          >Hello <em>{{ this.userfirstname }}</em> make a referral?
        </span>
        <span id="line-space">&nbsp;</span>
        <button @click="merchantDashboard" id="dash-button">Dashboard</button>
      </div>
      <div v-else class="dash-row-default">
        <div>Refer Someone!</div>
      </div>
    </div>

    <form @submit.prevent="updateReferrals">
      <div class="my-row">
        <div class="input-box">
          <input
            type="text"
            v-model="referForm.yourname"
            placeholder="Your Name"
            ref="yourname"
          />
        </div>
        <div class="input-box">
          <input
            type="text"
            v-model="referForm.referralname"
            placeholder="Your Referral's Name"
            ref="referralname"
          />
        </div>
      </div>

      <div class="my-row">
        <div class="input-box">
          <input
            type="text"
            v-model="referForm.agentname"
            placeholder="Your Agent's Name"
            ref="agentname"
          />
        </div>
        <div class="input-box">
          <input
            type="text"
            v-model="referForm.refagentcode"
            placeholder="Agent's Code"
            ref="refagentcode"
          />
        </div>
      </div>

      <div class="my-row">
        <div class="input-box">
          <input
            type="text"
            v-model="referForm.businessname"
            placeholder="Referral's Business Name"
            ref="businessname"
          />
        </div>
        <div class="input-box">
          <input
            type="text"
            v-model="referForm.phone"
            placeholder="Referral's Phone"
            ref="phone"
          />
        </div>
      </div>

      <div class="my-row">
        <div class="input-box">
          <input
            type="text"
            v-model="referForm.title"
            placeholder="Notes"
            ref="title"
          />
        </div>
        <div class="input-box">
          <input
            type="text"
            v-model="referForm.description"
            placeholder="Description"
            ref="description"
          />
        </div>
      </div>

      <div class="center-btns">
        <input type="submit" value="Refer Now" id="submit-style" />
        <div v-if="this.userfirstname == null" id="vert-align">
          <span class="or"><em>OR</em></span>
          <button @click="redirect_to_login" id="login-button">Login</button>
        </div>

        <!-- <div v-if="referralStore.loggedIn == null"> -->
      </div>
    </form>

    <div v-if="this.test == 'true'">
      <div class="row"><h3>Referrals List</h3></div>
      <!-- <div>{{ referrals }}</div> -->

      <div class="row">
        <div class="col-1" id="list-header">Your Name</div>
        <div class="col-1" id="list-header">Referral Name</div>
        <div class="col-1" id="list-header">Agent Name</div>
        <div class="col-1" id="list-header">Agent Code</div>
        <div class="col-1" id="list-header">Business Name</div>
        <div class="col-1" id="list-header">Phone</div>
        <div class="col-2" id="list-header">Notes</div>
        <div class="col-2" id="list-header">Description</div>
      </div>

      <div
        class="row"
        v-for="referral in referrals"
        v-bind:key="referral.yourname"
      >
        <div class="col-1">{{ referral.yourname }}</div>
        <div class="col-1">{{ referral.referralname }}</div>
        <div class="col-1">{{ referral.agentname }}</div>
        <div class="col-1">{{ referral.agentcode }}</div>
        <div class="col-1">{{ referral.businessname }}</div>
        <div class="col-1">{{ referral.phone }}</div>
        <div class="col-2">{{ referral.title }}</div>
        <div class="col-2">{{ referral.description }}</div>

        <div class="col-1">
          <a @click="editReferral(referral)" class="btn" id="line_btn_ed"
            >[E]</a
          >
          <a @click="removeReferral(referral)" class="btn" id="line_btn_x"
            >[X]</a
          >
        </div>
      </div>
    </div>
  </div>
  <div v-if="referred == true" class="thanks">
    <!-- <div class="thanks"> -->
    <img
      alt="Pie Logo"
      class="thanks_logo"
      src="@/assets/images/pie_logo.png"
    />

    <div v-if="this.userfirstname != null">
      <h3>Success!! {{ this.userfirstname }} your merchant</h3>
      <p>has been created!</p>
    </div>
    <div v-else>
      <h3>Success!! {{ this.userfirstname }} your merchant</h3>
      <p>has been created!</p>
    </div>

    <!-- <h4>Thanks {{ user.firstName }}</h4> -->
    <!-- <h4>Agent {{ user.agentName }} will contact you shortly!</h4> -->
    <button class="btn btn-success" @click="newReferral">Add Another</button>
  </div>
</template>

<script>
import { router } from "@/router";
import { useAlertStore } from "@/stores/alert.store";
import { useReferralStore } from "@/stores/refer.store";
import { useAuthStore } from "@/stores";
export default {
  name: "my_ReferralWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      form: {
        id: -1,
        name: "",
        stock: 0,
      },
      referForm: {
        id: -1,
        yourname: "",
        referralname: "",
        agentname: "",
        refagentcode: "",
        businessname: "",
        phone: "",
        email: "",
        ss: "",
        bankname: "",
        routingnumber: "",
        accountnumber: "",
        title: "",
        description: "",
        published: "",
      },
      referred: false,
      referrals: [],
      fruits: [],
      method: "",
      url: "",
      data: {},
      fruit: "",
      referral: "",
      test: "false",
      userfirstname: null,
    };
  },
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
    // ################## REFERRAL SECTION ############################# \\
    async _refreshReferralData() {
      // this.referred = false;
      console.log("GET ALL REFERRAL DATA get referrals ");
      const referralResults = await fetch("/api/referrals", {
        method: "GET",
      });
      if (referralResults.ok) {
        const resultData = await referralResults.json();
        this.referrals = resultData;
      } else {
        console.log(referralResults.statusText);
      }
    },
    editReferral(referral) {
      console.log("edit referral ", referral.id);
      this.referForm.id = referral.id;
      this.referForm.yourname = referral.yourname;
      this.referForm.referralname = referral.referralname;
      this.referForm.agentname = referral.agentname;
      this.referForm.refagentcode = referral.agentcode;
      this.referForm.businessname = referral.businessname;
      this.referForm.phone = referral.phone;
      this.referForm.title = referral.title;
      this.referForm.description = referral.description;
      console.log("EDIT REFERRAL this.userForm.id >>> ", this.referForm.id);
    },
    async removeReferral(referral) {
      console.log("DELETE REFERRAL ", referral);
      await fetch(`/api/referrals/${referral.id}`, {
        method: "DELETE",
      })
        .then(this._referralSuccess)
        .catch(this._referralError);
    },
    async updateReferrals() {
      this.referred = true;
      console.log("<< SAVE A REFERRAL referred is : true? >>", this.referred);
      this.referForm.yourname = this.$refs.yourname.value;
      this.referForm.referralname = this.$refs.referralname.value;
      this.referForm.agentname = this.$refs.agentname.value;
      this.referForm.refagentcode = this.$refs.refagentcode.value;
      this.referForm.businessname = this.$refs.businessname.value;
      this.referForm.phone = this.$refs.phone.value;
      this.referForm.title = this.$refs.title.value;
      this.referForm.description = this.$refs.description.value;
      console.log("REFERRAL ID ", this.referForm.id);
      if (this.referForm.id == -1) {
        console.log(
          "updateReferrals CREATE REFERRAL by POST ",
          this.referForm.id
        );
        this.method = "POST";
        this.url = "/api/referrals";
        this.data.yourname = this.referForm.yourname;
        this.data.referralname = this.referForm.referralname;
        this.data.agentname = this.referForm.agentname;
        this.data.agentcode = this.referForm.refagentcode;
        this.data.businessname = this.referForm.businessname;
        this.data.phone = this.referForm.phone;
        this.data.title = this.referForm.title;
        this.data.description = this.referForm.description;
        console.log("REFERRAL POST url: ", this.url);
        console.log("REFERRAL.DATA POST TO FETCH", this.data);
      } else {
        console.log("updateReferrals UPDATE REFERRAL by PUT");
        this.method = "PUT";
        this.url = "/api/referrals/" + this.referForm.id;
        this.data.yourname = this.referForm.yourname;
        this.data.referralname = this.referForm.referralname;
        this.data.agentname = this.referForm.agentname;
        this.data.agentcode = this.referForm.refagentcode;
        this.data.businessname = this.referForm.businessname;
        this.data.phone = this.referForm.phone;
        this.data.title = this.referForm.title;
        this.data.description = this.referForm.description;
        console.log("REFERRAL.UPDATE > PUT TO FETCH", this.data);
      }

      await fetch(this.url, {
        method: this.method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.data),
      })
        .then(this._referralSuccess)
        .catch(this._referralError);
    },
    _referralSuccess(response) {
      console.log("response referral data: ", response);
      this._clearReferralForm();
      // set 8 second interval
      setTimeout(this._fun, 5000);
    },
    _fun() {
      this.referred = false;
      this._refreshReferralData();
    },
    _referralError(response) {
      console.log("COULDN'T fetch referral data _error");
      alert(
        response.data ? JSON.stringify(response.data) : response.statusText
      );
    },
    _clearReferralForm() {
      this.referForm.yourname = "";
      this.referForm.referralname = "";
      this.referForm.agentname = "";
      this.referForm.refagentcode = "";
      this.referForm.businessname = "";
      this.referForm.phone = "";
      this.referForm.title = "";
      this.referForm.description = "";
      this.referForm.id = -1;
    },
    newReferral() {
      this.referred = false;
      this._clearReferralForm();
    },
    merchantDashboard() {
      console.log("dashboard Merchant");
      router.push("/merchantDashboard");
    },
  },

  mounted: function () {
    this._refreshReferralData();

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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "@/assets/base.css";
@import "@/assets/main.css";
body {
  margin: 0px;
  padding: 0px;
}
h3 {
  margin: 4px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

button {
  color: white;
  background-color: limegreen;
}

#line_btn_ed {
  padding: 1px, 1px, 1px, 1px;
  color: white;
  font: bolder;
  background-color: rgb(14, 168, 251);
}

#line_btn_x {
  padding: 1px, 1px, 1px, 1px;
  color: white;
  font: bolder;
  background-color: red;
}

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

#vert-align {
  margin-top: 1%;
}
.input-box {
  width: 100%;
  margin-top: 2%;
}

input[type="text"] {
  width: 96%;
  padding: 2%px 5%px;
  margin-left: 2%;
  margin-right: 2%;
  display: inline-block;
  border: 1px solid #ccc;
  border-left: none;
  border-right: 0.5px solid rgb(1, 54, 25, 0.5);
  border-top: none;
  border-bottom: 2px solid rgb(1, 54, 25, 0.5);
  border-radius: 4px;
  box-sizing: border-box;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: 0;
  font-family: "Open Sans", serif;
}
.my-row {
  display: flex;
}

/* #form_bg {
  width: 75vw;
  margin-top: 15vh;
  margin-left: auto;
  margin-right: auto;
  background-color: rgba(255, 255, 255, 0.4);
  border-style: solid;
  border-width: 1px;
  border-color: whitesmoke;
} */
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
  margin-top: 4vh;
}

#line-space {
  width: 20%;
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

.or {
  font-size: medium;
  font-weight: bolder;
  margin-top: 16px;
}

.thanks {
  margin-left: -10%;
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  text-align: center;
  background-color: rgb(222, 221, 221);
  z-index: 10;
}

.thanks_logo {
  width: 50vw;
  margin: 0 auto;
}

@media only screen and (min-width: 1025px) {
  .input-box {
    width: 98%;
  }
  #form_bg {
    width: 75vw;
    /* margin-top: 3vh; */
    margin-left: -0.1vw;
    margin-right: auto;
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 5pt;
    border-style: solid;
    border-width: 1px;
    border-color: whitesmoke;
  }

  .my-header {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 3vh;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.4);
    border-bottom: 1pt solid rgb(1, 54, 25, 0.5);
  }
}

@media only screen and (min-width: 769px) and (max-width: 1024px) {
  .input-box {
    width: 98%;
  }

  #form_bg {
    width: 100vw;
    height: 100vh;
    margin-top: 0vh;
    margin-left: auto;
    margin-right: auto;
    background-color: rgba(255, 255, 255, 0.4);
    border-style: solid;
    border-width: 1px;
    border-color: whitesmoke;
  }

  .my-header {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 3vh;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.4);
    border-bottom: 1pt solid rgb(1, 54, 25, 0.5);
  }
}

@media only screen and (min-width: 481px) and (max-width: 768px) {
  .my-row {
    display: flex;
    flex-direction: column;
  }
  .input-box {
    width: 98%;
    margin-top: 2%;
  }

  #form_bg {
    width: 100vw;
    height: 100vh;
    margin-top: 0vh;
    margin-left: 0px;
    margin-right: 1px;
    background-color: rgba(255, 255, 255, 0.4);
    border-style: solid;
    border-width: 1px;
    border-color: whitesmoke;
  }
  .my-header {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 2vh;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.4);
    border-bottom: 1pt solid rgb(1, 54, 25, 0.5);
  }
}

@media only screen and (min-width: 380px) and (max-width: 480px) {
  .my-row {
    display: flex;
    flex-direction: column;
  }
  .input-box {
    width: 98%;
    margin-top: 0.5%;
  }

  #form_bg {
    width: 100vw;
    height: 100vh;
    margin-top: 0px;
    margin-left: 0px;
    margin-right: 0px;
    background-color: rgba(255, 255, 255, 0.4);
    border-style: solid;
    border-width: 1px;
    border-color: whitesmoke;
  }
  .my-header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 2vh;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.4);
    border-bottom: 1pt solid rgb(1, 54, 25, 0.5);
  }
}
</style>
