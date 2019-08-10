import http from "utils/http.js";

//列表
export const list_api = (pageIndex) => http("get", "/api/v3/activities", { pageIndex: pageIndex })

//出价求购-->票档

export const price_api = (id) => http("get", "/api/v1/seekOrder/chooseTickets?eventId=" + id)

//出价求购-->场次

export const price_piao_api = (id) => http("get", "/api/v1/seekOrder/activity/" + id)

//正在现场

export const imgCon_api = (id) => http("get", "/api/v1/activityGallery/" + id)

//明星详情

export const star_api = (id) => http("get", "/api/v1/actor/" + id)

//演出详情
export const show_api = (id) => http("get", "/api/v3/activities/" + id)

//热门
 export const hottest_api=()=>http("get","/api/v1/activities/hottest")

 //历史

 export const histroy_api =(input) =>http("get","/api/v2/activities/suggest",{input:input})

 //城市ID

 export const cityID_api =()=>http("get","api/v1/cities")