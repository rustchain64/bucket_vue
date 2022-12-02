<template>
  <!-- <div class="hello">
    <h1>{{ msg }}</h1>
  </div> -->

  <div>
    <h3>Add/Edit a User</h3>

    <form @submit.prevent="updateUsers">
      <div class="row">
        <div class="col-4">
          <input
            type="text"
            v-model="userForm.firstname"
            placeholder="firstname"
            ref="firstname"
            size="60"
          />
        </div>
        <div class="col-4">
          <input
            type="text"
            v-model="userForm.lastname"
            placeholder="lastname"
            ref="lastname"
            size="60"
          />
        </div>
        <div class="col-4">
          <input
            type="text"
            v-model="userForm.username"
            placeholder="username"
            ref="username"
            size="60"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-4">
          <input
            type="text"
            v-model="userForm.agentcode"
            placeholder="agentcode"
            ref="agentcode"
            size="60"
          />
        </div>
        <div class="col-4">
          <input
            type="text"
            v-model="userForm.persona"
            placeholder="persona"
            ref="persona"
            size="60"
          />
        </div>
        <div class="col-4">
          <input
            type="text"
            v-model="userForm.hash"
            placeholder="hash"
            ref="hash"
            size="60"
          />
        </div>
        <div class="col-4">
          <input
            type="text"
            v-model="userForm.password"
            placeholder="password"
            ref="password"
            size="60"
          />
        </div>
        <input type="submit" value="Save User" />
      </div>
    </form>

    <h3>Users List</h3>
    <!-- {{ users }} -->
    <div class="row">
      <div class="col-1" id="list-header">Id</div>
      <div class="col-1" id="list-header">First Name</div>
      <div class="col-1" id="list-header">Last Name</div>
      <div class="col-1" id="list-header">Username</div>
      <div class="col-1" id="list-header">Agent Code</div>
      <div class="col-1" id="list-header">Persona</div>
      <div class="col-1" id="list-header">Hash</div>
      <div class="col-1" id="list-header">Password</div>
    </div>

    <div class="row" v-for="user in users" v-bind:key="user.firstname">
      <div class="col-1">{{ user.id }}</div>
      <div class="col-1">{{ user.firstname }}</div>
      <div class="col-1">{{ user.lastname }}</div>
      <div class="col-1">{{ user.username }}</div>
      <div class="col-1">{{ user.agentcode }}</div>
      <div class="col-1">{{ user.persona }}</div>
      <div class="col-1">{{ user.hash }}</div>
      <div class="col-1">{{ user.password }}</div>

      <div class="col-4">
        <a @click="editUser(user)" class="btn">[E]</a>
        <a @click="removeUser(user)" class="btn">[X]</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
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
      userForm: {
        id: -1,
        firstname: "",
        lastname: "",
        username: "",
        agentcode: "",
        persona: "",
        hash: "",
        password: "",
      },
      users: [],
      fruits: [],
      method: "",
      url: "",
      data: {},
      fruit: "",
      user: "",
    };
  },
  methods: {
    //#################### USER SECTION ########################### \\
    editUser(user) {
      console.log("edit user ", user.id);
      this.userForm.id = user.id;
      this.userForm.firstname = user.firstname;
      this.userForm.lastname = user.lastname;
      this.userForm.username = user.username;
      this.userForm.agentcode = user.agentcode;
      this.userForm.persona = user.persona;
      this.userForm.hash = user.hash;
      this.userForm.password = user.password;
    },
    async removeUser(user) {
      console.log("DELETE USER remove user ", user);
      await fetch(`/api/users/${user.id}`, {
        method: "DELETE",
      })
        .then(this._userSuccess)
        .catch(this._error);
    },

    async _refreshUserData() {
      console.log("REFRESH USER DATA get users ");
      const userResults = await fetch("/api/users", {
        method: "GET",
      });
      if (userResults.ok) {
        const resultData = await userResults.json();
        this.users = resultData;
      } else {
        console.log(userResults.statusText);
      }
    },
    async updateUsers() {
      console.log("<< save button >>");
      this.userForm.firstname = this.$refs.firstname.value;
      this.userForm.lastname = this.$refs.lastname.value;
      this.userForm.username = this.$refs.username.value;
      this.userForm.agentcode = this.$refs.agentcode.value;
      this.userForm.persona = this.$refs.persona.value;
      this.userForm.hash = this.$refs.hash.value;
      this.userForm.password = this.$refs.password.value;
      if (this.userForm.id == -1) {
        console.log("UPDATE CREATE USRERS :: ID :: ", this.userForm.id);
        this.method = "POST";
        this.url = "/api/users";
        this.data.firstname = this.userForm.firstname;
        this.data.lastname = this.userForm.lastname;
        this.data.username = this.userForm.username;
        this.data.agentcode = this.userForm.agentcode;
        this.data.persona = this.userForm.persona;
        this.data.hash = this.userForm.hash;
        this.data.password = this.userForm.password;
        console.log("THIS.DATA SENT TO FETCH", this.data);
      } else {
        console.log("UPDATE EXISTING USRERS :: ID :: ", this.userForm.id);
        this.method = "PUT";
        this.url = "/api/users/" + this.userForm.id;
        this.data.firstname = this.userForm.firstname;
        this.data.lastname = this.userForm.lastname;
        this.data.username = this.userForm.username;
        this.data.agentcode = this.userForm.agentcode;
        this.data.persona = this.userForm.persona;
        this.data.hash = this.userForm.hash;
        this.data.password = this.userForm.password;
        console.log("UPDATE EXISTING USRERS :: ID :: ", this.data);
      }

      await fetch(this.url, {
        method: this.method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.data),
      })
        .then(this._userSuccess)
        .catch(this._userError);
    },
    _userSuccess(response) {
      console.log("response user data: ", response);
      this._refreshUserData();
      this._clearUserForm();
    },
    _userError(response) {
      console.log("COULDN'T fetch data _error");
      alert(
        response.data ? JSON.stringify(response.data) : response.statusText
      );
    },
    _clearUserForm() {
      this.userForm.firstname = "";
      this.userForm.lastname = "";
      this.userForm.username = "";
      this.userForm.agentcode = "";
      this.userForm.persona = "";
      this.userForm.hash = "";
      this.userForm.password = "";
      this.userForm.id = -1;
    },
  },
  mounted: function () {
    this._refreshUserData();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
  width: 100%;
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
</style>
