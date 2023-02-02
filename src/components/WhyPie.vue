<template>
  <div class="wrapper">
    <div class="why-text">Why Pie.io?</div>
    <div class="container">
      <div class="process">
        <img src="../assets/images/process.png" class="proc-img" />
        <div class="header-text">We pay you to process</div>
        <div class="card-text">
          Work with us and we pay you monthly for referrals! Refer when yo want,
          and build a book of business.
        </div>
      </div>
      <div class="process">
        <img src="../assets/images/team-work.png" class="proc-img" />
        <div class="header-text">We do the work</div>
        <div class="card-text">
          Your agent goes to work for you! Your agent will continuously work on
          your book of business to help you grow your business. Get someone
          working for you on your referrals today!
        </div>
      </div>
      <div class="process">
        <img src="../assets/images/income.png" class="proc-img" />
        <div class="header-text">Residual Income</div>
        <div class="card-text">
          As long as your portolio is active and processing you will receive
          monthly residuals forever. This will you pay off expenses or just have
          some extra cash!
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  background-color: whitesmoke;
  padding-top: 0.1%;
  padding-bottom: 0.1%;
  margin: 0;
}
.why-text {
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 2.1em;
  font-weight: 600;
  font-family: Verdana, sans-serif;
  margin-top: 2%;
  margin-bottom: 4%;

  color: rgba(2, 19, 95, 0.7);
}

.header-text {
  color: rgb(2, 19, 95, 0.7);
  font-size: 0.9em;
  font-weight: 600;
  font-family: Verdana, sans-serif;
  padding-top: 1%;
}

.card-text {
  color: rgba(37, 37, 37, 0.7);
  font-size: 0.8em;
  font-weight: 600;
  font-family: Verdana, sans-serif;
  padding: 25px;
}
.process {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.process img {
  width: 60px;
}

@media only screen and (min-width: 1025px) {
  .container {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
  }
}
@media only screen and (min-width: 768px) and (max-width: 1024px) {
  .container {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
  }
}
@media only screen and (min-width: 360px) and (max-width: 767px) and (-webkit-device-pixel-ratio: 2) {
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
  }
}
@media only screen and (min-width: 360px) and (max-width: 767px) {
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
