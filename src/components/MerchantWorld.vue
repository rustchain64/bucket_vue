<template>
  <div v-if="referred == false" id="form_bg">
    <!-- </div> -->
    <!-- <div class="main"> -->
    <h1>{{ msg }}</h1>
    <div>
      <div class="my-header">
        <div v-if="this.userfirstname == null">
          <img
            alt="Pie logo"
            class="pie-header_logo"
            src="@/assets/images/pie_logo.png"
            height="60"
          />
        </div>
        <!-- <h2>Make a Referral</h2> -->
        <!-- <h2>Hello -- Create a Merchant</h2> -->
        <span class="dash-row"
          >Hello <em>{{ this.userfirstname }}</em> Create a Merchant
        </span>
        <span>
          <button
            v-if="list == false"
            @click="referralsList"
            class="agent-referrals-btn"
          >
            VIEW AGENT REFERRALS
          </button>
          <button
            v-if="list == true"
            @click="referralsForm"
            class="agent-referrals-btn"
          >
            VIEW MERCHANT FORM
          </button>
          <button
            @click="agentDashboard"
            class="btn btn-success"
            id="dash-button"
          >
            Dashboard
          </button>
        </span>
      </div>
      <div v-if="list == false">
        <form @submit.prevent="updateMerchants">
          <div class="row">
            <div class="col-4">
              <input
                type="text"
                v-model="referForm.yourname"
                placeholder="yourname"
                ref="yourname"
                size="60"
              />
            </div>
            <div class="col-4">
              <input
                type="text"
                v-model="referForm.referralname"
                placeholder="referralname"
                ref="referralname"
                size="60"
              />
            </div>
            <div class="col-4">
              <input
                type="text"
                v-model="referForm.agentname"
                placeholder="agentname"
                ref="agentname"
                size="60"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-4">
              <input
                type="text"
                v-model="referForm.refagentcode"
                placeholder="refagentcode"
                ref="refagentcode"
                size="60"
              />
            </div>
            <div class="col-4">
              <input
                type="text"
                v-model="referForm.businessname"
                placeholder="businessname"
                ref="businessname"
                size="60"
              />
            </div>
            <div class="col-4">
              <input
                type="text"
                v-model="referForm.phone"
                placeholder="phone"
                ref="phone"
                size="60"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-4">
              <input
                type="text"
                v-model="referForm.email"
                placeholder="email"
                ref="email"
                size="60"
              />
            </div>

            <div class="col-4">
              <input
                type="text"
                v-model="referForm.ss"
                placeholder="ss"
                ref="ss"
                size="60"
              />
            </div>
            <div class="col-4">
              <input
                type="text"
                v-model="referForm.bankname"
                placeholder="bankname"
                ref="bankname"
                size="60"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-4">
              <input
                type="text"
                v-model="referForm.routingnumber"
                placeholder="routingnumber"
                ref="routingnumber"
                size="60"
              />
            </div>
            <div class="col-4">
              <input
                type="text"
                v-model="referForm.accountnumber"
                placeholder="accountnumber"
                ref="accountnumber"
                size="60"
              />
            </div>
            <div class="col-4">
              <input
                type="text"
                v-model="referForm.title"
                placeholder="title"
                ref="title"
                size="60"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-4">
              <input
                type="text"
                v-model="referForm.description"
                placeholder="description"
                ref="description"
                size="60"
              />
            </div>
            <div class="col-4">
              <input
                type="text"
                v-model="referForm.published"
                placeholder="published"
                ref="published"
                size="60"
              />
            </div>
            <input type="submit" value="Create Merchant" />
          </div>
        </form>
      </div>

      <div v-if="list == true">
        <div class="row" id="from-ref-list">From Referral List</div>
        <!-- <div>{{ referrals }}</div> -->
        <div
          class="row"
          :class="computedClass(index)"
          v-for="(referral, index) in referrals"
          v-bind:key="referral.yourname"
        >
          <span class="my-span-first">
            <div class="col-1" id="list-header">Your Name</div>
            <div class="col-1" id="list-header">Referral Name</div>
            <div class="col-1" id="list-header">Agent Name</div>
            <div class="col-1" id="list-header">Agent Code</div>
            <div class="col-1" id="list-header">Business Name</div>
          </span>

          <span class="my-span-first-data-upper">
            <div class="col-1">{{ referral.yourname }}</div>
            <div class="col-1">{{ referral.referralname }}</div>
            <div class="col-1">{{ referral.agentname }}</div>
            <div class="col-1">{{ referral.agentcode }}</div>
            <div class="col-1">{{ referral.businessname }}</div>
          </span>

          <span class="my-span-second">
            <div class="col-1" id="list-header">Phone</div>
            <div class="col-1" id="list-header">Notes</div>
            <div class="col-4" id="list-header">Description</div>
            <!--<div class="col-2" id="list-header">Published</div> -->
            <div class="col-1" id="list-header">Ed/Del</div>
          </span>

          <span class="my-span-first-data-lower">
            <div class="col-1">{{ referral.yourname }}</div>
            <div class="col-1">{{ referral.referralname }}</div>
            <div class="col-1">{{ referral.agentname }}</div>
            <div class="col-1">{{ referral.agentcode }}</div>
            <div class="col-1">{{ referral.businessname }}</div>
          </span>

          <span class="my-span-second-lower">
            <div class="col-1" id="list-header">Phone</div>
            <div class="col-1" id="list-header">Notes</div>
            <div class="col-4" id="list-header">Description</div>
            <!--<div class="col-2" id="list-header">Published</div> -->
            <div class="col-1" id="list-header">Ed/Del</div>
          </span>

          <span class="my-span-second-data">
            <div class="col-1">{{ referral.phone }}</div>
            <div class="col-1">{{ referral.title }}</div>
            <div class="col-4">{{ referral.description }}</div>
            <!--<div class="col-2">{{ referral.published }}</div> -->
            <div class="col-1">
              <button @click="editMerchant(referral)" class="btn" id="ed-del">
                [E]
              </button>
              <button
                @click="removeMerchants(referral)"
                class="btn"
                id="ed-del"
              >
                [X]
              </button>
            </div>
          </span>
          <div class="horiz-span"></div>
        </div>
      </div>
    </div>
  </div>

  <div v-if="referred == true" class="thanks">
    <!-- <div class="thanks"> -->
    <img
      alt="Pie logo"
      class="pie-header_logo"
      src="@/assets/images/pie_logo.png"
      height="60"
    />

    <div v-if="this.userfirstname != null">
      <h3>Thanks {{ this.userfirstname }} for your referral</h3>
      <p>Your agent should call you shortly!</p>
    </div>
    <div v-else>
      <h3>Thanks for your Referral</h3>
      <h3>We will contact your agent!</h3>
      <p>You should receive a call shortly!</p>
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
      userfirstname: null,
      list: false,
    };
  },
  methods: {
    computedClass(index) {
      console.log("INDEX : ", index);
      console.log("MODULUD: ", Math.ceil((index + 1) / 2));
      return "data_" + Math.ceil((index + 1) / 2);
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
    // ################## MERCHANT SECTION ############################# \\
    async _refreshReferralData() {
      console.log(
        "GET ALL was/merchant now get from Referrals DATA get referrals "
      );
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
    editMerchant(referral) {
      console.log("edit MERCHANT ", referral.id);
      this.referForm.id = referral.id;
      this.referForm.yourname = referral.yourname;
      this.referForm.referralname = referral.referralname;
      this.referForm.agentname = referral.agentname;
      this.referForm.refagentcode = referral.agentcode;
      this.referForm.businessname = referral.businessname;
      this.referForm.phone = referral.phone;
      this.referForm.email = referral.email;
      this.referForm.ss = referral.ss;
      this.referForm.bankname = referral.bankname;
      this.referForm.routingnumber = referral.routingnumber;
      this.referForm.accountnumber = referral.accountnumber;
      this.referForm.title = referral.title;
      this.referForm.description = referral.description;
      this.referForm.published = referral.published;
      console.log("EDIT MERCHANT this.userForm.id >>> ", this.referForm.id);
    },
    async removeMerchants(referral) {
      console.log("DELETE MERCHANT ", referral);
      await fetch(`/api/merchants/${referral.id}`, {
        method: "DELETE",
      })
        .then(this._referralSuccess)
        .catch(this._referralError);
    },
    async updateMerchants() {
      this.referred = true;
      console.log("<< SAVE A MERCHANT >>");
      this.referForm.yourname = this.$refs.yourname.value;
      this.referForm.referralname = this.$refs.referralname.value;
      this.referForm.agentname = this.$refs.agentname.value;
      this.referForm.refagentcode = this.$refs.refagentcode.value;
      this.referForm.businessname = this.$refs.businessname.value;
      this.referForm.phone = this.$refs.phone.value;
      this.referForm.email = this.$refs.email.value;
      this.referForm.ss = this.$refs.ss.value;
      this.referForm.bankname = this.$refs.bankname.value;
      this.referForm.routingnumber = this.$refs.routingnumber.value;
      this.referForm.accountnumber = this.$refs.accountnumber.value;
      this.referForm.title = this.$refs.title.value;
      this.referForm.description = this.$refs.description.value;
      this.referForm.published = this.$refs.published.value;
      console.log("merchant ID ", this.referForm.id);
      if (this.referForm.id == -1) {
        console.log("CREATE merchant by POST ", this.referForm.id);
        this.method = "POST";
        this.url = "/api/merchants";
        this.data.yourname = this.referForm.yourname;
        this.data.referralname = this.referForm.referralname;
        this.data.agentname = this.referForm.agentname;
        this.data.agentcode = this.referForm.refagentcode;
        this.data.businessname = this.referForm.businessname;
        this.data.phone = this.referForm.phone;
        this.data.email = this.referForm.email;
        this.data.ss = this.referForm.ss;
        this.data.bankname = this.referForm.bankname;
        this.data.routingnumber = this.referForm.routingnumber;
        this.data.accountnumber = this.referForm.accountnumber;
        this.data.title = this.referForm.title;
        this.data.description = this.referForm.description;
        this.data.published = this.referForm.published;

        console.log("MERCHANT.DATA POST TO FETCH", this.data);
      } else {
        console.log("updateMerchants UPDATE MERCHANT by PUT");
        this.method = "PUT";
        this.url = "/api/merchants/" + this.referForm.id;
        this.data.yourname = this.referForm.yourname;
        this.data.referralname = this.referForm.referralname;
        this.data.agentname = this.referForm.agentname;
        this.data.agentcode = this.referForm.refagentcode;
        this.data.businessname = this.referForm.businessname;
        this.data.phone = this.referForm.phone;
        this.data.email = this.referForm.email;
        this.data.ss = this.referForm.ss;
        this.data.bankname = this.referForm.bankname;
        this.data.routingnumber = this.referForm.routingnumber;
        this.data.accountnumber = this.referForm.accountnumber;
        this.data.title = this.referForm.title;
        this.data.description = this.referForm.description;
        this.data.published = this.referForm.published;
        console.log("MERCHANT.UPDATE > PUT TO FETCH", this.data);
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
      console.log("response merchant data: ", response);
      this._clearReferralForm();
      this._refreshReferralData();
      setTimeout(this._fun, 5000);
    },
    _fun() {
      this.referred = false;
      this._refreshReferralData();
    },
    _referralError(response) {
      console.log("COULDN'T fetch merchant data _error");
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
      this.referForm.email = "";
      this.referForm.ss = "";
      this.referForm.bankname = "";
      this.referForm.routingnumber = "";
      this.referForm.accountnumber = "";
      this.referForm.title = "";
      this.referForm.description = "";
      this.referForm.published = "";
      this.referForm.id = -1;
    },
    referralsList() {
      console.log("jump to Referrals List");
      this.list = true;
      // router.push("/agent");
    },
    referralsForm() {
      console.log("jump back to Merchant Form");
      this.list = false;
      // router.push("/agent");
    },
    agentDashboard() {
      console.log("dashboard Agent");
      router.push(this.returnUrl || "/agentDashboard");
    },
  },
  mounted: function () {
    this.list = false;
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
@import "@/assets/main.css";
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

input[type="number"] {
  width: 80%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: 0;
  font-family: "Open Sans", serif;
}

#list-header {
  font-weight: 800;
}
#ed-del {
  padding: 1px;
}
.header_row {
  display: flex;
  background-color: whitesmoke;
}
.dash-row {
  color: rgb(31, 30, 30);
  font-size: 2em;
  font-weight: 400;
  margin-top: 1vh;
}

#line-space {
  width: 20%;
}
.dash-row-default {
  color: rgb(31, 30, 30);
  font-size: 1.5em;
  font-weight: 400;
  margin-top: 1vh;
  margin-left: 1%;
}
.agent-referrals-btn {
  color: rgb(31, 30, 30);
  font-size: 1em;
  font-weight: 800;
  background-color: whitesmoke;
  padding-bottom: 5px;
  margin-left: 10px;
}

#dash-button {
  color: rgb(31, 30, 30);
  font-weight: 800;
  height: 70%;
  width: 120px;
  background: url(@/assets/images/dash_button.png) 3px 5px no-repeat;
  background-color: white;
  padding-bottom: 5px;
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
  #from-ref-list {
    color: rgb(2, 87, 15);
    font-size: 1.5em;
    font-weight: 600;
    display: flex;
    flex-direction: row;
    width: 100%;
    padding-bottom: 1%;
    border-bottom: 3px solid rgb(2, 87, 15, 0.8);
  }

  .my-span-first {
    display: block;
  }

  .my-span-first-data-upper {
    display: none;
    background-color: orange;
  }

  .my-span-second {
    display: block;
    background-color: green;
  }

  .my-span-second-lower {
    display: none;
  }

  .input-box {
    width: 98%;
  }
  .horiz-span {
    display: flex;
    flex-direction: row;
    width: 100%;
    padding-top: 1%;
    padding-bottom: 1%;
    border-bottom: 3px solid rgb(2, 87, 15, 0.8);
  }
  #form_bg {
    width: 75vw;
    margin-top: 0vh;
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
    height: 8vh;
    background-color: rgba(255, 255, 255, 0.4);
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) {
  #from-ref-list {
    color: rgb(2, 87, 15);
    font-size: 1.5em;
    font-weight: 600;
    display: flex;
    flex-direction: row;
    width: 100%;
    padding-bottom: 1%;
    border-bottom: 3px solid rgb(2, 87, 15, 0.8);
  }
  .my-span-first {
    display: block;
  }

  .my-span-first-data-upper {
    display: none;
    background-color: orange;
  }

  .my-span-second {
    display: block;
    background-color: green;
  }

  .my-span-second-lower {
    display: none;
  }
  .input-box {
    width: 98%;
  }
  .horiz-span {
    display: flex;
    flex-direction: row;
    width: 100%;
    padding-top: 1%;
    padding-bottom: 1%;
    border-bottom: 3px solid rgb(2, 87, 15, 0.8);
  }

  #form_bg {
    width: 100vw;
    height: 100vh;
    margin-top: 0vh;
    margin-left: auto;
    margin-right: auto;
    background-color: rgba(255, 255, 255, 0.4);
  }
  .my-header {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 8vh;
    background-color: rgba(255, 255, 255, 0.4);
  }
}

@media only screen and (min-width: 375px) and (max-width: 767px) and (-webkit-device-pixel-ratio: 2) {
  #from-ref-list {
    color: rgb(2, 87, 15);
    font-size: 1.5em;
    font-weight: 600;
    display: flex;
    flex-direction: row;
    width: 100%;
    padding-bottom: 1%;
    border-bottom: 3px solid rgb(2, 87, 15, 0.8);
  }

  .my-row {
    display: flex;
    flex-direction: column;
  }
  .my-span-first {
    display: flex;
  }

  .my-span-second {
    display: flex;
    background-color: yellow;
  }

  .my-span-second-lower {
    display: none;
  }

  .my-span-first-data-upper {
    display: flex;
    background-color: orange;
  }
  .my-span-first-data-lower {
    display: none;
    background-color: orange;
  }
  .my-span-second-data {
    display: flex;
    background-color: blue;
  }

  .input-box {
    width: 98%;
    margin-top: 2%;
  }
  .horiz-span {
    display: flex;
    flex-direction: row;
    width: 100%;
    padding-top: 1%;
    padding-bottom: 1%;
    border-bottom: 3px solid rgb(2, 87, 15, 0.8);
  }

  #form_bg {
    width: 100vw;
    height: 100vh;
    margin-top: 0vh;
    margin-left: auto;
    margin-right: auto;
    background-color: rgba(255, 255, 255, 0.4);
  }
  .my-header {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: rgba(255, 255, 255, 0.4);
  }
}

@media only screen and (min-width: 375px) and (max-width: 767px) {
  #from-ref-list {
    color: rgb(2, 87, 15);
    font-size: 1.5em;
    font-weight: 600;
    display: flex;
    flex-direction: row;
    width: 100%;
    padding-bottom: 1%;
    border-bottom: 3px solid rgb(2, 87, 15, 0.8);
  }
  .my-row {
    display: flex;
    flex-direction: column;
  }
  .my-span-first {
    display: flex;
    background-color: red 0.5;
  }

  .my-span-second {
    display: flex;
    background-color: yellow, 0.5;
  }

  .my-span-second-lower {
    display: none;
  }

  .my-span-first-data-upper {
    display: flex;
    background-color: orange 0.5;
  }
  .my-span-first-data-lower {
    display: none;
    background-color: orange 0.5;
  }
  .my-span-second-data {
    display: flex;
    background-color: blue 0.5;
  }
  .horiz-span {
    display: flex;
    flex-direction: row;
    width: 100%;
    padding-top: 1%;
    padding-bottom: 1%;
    border-bottom: 3px solid rgb(2, 87, 15, 0.8);
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
    padding-top: 0px;
    padding-left: 0px;
    padding-right: 0px;
    background-color: rgba(255, 255, 255, 0.4);
    border-style: solid;
    border-width: 1px;
    border-color: whitesmoke;
  }
  .my-header {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: rgba(255, 255, 255, 0.4);
  }
}
</style>
