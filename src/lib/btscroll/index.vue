<template>
  <div class="BtWapper" ref="BtWapper">
    <slot></slot>
  </div>
</template>


<script>
import BtScroll from "better-scroll";
export default {
  name: "BetScroll",
  mounted() {
  this.scroll=  new BtScroll(this.$refs.BtWapper, {
      click: true,
      pullDownRefresh:true,
      pullUpLoad:true,
      tap: true,
      scrollX:true
    })
    
    },
    methods: {
      //下拉刷新加载数据
      pullDownHandler(callback){
        this.scroll.on("pullingDown",()=>{
            callback()
        })
      },
       //下拉刷新加载数据通知better-scroll
      finishPullDownHandler(){
          this.scroll.finishPullDown();
          this.scroll.refresh()
      },
      //上拉加载
      pullUploadHandler(callback){
        this.scroll.on("pullingUp",()=>{
            callback()
        })
      },
      finishPullUpHandler(){
        this.scroll.finishPullUp();
        this.scroll.refresh()
      }
  }
};
</script>


<style>
.BtWapper {
  height: 100%;
  width: 100%;
}
</style>