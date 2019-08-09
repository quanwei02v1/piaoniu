<template>
    <div class="page_box">
        <div class="navbar">
            <div class="nav_con" @click="clickHandler()">
            <b></b>
        </div>
        <div class="nav_content">正在现场</div>
        </div>
        <div class="gallery_list">
            <ul>
                <li class="item" v-for="(item,index) in list" :key="index">
                    <img :src="item.url" alt="">
                </li>
            </ul>
        </div>
    </div>
</template>



<script>
// import axios from "axios";
import {imgCon_api} from "api/list"
export default {
name:"imgCons",
async created() {
    let data=await imgCon_api()
      this.list=data.data;
        document.title = this.$route.meta.title;
    },
data() {
    return {
        list:[],
    }
},
methods: {
    clickHandler(){
       this.$router.back()
    }
  },
}
</script>



<style>
.page_box{
    height: 100%;
}
.page_box .navbar {
  height: .44rem;
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
}
 .page_box .nav_con {
  align-items: center;
  top: initial;
  bottom: 0;
  width: 0.44rem;
  height: 100%;
  display: flex;
}
.page_box .nav_con > b {
  width: 0.11rem;
  height: 0.19rem;
  background: url("./img/back.png") no-repeat;
  background-size: 100%;
  margin-left: 0.15rem;
}
  .page_box .nav_content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: 0.44rem;
  max-width: 2rem;
  margin: 0 auto;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 0.18rem;
  color: #525252;
  font-weight: 500;
}
.page_box .gallery_list{
        box-sizing: border-box;
    padding: .05rem;
    position: fixed;
    top: .44rem;
    bottom: 0;
    width: 100%;
    overflow: auto;
}
.page_box .gallery_list>ul{
        margin-right: -2%;
    margin-bottom: .05rem;
    zoom: 1;
}
.page_box .item{
        padding-top: 32%;
    width: 32%;
    float: left;
    position: relative;
    margin-right: 1%;
    margin-bottom: 1%;
}
.page_box .item>img{
    position: absolute;
    background-position: center;
    background-size: cover;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>
