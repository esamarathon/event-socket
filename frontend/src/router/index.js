import Vue from 'vue';
import Router from 'vue-router';
import EventLog from '@/components/EventLog';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'EventLog',
      component: EventLog,
    },
  ],
});
