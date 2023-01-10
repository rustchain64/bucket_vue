<script setup>
import { router } from "@/router";
import { useAlertStore } from "@/stores/alert.store";
import { useReferralStore } from "@/stores/refer.store";
import { useAuthStore } from "@/stores";
import { Form, Field } from "vee-validate";
import * as Yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const ss = "^(?!666|000|9\\d{2})\\d{3}-(?!00)\\d{2}-(?!0{4})\\d{4}$";
const schema = Yup.object().shape({
  yourname: Yup.string().required("Your Name is required"),
  referralname: Yup.string().required("Referral Name is required"),
  agentname: Yup.string().required("Agent Name is required"),
  agentcode: Yup.string().required("Agent Code is required"),
  businessname: Yup.string().required("Business Name is required"),
  phone: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
  // phone: Yup.number()
  //   .min(10, "Must be more than 10 characters")
  //   .required("Phone is requried"),
  email: Yup.string().email("Not a proper email"),
  ss: Yup.string().trim().matches(ss, "SS number is not valid"),
  bankname: Yup.string().required("Bankname is required"),
  routingnumber: Yup.string().required("Routing Number is required"),
  accountnumber: Yup.string().required("Account Number is required"),
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  // published: Yup.string().required("Published is required"),
});
</script>

<template>
  <div v-if="referred == false" id="form_bg">
    <!-- <div class="main"> -->
    <div>
      <div class="my-header">
        <div v-if="userfirstname == null">
          <img
            alt="Pie logo"
            class="pie-header_logo"
            src="@/assets/images/pie_logo.png"
            height="60"
          />
        </div>
        <!-- <h2>Make a Referral</h2> -->
        <!-- <h2>Hello -- Create a Merchant</h2> -->
        <!-- <span class="dash-row"
          ><em>{{ userfirstname }}</em> Create a Merchant
        </span>
        <span> -->
        <div class="dash-row">
          Create a Merchant

          <button
            v-if="list == false"
            @click="referralsList"
            class="agent-referrals-btn"
          >
            LIST
          </button>
          <button
            v-if="list == true"
            @click="referralsForm"
            class="agent-referrals-btn"
          >
            FORM
          </button>
          <button @click="agentDashboard" class="dash-button">DASH</button>
        </div>
      </div>
      <div v-if="list == false">
        <Form
          @submit="updateMerchants"
          :validation-schema="schema"
          v-slot="{ errors, isSubmitting }"
        >
          <div class="my-row">
            <div class="form-group" id="input-width">
              <label id="enhance-text">Your Name</label>
              <Field
                name="yourname"
                type="text"
                v-model="referForm.yourname"
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
                v-model="referForm.referralname"
                value="referralname"
                class="form-control"
                :class="{ 'is-invalid': errors.referralname }"
              />
              <div class="invalid-feedback" id="v-red">
                {{ errors.referralname }}
              </div>
            </div>
            <div class="form-group" id="input-width">
              <label id="enhance-text">Agent's Name</label>
              <Field
                name="agentname"
                type="text"
                v-model="referForm.agentname"
                class="form-control"
                :class="{ 'is-invalid': errors.agentname }"
              />
              <div class="invalid-feedback" id="v-red">
                {{ errors.agentname }}
              </div>
            </div>
          </div>

          <div class="my-row">
            <div class="form-group" id="input-width">
              <label id="enhance-text">Agent's Code</label>
              <Field
                name="agentcode"
                type="text"
                v-model="referForm.agentcode"
                class="form-control"
                :class="{ 'is-invalid': errors.agentcode }"
              />
              <div class="invalid-feedback" id="v-red">
                {{ errors.agentcode }}
              </div>
            </div>
            <div class="form-group" id="input-width">
              <label id="enhance-text">Business Name</label>
              <Field
                name="businessname"
                type="text"
                v-model="referForm.businessname"
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
                v-model="referForm.phone"
                class="form-control"
                :class="{ 'is-invalid': errors.phone }"
              />
              <div class="invalid-feedback" id="v-red">{{ errors.phone }}</div>
            </div>
          </div>

          <div class="my-row">
            <div class="form-group" id="input-width">
              <label id="enhance-text">Email</label>
              <Field
                name="email"
                type="text"
                v-model="referForm.email"
                class="form-control"
                :class="{ 'is-invalid': errors.email }"
              />
              <div class="invalid-feedback" id="v-red">{{ errors.email }}</div>
            </div>

            <div class="form-group" id="input-width">
              <label id="enhance-text">SS</label>
              <Field
                name="ss"
                type="text"
                v-model="referForm.ss"
                class="form-control"
                :class="{ 'is-invalid': errors.ss }"
              />
              <div class="invalid-feedback" id="v-red">{{ errors.ss }}</div>
            </div>
            <div class="form-group" id="input-width">
              <label id="enhance-text">Bank Name</label>
              <Field
                name="bankname"
                type="text"
                v-model="referForm.bankname"
                class="form-control"
                :class="{ 'is-invalid': errors.bankname }"
              />
              <div class="invalid-feedback" id="v-red">
                {{ errors.bankname }}
              </div>
            </div>
          </div>

          <div class="my-row">
            <div class="form-group" id="input-width">
              <label id="enhance-text">Routing Number</label>
              <Field
                name="routingnumber"
                type="text"
                v-model="referForm.routingnumber"
                class="form-control"
                :class="{ 'is-invalid': errors.routingnumber }"
              />
              <div class="invalid-feedback" id="v-red">
                {{ errors.routingnumber }}
              </div>
            </div>
            <div class="form-group" id="input-width">
              <label id="enhance-text">Account Number</label>
              <Field
                name="accountnumber"
                type="text"
                v-model="referForm.accountnumber"
                class="form-control"
                :class="{ 'is-invalid': errors.accountnumber }"
              />
              <div class="invalid-feedback" id="v-red">
                {{ errors.accountnumber }}
              </div>
            </div>
            <div class="form-group" id="input-width">
              <label id="enhance-text">Title</label>
              <Field
                name="title"
                type="text"
                v-model="referForm.title"
                class="form-control"
                :class="{ 'is-invalid': errors.title }"
              />
              <div class="invalid-feedback" id="v-red">{{ errors.title }}</div>
            </div>
          </div>

          <div class="my-row">
            <div class="form-group" id="input-width">
              <label id="enhance-text">Description</label>
              <Field
                name="description"
                type="text"
                v-model="referForm.description"
                class="form-control"
                :class="{ 'is-invalid': errors.description }"
              />
              <div class="invalid-feedback" id="v-red">
                {{ errors.description }}
              </div>
            </div>
            <!-- <button
              class="btn btn-primary"
              :disabled="isSubmitting"
              id="submit-style"
            > -->
            <input
              type="submit"
              value="Create Merchant"
              class="btn btn-primary"
              :disabled="isSubmitting"
              id="create-mrch-btn"
            />
          </div>
        </Form>
      </div>

      <div v-if="list == true">
        <div class="row" id="from-ref-list">From Referral List</div>
        <!-- <div>{{ referrals }}</div> -->
        <div
          class="row"
          v-for="referral in referrals"
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
              <button @click="removeReferral(referral)" class="btn" id="ed-del">
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

    <div v-if="userfirstname != null">
      <h3>Thanks {{ userfirstname }} for your referral</h3>
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
// import { useAlertStore } from "@/stores/alert.store";
// import { useReferralStore } from "@/stores/refer.store";
// import { useAuthStore } from "@/stores";
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
      userlastname: null,
      agentcode: "",
      list: false,
    };
  },
  methods: {
    computedClass(index) {
      console.log("INDEX : ", index);
      console.log("MODULUD: ", Math.ceil((index + 1) / 2));
      return "data_" + Math.ceil((index + 1) / 2);
    },
    async getFilteredList(id) {
      console.log("GET FILTERED REFERRAL LIST by agentcode as ID ", id);
      // const id = this.agentcode;
      // const id = "\\'" + agentcode + "\\'";
      this.url = "/api/referrals/" + id;
      const userResults = await fetch(this.url, {
        method: "GET",
      });
      if (userResults.ok) {
        const resultData = await userResults.json();
        console.log("FILTERED REFERRALS LIST: ", resultData);
        this.referrals = resultData;
        console.log("FILTERED REFERRALS LIST: ", this.referrals);
      } else {
        console.log(userResults.statusText);
      }
    },
    async removeReferral(referral) {
      console.log("DELETE REFERRAL ", referral);
      await fetch(`/api/referrals/${referral.id}`, {
        method: "DELETE",
      })
        .then(this._delete_referralSuccess)
        .catch(this._delete_referralError);
    },
    _delete_referralSuccess(response) {
      console.log("response merchant data: ", response);
      this._clearReferralForm();
      // this.getFilteredList(this.agentcode);
    },
    _delete_referralError(response) {
      console.log("COULDN'T fetch referral data _error: ", response);
      // alert(
      //   response.data ? JSON.stringify(response.data) : response.statusText
      // );
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
    // update refreshReferralData to filter by id ( which is by name)
    // async _refreshReferralData() {
    //   console.log(
    //     "GET ALL was/merchant now get from Referrals DATA get referrals "
    //   );
    //   const referralResults = await fetch("/api/referrals", {
    //     method: "GET",
    //   });
    //   if (referralResults.ok) {
    //     const resultData = await referralResults.json();
    //     this.referrals = resultData;
    //     console.log("REFERRALS DATA LIST ", this.referrals);
    //   } else {
    //     console.log(referralResults.statusText);
    //   }
    // },
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
      console.log("user ID ", this.referForm.id);
      if (this.referForm.id == -1) {
        console.log("CREATE user by POST ", this.referForm.id);
        this.method = "POST";
        this.url = "/api/merchants";
        await fetch(this.url, {
          method: this.method,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.referForm),
        })
          .then(this._referralSuccess)
          .catch(this._referralError);
        console.log("USER.DATA POST", this.referForm);
      } else {
        console.log("UPDATE USER by PUT");
        this.method = "PUT";
        this.url = "/api/merchants/" + this.referForm.id;
        await fetch(this.url, {
          method: this.method,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.referForm),
        })
          .then(this._referralSuccess)
          .catch(this._referralError);
      }
    },
    _referralSuccess(response) {
      console.log("merchants response data: ", response);
      this._clearReferralForm();
      setTimeout(this._fun, 3000);
    },
    _fun() {
      this.referred = false;
      // this._refreshReferralData();
    },
    _referralError(response) {
      console.log("COULDN'T fetch merchants data _error,", response);
      // alert(response.data ? JSON.stringify(response.data) : response.statusText);
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
    //this._refreshReferralData();

    console.log(
      "AUTHENTICATED USER : first name >> ",
      useAuthStore().user.firstname
    );
    console.log(
      "AUTHENTICATED USER : last name >> ",
      useAuthStore().user.lastname
    );
    if (useAuthStore().user) {
      console.log("POST AUTH USER STATE IS: ", useAuthStore().user);
      this.userfirstname = useAuthStore().user.firstname;
      this.userlasttname = useAuthStore().user.lastname;
      this.agentcode = useAuthStore().user.agentcode;
      this.getFilteredList(this.agentcode);
    } else {
      console.log("ERROR:: INIT AUTH USER STATE IS: ", useAuthStore().user);
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "@/assets/main.css";

#v-red {
  color: red;
  font-weight: bolder;
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
/*
input[type="number"] {
  width: 75%;
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
} */

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
  place-items: center;
  color: rgb(31, 30, 30);
  font-size: 1.5em;
  font-weight: 400;
}

#line-space {
  width: 20%;
}
.dash-row-default {
  color: rgb(31, 30, 30);
  font-size: 1.5em;
  font-weight: 400;
  margin-top: 0.1vh;
  margin-left: 1%;
}
.agent-referrals-btn {
  color: rgb(31, 30, 30);
  font-size: 0.7em;
  font-weight: 700;
  height: 60%;
  background-color: whitesmoke;
  border-radius: 2pt;
  border-right: 1pt solid #1d5038;
  border-bottom: 2pt solid #1d5038;
  padding: 5px;
}

.dash-button {
  color: rgb(31, 30, 30);
  font-size: 0.7em;
  font-weight: 700;
  height: 60%;
  background-color: whitesmoke;
  background: url(@/assets/images/dash_button.png) 0px 0px no-repeat;
  border-radius: 2pt;
  border-right: 1pt solid #1d5038;
  border-bottom: 2pt solid #1d5038;
  padding: 5px;
}

/* #dash-button {
  color: rgb(31, 30, 30);
  font-weight: 800;
  width: 70px;
  margin: 0;
  background: url(@/assets/images/dash_button.png) 3px 5px no-repeat;
  background-color: white;
  border-radius: 2pt;
  border-right: 1pt solid #1d5038;
  border-bottom: 2pt solid #1d5038;
} */

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

#create-mrch-btn {
  color: white;
  background-color: limegreen;
  border-radius: 8pt;
  border-right: 1pt solid rgb(1, 54, 25, 0.5);
  border-bottom: 2pt solid rgb(1, 54, 25, 0.5);
  height: 75%;
  padding-left: 3%;
  padding-right: 3%;
  margin-top: 29px;
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

  .my-row {
    display: flex;
    flex-direction: row;
  }

  #input-width {
    margin-left: 1%;
    width: 31%;
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
  .my-row {
    display: flex;
    flex-direction: row;
  }

  #input-width {
    margin-left: 1%;
    width: 90%;
  }
  #form_bg {
    width: 98vw;
    height: 100vh;
    margin: 0px;
    padding: 0px;
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
/* this os for iphone */
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
  .my-span-first {
    color: green;
    display: flex;
    background-color: yellowgreen;
  }
  .my-span-second {
    color: red;
    display: flex;
    background-color: rgba(255, 255, 0, 0.728);
  }

  .my-span-second-lower {
    color: white;
    display: none;
    background-color: rgb(16, 16, 70);
  }
  .my-span-first-data-upper {
    color: brown;
    display: flex;
    background-color: orange;
  }
  .my-span-first-data-lower {
    color: brown;
    display: none;
    background-color: orange;
  }
  .my-span-second-data {
    color: yellow;
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
  .my-row {
    display: flex;
    flex-direction: column;
  }

  #input-width {
    margin-left: 2%;
    width: 93%;
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
    background-color: rgba(255, 255, 255, 0.4);
    height: 7vh;
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
    color: rgb(2, 87, 15);
    font-size: 1.2em;
    font-weight: 600;
  }
  .my-span-first {
    display: flex;
  }

  .my-span-second {
    display: flex;
  }

  .my-span-second-lower {
    display: none;
  }

  .my-span-first-data-upper {
    display: flex;
  }
  .my-span-first-data-lower {
    display: none;
  }
  .my-span-second-data {
    display: flex;
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

  .my-row {
    display: flex;
    flex-direction: column;
  }

  #input-width {
    margin-left: 2%;
    width: 93%;
  }

  #form_bg {
    width: 100vw;
    border-style: solid;
    border-width: 1px;
    border-color: whitesmoke;
    background-color: rgba(255, 255, 255, 0.4);
  }
  .my-header {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: rgba(255, 255, 255, 0.4);
    height: 7vh;
  }
}
</style>
