import Vue from "vue";
import VueRouter from "vue-router";
import list from "./list";
import show from "./show";
import star from "./star";
import imgCon from "./imgCon";
import price from "./price";
import search from "./search"
Vue.use(VueRouter);


export default new VueRouter({
    routes:[
        {
            path:"/",
            redirect:"/list",
        },
        list,
        show,
        star,
        imgCon,
        price,
        search
    ]
})

