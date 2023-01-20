<template>
  <div class="search-engine">
    <input type="text" placeholder="Wpisz miasto" id="lookingFor" />
    <button id="search">
      <img src="@/assets/img/loupe.svg" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'WeatherSearch',
};
</script>

<style lang="scss" scoped>
.search-engine {
  border-radius: 50px;
  margin-top: 20px;
  background-color: rgba(0, 0, 0, 0.5);
}

input {
  padding: 20px;
  background: transparent;
  border: 0px;
  border-radius: 50px;
  color: rgb(255, 255, 255);
}

input:focus {
  border: 10px;
}

button {
  background: transparent;
  border: 0px;
  border-radius: 50px;
}

button:hover {
  cursor: pointer;
}

button img {
  min-width: 20px;
  max-width: 20px;
  margin-bottom: -5px;
  margin-left: 5px;
  filter: invert(1);
}

@media only screen and (max-width: 420px) {
  .search-engine {
    width: 90%;
    margin-left: 5%;
  }

  input {
    width: 85%;
  }
}

@media only screen and (min-width: 420px) {
  .search-engine {
    width: 60%;
    margin-left: 20%;
  }

  input {
    width: 88%;
  }
}

@media only screen and (min-width: 820px) {
  .search-engine {
    width: 40%;
    margin-left: 30%;
  }

  input {
    width: 92%;
  }
}
</style>
