<template>
  <img :src="require(`@/assets/img/${fileName}`)" alt="Slide" class="image" />
</template>

<script>
export default {
  name: 'BaseImage',
  props: {
    fileName: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.image {
  height: auto;
  width: 100%;
}

@media only screen and (min-width: 801px) {
  .image {
    margin-top: -30%;
  }
}
</style>
