<template>
  <section class="information">
    <div class="row">
      <div id="ico"></div>
      <div class="info">
        <div id="city"></div>
        <div id="description"></div>
      </div>
      <div id="temperature"></div>
    </div>
    <div id="wind-speed"></div>
    <div id="kierunek-wiatru"></div>
    <div id="pressure"></div>
    <div id="humidity"></div>
    <div id="cloudiness"></div>
  </section>
</template>

<script>
export default {
  name: 'WeatherInfo',
};
</script>

<style lang="scss" scoped>
.information {
  margin-top: 20px;
  padding: 20px;
  color: rgb(255, 255, 255);
}

.information div {
  margin-bottom: 5px;
  font-size: 14px;
}

#ico img {
  width: 80px;
}

#city {
  font-size: 28px;
}

#temperature {
  font-size: 40px;
}

@media only screen and (max-width: 400px) {
  .information {
    width: 90%;
    margin-left: 5%;
  }
}

@media only screen and (min-width: 400px) {
  .information {
    width: 80%;
    margin-left: 10%;
  }

  #ico {
    display: inline-block;
    width: 15%;
  }

  .info {
    display: inline-block;
    width: 60%;
  }
}

@media only screen and (min-width: 700px) {
  .information {
    width: 70%;
    margin-left: 15%;
  }

  #temperature {
    display: inline-block;
    width: 25%;
  }
}

@media only screen and (min-width: 900px) {
  .information {
    width: 50%;
    margin-left: 25%;
  }

  #temperature {
    display: inline-block;
    width: 25%;
  }
}
</style>
