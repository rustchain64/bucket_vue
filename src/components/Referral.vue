<template>
  <!-- DataService methods:
        get()
        update()
        delete()
        <div v-if="currentReferral" class="edit-form">
 -->
  <div class="bg"></div>
  <div class="bg bg2"></div>
  <div class="bg bg3"></div>
  <div>
    <div id="card-header">
      <h3>Finish and Approve Referral into a Merchant</h3>
      <div class="form-group" id="pending-box">
        <label><strong>Status:</strong></label>
        {{ currentReferral.published ? "Published" : "Pending" }}
      </div>
    </div>

    <div class="card-body" id="card-body-bg">
      <div class="list">
        <Form>
          <div class="form-row" id="form_row_bg">
            <div class="form-group space" id="form_group_bg">
              <label for="yourName">Your Name</label>
              <input
                type="text"
                class="form-control"
                id="yourName"
                v-model="currentReferral.yourname"
              />
            </div>
            <div class="form-group" id="form_group_bg">
              <label for="referralName">Referrals Name</label>
              <input
                type="text"
                class="form-control"
                id="referralName"
                v-model="currentReferral.referralname"
              />
            </div>
          </div>
          <div class="form-row" id="form_row_bg">
            <div class="form-group space" id="form_group_bg">
              <label for="agentName">Agent Name</label>
              <input
                type="text"
                class="form-control"
                id="agentName"
                v-model="currentReferral.agentname"
              />
            </div>
            <div class="form-group" id="form_group_bg">
              <label for="agentCode">Agent Code</label>
              <input
                type="text"
                class="form-control"
                id="agentCode"
                v-model="currentReferral.agentcode"
              />
            </div>
          </div>
          <div class="form-row" id="form_row_bg">
            <div class="form-group space" id="form_group_bg">
              <label for="businessName space">Business Name</label>
              <input
                type="text"
                class="form-control"
                id="businessName"
                v-model="currentReferral.businessname"
              />
            </div>
            <div class="form-group" id="form_group_bg">
              <label for="phone">Phone</label>
              <input
                type="text"
                class="form-control"
                id="phone"
                v-model="currentReferral.phone"
              />
            </div>
          </div>
          <div class="form-row" id="form_row_bg">
            <div class="form-group space" id="form_group_bg">
              <label for="email">Email</label>
              <input
                type="text"
                class="form-control"
                id="email"
                v-model="currentReferral.email"
              />
            </div>
            <div class="form-group" id="form_group_bg">
              <label for="ss">SS #</label>
              <input
                type="text"
                class="form-control"
                id="ss"
                v-model="currentReferral.ss"
              />
            </div>
          </div>
          <div class="form-row" id="form_row_bg">
            <div class="form-group" id="form_group_bg_long">
              <label for="bankName">Bank Name</label>
              <input
                type="text"
                class="form-control"
                id="bankName"
                v-model="currentReferral.bankname"
              />
            </div>
          </div>

          <div class="form-row" id="form_row_bg">
            <div class="form-group space" id="form_group_bg">
              <label for="routingNumber">Routing Number</label>
              <input
                type="text"
                class="form-control"
                id="routingNumber"
                v-model="currentReferral.routingnumber"
              />
            </div>
            <div class="form-group space" id="form_group_bg">
              <label for="accountNumber">Account Number</label>
              <input
                type="text"
                class="form-control"
                id="accountNumber"
                v-model="currentReferral.accountnumber"
              />
            </div>
          </div>

          <div class="form-row" id="form_row_bg">
            <div class="form-group" id="form_group_bg_long">
              <label for="title">Note</label>
              <input
                type="text"
                class="form-control"
                id="title"
                v-model="currentReferral.title"
              />
            </div>
          </div>
          <div class="form-row" id="form_row_bg">
            <div class="form-group" id="form_group_bg_long">
              <label for="description">Description</label>
              <input
                type="text"
                class="form-control"
                id="description"
                v-model="currentReferral.description"
              />
            </div>
          </div>

          <div class="form-group">
            <label><strong>Status:</strong></label>
            {{ currentReferral.published ? "Published" : "Pending" }}
          </div>
        </Form>
        <!-- </div> -->
      </div>

      <!-- <button
      class="badge badge-primary mr-2"
      v-if="currentReferral.published"
      @click="updatePublished(false)"
    >
      UnPublish
    </button>
    <button
      v-else
      class="badge badge-primary mr-2"
      @click="updatePublished(true)"
    >
      Publish
    </button> -->

      <button
        class="btn btn-primary mr-2"
        v-if="currentReferral.published"
        @click="updatePublished(false)"
      >
        <!-- Is Active
      Is Active -->
        Revoke
      </button>
      <button
        v-else
        class="btn btn-primary mr-2"
        @click="updatePublished(true)"
      >
        <!-- Not Active
      Not Active -->
        Approve
      </button>

      <button class="btn btn-danger mr-2" @click="deleteReferral">
        Delete
      </button>

      <button type="submit" class="btn btn-success" @click="updateReferral">
        Update
      </button>
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script>
import DataService from "../services/DataService";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "my-referral",
  data() {
    return {
      currentReferral: {},
      message: "",
    };
  },
  methods: {
    getReferral(id) {
      DataService.get(id)
        .then((response) => {
          this.currentReferral = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    updatePublished(status) {
      var data = {
        id: this.currentReferral.id,
        title: this.currentReferral.title,
        description: this.currentReferral.description,
        published: status,
      };

      DataService.update(this.currentReferral.id, data)
        .then((response) => {
          console.log(response.data);
          this.currentReferral.published = status;
          this.message = "The status was updated successfully!";
        })
        .catch((e) => {
          console.log(e);
        });
    },

    updateReferral() {
      DataService.update(this.currentReferral.id, this.currentReferral)
        .then((response) => {
          console.log("UPDATE RESPONSE DATA :: ", response.data);
          this.message = "The referral was updated successfully!";
        })
        .catch((e) => {
          console.log(e);
        });
    },

    deleteReferral() {
      console.log("TEST DELETE REFERRALS");
      DataService.delete(this.currentReferral.id)
        .then((response) => {
          console.log(response.data);
          this.$router.push({ name: "referrals" });
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.message = "";
    this.getReferral(this.$route.params.id);
  },
};
</script>

<style scoped>
@import "@/assets/main.css";

#card-header {
  display: flex;
  justify-content: space-between;
  color: var(--adm-text-green);
  background-color: rgba(255, 255, 255, 0.7);
}
#card-header h3 {
  margin-left: 2%;
  margin-top: 2%;
}
#pending-box {
  color: var(--adm-text-green);
  margin-right: 3%;
  margin-top: 2%;
  border-style: solid;
  border-color: black;
  border-width: 2px;
  padding-left: 1%;
  padding-right: 1%;
}
#card-body-bg {
  color: var(--adm-text-green);
  background-color: rgba(255, 255, 255, 0.4);
  width: 100%;
}
#form_row_bg {
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-left: 15px;
}
#form_group_bg {
  width: 48%;
}
#form_group_bg_long {
  width: 98%;
}
.space {
  margin-right: 2%;
}
</style>
