<template>
  <router-view />
  <WeatherApp />
</template>

<script>
import WeatherApp from './components/organisms/WeatherApp.vue';

export default {
  name: 'App',
  components: {
    WeatherApp,
  },
};
</script>

<style lang="scss">
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  font-size: 62.5%;
}
body {
  font-family: 'Lato', sans-serif;
  box-sizing: border-box;
  background-color: rgb(0, 38, 87);
}
</style>
