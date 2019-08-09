<template>
  <div class="home">
    <!-- 头部搜索 -->
    <div class="header">
     <router-link class="city-picker" tag='div' to='/cityList'>
       {{cityName}}
     </router-link>
     <v-touch class="ui-searchbox" tag='div' @tap="handlerToSearch()">
       <form action="">
         <input type="text" class="search-input" placeholder="搜索">
       </form>
     </v-touch>
     <div class="person-wrap">
       <a href="#"><i class="iconfont icon-yuebao"></i></a>
     </div>
    </div>
    <!-- 轮播图 -->
    <div class="banner">
      <Slider :list="sliders" :loop="true" v-if="sliders.length" width="100%" ></Slider>
    </div>
    <!-- 导航列表 -->
    <div class="home-entries">
      <div class="main-categories">
        <router-link tag="a" to="/list" class="entry">
          <img src="../../../public/img/list1.png" alt="" class="icon">
          <div class="title">演唱会</div>
        </router-link>
        <router-link tag="a" to="/list" class="entry">
          <img src="../../../public/img/list2.png" alt="" class="icon">
          <div class="title">话剧歌剧</div>
        </router-link>
        <router-link tag="a" to="/list" class="entry">
          <img src="../../../public/img/list3.png" alt="" class="icon">
          <div class="title">休闲展览</div>
        </router-link>
        <router-link tag="a" to="/list" class="entry">
          <img src="../../../public/img/list4.png" alt="" class="icon">
          <div class="title">体育赛事</div>
        </router-link>
        <router-link tag="a" to="/list" class="entry">
          <img src="../../../public/img/list5.png" alt="" class="icon">
          <div class="title">音乐会</div>
        </router-link>
      </div>
    </div>
    <!-- 广告 -->
    <div class="operating-position">
      <div class="operating-position-item">
        <div class="title-wrap">
          <div class="main-title"></div>
          <div class="sub-title">0元看周杰伦</div>
        </div>
        <div class="poster-wrap">
          <div class="top-text"></div>
          <div class="poster"></div>
        </div>
      </div>
      <div class="operating-position-item">
        <div class="title-wrap">
          <div class="main-title"></div>
          <div class="sub-title">限时限量抢</div>
        </div>
        <div class="poster-wrap">
          <div class="top-text"></div>
          <div class="poster"></div>
        </div>
      </div>
    </div>
    <!-- 服务保障 -->
    <div class="service-entry">
      <div class="title">服务保障</div>
      <div class="services">
        <div class="service-item">
          <span>无票赔付</span>
          <span class="line"></span>
        </div>
        <div class="service-item">
          <span>出票保真</span>
          <span class="line"></span>
        </div>
        <div class="service-item">
          <span>配送保障</span>
          <span class="line"></span>
        </div>
      </div>
    </div>
    <!-- 近期热门 -->
    <div class="activity-floor">
      <div class="head">
        <div class="title">
          近期热门
        </div>
        <a href="#" class="more">全部</a>
      </div>
      <div class="activities">
        <div class="wrap">
          <div v-for="(item,index) in homehotlist" 
              :key="index" 
              class="activity-floor-item">
            <!-- <a href="jav"> -->
              
                <div 
                @click="handleshow(item.recommendContent.id)" 
                class="poster" 
                :style="{backgroundImage:'url('+item.recommendContent.poster+')'}">
                </div>
                <div class="name">{{item.recommendContent.shortname}}</div>
                <div class="price">
                  <span class="price-num">￥{{item.recommendContent.lowPrice}}</span>
                  <span class="price-desc">起</span>
                </div>

            <!-- </a> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'
import {home_hot_api} from "api/list"
import {mapState} from 'vuex'
export default {
  name: 'home',
  computed:{
    ...mapState({
      cityName:state=>state.city.cityName,
      cityId:state=>state.city.cityId
    })
  },
  data(){
    return {
      homehotlist:[],
      indexp:-1,
      sliders:[
        {
          linkUrl:'http://y.qq.com/w/album.html?albummid=001RsOK33No4Sz&ADTAG=myqq&from=myqq&channel=10007100',
          picUrl:'https://img.piaoniu.com/misc/0a96578c4b26ee93e852d29d92fa4c1500a96ed9.png?imageView2/2/w/750/h/350/format/jpg/q/80'
        },
        {
          linkUrl:'https://y.qq.com/msa/270/0_5102.html?ADTAG=myqq&from=myqq&channel=10007100',
          picUrl:'https://img.piaoniu.com/misc/e509d97f93cbe0bf611752dbc4bfd8a9362e9cd2.png?imageView2/2/w/750/h/350/format/jpg/q/80'
        },
        {
          linkUrl:'https://y.qq.com/m/client/music_headline/index.html?_hidehd=1&_button=2&zid=689728&ADTAG=myqq&from=myqq&channel=10007100',
          picUrl:'https://img.piaoniu.com/misc/66f00d9c205d2f483c8c5f456f9a76e1ec3dcf11.jpg?imageView2/2/w/750/h/350/format/jpg/q/80'
        },
      ]
    }
  },
  async created(){
    if(this.indexp != this.cityId)
    {
      let data = await home_hot_api()
      this.indexp = this.cityId
      this.homehotlist = data.data.filter((item,index)=>{
          return item.recommendContent.categoryId !=8 
      });
    }   
  },
  methods:{
    handleshow(id)
    {
      this.$router.push({name:'Show',params:{id}})
    },
    handlerToSearch()
    {
      this.$router.push('/Search')
    }
  }
}
</script>
<style>
.home{
  width: 100%;
  height: 100%;
}

/* 头部 */
.home .header{
  width: inherit;
  height:.44rem;
  overflow: hidden;
  display:-webkit-box;
  -webkit-box-align: center;
}
.header .city-picker{
  color:#262626;
  font-weight: bold;
  font-size: .14rem;
  padding-left: .16rem;
  padding-right: .12rem;
}
.header .ui-searchbox{
  -webkit-box-flex: 1;
  border-radius: .2rem;
  overflow: hidden;
  height: .34rem;
  line-height: .34rem;
  margin: .05rem .08rem;
  background: #f5f5f5;
}
.header .search-input{
  outline: none;
  color:#8f8f8f;
  width: 100%;
  box-sizing: border-box;
  border: none;
  padding: 0 .15rem;
  background-color: transparent;
}
.header .person-wrap{
  display: flex;
  align-items: center;
  justify-content:center;
  width:.47rem;
  height: .44rem;
}
/* 轮播图 */
.banner{
  /* position: relative; */
  margin: .16rem .16rem 0;
}
.banner .indicator{
  position:absolute;
  width: 100%;
  bottom: .05rem;
  z-index: 5;
}
.banner .inner{
  text-align: center;
  margin: 0 auto;
}
.banner .inner .item{
  width: .1rem;
  height: .02rem;
  opacity: .4;
  border-radius: 1.5px;
  background-color:#fff;
  margin-right: .07rem;
  display: inline-block;
}
.banner .swipe{
  border-radius: .05rem;
}
.banner .banner-img{
  height: 1.04rem;
  background-image: url('../../../public/img/bg.png');
  background-size: 100% 100%;
  background-position: 50%;
  border-radius:.05rem;
}
/* 导航列表 */
.home-entries{
 background-color: #fff;
 padding: 2px .16rem 0;
 box-sizing: border-box;
 display: flex;
 flex-wrap: nowrap;
 width:100%
}
.home-entries .main-categories{
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.home-entries .entry{
  display: inline-block;
  margin-top: .22rem;
}
.home-entries .entry .icon{
  width: .42rem;
  height: .42rem;
  margin:0 auto;
  margin-bottom: .1rem;
}
.home-entries .entry .title{
  font-size: .13rem;
  line-height: .16rem;
  color: #444;
}
/* 广告 */
.operating-position{
  margin: 6.4vw 4.2vw 0;
  display:flex;
  justify-content:center;
 
}
.operating-position .operating-position-item{
  width: 44vw;
  height: 18vw;
  box-shadow: 0 2px 6px 0 rgba(0,0,0,.07);
  border-radius: 1.6vw;
  overflow: hidden;
   position:relative;
}
.operating-position .title-wrap{
  width: 22vw;
  padding-left: 3vw;
  padding-top:4vw;
}
.operating-position .title-wrap .main-title{
  background-image: url('../../../public/img/0cj.png');
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  margin-bottom: 1.8px;
  height: 3.7vw;
  
}
.operating-position .title-wrap .sub-title{
  font-weight: 400;
  color: #666;
  max-width: .7rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 3.2vw;
}
.operating-position .poster-wrap{
  position: absolute;
  width: 23vw;
  top:0;
  bottom:0;
  right: 0;
}
.operating-position .top-text{
  position: absolute;
  left:0;
  top:0;
  width:18vw;
  height: 4vw;
}
.operating-position .poster{
  position: absolute;
  bottom:0;
  right:0;
  width:21vw;
  height: 16vw;
  margin-top:2.4vw;
  background: url('../../../public/img/jay.png') no-repeat ;
  background-size: cover;
  
}
/* 服务保障 */
.service-entry{
  margin:.2rem .16rem ;
  margin-bottom:0;
  padding:0 .08rem;
  height: .32rem;
  line-height: .32rem;
  background: hsla(0,0%,96%,.53);
  display: flex;
  justify-content: space-between;
}
.service-entry .title{
  font-size: .12rem;
  color:#666;
}
.service-entry .services{
  display: flex;
}
.service-entry .service-item{
  display: flex;
  align-items: center;
  color: #999;
}
.service-entry .line{
  height: .12rem;
  width: 1px;
  background-color: #e6e6e6;
  margin:  0 .12rem;
  display:inline-block;
}
/* 近期热门 */
.activity-floor{
  padding-bottom: .08rem;
  padding-top: .32rem;
}
.activity-floor .head{
  overflow:hidden;
  padding: 0 .14rem .16rem; 
}
.activity-floor .head .title{
  font-weight: 700;
  color: #565656;
  font-size: .18rem;
  float: left;
}
.activity-floor .head .more{
  float: right;
  font-size: .14rem;
  color:#999;
  height: .17rem;
  line-height: .17rem;
  padding-right: .1rem;
  background: url('../../../public/img/right.png') no-repeat;
  background-size: .05rem .09rem;
  background-position: 100%
}
.activity-floor .activities{
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
}
.activity-floor .activities .wrap{
  display: flex;
  flex-wrap: nowrap;
  padding-left:.14rem;
}
.activity-floor-item{
  width: 1.02rem;
  margin-right:.1rem;
  flex-shrink: 0;
}
.activity-floor-item .poster{
  height: 1.37rem;
  background-position: 50%;
  background-size: cover;
  width: 100%;
  position: relative; 
}
.activity-floor-item .want-watch{
  background-color: rgba(0,0,0,.55);
  width:.4rem;
  height: .32rem;
  position: absolute;
  top:0;
  left:1px;
}
.activity-floor-item .want-watch .num{
  line-height: 1.1;
  font-weight: 500;
  font-size: .12rem;
  height: .14rem;
  color:.14rem;
  margin-top: .03rem;
  text-align: center;
}
.activity-floor-item .name{
  white-space: nowrap;
  margin-top:.07rem;
  margin-bottom: .03rem;
  color:#262626;
  overflow: hidden;
  text-overflow: ellipsis;
}
.activity-floor-item .price{
  height: .17rem;
}
.activity-floor-item .price .price-num{
  color: #c33;
  font-size: .12rem;
}
.activity-floor-item .price .price-desc {
    font-size: .12rem;
    transform: scale(.8);
    transform-origin: left bottom;
    display: inline-block;
    margin-left: 2px;
    color: #999;
}
</style>

