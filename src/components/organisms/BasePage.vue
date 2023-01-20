<template>
  <section class="slider">
    <ArrowButton
      @click="changeSlide(-1)"
      :is-disabled="!isAbleToGoToPrevSlide"
    />
    <BaseImage :file-name="fileName" />
    <ArrowButton
      @click="changeSlide(1)"
      :is-disabled="!isAbleToGoToNextSlide"
      is-next
    />
  </section>
  <BaseTitle />
</template>

<script>
import BaseImage from '@/components/molecules/BaseImage.vue';
import ArrowButton from '@/components/atoms/ArrowButton.vue';
import BaseTitle from '@/components/atoms/BaseTitle.vue';
import {onMounted, onUnmounted, ref} from 'vue';
import {computed} from '@vue/reactivity';
import {useRouter} from 'vue-router';

import {getNumberOfImages} from '@/helpers/getNumberOfImages';

export default {
  name: 'BasePage',
  components: {
    BaseImage,
    ArrowButton,
    BaseTitle,
  },
  props: {
    photoNumber: {
      type: String,
      default: '1',
    },
  },
  setup(props) {
    const {push} = useRouter();
    const numberOfImages = getNumberOfImages();

    const slideNumber = ref(+props.photoNumber);

    const isAbleToGoToPrevSlide = computed(() => slideNumber.value !== 1);
    const isAbleToGoToNextSlide = computed(
      () => slideNumber.value !== numberOfImages
    );

    onMounted(() => document.addEventListener('keydown', handleKeyDown));

    onUnmounted(() => document.removeEventListener('keydown', handleKeyDown));

    function handleKeyDown({keyCode}) {
      if (keyCode === 37 && isAbleToGoToPrevSlide.value) {
        changeSlide(-1);
      } else if (keyCode === 39 && isAbleToGoToNextSlide) {
        changeSlide(1);
      }
    }

    function changeSlide(param) {
      slideNumber.value = slideNumber.value + param;
      push(`/slide/${slideNumber.value}`);
    }

    const fileName = computed(() => `${slideNumber.value}.jpg`);
    const captionText = computed(
      () => `${slideNumber.value}/${numberOfImages}`
    );

    return {
      isAbleToGoToPrevSlide,
      isAbleToGoToNextSlide,
      fileName,
      captionText,
      changeSlide,
    };
  },
};
</script>

<style lang="scss">
.slider {
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
}

text {
  position: relative;
  width: 100%;
}
</style>
