import Vue from 'vue'
import Router from 'vue-router'
import home from './home'
import free from './free'
import rush from './rush'
import venue from './venue'

import list from "./list";
import show from "./show";
import star from "./star";
import imgCon from "./imgCon";
import price from "./price";


import citylist from './city'
import search from './search'
Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    home,
    free,
    rush,
    venue,
    list,
    show,
    star,
    imgCon,
    price,
    citylist,
    search
  ]
})
