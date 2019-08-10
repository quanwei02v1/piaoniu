export default {
    path:"/star/:id",
    component:()=>import("views/star"),
    meta:{
        title:"明星详情"
    },
    name:"star",
    props:true
}