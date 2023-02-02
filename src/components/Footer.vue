<template>
  <div class="footer-wrapper">
    <div class="column-wrapper">
      <div class="foot-column">
        <div class="trademark">
          <img src="../assets/images/pie_logo.png" class="logo" />
          <div class="column-header">&#169;</div>
        </div>
      </div>
      <div class="foot-column">
        <div class="column-header">Pie Cities</div>
        <div>San Francisco</div>
        <div>Los Angeles</div>
        <div>Chicago</div>
        <div>New York</div>
        <div>Atlanta</div>
        <div>Washington D.C.</div>
        <div>Dallas</div>
        <div>Miami</div>
        <div>Philadelphia</div>
      </div>
      <div class="foot-column">
        <div class="column-header">Resources</div>
        <div>Pie Health</div>
        <div>Pie Training</div>
        <div>Pie Solar</div>
        <div>Pie Medical</div>
        <div>Pie Finance</div>
        <div>Pie Activities</div>
        <div>Pie Travel</div>
        <div>Pie Space</div>
      </div>
      <div class="foot-column">
        <div class="column-header">About Pie</div>
        <div>Trust and Safety</div>
        <div>Do not share my info</div>
        <div>Community guidelines</div>
        <div>Pie Partners Press</div>
        <div>Investors</div>
        <div>Careers</div>
      </div>
      <div class="foot-column">
        <div class="column-header">Lifestyles</div>
        <div>Pokhara</div>
        <div>Mountain Trekking</div>
        <div>Parks</div>
        <div>Trail</div>
        <div>Asia</div>
      </div>
    </div>
    <div class="foot-soul">
      <div>© 2023 GetPie.io, Inc. All rights reserved.</div>
      <div>Privacy policy</div>
      <div>CA Privacy</div>
      <div>Terms & conditions</div>
      <div>Accessibility</div>
      <div>Transparency</div>
      <div class="social">
        <a href="#" class="fa fa-facebook"></a>
        <a href="#" class="fa fa-twitter"></a>
        <a href="#" class="fa fa-google"></a>
        <a href="#" class="fa fa-linkedin"></a>
        <a href="#" class="fa fa-youtube"></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footer-content",
  data: () => ({
    yourMake: "$67,500",
  }),
  methods: {
    volumeSlide(event) {
      // console.log("call slider ", event.target.value);
      this.volume = event.target.value * 500;
    },
  },
};
</script>

<style socped>
.footer-wrapper {
  background-color: rgb(211, 211, 211, 0.7);
  margin: 0px;
  padding: 0px;
}
.column-wrapper {
  display: flex;
  flex-direction: row;
  padding: 1%;
  border-bottom: 1px solid grey;
}
.foot-column {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: black;
  font-size: 0.8em;
  font-weight: 400;
  padding: 1%;
  min-width: 15%;
}
.column-header {
  color: rgb(8, 171, 19);
  font-size: 1.5em;
  font-weight: 600;
  padding: 1%;
}
.trademark {
  display: flex;
  padding-right: 10%;
  margin-right: 10%;
}
.logo {
  width: 200px;
}

.fa {
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 9px;
  padding-bottom: 2px;
  font-size: 20px;
  width: 30px;
  height: 30px;
  text-decoration: none;
  margin: 0;
  border-radius: 30pt;
}

.fa:hover {
  opacity: 0.7;
}

.fa-facebook {
  background: #3b5998;
  color: white;
}

.fa-twitter {
  background: #55acee;
  color: white;
}

.fa-google {
  background: #dd4b39;
  color: white;
}

.fa-linkedin {
  background: #007bb5;
  color: white;
}
.fa-youtube {
  background: #bb0000;
  color: white;
}
@media only screen and (min-width: 1025px) {
  .foot-soul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: black;
    font-size: 0.8em;
    font-weight: 400;
    padding: 2%;
  }
  .social {
    margin-top: -6px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 1024px) {
  .trademark {
    display: none;
  }
  .foot-soul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: black;
    font-size: 0.8em;
    font-weight: 400;
    padding: 2%;
  }
  .social {
    margin-top: -6px;
    display: block;
  }
}
@media only screen and (min-width: 360px) and (max-width: 767px) and (-webkit-device-pixel-ratio: 2) {
  .column-wrapper {
    display: none;
    background-color: rgb(211, 211, 211);
  }
  .foot-column {
    display: none;
  }
  .foot-soul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: black;
    background-color: rgb(211, 211, 211);
    font-size: 0.8em;
    font-weight: 400;
    padding: 2%;
    width: 100vw;
  }
  .social {
    margin-top: 10px;
  }
}
@media only screen and (min-width: 360px) and (max-width: 767px) {
  .column-wrapper {
    display: none;
    background-color: rgb(211, 211, 211);
    width: 100vw;
  }
  .foot-column {
    display: none;
  }
  .foot-soul {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: black;
    background-color: rgb(211, 211, 211);
    font-size: 0.8em;
    font-weight: 400;
    padding: 2%;
    width: 100vw;
  }
  .social {
    margin-top: 10px;
  }
}
</style>
