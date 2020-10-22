import Vue from 'vue';
import VueRouter from 'vue-router';
import Magnifier from '../views/magnifier';
import Home from '../views/home';
import CheckIn from '../views/checkIn';
import ImgLabel from '../views/img-label';
import SlideCheck from '../views/slide-check';
import Watemark from '../views/watermark';
import Countdown from '../views/countdown';
import Drag from '../views/drag';
import demo from '../views/demo';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/demo',
    component: demo
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '/ImgLabel',
        component: ImgLabel,
      },
      {
        path: '/magnifier',
        component: Magnifier,
      },
      {
        path: '/checkIn',
        component: CheckIn,
      },
      {
        path: '/slide-check',
        component: SlideCheck,
      },
      {
        path: '/watemark',
        component: Watemark,
      },
      {
        path: '/countdown',
        component: Countdown,
      },
      {
        path: '/drag',
        component: Drag,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
