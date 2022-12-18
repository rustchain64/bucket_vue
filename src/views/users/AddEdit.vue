<!-- eslint-disable prettier/prettier -->
<script setup>
import referralCodeGenerator from "referral-code-generator";
import { Form, Field } from "vee-validate";
import * as Yup from "yup";
let title = "Add User";

const schema = Yup.object().shape({
  persona: Yup.string().required("Persona is required"),
  agentcode: Yup.string().required("Agent Code is required"),
  firstname: Yup.string().required("First Name is required"),
  lastname: Yup.string().required("Last Name is required"),
  username: Yup.string().required("Username is required"),
  password: Yup.string()
    .transform((x) => (x === "" ? undefined : x))
    // password optional in edit mode
    // eslint-disable-next-line no-undef
    .concat(Yup.string().required("Password is required"))
    .min(6, "Password must be at least 6 characters"),
});
</script>

<template>
  <div class="form_bg">
    <div class="add_edit_header">
      <h2>{{ title }}</h2>
      <button
        @click="generateCode"
        class="btn btn-sm btn-danger"
        id="fetch-btn"
      >
        Fetch Agent Code
      </button>
      <!-- {{referallCodeStore.agentCodes[0][this.length].agentCode}} -->
      <!-- <h5>{{ agentcode }}</h5> -->
    </div>

    <template v-if="!(user?.loading || user?.error)">
      <Form
        @submit="updateUser"
        :validation-schema="schema"
        v-slot="{ errors, isSubmitting }"
      >
        <!-- <div class="my-row"> -->
        <input type="radio" id="admin" value="admin" v-model="user.persona" />
        <label for="admin" class="persona_label">Admin</label>

        <input type="radio" id="agent" value="agent" v-model="user.persona" />
        <label for="agent" class="persona_label">Agent</label>

        <input
          type="radio"
          id="merchant"
          value="merchant"
          v-model="user.persona"
        />
        <label for="two" class="persona_label">Merchant</label><br />

        <div class="my-row">
          <div class="form-group" id="input-width">
            <label id="enhance-text">Persona</label>
            <Field
              name="persona"
              type="text"
              v-model="user.persona"
              class="form-control"
              :class="{ 'is-invalid': errors.persona }"
            />
            <div class="invalid-feedback">{{ errors.persona }}</div>
          </div>

          <div class="form-group" id="input-width">
            <label id="enhance-text">Agent Code</label>
            <Field
              name="agentcode"
              type="text"
              v-model="user.agentcode"
              value="Copy and Paste Agent Code Here!!"
              class="form-control"
              :class="{ 'is-invalid': errors.agentcode }"
            />
            <div class="invalid-feedback">{{ errors.agentcode }}</div>
          </div>
        </div>

        <div class="my-row">
          <div class="form-group" id="input-width">
            <label id="enhance-text">First Name</label>
            <Field
              name="firstname"
              type="text"
              v-model="user.firstname"
              class="form-control"
              :class="{ 'is-invalid': errors.firstname }"
            />
            <div class="invalid-feedback">{{ errors.firstname }}</div>
          </div>
          <div class="form-group" id="input-width">
            <label id="enhance-text">Last Name</label>
            <Field
              name="lastname"
              type="text"
              v-model="user.lastname"
              class="form-control"
              :class="{ 'is-invalid': errors.lastname }"
            />
            <div class="invalid-feedback">{{ errors.lastname }}</div>
          </div>
        </div>
        <div class="my-row">
          <div class="form-group" id="input-width">
            <label id="enhance-text">Username</label>
            <Field
              name="username"
              type="text"
              v-model="user.username"
              class="form-control"
              :class="{ 'is-invalid': errors.username }"
            />
            <div class="invalid-feedback">{{ errors.username }}</div>
          </div>
          <div class="form-group" id="input-width">
            <label id="enhance-text">
              Password
              <em v-if="user">(Leave blank to keep the same password)</em>
            </label>
            <Field
              name="password"
              type="password"
              v-model="user.password"
              class="form-control"
              :class="{ 'is-invalid': errors.password }"
            />
            <div class="invalid-feedback">{{ errors.password }}</div>
          </div>
        </div>
        <div class="my-row">
          <div class="form-group" id="input-width">
            <button class="btn btn-primary" :disabled="isSubmitting">
              <span
                v-show="isSubmitting"
                class="spinner-border spinner-border-sm mr-1"
              ></span>
              Save
            </button>
            <router-link to="/users" class="btn btn-link">Cancel</router-link>
          </div>
        </div>
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
      persona: "",
      agentcode: "",
      firstname: "",
      lastname: "",
      username: "",
      password: "",
    },
  }),
  methods: {
    async updateUser() {
      console.log("user ID ", this.user.id);
      if (this.user.id == -1) {
        console.log("CREATE user by POST ", this.user.id);
        this.method = "POST";
        this.url = "/api/users";
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
        this.url = "/api/users/" + this.user.id;
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
      console.log("response user data: ", response);
      this._clearReferralForm();
      this._refreshReferralData();
    },
    _referralError(response) {
      console.log("COULDN'T fetch users data _error");
      alert(
        response.data ? JSON.stringify(response.data) : response.statusText
      );
    },

    generateCode() {
      let newAgentCode = referralCodeGenerator.alphaNumeric("uppercase", 2, 1);
      console.log("TOOLING GENERATED CODE,", newAgentCode);
      this.agentcode = "AG" + newAgentCode;
      this.user.agentcode = "AG" + newAgentCode;
      console.log("TOOLING AG + GENERATED CODE,", this.user.agentcode);
    },
  },
};
</script>

<style scoped>
@import "@/assets/base.css";
@import "@/assets/main.css";

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

@media only screen and (min-width: 1025px) {
  .input-box {
    width: 98%;
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
  .add_edit_header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 8vh;
    margin-bottom: 3%;
    background-color: rgba(255, 255, 255, 0.4);
  }

  #fetch-btn {
    color: white;
    background-color: red;
    margin-left: 25%;
    height: 75%;
  }

  #input-width {
    width: 50%;
  }
}

@media only screen and (min-width: 769px) and (max-width: 1024px) {
  .input-box {
    width: 98%;
  }
  .form_bg {
    width: 75vw;
    margin-top: 10vh;
    margin-left: auto;
    margin-right: auto;
    padding: 1%;
    border-radius: 5pt;
    background-color: rgba(255, 255, 255, 0.4);
    border-style: solid;
    border-width: 1px;
    border-color: whitesmoke;
  }

  .add_edit_header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 8vh;
    margin-bottom: 3%;
    background-color: rgba(255, 255, 255, 0.4);
  }

  #fetch-btn {
    color: white;
    background-color: red;
    margin-left: 25%;
    height: 75%;
  }

  #input-width {
    width: 50%;
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

  .form_bg {
    width: 75vw;
    margin-top: 10vh;
    margin-left: auto;
    margin-right: auto;
    padding: 1%;
    border-radius: 5pt;
    background-color: rgba(255, 255, 255, 0.4);
    border-style: solid;
    border-width: 1px;
    border-color: whitesmoke;
  }
  .add_edit_header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 8vh;
    margin-bottom: 3%;
    background-color: rgba(255, 255, 255, 0.4);
  }

  #fetch-btn {
    color: white;
    background-color: red;
    height: 70%;
  }

  #input-width {
    width: 90%;
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
  .form_bg {
    width: 75vw;
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
  .add_edit_header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 1%;
    background-color: rgba(255, 255, 255, 0.4);
  }

  #fetch-btn {
    color: white;
    background-color: red;
    height: 30%;
    width: 90%;
  }

  #input-width {
    width: 90%;
  }
}
</style>
