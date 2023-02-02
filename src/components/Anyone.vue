<template>
  <div class="wrapper">
    <div class="why-text">
      <div class="why-text">Refer Anyone from</div>
      <div class="why-text">&nbsp;Anywhere</div>
    </div>
    <div class="container-wrapper">
      <div class="container">
        <div class="process-left">
          <div class="header-row">
            <div class="header-text">40k +</div>
            <div class="column-text">Merchant Partners</div>
          </div>
          <div class="card-text">
            Our Getpie.io merchant community is growing daily. We strive to save
            our customers money and help them make money as well.
          </div>
        </div>
        <div class="process-left">
          <div class="header-row">
            <div class="header-text">$300k +</div>
            <div class="column-text">in residuals paid out monthly</div>
          </div>
          <div class="card-text">
            As long as your portfolio is active and processing you will receive
            monthly residuals forever. This will help you pay off your expenses
            in your business or help you pay for anything.
          </div>
        </div>
      </div>
      <div class="container">
        <div class="process-right">
          <div class="header-row">
            <div class="header-text">4.2k +</div>
            <div class="column-text">Cities across the USA</div>
          </div>
          <div class="card-text">
            With our GetPie.io Agents across America we work to ensure that you
            have the best support and service in the industry.
          </div>
        </div>
        <div class="process-right">
          <div class="header-row">
            <div class="header-text">$99% +</div>
            <div class="column-text">5 Star Review</div>
          </div>
          <div class="card-text">
            Getpie.io is loved by thousands of current customers! We have 99%
            five-star reviews and are looking forward to having your business
            benefit from monthly referral income as well.
          </div>
        </div>
      </div>
    </div>
    <div class="footer-text">
      <div>
        <button @click="scrollToTop()" class="refer-btn">Refer Now!</button>
      </div>
      <div class="faq">Have some questions? Visit our FAQ page</div>
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
    scrollToTop() {
      console.log("scroll to top");
      window.scrollTo(0, 0);
    },
  },
  mounted() {
    const that = this;
    window.addEventListener("scroll", () => {
      let scrollPos = window.scrollY;
      if (scrollPos >= 100) {
        that.isTop = true;
      } else {
        that.isTop = false;
      }
    });
  },
};
</script>

<style scoped>
.wrapper {
  background-color: #1c49ee;
  padding-top: 1%;
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
