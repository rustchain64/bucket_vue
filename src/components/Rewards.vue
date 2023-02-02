<template>
  <div class="main-wrapper">
    <div class="container">
      <div class="rewards-header">Rewards Calculator</div>
      <div class="slider-lable-hr"></div>
      <div class="slider-label-text">Referrals' Monthly Volume</div>
      <div class="slider-text-row">
        <div class="slider-text">$1000</div>
        <div class="slider-text">$50,000</div>
      </div>
      <div class="slidecontainer">
        <input
          type="range"
          min="2"
          max="100"
          value="100"
          class="slider"
          id="myVolumeRange"
          v-on:change="volumeSlide"
        />
      </div>
      <input
        class="input-box"
        type="text"
        v-model="volumeValue"
        name="volume"
      />
      <div class="slider-rounded-text">
        Slider increases by $1000 each time.
      </div>
      <div class="slider-lable-hr"></div>
      <div class="slider-label-text">Number of Referred Merchants</div>
      <div class="slider-text-row">
        <div class="slider-text">#1</div>
        <div class="slider-text">#50</div>
      </div>
      <div class="slidecontainer">
        <input
          type="range"
          min="1"
          max="50"
          value="100"
          class="slider"
          id="myMerchantRange"
          v-on:change="merchantSlide"
        />
      </div>
      <input
        class="input-box"
        type="text"
        v-model="merchantValue"
        name="referred"
      />

      <div class="slider-lable-hr"></div>
      <div class="slider-label-text">Total Processing Volume</div>
      <input
        class="input-box"
        type="text"
        v-model="processVolume"
        name="total"
      />
    </div>

    <div class="piece-container">
      <div class="piece-header">Calculate Your Piece!</div>

      <div class="you-make-outer-container">
        <div class="you-make-container">
          <div class="you-make-text">YOU MAKE!!</div>
          <input class="you-make-input" v-model="yourMake" />
          <div class="per-yr-text">Per Year!</div>
        </div>
      </div>

      <div class="piece-label-text">Monthly Residule Income</div>
      <input
        class="piece-input-box"
        type="text"
        v-model="monthlyIncome"
        name="monthly"
      />
      <div class="piece-label-text">Portfolio Volume</div>
      <input
        class="piece-input-box"
        type="text"
        v-model="processVolume"
        name="portfolio"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "my-add-user",
  data: () => ({
    volumeValue: "$50,000",
    merchantValue: "50",
    processVolume: "$2,500,000",
    volume: 50000,
    merchants: 50,
    monthlyIncome: "$5,625",
    portfolioVolume: "$2,500,000",
    yourMake: "$67,500",
  }),
  methods: {
    volumeSlide(event) {
      // console.log("call slider ", event.target.value);
      this.volume = event.target.value * 500;
    },
    merchantSlide(event) {
      // console.log("call slider ", event.target.value);
      this.merchants = event.target.value;
    },
    computeProcessedVolume() {
      let roundedTo = Math.ceil(this.volume / 1000) * 1000;
      this.volumeValue = "$" + roundedTo.toLocaleString("en-US");
      this.merchantValue = this.merchants.toLocaleString("en-US");
      console.log("merchantValue for INPUT: ", this.merchantValue);
      let avgVolume = this.volume;
      let referrals = this.merchants;
      let totalProcessing = avgVolume * referrals;
      // adds commas nicely
      this.processVolume = "$" + totalProcessing.toLocaleString("en-US");
      let monthly = totalProcessing * 0.00225;
      let monthlyIncome = monthly.toFixed(0);
      this.monthlyIncome = "$" + (monthlyIncome * 1).toLocaleString("en-US");
      this.yourMake = "$" + (monthlyIncome * 12).toLocaleString("en-US");
    },
  },
  watch: {
    volume() {
      this.computeProcessedVolume();
    },
    merchants() {
      this.computeProcessedVolume();
    },
  },
};
</script>

<style scoped>
.rewards-header {
  color: rgb(2, 19, 95);
  font-size: 1.3em;
  font-weight: 800;
  font-family: Verdana, sans-serif;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 0px;
}

.slider-lable-hr {
  border-bottom: 1px solid rgb(102, 120, 202, 0.4);
  padding-top: 10px;
}
.slider-label-text {
  align-self: flex-start;
  color: rgb(2, 19, 95);
  font-weight: 600;
  font-family: Verdana, sans-serif;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-top: 10px;
}
.slider-text-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: rgba(1, 7, 36, 0.4);
  font-size: 0.8em;
  font-weight: 600;
}

.slider-rounded-text {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: rgba(1, 7, 36, 0.4);
  font-size: 0.8em;
  font-weight: 600;
  padding-top: 5px;
  padding-bottom: 10px;
}

.you-make-outer-container {
  display: flex;
  flex-direction: column;
  place-content: center;
  height: 213px;
  width: 213px;
  border-radius: 213pt;
  border-right: 10px solid #04cc43;
  border-left: 10px solid rgb(11, 159, 251);
  border-top: 10px solid #04cc43;
  border-bottom: 10px solid #04cc43;
}
.you-make-container {
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;
  height: 194px;
  width: 194px;
  border-radius: 194pt;
  border-right: 5px solid #b2f9c8;
  border-left: 5px solid rgb(176, 220, 248);
  border-top: 5px solid #b2f9c8;
  border-bottom: 5px solid #b2f9c8;
  margin-left: 0px;
}
.you-make-text {
  color: whitesmoke;
}
.you-make-input {
  color: whitesmoke;
  font-size: 1.5em;
  font-weight: 600;
  width: 58%;
  background: transparent;
  border: white;
  margin-left: 5px;
  margin-bottom: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-bottom: 2pt solid rgba(6, 37, 176, 0.4);
}
.you-make-input ::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: whitesmoke;
  opacity: 1; /* Firefox */
}
.per-yr-text {
  color: whitesmoke;
}

.piece-label-text {
  color: white;
  font-size: 0.7em;
  padding-top: 20px;
  padding-bottom: 5px;
}
.piece-input-box {
  color: rgb(102, 120, 202);
  text-align: right;
  padding-right: 3%;
  padding-top: 4%;
  padding-bottom: 3%;
  width: 85%;
  border-radius: 4pt;
  background-color: whitesmoke;
  border-top: 1pt solid rgba(6, 37, 176, 0.4);
  border-left: 1pt solid rgba(6, 37, 176, 0.4);
  border-right: 2pt solid rgba(6, 37, 176, 0.4);
  border-bottom: 2pt solid rgba(6, 37, 176, 0.4);
  font-size: 1.3em;
  font-weight: 600;
}
.slidecontainer {
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
}
.input-box {
  color: rgb(102, 120, 202);
  padding-top: 3%;
  padding-bottom: 3%;
  padding-left: 3%;
  border-radius: 3pt;
  background-color: rgb(102, 120, 202, 0.1);
  border-top: 1pt solid rgb(102, 120, 202, 0.4);
  border-left: 1pt solid rgb(102, 120, 202, 0.4);
  border-right: 2pt solid rgb(102, 120, 202, 0.4);
  border-bottom: 2pt solid rgb(102, 120, 202, 0.5);
  font-size: 1.3em;
  font-weight: 600;
}
::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: rgb(102, 120, 202);
  opacity: 1; /* Firefox */
}
:-ms-input-placeholder {
  color: rgb(102, 120, 202);
}
::-ms-input-placeholder {
  color: rgb(102, 120, 202);
}
/* The slider itself */
.slider {
  -webkit-appearance: none; /* Override default CSS styles */
  appearance: none;
  width: 100%; /* Full-width */
  height: 5px; /* Specified height */
  background: #04cc43; /* Grey background */
  border-radius: 2pt;
  outline: none; /* Remove outline */
  opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
  -webkit-transition: 0.2s; /* 0.2 seconds transition on hover */
  transition: opacity 0.2s;
}

/* Mouse-over effects */
.slider:hover {
  opacity: 1; /* Fully shown on mouse-over */
}

/* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
.slider::-webkit-slider-thumb {
  -webkit-appearance: none; /* Override default look */
  appearance: none;
  width: 25px; /* Set a specific slider handle width */
  height: 25px; /* Slider handle height */
  background: whitesmoke; /* Green background */
  cursor: pointer; /* Cursor on hover */
  border-radius: 20pt;
  border-right: 4px solid #04cc43;
  border-left: 4px solid #04cc43;
  border-top: 4px solid #04cc43;
  border-bottom: 4px solid #04cc43;
}

.slider::-moz-range-thumb {
  width: 25px; /* Set a specific slider handle width */
  height: 25px; /* Slider handle height */
  background: whitesmoke; /* Green background */
  cursor: pointer; /* Cursor on hover */
  border-radius: 20pt;
  border-right: 4px solid #04cc43;
  border-left: 4px solid #04cc43;
  border-top: 4px solid #04cc43;
  border-bottom: 4px solid #04cc43;
}

@media only screen and (min-width: 1025px) {
  .main-wrapper {
    display: flex;
    flex-direction: row;
  }

  .container {
    background-color: whitesmoke;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding-left: 2%;
    padding-right: 2%;
    padding-top: 1%;
    padding-bottom: 1%;
  }

  .piece-header {
    color: whitesmoke;
    font-size: 1.3em;
    font-weight: 600;
    font-family: Verdana, sans-serif;
    align-items: center;
    padding-bottom: 10px;
  }
  .piece-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #1c49ee;
    padding: 2%;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) {
  .main-wrapper {
    display: flex;
    flex-direction: row;
  }
  .container {
    background-color: whitesmoke;
    display: flex;
    flex-direction: column;
    width: 100vw;
    margin: 0;
    padding-left: 2%;
    padding-right: 2%;
    padding-top: 1%;
    padding-bottom: 1%;
  }
  .piece-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #1c49ee;
    padding: 2%;
  }
  .piece-header {
    color: red;
    font-size: 1em;
    font-weight: 400;
    font-family: Verdana, sans-serif;
    align-items: center;
    padding-bottom: 10px;
  }
}

@media only screen and (min-width: 360px) and (max-width: 767px) and (-webkit-device-pixel-ratio: 2) {
  .main-wrapper {
    display: flex;
    flex-direction: column;
  }
  .container {
    background-color: whitesmoke;
    display: flex;
    flex-direction: column;
    width: 100vw;
    margin: 0;
    padding-left: 2%;
    padding-right: 2%;
    padding-top: 1%;
    padding-bottom: 1%;
  }
  .piece-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #1c49ee;
    padding: 2%;
    width: 100vw;
  }
  .piece-header {
    color: whitesmoke;
    font-size: 1.3em;
    font-weight: 600;
    font-family: Verdana, sans-serif;
    align-items: center;
    padding-bottom: 10px;
  }
}

@media only screen and (min-width: 360px) and (max-width: 767px) {
  .main-wrapper {
    display: flex;
    flex-direction: column;
  }
  .container {
    background-color: whitesmoke;
    display: flex;
    flex-direction: column;
    width: 100vw;
    margin: 0;
    padding-left: 2%;
    padding-right: 2%;
    padding-top: 1%;
    padding-bottom: 1%;
  }
  .piece-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #1c49ee;
    padding: 2%;
    width: 100vw;
  }
  .piece-header {
    color: whitesmoke;
    font-size: 1.3em;
    font-weight: 600;
    font-family: Verdana, sans-serif;
    align-items: center;
    padding-bottom: 10px;
  }
}
</style>
