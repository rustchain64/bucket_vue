<template>
  <div class="wrapper">
    <div class="why-text-wrapper">
      <div class="why-text">Hear from</div>
      <div class="why-text">Merchants</div>
      <div class="why-text">&nbsp;Like You:</div>
    </div>

    <div class="shuffle-wrapper">
      <div class="shuffle-horizontal-container">
        <div>
          <button @click="shuffleIncr" class="shuffle-left-btn"></button>
        </div>
        <div>
          <button @click="shuffleDecr" class="shuffle-right-btn"></button>
        </div>
        <!-- <div>"value" {{ this.shufflePosition }}</div> -->
      </div>
    </div>

    <div class="container">
      <div class="shuffle-vertical-container">
        <div>
          <button @click="shuffleIncr" class="shuffle-down-btn"></button>
        </div>
        <div>
          <button @click="shuffleDecr" class="shuffle-up-btn"></button>
        </div>
        <!-- <div>"value" {{ this.shufflePosition }}</div> -->
      </div>
      <div class="process" v-show="showVideoCardOne == true">
        <div class="card-wrapper">
          <div class="card-text">
            I like getting paid for referrals - it’s an easy way to make some
            extra money every month and all I do is put info into the app.
          </div>
          <svg width="50%" height="25%">
            <mask id="svgmask1">
              <circle fill="#ffffff" cx="75" cy="75" r="75"></circle>
            </mask>
            <image
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="../assets/images/ppl/tobyMunton.jpg"
              mask="url(#svgmask1)"
            ></image>
          </svg>
        </div>
        <div class="play-button-row">
          <button @click="playVideoOne" class="play-btn">
            <!-- <img src="../assets/images/play.png" /> -->
          </button>
          <div class="play-text">Toby Munton-- The Union Jack Pub</div>
        </div>
      </div>

      <div class="process" v-show="showVideoCardTwo == true">
        <div class="card-wrapper">
          <div class="card-text">
            I’m already making like $300 a month from referrals. It took awhile
            but my sales rep got everyone set up after I gave him the contacts.
          </div>
          <svg width="50%" height="25%">
            <mask id="svgmask2">
              <circle fill="#ffffff" cx="75" cy="75" r="75"></circle>
            </mask>
            <image
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="../assets/images/ppl/victorHugo.jpg"
              mask="url(#svgmask2)"
            ></image>
          </svg>
        </div>
        <div class="play-button-row">
          <button @click="playVideoTwo" class="play-btn"></button>
          <div class="play-text">Victor Hugo-- Casa Mexicana</div>
        </div>
      </div>

      <div class="process" v-show="showVideoCardThree == true">
        <div class="card-wrapper">
          <div class="card-text">
            I like beer, but I also love an extra $300 dollars a month from
            referrals. My sales rep got it all done for me. When your that busy
            it's good to know someone has your back.
          </div>
          <svg width="50%" height="25%">
            <mask id="svgmask3">
              <circle fill="#ffffff" cx="75" cy="75" r="75"></circle>
            </mask>
            <image
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="../assets/images/ppl/jimStarr.jpg"
              mask="url(#svgmask3)"
            ></image>
          </svg>
        </div>
        <div class="play-button-row">
          <button @click="playVideoThree" class="play-btn"></button>
          <div class="play-text">Jim Starr- Liquor World</div>
        </div>
      </div>

      <div class="process" v-show="showVideoCardFour == true">
        <div class="card-wrapper">
          <div class="card-text">
            When you make good business decisions, you sometings get more than
            you expected. That's the case with the Pie Pay system. It gives us a
            way to keep up with the pace of buinsess.
          </div>
          <svg width="50%" height="25%">
            <mask id="svgmask4">
              <circle fill="#ffffff" cx="75" cy="75" r="75"></circle>
            </mask>
            <image
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="../assets/images/ppl/vivekGanbold.jpg"
              mask="url(#svgmask4)"
            ></image>
          </svg>
        </div>
        <div class="play-button-row">
          <button @click="playVideoFour" class="play-btn"></button>
          <div class="play-text">Vivek G.-- Capital Bar & Grill</div>
        </div>
      </div>

      <div class="process" v-show="showVideoCardFive == true">
        <div class="card-wrapper">
          <div class="card-text">
            My customers are looking for a quality buying experience, as all
            would for special occasions. It's an obvious choice for our business
            and getting paid added referrals is just icing on the cake.
          </div>
          <svg width="50%" height="25%">
            <mask id="svgmask5">
              <circle fill="#ffffff" cx="75" cy="75" r="75"></circle>
            </mask>
            <image
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="../assets/images/ppl/jenAnderson.jpg"
              mask="url(#svgmask5)"
            ></image>
          </svg>
        </div>
        <div class="play-button-row">
          <button @click="playVideoFive" class="play-btn"></button>
          <div class="play-text">Jennifer A.-- Anderson's Jewelry</div>
        </div>
      </div>
    </div>

    <div class="player" id="playerOne" v-show="showVideoOne == true">
      <iframe
        loading="lazy"
        width="802"
        height="451"
        src="https://www.youtube.com/embed/n4yFSNCqt7g"
        title="The Union Jack Pub - GetPie.io"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        class="video"
        id="playerOne"
        align="middle"
      >
      </iframe>
      <div class="video-control-bar">
        <button @click="closeVideoOne" class="video-one-close">X</button>
      </div>
    </div>

    <div class="player" id="playerTwo" v-show="showVideoTwo == true">
      <iframe
        loading="lazy"
        width="802"
        height="451"
        src="https://www.youtube.com/embed/JZ42T_iQf8M"
        title="Casa Mexicana - GetPie.io"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        class="video"
        id="playerTwo"
        align="middle"
      ></iframe>
      <div class="video-control-bar">
        <button @click="closeVideoTwo" class="video-one-close">X</button>
      </div>
    </div>

    <div class="player" id="playerThree" v-show="showVideoThree == true">
      <iframe
        loading="lazy"
        width="802"
        height="451"
        src="https://www.youtube.com/embed/X8g-ZgKOLxk"
        title="Liquor World-- GetPie.io"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        class="video"
        id="playerThree"
        align="middle"
      ></iframe>
      <div class="video-control-bar">
        <button @click="closeVideoThree" class="video-one-close">X</button>
      </div>
    </div>

    <div class="player" id="playerFour" v-show="showVideoFour == true">
      <iframe
        loading="lazy"
        width="802"
        height="451"
        src="https://www.youtube.com/embed/nYAYHBe9Onk"
        title="Capital Bar &amp; Grill -- GetPie.io"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        class="video"
        id="playerFour"
        align="middle"
      ></iframe>
      <div class="video-control-bar">
        <button @click="closeVideoFour" class="video-one-close">X</button>
      </div>
    </div>

    <div class="player" id="playerFive" v-show="showVideoFive == true">
      <iframe
        loading="lazy"
        width="802"
        height="451"
        src="https://www.youtube.com/embed/X3Jxb2a5zNU"
        title="Anderson&#39;s Jewelry -- GetPie.io"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        class="video"
        id="playerFive"
        align="middle"
      ></iframe>
      <div class="video-control-bar">
        <button @click="closeVideoFive" class="video-one-close">X</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-add-user",
  data: () => ({
    showVideoOne: false,
    showVideoTwo: false,
    showVideoThree: false,
    showVideoFour: false,
    showVideoFive: false,
    showVideoCardOne: true,
    showVideoCardTwo: true,
    showVideoCardThree: false,
    showVideoCardFour: false,
    showVideoCardFive: false,
    shufflePosition: 1,
  }),
  methods: {
    shuffleIncr() {
      if (this.shufflePosition < 4) {
        this.shufflePosition = this.shufflePosition + 1;
        if (this.shufflePosition == 1) {
          this.showVideoCardOne = true;
          this.showVideoCardTwo = true;
          this.showVideoCardThree = false;
          this.showVideoCardFour = false;
          this.showVideoCardFive = false;
        }
        if (this.shufflePosition == 2) {
          this.showVideoCardOne = false;
          this.showVideoCardTwo = true;
          this.showVideoCardThree = true;
          this.showVideoCardFour = false;
          this.showVideoCardFive = false;
        }
        if (this.shufflePosition == 3) {
          this.showVideoCardOne = false;
          this.showVideoCardTwo = false;
          this.showVideoCardThree = true;
          this.showVideoCardFour = true;
          this.showVideoCardFive = false;
        }
        if (this.shufflePosition == 4) {
          this.showVideoCardOne = false;
          this.showVideoCardTwo = false;
          this.showVideoCardThree = false;
          this.showVideoCardFour = true;
          this.showVideoCardFive = true;
        }
      }
    },
    shuffleDecr() {
      if (this.shufflePosition > 1) {
        this.shufflePosition = this.shufflePosition - 1;
        if (this.shufflePosition == 1) {
          this.showVideoCardOne = true;
          this.showVideoCardTwo = true;
          this.showVideoCardThree = false;
          this.showVideoCardFour = false;
          this.showVideoCardFive = false;
        }
        if (this.shufflePosition == 2) {
          this.showVideoCardOne = false;
          this.showVideoCardTwo = true;
          this.showVideoCardThree = true;
          this.showVideoCardFour = false;
          this.showVideoCardFive = false;
        }
        if (this.shufflePosition == 3) {
          this.showVideoCardOne = false;
          this.showVideoCardTwo = false;
          this.showVideoCardThree = true;
          this.showVideoCardFour = true;
          this.showVideoCardFive = false;
        }
        if (this.shufflePosition == 4) {
          this.showVideoCardOne = false;
          this.showVideoCardTwo = false;
          this.showVideoCardThree = false;
          this.showVideoCardFour = true;
          this.showVideoCardFive = true;
        }
      }
    },
    // shuffle cards
    hideVideoOne() {
      this.showVideoCardOne = false;
    },
    hideVideoTwo() {
      this.showVideoCardTwo = false;
    },
    hideVideoThree() {
      this.showVideoCardThree = false;
    },
    hideVideoFour() {
      this.showVideoCardThree = false;
    },
    hideVideoFive() {
      this.showVideoCardThree = false;
    },
    playVideoOne() {
      this.showVideoOne = true;
      this.showVideoTwo = false;
      this.showVideoThree = false;
      this.showVideoFour = false;
      this.showVideoFive = false;
    },
    playVideoTwo() {
      this.showVideoOne = false;
      this.showVideoTwo = true;
      this.showVideoThree = false;
      this.showVideoFour = false;
      this.showVideoFive = false;
    },
    playVideoThree() {
      this.showVideoOne = false;
      this.showVideoTwo = false;
      this.showVideoThree = true;
      this.showVideoFour = false;
      this.showVideoFive = false;
    },
    playVideoFour() {
      this.showVideoOne = false;
      this.showVideoTwo = false;
      this.showVideoThree = false;
      this.showVideoFour = true;
      this.showVideoFive = false;
    },
    playVideoFive() {
      this.showVideoOne = false;
      this.showVideoTwo = false;
      this.showVideoThree = false;
      this.showVideoFour = false;
      this.showVideoFive = true;
    },
    closeVideoOne() {
      this.hideVideoOne();
      this.showVideoFive = false;
      this.showVideoFour = false;
      this.showVideoOne = false;
      this.showVideoThree = false;
      this.showVideoTwo = false;
      var frame = document.getElementById("playerOne");
      frame.parentNode.removeChild(frame);
    },
    closeVideoTwo() {
      this.hideVideoTwo();
      this.showVideoFive = false;
      this.showVideoFour = false;
      this.showVideoFive = false;
      this.showVideoFour = false;
      this.showVideoTwo = false;
      this.showVideoThree = false;
      this.showVideoOne = false;
      var frame = document.getElementById("playerTwo");
      frame.parentNode.removeChild(frame);
      this.showVideoCardTwo = false;
    },
    closeVideoThree() {
      this.hideVideoThree();
      this.showVideoFive = false;
      this.showVideoFour = false;
      this.showVideoThree = false;
      this.showVideoTwo = false;
      this.showVideoOne = false;
      var frame = document.getElementById("playerThree");
      frame.parentNode.removeChild(frame);
      this.showVideoCardThree = false;
    },
    closeVideoFour() {
      this.hideVideoFour();
      this.showVideoFive = false;
      this.showVideoFour = false;
      this.showVideoThree = false;
      this.showVideoTwo = false;
      this.showVideoOne = false;
      var frame = document.getElementById("playerFour");
      frame.parentNode.removeChild(frame);
      this.showVideoCardThree = false;
    },
    closeVideoFive() {
      this.hideVideoFive();
      this.showVideoFive = false;
      this.showVideoFour = false;
      this.showVideoThree = false;
      this.showVideoTwo = false;
      this.showVideoOne = false;
      var frame = document.getElementById("playerFive");
      frame.parentNode.removeChild(frame);
      this.showVideoCardThree = false;
    },
  },
  mounted() {
    console.log("video");
  },
  created() {
    console.log("video created");
  },
};
</script>

<style scoped>
@import "@/assets/main.css";
.wrapper {
  background-color: whitesmoke;
  padding-top: 0.5%;
  padding-bottom: 0.5%;
  padding-left: 0px;
  margin: 0;
  font-family: Verdana, sans-serif;
}

.header-text {
  color: rgb(128, 128, 128, 0.7);
  font-size: 0.9em;
  font-weight: 600;
  padding-top: 1%;
}

.card-text {
  color: rgba(37, 37, 37, 0.7);
  font-size: 0.8em;
  font-weight: 600;
  padding-top: 5px;
  padding-right: 5px;
  padding-left: 7px;
  width: 65%;
}
.process {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.process img {
  width: 75px;
  padding-left: 12px;
}

.shuffle-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
}
.shuffle-left-btn {
  width: 30px;
  height: 30px;
  border: none;
  background: url(@/assets/images/wireLeftBtn.png) 0px 0px no-repeat;
  background-size: 30px 30px;
  background-color: whitesmoke;
  margin-top: 0px;
}

.shuffle-right-btn {
  width: 30px;
  height: 30px;
  border: none;
  background: url(@/assets/images/wireRightBtn.png) 0px 0px no-repeat;
  background-size: 30px 30px;
  background-color: whitesmoke;
  margin-top: 0px;
}

.play-btn {
  width: 65px;
  height: 65px;
  border: none;
  background: url(@/assets/images/play.png) 0px 0px no-repeat;
  background-size: 65px 65px;
  background-color: transparent;
  margin-top: -24px;
}

.shuffle-down-btn {
  color: rgb(31, 30, 30);
  font-weight: 600;
  width: 65px;
  height: 25px;
  border: none;
  background: url(@/assets/images/shuffle-down-btn.png) 0px 0px no-repeat;
  background-size: 65px 25px;
  background-color: whitesmoke;
  margin-top: 0px;
}

.shuffle-up-btn {
  color: rgb(31, 30, 30);
  font-weight: 600;
  width: 65px;
  height: 25px;
  border: none;
  background: url(@/assets/images/shuffle-up-btn.png) 0px 0px no-repeat;
  background-size: 65px 25px;
  background-color: whitesmoke;
  margin-top: 0px;
}

.player {
  position: fixed;
  z-index: 25;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgb(10, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 56.25%;
}
.video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.video-control-bar {
  display: flex;
  justify-content: right;
  width: 100%;
  border-radius: 0pt;
  background-color: rgb(211, 210, 210, 0);
  padding: 0px;
  margin-top: 3vh;
}

.play-text {
  color: rgb(128, 128, 128, 0.7);
  font-size: 0.9em;
  font-weight: 600;
  margin-left: 0px;
  padding-top: 10px;
}

@media only screen and (min-width: 1025px) {
  .shuffle-vertical-container {
    display: none;
  }
  .shuffle-horizontal-container {
    color: black;
    display: flex;
    flex-direction: row;
    background-color: white;
  }

  .video-one-close {
    color: white;
    background-color: rgb(11, 0, 0);
    padding: 8px;
  }
  .container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .card-wrapper {
    display: flex;
    flex-direction: row;
    border: 2px solid rgb(128, 128, 128, 0.3);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding-top: 15px;
    padding-bottom: 15px;
    width: 30vw;
    min-height: 20%;
  }

  .play-button-row {
    display: flex;
    justify-content: start;
    width: 90%;
  }

  .why-text-wrapper {
    margin-bottom: 1%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .why-text {
    font-size: 2.1em;
    font-weight: 600;
    font-family: Verdana, sans-serif;
    margin-top: 2%;
    margin-bottom: 2%;
    color: rgba(2, 19, 95, 0.7);
  }
}
@media only screen and (min-width: 768px) and (max-width: 1024px) {
  .shuffle-vertical-container {
    display: none;
  }
  .shuffle-horizontal-container {
    color: black;
    display: flex;
    flex-direction: row;
    background-color: white;
  }
  .video-one-close {
    color: white;
    background-color: rgb(11, 0, 0);
    padding: 8px;
    margin-right: 25px;
  }
  .container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .card-wrapper {
    display: flex;
    flex-direction: row;
    border: 2px solid rgb(128, 128, 128, 0.3);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding-top: 15px;
    padding-bottom: 15px;
    width: 40vw;
  }
  .play-button-row {
    display: flex;
    justify-content: start;
    width: 90%;
    margin-bottom: 25%;
  }
  .why-text-wrapper {
    margin-bottom: 1%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .why-text {
    font-size: 1.6em;
    font-weight: 600;
    font-size: 2.1em;
    font-weight: 600;
    font-family: Verdana, sans-serif;
    margin-top: 2%;
    margin-bottom: 2%;
    color: rgba(2, 19, 95, 0.7);
  }
}
@media only screen and (min-width: 360px) and (max-width: 767px) and (-webkit-device-pixel-ratio: 2) {
  .shuffle-vertical-container {
    color: black;
    display: flex;
    flex-direction: row;
    background-color: white;
  }
  .shuffle-horizontal-container {
    display: none;
  }
  .video-one-close {
    color: white;
    background-color: rgb(11, 0, 0);
    padding: 8px;
  }
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .card-wrapper {
    display: flex;
    flex-direction: row;
    border: 2px solid rgb(128, 128, 128, 0.3);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 15px;
    padding-bottom: 15px;
    margin-left: 0px;
    margin-right: 0px;
  }
  .play-button-row {
    display: flex;
    justify-content: start;
    width: 90%;
    margin-bottom: 25%;
  }

  .why-text-wrapper {
    margin-bottom: 1%;
    display: flex;
    flex-direction: column;
  }
  .why-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 0.9em;
    font-weight: 600;
    font-family: Verdana, sans-serif;
    margin-top: 2%;
    margin-bottom: 2%;
    color: rgba(2, 19, 95, 0.7);
  }
}
@media only screen and (min-width: 360px) and (max-width: 767px) {
  .shuffle-vertical-container {
    color: black;
    display: flex;
    flex-direction: row;
    background-color: white;
  }
  .shuffle-horizontal-container {
    display: none;
  }
  .video-one-close {
    color: white;
    background-color: rgb(11, 0, 0);
    padding: 8px;
  }
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
  }
  .card-wrapper {
    display: flex;
    flex-direction: row;
    border: 2px solid rgb(128, 128, 128, 0.3);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    width: 90vw;
    padding-left: 0px;
    padding-right: 0px;
    margin-left: 0px;
    margin-right: 0px;
    padding-top: 15px;
    padding-bottom: 15px;
  }
  .play-button-row {
    display: flex;
    justify-content: start;
    width: 90%;
    margin-bottom: 5%;
  }
  .why-text-wrapper {
    margin-bottom: 1%;
    display: flex;
    flex-direction: column;
  }
  .why-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 2.1em;
    font-weight: 600;
    font-family: Verdana, sans-serif;
    margin-top: 0.5%;
    margin-bottom: 0px;
    color: rgba(2, 19, 95, 0.7);
  }
}
</style>
