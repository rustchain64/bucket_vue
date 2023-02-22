<script setup>
import { useTermsStore } from "@/stores";
</script>

<template>
  <div class="wrapper">
    <div class="why-text">
      <div class="why-text">Terms and Conditions</div>
      <div class="why-text">&nbsp;Updated March 11th, 2019</div>
    </div>
    <div class="container-wrapper">
      <div class="container">
        <div class="process-left">
          <div class="card-text">
            <p>
              These Terms and Conditions ("Terms", "Terms and Conditions")
              govern your relationship with https:/getpie.io website, browser
              extensions and Snippet mobile application (the "Service") operated
              by MOVALIO MEDIA SRL ("us", "we", or "our"). Please read these
              Terms and Conditions carefully before using our website and
              Snippet mobile application (the "Service").
            </p>
            <br />
            <p>
              <strong>
                Your access to and use of the Service is conditioned on your
                acceptance of and compliance with these Terms. These Terms apply
                to all visitors, users and others who access or use the Service.
                By accessing or using the Service you agree to be bound by these
                Terms. If you disagree with any part of the terms then you may
                not access the Service. Content Our Service allows you to post,
                link, store, share and otherwise make available certain
                information, text, graphics, videos, or other material
                ("Content"). You are responsible for the Content that you post
                to the Service, including its legality, reliability, and
                appropriateness.
              </strong>
            </p>
            <br />
            <p>
              By posting Content to the Service, you grant us the right and
              license to use, modify, perform, display, reproduce, and
              distribute such Content on and through the Service. You retain any
              and all of your rights to any Content you submit, post or display
              on or through the Service and you are responsible for protecting
              those rights. You represent and warrant that: (i) the Content is
              yours (you own it) or you have the right to use it and grant us
              the rights and license as provided in these Terms, and (ii) the
              posting of your Content on or through the Service does not violate
              the privacy rights, publicity rights, copyrights, contract rights
              or any other rights of any person.
            </p>
          </div>
        </div>
        <!-- <div class="termsAgreement">
          <button @click="closeAgreement">Close Terms and Agreement</button>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BackToTop",
  data() {
    return {
      isTop: false,
    };
  },
  methods: {
    closeAgreement() {
      console.log("scroll to top");
      useTermsStore().termsClose();
    },
  },
};
</script>

<style scoped>
.wrapper {
  background-color: #748bde;
  padding-top: 0px;
  height: 100vh;
}
.footer-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.faq {
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 0.9em;
  font-weight: 400;
  margin-top: 2%;
  padding-bottom: 4%;
  color: whitesmoke;
}
.header-row {
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 60%;
}

.header-text {
  justify-content: start;
  color: rgb(211, 247, 9);
  font-size: 2em;
  font-weight: 400;
  padding-top: 1%;
}
.column-text {
  color: rgb(211, 247, 9);
  font-size: 1em;
  font-weight: 400;
}
.card-text {
  color: whitesmoke;
  font-size: 0.8em;
  font-weight: 600;
  padding: 25px;
}
.process img {
  width: 60px;
}

.refer-btn {
  color: rgb(164, 193, 4);
  cursor: pointer;
  font-size: 1.2em;
  font-weight: 600;
  text-align: center;
  background-color: whitesmoke;
  border-top-left-radius: 15pt;
  border-top-right-radius: 15pt;
  border-bottom-left-radius: 15pt;
  border-bottom-right-radius: 15pt;
  border-left: 1px solid rgb(1, 54, 25, 0.1);
  border-top: 1px solid rgb(1, 54, 25, 0.1);
  border-right: 2px solid rgb(1, 54, 25, 0.3);
  border-bottom: 3pt solid rgb(1, 54, 25, 0.4);
  padding-left: 2%;
  padding-right: 2%;
  padding-top: 4%;
  padding-bottom: 4%;
  width: 180px;
}

.termsAgreement {
  width: 100%;
  background-color: grey;
  display: flex;
  align-items: center;
}
.termsAgreement button {
  color: whitesmoke;
  background-color: #1d5038;
}

@media only screen and (min-width: 1025px) {
  .container-wrapper {
    display: flex;
  }
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2%;
  }
  .process-left {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 20%;
  }

  .process-right {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-right: 20%;
  }
  .why-text {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 1.6em;
    font-weight: 600;
    font-family: Verdana, sans-serif;
    margin-top: 2%;
    margin-bottom: 2%;
    color: whitesmoke;
  }
}
@media only screen and (min-width: 768px) and (max-width: 1024px) {
  .container-wrapper {
    display: flex;
  }
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2%;
  }
  .process-left {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 20%;
  }
  .process-right {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 20%;
  }
  .why-text {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 1.6em;
    font-weight: 600;
    font-family: Verdana, sans-serif;
    margin-top: 2%;
    margin-bottom: 2%;
    color: whitesmoke;
  }
}
@media only screen and (min-width: 360px) and (max-width: 767px) and (-webkit-device-pixel-ratio: 2) {
  .container-wrapper {
    display: flex;
    flex-direction: column;
  }
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2%;
  }
  .process-left {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 20%;
  }
  .process-right {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 20%;
  }
  .why-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.2em;
    font-weight: 600;
    font-family: Verdana, sans-serif;
    margin-top: 2%;
    margin-bottom: 2%;
    color: whitesmoke;
  }
}
@media only screen and (min-width: 360px) and (max-width: 767px) {
  .container-wrapper {
    display: flex;
    flex-direction: column;
  }
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2%;
  }
  .process-left {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 2%;
    padding-right: 2%;
  }
  .process-right {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 2%;
    padding-right: 2%;
  }
  .why-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.4em;
    font-weight: 600;
    font-family: Verdana, sans-serif;
    margin-top: 2%;
    margin-bottom: 2%;
    color: whitesmoke;
  }
}
</style>
