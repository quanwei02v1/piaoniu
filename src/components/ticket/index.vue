<template>
    <div class="category_picker">
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
    </div>
    
</template>


<script>
import {price_api} from "api/list"
// import axios from "axios"
export default {
    name:"tickets",
    props:["id"],
    async created() {
        if(!sessionStorage.getItem("list")){
            let data= await price_api(this.id);
          this.list=data
            sessionStorage.setItem("list",JSON.stringify(data))
        }
    },
    async activated() {
        if(this.pageId !==this.id){
             let data= await price_api(this.id);
          this.list=data
     sessionStorage.setItem("list",JSON.stringify(data))
          this.pageId=this.id
        }
    },
     data() {
      return {
          pageId:-1,
          flag:0,
          list:[],
         
      }
  },
    methods: {
      clickHandler(index){
            this.flag=index
      },
    },
}
</script>


<style >
    .category_picker{
        padding: 0 .15rem;
    overflow: auto;
    height: 100%;
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
 .max_body .min_body{
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

 .max_body .active{
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
}
</style>