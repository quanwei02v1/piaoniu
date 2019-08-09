<template>
  <div class="page_nav">
     <Head title="选择商品3"/>
    <div class="picker">
      <p>选择场次</p>
      <div class="header">
        <b>{{str}}</b>
      </div>
    </div>
   <!-- <div class="category_picker">
        <p class="choosed">选择票档</p>
        <div class="max_body">
            <div :class="  flag == index ? 'active' : 'min_body'" 
            v-for="(item,index) in list" 
            :key="index"
            @click="clickHandler(index)"
            >
                <div class="spec">{{item.specification}}</div>
                <span></span>
                <div class="seek_desc">
                    <div class="part">
                        <div class="part_title">最高出价</div>
                        <div class="num"><span>￥</span>{{item.seekHighestPrice}}</div>
                    </div>
                    <div class="part">
                        <div class="part_title">出价人数</div>
                        <div class="num">{{item.seekTotalNum}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div> -->
    <keep-alive>
    <router-view></router-view>
    </keep-alive>
    <div class="bottom_bar">
        <div class="btn_confirm">确定</div>
    </div>
  </div>
</template>



<script>
// import axios from "axios";
// import {price_api} from "api/list";
import {price_piao_api} from "api/list"
// export default {
//   name: "Price",
//  async created() {
//         document.title = this.$route.meta.title;
//     let data = await price_api();
//       this.list=data;
//       // console.log(this.list)

//     let mst=await price_piao_api();
//     // console.log(mst,111)
//       this.str=mst;
//     },
//   data() {
//       return {

//           flag:0,
//           list:[],
//           str:[],
//       }
//   },
//   methods: {
//       clickHandler(index){
//             this.flag=index
//       },
//     handlerClick(){
//        this.$router.back()
//     }
//   },
// }

export default {
  name: "Price",
  data() {
        return {
             str:"",
        }
    },
    methods: {
         handlerClick(){
       this.$router.back()
    }
    },
    async created() {
        let data= await price_piao_api();
        // console.log(data.events[0].specification)
        this.str=data.events[0].specification
    },
}
</script>


<style>
.page_nav {
  height: 100%;
  width: 100%;
  background-color: #fff;
  top: 0;
  box-sizing: border-box;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15);
  position: fixed;
  left: 0;
  z-index: 10;
}

.nav_head {
 height: .44rem;
  display: flex;
  align-items: center;
}
 .nav_head > p {
  position: absolute;
  right: 0.16rem;
  background: url("./img/wen.jpg") no-repeat;
  width: 0.18rem;
  height: 0.19rem;
  background-size: 100%;
}
 .nav_con {
  align-items: center;
  top: initial;
  bottom: 0;
  width: 0.44rem;
  height: 100%;
  display: flex;
}
 .nav_con > b {
  width: 0.11rem;
  height: 0.19rem;
  background: url("./img/back.png") no-repeat;
  background-size: 100%;
  margin-left: 0.15rem;
}
 .nav_content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: 0.44rem;
  max-width: 2rem;
  margin: 0 auto;
  position: absolute;
  left: 0;
  right: 0;
  font-size: 0.17rem;
  color: #525252;
}
 .picker {
  padding: 0 15px;
  background-color: #fff;
  overflow: hidden;
}
.picker > p {
  text-align: left;
  color: #262626;
  font-size: 0.14rem;
  font-weight: bold;
  padding-top: 0.2rem;
  padding-bottom: 0.13rem;
  margin-right: 0.06rem;
}
 .header > b {
  position: relative;
  color: #ff2661;
  font-size: 0.14rem;
  text-align: left;
  font-weight: 500;
}
 .header {
  background-color: #fff1f4;
  margin-bottom: 0.12rem;
  padding: 0.12rem;
  border-radius: .04rem;
}
 /*.category_picker{
        padding: 0 .15rem;
    overflow: hidden;
}
 .choosed{
    text-align: left;
    color: #262626;
    font-size: .14rem;
    font-weight: bold;
    padding-top: .2rem;
    padding-bottom: .13rem;
    margin-right: .06rem;
}
 .max_body{
        overflow: scroll;
    position: relative;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}
 .min_body{
        width: 1.65rem;
        position: relative;
    background-color: #f8f8f8;
        margin-right: .07rem;
            display: flex;
                border-radius: .04rem;
    padding: .12rem 0;
    margin-bottom: .12rem;
    box-sizing: border-box;
        flex-flow: column;
}

 .active{
    width: 1.65rem;
        position: relative;
    background-color: #f8f8f8;
        margin-right: .07rem;
            display: flex;
                border-radius: .04rem;
    padding: .12rem 0;
    margin-bottom: .12rem;
    box-sizing: border-box;
        flex-flow: column;
    color: #ff2661;
    background-color: #FFF1F4;
}
 .spec{
    font-size: .15rem;
    text-align: left;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: .05rem .12rem;
}
.min_body span:before{
        content: " ";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 1px;
    border-top: 1px solid #E6E6E6;
    color: #d9d9d9;
    transform-origin: 0 0;
    transform: scaleY(0.5);
    z-index: 1;
    display: block;
    width: auto;
}
 .min_body span{
    position: relative;
}
 .seek_desc{
        justify-content: space-between;
    padding-top: .05rem;
    line-height: 1;

    display: flex;
        font-size: .12rem;
}
 .part{
        flex: 1;
    padding-left: .12rem;
    box-sizing: border-box;
}

.num{
    margin-top: .03rem
} */
 .bottom_bar{
        position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    box-shadow: 0px 0px .05rem 0px #e6e6e6;
    background-color: #fff;
    z-index: 10;
}
 .btn_confirm{
    margin: .06rem .16rem;
    text-align: center;
    background-color: #ff2661;
    color: #fff;
    line-height: .4rem;
    font-weight: 500;
    border-radius: .22rem;
    width: 100%;
    font-size: .14rem
} 
</style>