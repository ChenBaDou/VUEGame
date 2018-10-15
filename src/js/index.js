'use strict';
import appRouter from '../js/common/router';

Vue.use(VueRouter);

const router = new VueRouter(appRouter);

new Vue({
    el: '#app',
    router: router
});
