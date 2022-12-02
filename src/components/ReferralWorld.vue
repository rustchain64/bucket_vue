<template>
  <div class="main">
    <h1>{{ msg }}</h1>
    <div id="form_bg">
      <div class="my-header">
        <img
          alt="Go Free logo"
          class="nav_logo"
          src="@/assets/images/pie_logo.png"
          height="60"
        />
        <!-- <h2>Make a Referral</h2> -->
        <h2>Make a Merchant</h2>
      </div>
      <form @submit.prevent="updateReferrals">
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

          <!-- <div v-if="referralStore.loggedIn == null"> -->

          <button
            @click="redirect_to_login"
            class="btn btn-success"
            id="login_button"
          >
            Login
          </button>
        </div>
      </form>

      <div class="row"><h3>Referrals List</h3></div>
      <!-- <div>{{ referrals }}</div> -->

      <div class="row">
        <div class="col-1" id="list-header">Your Name</div>
        <div class="col-1" id="list-header">Referral Name</div>
        <div class="col-1" id="list-header">Agent Name</div>
        <div class="col-1" id="list-header">Agent Code</div>
        <div class="col-1" id="list-header">Business Name</div>
        <div class="col-1" id="list-header">Phone</div>
        <!-- <div class="col-1" id="list-header">Email</div> -->
        <!-- <div class="col-1" id="list-header">SS Number</div> -->
        <div class="col-1" id="list-header">Bank Name</div>
        <div class="col-2" id="list-header">Routing Number</div>
        <div class="col-2" id="list-header">Account Number</div>
        <!--<div class="col-2" id="list-header">Notes</div>
        <div class="col-2" id="list-header">Description</div>
        <div class="col-2" id="list-header">Published</div> -->
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
        <!-- <div class="col-2">{{ referral.email }}</div> -->
        <!-- <div class="col-1">{{ referral.ss }}</div> -->
        <div class="col-1">{{ referral.bankname }}</div>
        <div class="col-2">{{ referral.routingnumber }}</div>
        <div class="col-2">{{ referral.accountnumber }}</div>
        <!--<div class="col-2">{{ referral.title }}</div>
      <div class="col-2">{{ referral.description }}</div>
      <div class="col-2">{{ referral.published }}</div> -->

        <div class="col-1">
          <a @click="editReferral(referral)" class="btn">[E]</a>
          <a @click="removeReferral(referral)" class="btn">[X]</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { router } from "@/router";
import { useAlertStore } from "@/stores/alert.store";
import { useReferralStore } from "@/stores/refer.store";
export default {
  name: "ReferralWorld",
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
      referrals: [],
      fruits: [],
      method: "",
      url: "",
      data: {},
      fruit: "",
      referral: "",
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
      this.referForm.email = referral.email;
      this.referForm.ss = referral.ss;
      this.referForm.bankname = referral.bankname;
      this.referForm.routingnumber = referral.routingnumber;
      this.referForm.accountnumber = referral.accountnumber;
      this.referForm.title = referral.title;
      this.referForm.description = referral.description;
      this.referForm.published = referral.published;
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
      console.log("<< SAVE A REFERRAL >>");
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
        this.data.email = this.referForm.email;
        this.data.ss = this.referForm.ss;
        this.data.bankname = this.referForm.bankname;
        this.data.routingnumber = this.referForm.routingnumber;
        this.data.accountnumber = this.referForm.accountnumber;
        this.data.title = this.referForm.title;
        this.data.description = this.referForm.description;
        this.data.published = this.referForm.published;

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
        this.data.email = this.referForm.email;
        this.data.ss = this.referForm.ss;
        this.data.bankname = this.referForm.bankname;
        this.data.routingnumber = this.referForm.routingnumber;
        this.data.accountnumber = this.referForm.accountnumber;
        this.data.title = this.referForm.title;
        this.data.description = this.referForm.description;
        this.data.published = this.referForm.published;
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
  },
  mounted: function () {
    this._refreshReferralData();
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
.header_row {
  display: flex;
  background-color: whitesmoke;
}

#form_bg {
  width: 75vw;
  background-color: rgba(255, 255, 255, 0.4);
  border-style: solid;
  border-width: 1px;
  border-color: whitesmoke;
}
.main {
}

.my-header {
  display: flex;
  background-color: rgba(255, 255, 255, 0.4);
}
.my-header h2 {
  margin-left: 2vw;
  margin-top: 1vh;
}

/* form {
  width: 85vw;
  margin-left: 3%;
  margin-right: 3%;
  margin-top: 2%;
} */
</style>
