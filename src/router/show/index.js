export default {
    path:"/show/:id",
    component:()=>import("views/show"),
    meta:{
        title:"演出详情"
    },
    name:"show",
   props:true
}