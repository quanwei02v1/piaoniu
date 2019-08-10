export default {
    path:"/price/:id",
    component:()=>import("views/price"),
    redirect:"price/tickets",
    props:true,
    meta:{
        title:"出价求购"
    },
    name:"Price",
    children:[
        {
            path:"tickets/:id",
            component:()=>import("components/ticket"),
            name:"tickets",
            props:true
        }
    ]
}