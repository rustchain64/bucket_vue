<template>
  <div class="wrapper">
    <div class="container">
      <div class="process">
        <div class="why-text">
          <div class="why-text">Give Referrals</div>
          <div class="why-text">Get Paid!</div>
        </div>
        <div class="card-text">
          Helping customers is what you do best, so why not get paid for it?
          Other business owners are taking advantage of our program already and
          getting paid to process! Why should the credit card companies keep the
          whole pie when you deserve your piece?
        </div>
      </div>
      <div class="process">
        <img src="../assets/images/ppl/businessOwner.jpg" class="proc-img" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  background-color: whitesmoke;
  padding-top: 2%;
  padding-bottom: 2%;
  margin-top: 0px;
}
.why-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.4em;
  font-weight: 600;
  font-family: Verdana, sans-serif;
  margin-top: 1%;
  margin-bottom: 1%;
  color: rgba(2, 19, 95, 0.7);
}

.header-text {
  color: rgb(128, 128, 128, 0.7);
  font-size: 0.9em;
  font-weight: 600;
  margin-top: 1%;
}

.card-text {
  color: rgba(37, 37, 37, 0.7);
  font-size: 0.8em;
  font-weight: 600;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
}

@media only screen and (min-width: 1025px) {
  .container {
    background-color: whitesmoke;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
  }
  .process {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 48%;
    margin-left: 5%;
  }
  .proc-img {
    padding-left: 10px;
    width: 85%;
  }
}
@media only screen and (min-width: 768px) and (max-width: 1024px) {
  .container {
    background-color: whitesmoke;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
  }
  .process {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 48%;
  }
  .proc-img {
    padding-left: 10px;
    width: 85%;
  }
}
@media only screen and (min-width: 360px) and (max-width: 767px) and (-webkit-device-pixel-ratio: 2) {
  .container {
    background-color: whitesmoke;
    display: flex;
    flex-direction: column;
    align-content: center;
  }
  .process {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .proc-img {
    width: 80vw;
  }
}
@media only screen and (min-width: 360px) and (max-width: 767px) {
  .container {
    background-color: whitesmoke;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .process {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .proc-img {
    width: 80vw;
  }
}
</style>
