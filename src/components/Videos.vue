<template>
  <div class="wrapper">
    <div class="why-text">
      <div class="why-text">Hear from Merchants</div>
      <div class="why-text">&nbsp;Like You:</div>
    </div>
    <div class="container">
      <div class="process">
        <div class="card-wrapper">
          <div class="card-text">
            I like getting paid for referrals - it’s an easy way to make some
            extra money every month and all I do is put info into the app.
          </div>
          <svg width="50%" height="25%">
            <mask id="svgmask3">
              <circle fill="#ffffff" cx="75" cy="75" r="75"></circle>
              <!-- <circle fill="#ffffff" cx="80" cy="260" r="75"></circle>
                <circle fill="#ffffff" cx="270" cy="160" r="75"></circle> -->
            </mask>
            <image
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="../assets/images/calito-face.jpg"
              mask="url(#svgmask3)"
            ></image>
          </svg>
        </div>
        <div class="play-button-row">
          <button @click="playVideoOne" class="play-btn">
            <!-- <img src="../assets/images/play.png" /> -->
          </button>
          <div class="play-text">Carlito Marsupus, Dallas TX</div>
        </div>
      </div>

      <div class="process">
        <div class="card-wrapper">
          <div class="card-text">
            I’m already making like $300 a month from referrals. It took awhile
            but my sales rep got everyone set up after I gave him the contacts.
          </div>
          <svg width="50%" height="25%">
            <mask id="svgmask3">
              <circle fill="#ffffff" cx="75" cy="75" r="75"></circle>
              <!-- <circle fill="#ffffff" cx="80" cy="260" r="75"></circle>
                <circle fill="#ffffff" cx="270" cy="160" r="75"></circle> -->
            </mask>
            <image
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="../assets/images/face-one.jpg"
              mask="url(#svgmask3)"
            ></image>
          </svg>
          <!-- <div>
              <img src="../assets/images/face-one.jpg" class="face-img" />
            </div>         -->
        </div>
        <div class="play-button-row">
          <button @click="playVideoTwo" class="play-btn"></button>
          <div class="play-text">Chrisy Bohnam Leeds, UK</div>
        </div>
      </div>
    </div>
    <div class="player" id="playerOne" v-show="showVideoOne == true">
      <iframe
        loading="lazy"
        src="https://www.youtube.com/embed/qEVUtrk8_B4"
        title="John Wick: Chapter 4 (2023 Movie) Official Trailer – Keanu Reeves, Donnie Yen, Bill Skarsgård"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        class="video"
        id="iframe"
        align="middle"
      ></iframe>
      <div class="video-control-bar">
        <button @click="closeVideoOne" class="video-one-close">X</button>
      </div>
    </div>
    <div class="player" id="playerOne" v-show="showVideoTwo == true">
      <iframe
        loading="lazy"
        src="https://www.youtube.com/embed/qY8xhCmwKOg"
        title="MISSION IMPOSSIBLE 7 (2023) Dead Reckoning Part One - NEW TRAILER | Tom Cruise & Hayley Atwell Movie"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        class="video"
        id="iframe"
        align="middle"
      ></iframe>
      <div class="video-control-bar">
        <button @click="closeVideoTwo" class="video-one-close">X</button>
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
  }),
  methods: {
    playVideoOne() {
      this.showVideoOne = true;
      this.showVideoTwo = false;
    },
    playVideoTwo() {
      this.showVideoTwo = true;
      this.showVideoOne = false;
    },
    closeVideoOne() {
      this.showVideoTwo = false;
      this.showVideoOne = false;
      const iframe = document.querySelector("iframe");
      iframe.remove();
    },
    closeVideoTwo() {
      this.showVideoTwo = false;
      this.showVideoOne = false;
      const iframe = document.getElementById("playerTwo");
      iframe.removeChild();
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
.wrapper {
  background-color: whitesmoke;
  padding-top: 0.5%;
  padding-bottom: 0.5%;
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
  padding: 15px;
  width: 60%;
}
.process {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.process img {
  width: 80px;
  padding-left: 15px;
}

.play-btn {
  color: rgb(31, 30, 30);
  font-weight: 600;
  width: 65px;
  height: 65px;
  border: none;
  background: url(@/assets/images/play.png) 0px 0px no-repeat;
  background-size: 65px 65px;
  background-color: transparent;
  margin-top: -24px;
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
  background-color: rgb(211, 210, 210, 0.1);
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
  .video-one-close {
    color: white;
    background-color: rgb(11, 0, 0);
    padding: 8px;
  }
  .container {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .card-wrapper {
    display: flex;
    flex-direction: row;
    border: 2px solid rgb(128, 128, 128, 0.3);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding-left: 0.5%;
    padding-right: 0.5%;
    padding-top: 15px;
    padding-bottom: 15px;
    margin-left: 1%;
    margin-right: 1%;
  }

  .play-button-row {
    display: flex;
    justify-content: start;
    width: 90%;
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
    color: rgba(2, 19, 95, 0.7);
  }
}
@media only screen and (min-width: 768px) and (max-width: 1024px) {
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
  }
  .card-wrapper {
    display: flex;
    flex-direction: row;
    border: 2px solid rgb(128, 128, 128, 0.3);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding-left: 0.5%;
    padding-right: 0.5%;
    padding-top: 15px;
    padding-bottom: 15px;
    margin-left: 1%;
    margin-right: 1%;
  }
  .play-button-row {
    display: flex;
    justify-content: start;
    width: 90%;
    margin-bottom: 25%;
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
    color: rgba(2, 19, 95, 0.7);
  }
}
@media only screen and (min-width: 360px) and (max-width: 767px) and (-webkit-device-pixel-ratio: 2) {
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
    padding-left: 1%;
    padding-right: 1%;
    padding-top: 15px;
    padding-bottom: 15px;
  }
  .play-button-row {
    display: flex;
    justify-content: start;
    width: 90%;
    margin-bottom: 25%;
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
    color: rgba(2, 19, 95, 0.7);
  }
}
@media only screen and (min-width: 360px) and (max-width: 767px) {
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
    padding-left: 1%;
    padding-right: 1%;
    padding-top: 15px;
    padding-bottom: 15px;
  }
  .play-button-row {
    display: flex;
    justify-content: start;
    width: 90%;
    margin-bottom: 5%;
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
    color: rgba(2, 19, 95, 0.7);
  }
}
</style>
