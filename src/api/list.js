import http from "utils/http.js";

//列表
export const list_api = (pageIndex=1,categoryId=1) => http("get","/api/v3/activities",{pageIndex:pageIndex,categoryId:categoryId})

//出价求购-->票档

export const  price_api = () => http("get","/api/v1/seekOrder/chooseTickets?eventId=370490",)

//出价求购-->场次

export const  price_piao_api = () => http("get","/api/v1/seekOrder/activity/93110")

//正在现场

export const  imgCon_api = (pageIndex=1) => http("get","/api/v1/activityGallery/93110",{pageIndex:pageIndex})

//明星详情

export const  star_api = () => http("get","/api/v1/actor/51")

//演出详情
export const show_api = (id) => http ("get","/api/v3/activities/"+id)

//首页热门
export const home_hot_api = (pageIndex=1,pageSize=10)=> http('get','/api/v2/home/recommends',{pageIndex:pageIndex,pageSize:pageSize})


//城市列表
export const city_api = ()=>http('get','/api/v1/cities')

//搜索
export const histroy_api =(input) =>http("get","/api/v2/activities/suggest",{input:input})

//热门搜索

export const hottest_api=()=>http("get","/api/v1/activities/hottest")
