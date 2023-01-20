import {createRouter, createWebHistory} from 'vue-router';
import BasePage from '@/components/organisms/BasePage.vue';

import {getNumberOfImages} from '@/helpers/getNumberOfImages';

const PATH_TO_FIRST_SLIDE = '/slide/1';

const routes = [
  {
    path: '/slide/:photoNumber',
    name: 'Slide',
    component: BasePage,
    props: true,
    beforeEnter: (to, from, next) => {
      const {photoNumber} = to.params;
      const numberOfImages = getNumberOfImages();

      const parsedPhotoNumber = parseInt(photoNumber, 10);

      const isItPossibleToGoToNextRoute =
        !isNaN(parsedPhotoNumber) &&
        numberOfImages >= 1 &&
        photoNumber <= numberOfImages &&
        photoNumber > 0;

      if (isItPossibleToGoToNextRoute) {
        next();
      } else {
        next(PATH_TO_FIRST_SLIDE);
      }
    },
  },
  {
    path: '/:catchAll(.*)',
    redirect: PATH_TO_FIRST_SLIDE,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
