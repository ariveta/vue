<template>
  <section>
    <WeatherSearch />
    <WeatherInfo />
  </section>
</template>

<script>
import WeatherSearch from '@/components/molecules/WeatherSearch.vue';
import WeatherInfo from '@/components/molecules/WeatherInfo.vue';

export default {
  name: 'WeatherApp',
  components: {
    WeatherSearch,
    WeatherInfo,
  },
};
</script>

<style lang="scss" scoped></style>
