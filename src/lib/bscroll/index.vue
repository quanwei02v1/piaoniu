<template>
    <div class="swpper" ref="swpper">
        <slot></slot>
    </div>
</template>

<script>
import bscroll from 'better-scroll'
export default {
    name:'Btscroll',
    mounted()
    {
        this.scroll = new bscroll(this.$refs.swpper,{
            tap:true,
            click:true,
            scrollX:true,
            pullDownRefresh:true,
            pullUpLoad:true,
        })
    },
    methods:{
        handlePullDownRefresh(callback)
        {
            this.scroll.on('pullingDown',()=>{
                callback()
            })
        },
        handlefinishPullDown()
        {
            this.scroll.finishPullDown(); //当下拉刷新数据加载完毕后，需要调用此方法告诉 better-scroll 数据已加载。
            this.scroll.refresh();//重新计算 better-scroll，当 DOM 结构发生变化的时候务必要调用确保滚动的效果正常。
        },
        handlePullUpLoad(callback)
        {
            this.scroll.on('pullingUp',()=>{
                callback()
            })
        },     
        handlefinishPullUp(){
            this.scroll.finishPullUp();
            this.scroll.refresh();
        },
        handleScrollTo(x,y,time=300)
        {
            this.scroll.scrollTo(x,y,time)
        }
    }
}
</script>

<style>
.swpper{
    height: 100%;
    width: 100%
}
</style>
