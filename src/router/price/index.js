export default {
    path:"/price",
    component:()=>import("views/price"),
    redirect:"price/tickets",
    meta:{
        title:"出价求购"
    },
    name:"price",
    children:[
        {
            path:"tickets",
            component:()=>import("components/ticket"),
            name:"tickets",
        }
    ]
}