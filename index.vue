<template>
  <div class="big_box" ref="listWapper">
    <div>
    <div class="ball">
      
      <div class="navs">
        <div class="imgCon" @click="clickHandler()">
          <img src="./img/tab.png" alt />
        </div>
        <div class="middle-title">
          <div class="middle_wrap">演出详情</div>
        </div>
      </div>
      <div class="header-image">
        <img id="poster" :src="num.poster" alt />
        <div class="info">
          <div class="top">
            <div class="title">{{num.name}}</div>
            <div class="stars-score">
              <span class="score">{{num.rank}}</span>
              <ul class="star">
                <li v-for="(item,index) in arr" :key="index">
                  <img src="./img/star.png" alt />
                </li>
              </ul>
            </div>
            <div class="price-line">
              <div class="price_infor">
                <span class="price">{{num.lowPrice}}</span>
                <span class="qi">元起</span>
              </div>
              <div>{{num.postageTip}}</div>
            </div>
          </div>
        </div>
        <div class="concern-comment">
          <div class="comment">
            <img src="./img/talk.png" alt />
            <span>评论</span>
          </div>
          <div class="concern">
            <img src="./img/xin.png" alt />
            <span>想看</span>
          </div>
        </div>
      </div>
    </div>
    <div class="bot">
      <div class="box_1">
        <img class="icon" src="./img/time.png" alt />
        <div class="text">该项目尚在预售中</div>
        <div class="right">查看详情</div>
      </div>
      <div class="time_1">{{num.timeRange}}</div>
      <div class="venue">
        <div class="inner">{{address}}</div>
        <div class="icon_1">
          <img src="./img/url.png" />
        </div>
      </div>
      <div class="ticket-info">
        <span>购票须知</span>
        <span class="public"></span>
      </div>
      <div class="service-info">
        <span>平台保障</span>
        <ul>
          <li v-for="(item,index) in list" :key="index">
            <img src="./img/yes.png" alt />
            {{item}}
          </li>
        </ul>
        <span class="public"></span>
      </div>
      <div class="promotion">
        <img src="./img/icon.png" alt />
        <span class="promotion_1">{{sum ? sum : ""}}</span>
        <span class="public"></span>
      </div>
      <div class="content_1">
        <ul>
          <li v-for="(item,index) in obj" :key="index">
            <a href="#">
              <span>{{item.href}}</span>
              <span>{{item.date}}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="star_array">
      <div class="stars_head">
        <div class="stars">
          <span>艺人明星</span>
          <v-touch @tap="handlerClickTo(actorsId)" tag="div">
            <span>详情 ></span>
          </v-touch>
        </div>
        <div class="stars_detail">
          <img :src="imgCons ? imgCons : ''" alt />
          <div class="item_box">
            <div class="star-item_main">{{user ? user : ""}}</div>
            <div class="star-item__focus">
              <div class="star_people">
                <img class="item__focus" src="./img/134.png" alt />
                <img class="item__focus" src="./img/134.png" alt />
                <img class="item__focus" src="./img/134.png" alt />
              </div>
              <div class="focus_bnt">
                <span>{{followNum ? followNum : ""}}</span>人关注
              </div>
              <div class="item_btn">
                <img src="./img/jia.png" alt />
                <span>关注</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="section_1">
          <span>正在现场</span>
          <v-touch tag="span" @tap="clickHandlerTo(id)">
            <span class="bgy">全部图片</span>
           </v-touch>
          <span class="public"></span>
        </div>
        <div class="tp">
          <ul class="tp_ul">
            <li v-for="(item,index) in str" :key="index">
              <img :src="item" alt />
            </li>
          </ul>
        </div>
      </div>
    </div>
    
  </div>
  <v-touch tag="div"
      @tap="clickTo(activityEventId,num.id)">
        <div class="entry-button">出价求购</div>
      </v-touch>
  <div class="bottom-container">
      <a href class="custom-service">
        <img src="./img/kefu.png" alt class="icon" />
        <div class="kefu">客服</div>
      </a>
      <div class="bottom-btn_presale">这就预订</div>
    </div>
  </div>
</template>



<script>
// import axios from "axios";
import {show_api} from "api/list"
import BScroll from "better-scroll"
export default {
  name: "show",
  props:["id"],
 async created() {
    //  console.log(this.id)
      let data=await show_api(this.id);
              this.address=data.venue.name;
              this.sum=data.campaigns.desc;
              this.user=data.activityLineup.name
              this.followNum=data.activityLineup.followNum;
              this.imgCons=data.activityLineup.avatar;
              this.activityEventId=data.ticketCategories[0].activityEventId;
        this.num=data
        this.actorsId=data.actors[0].id
        document.title = this.$route.meta.title    
    },
  data() {
    return {
      imgCons:"",
      sum:"",
      followNum:"",
      address:"",
      user:"",
      num:[],
      actorsId:"",
      activityEventId:"",
      arr: [
        "./img/star.png",
        "./img/star.png",
        "./img/star.png",
        "./img/star.png",
        "./img/star.png"
      ],
      list: ["无票赔偿", "无票保真", "配送保障"],
      obj: [
        {
          href: "青岛",
          date: "06.01"
        },
        {
          href: "沈阳",
          date: "06.15"
        },
        {
          href: "南京",
          date: "06.29"
        },
        {
          href: "福州",
          date: "07.13"
        },
        {
          href: "重庆",
          date: "07.27"
        },
        {
          href: "北京",
          date: "08.10"
        }
      ],
      str: [
        "https://img.piaoniu.com/review/9eb7f0f40a5a3cf9f16eb4e1b99fd527cdb285d3.jpg?imageView/2/w/300/h/300/format/jpg",
        "https://img.piaoniu.com/review/542d8221afbfee585370a4dca370c520da88c2f3.jpg?imageView/2/w/300/h/300/format/jpg",
        "https://img.piaoniu.com/review/f0a79c6fd733cc5a8dcc0c88c76b23385950893e.jpg?imageView/2/w/300/h/300/format/jpg",
        "https://img.piaoniu.com/review/909b40c46f6ac22286a7d311946e747929d866f4.jpg?imageView/2/w/300/h/300/format/jpg",
        "https://img.piaoniu.com/review/65f742e90a7abf210921af20070920fbb84d5cb1.jpg?imageView/2/w/300/h/300/format/jpg",
        "https://img.piaoniu.com/review/3515bbdd566f970fc53f001f8670276d582fb8f4.jpg?imageView/2/w/300/h/300/format/jpg"
      ]
    };
  },
  methods: {
    clickHandler() {
      this.$router.back();
     
    },
     clickTo(id,userid){
     this.$router.push({name:"tickets",params:{id:id,userid:userid}})
     },
     clickHandlerTo(id){
      this.$router.push({name:"imgCon",params:{id:id}})
     },
     handlerClickTo(id){
      this.$router.push({name:"star",params:{id:id}})
    
     }
  },
  mounted() {
    new BScroll(this.$refs.listWapper,{
      click:true,
      tap:true
    })
  },
};
</script>


<style>
.big_box {
  height: 100%;
  overflow: auto;
}
.big_box .ball {
  overflow: auto;

  font-size: 0.12rem;

}
.big_box .entry-button {
  position: fixed;
  bottom: 1rem;
  right: 0.12rem;
  border-radius: 50%;
  width: 0.48rem;
  height: 0.48rem;
  padding: 0.1rem 0.12rem;
  background: linear-gradient(180deg, #ff7a9f, #ff2661);
  box-shadow: 0 0.02rem 0.08rem 0.01rem rgba(155, 48, 79, 0.26);
  font-size: 0.12rem;
  line-height: 0.14rem;
  box-sizing: border-box;
  color: #fff;
  z-index: 999;
}

.big_box .navs {
  display: flex;
  height: 0.44rem;
  align-items: center;
  position: relative;
}
.big_box .imgCon > img {
  width: 0.11rem;
  height: 0.19rem;
  background-size: 100%;
  margin-left: 0.15rem;
}
.big_box .imgCon {
  width: 0.44rem;
  height: 0.3rem;
  padding-top: 0.07rem;
}
.big_box .middle-title {
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
}
.big_box .middle_wrap {
  color: #525252;
  font-size: 0.17rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-weight: 500;
}
.big_box .header-image {
  width: 100%;
  background-color: #292138;
  position: relative;
  overflow: hidden;
  min-height: 1.8rem;
}
.big_box #poster {
  float: left;
  height: 1.28rem;
  width: 0.96rem;
  margin-left: 0.15rem;
  margin-top: 0.2rem;
}
.big_box .info {
  position: relative;
  box-sizing: border-box;
  margin: 0.2rem 0.15rem 0.16rem 1.27rem;
  min-height: 1.28rem;
}
.big_box .top {
  min-height: 1rem;
  margin-bottom: 0.1rem;
}
.big_box .title {
  font-size: 0.17rem;
  font-weight: 700;
  min-height: 0.44rem;
  line-height: 0.22rem;
  color: #fff;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 0.13rem;
}
.big_box .stars-score {
  margin-bottom: 0.18rem;
  height: 0.2rem;
}
.big_box .score {
  font-size: 0.14rem;
  color: #fdb146;
  margin-right: 0.06rem;
}
.big_box .star {
  display: inline-block;
  overflow: visible;
  margin-right: 0.03rem;
}
.big_box .star li {
  margin-right: 0.02rem;
  display: inline;
  float: none;
}
.big_box .star li img {
  width: 0.08rem;
  height: 0.08rem;
  margin-bottom: 1px;
}
.big_box .price-line {
  align-items: center;
  color: #fff;
  display: flex;
}
.big_box .price-line .price {
  font-size: 0.24rem;
  margin-right: 0.03rem;
}

.big_box .price_infor {
  flex: 1;
  display: flex;
  align-items: center;
}

.big_box .concern-comment {
  color: #fff;
  margin: 0.15rem 0.15rem;
}
.big_box .comment {
  float: right;
  margin-left: 4%;
  background: hsla(0, 0%, 100%, 0.1);
  height: 0.3rem;
  border-radius: 0.03rem;
  line-height: 0.3rem;
  text-align: center;
  font-size: 0.14rem;
  width: 48%;
  box-sizing: border-box;
}
.big_box .concern-comment img {
  width: 0.15rem;
  height: 0.14rem;
  vertical-align: -1px;
  font-size: 0;
}
.big_box .concern {
  background: hsla(0, 0%, 100%, 0.1);
  height: 0.3rem;
  border-radius: 0.03rem;
  line-height: 0.3rem;
  text-align: center;
  font-size: 0.14rem;
  width: 48%;
  box-sizing: border-box;
  overflow: hidden;
}
.big_box .concern-comment .comment img,
.big_box .concern-comment .concern img {
  margin-bottom: -0.02rem;
  margin-right: 0.04rem;
}
.big_box .bot {
  padding-left: 0.14rem;
  font-size: 0.12rem;
}
.big_box .box_1 {
  height: 0.4rem;
  display: flex;
  align-items: center;
  margin-left: -0.14rem;
  padding: 0 0.15rem;
  background-color: #fff1f5;
}
.big_box .box_1 .icon {
  height: 0.16rem;
  margin-right: 0.05rem;
  float: left;
}

.big_box .box_1 .text {
  flex: 1;
  color: #ea3667;
}
.big_box .box_1 .right {
  float: right;
  color: #ea3667;
}
.big_box .time_1 {
  font-size: 0.15rem;
  padding-top: 0.24rem;
}
.big_box .venue {
  display: flex;
  align-items: center;
  height: 0.33rem;
  border-bottom: 1px solid #f5f5f5;
  padding-bottom: 0.15rem;
  padding-top: 0.16rem;
}
.big_box .inner {
  font-size: 0.15rem;
  width: 2.85rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-right: 0.11rem;
}
.big_box .icon_1 {
  padding: 0 0.22rem;
  border-left: 1px solid #f5f5f5;
  float: right;
}
.big_box .icon_1 > img {
  width: 0.2rem;
  height: 0.24rem;
}
.big_box .ticket-info {
  position: relative;
  padding: 0.16rem 0;
  border-bottom: 1px solid #f5f5f5;
}
.big_box .ticket-info span:first-child {
  font-size: 0.13rem;
  color: #333;
}
.big_box .public {
  background-image: url("./img/right.png");
  display: block;
  right: 0.14rem;
  background-size: 0.08rem 0.13rem;
  height: 0.13rem;
  width: 0.08rem;
  position: absolute;
  top: 50%;
  margin-top: -0.07rem;
}

.big_box .service-info {
  position: relative;
  padding: 0.16rem 0;
  border-bottom: 1px solid #f5f5f5;
  display: flex;
  
}
.big_box .service-info span:first-child {
  margin-right: 0.2rem;
  font-size: 0.13rem;
  color: #333;
}

.big_box .service-info > ul > li {
  margin-right: 0.1rem;
  float: left;
  color: #262626;
  font-size:.14rem ;
}
.big_box .service-info > ul > li > img {
  width: 0.12rem;
  margin-right: 0.04rem;
}
.big_box .content_1 {
  flex-wrap: nowrap;
  padding: 0.26rem 0;
  overflow: auto;
}
.big_box .content_1 > ul {
  display: flex;
}
.big_box .content_1 > ul > li > a {
  display: flex;
  flex-direction: column;
  -ms-flex-pack: center;
  justify-content: center;
  height: 0.56rem;
  padding: 0 0.14rem;
  margin-right: 0.12rem;
  text-align: center;
  border: 1px solid #eee;
  border-radius: 0.03rem;
  white-space: nowrap;
  color: #666;
}
.big_box .content_1 > ul > li > a span:first-child {
  font-size: 0.14rem;
}
.big_box .promotion {
  position: relative;
  font-size: 0.12rem;
  border-bottom: 1px solid #f5f5f5;
  padding: 0.15rem 0;
}
.big_box .promotion > img {
  width: 0.11rem;
  height: 0.11rem;
}
.big_box .promotion > .promotion_1 {
  width: 84%;
  color: #efaa35;
  font-size: 0.12rem;
  display: inline-block;
  margin-left: 0.03rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.big_box .stars_head {
  margin-top: 0.1rem;
  padding: 0.2rem 0.14rem;
  background-color: #fff;
}
.big_box .stars {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.19rem;
}
.big_box .stars_head span:first-child {
  font-size: 0.15rem;
  font-weight: 700;
  color: #333;
}
.big_box .stars_head span:last-child {
  font-size: 0.14rem;
  color: #888;
}

.big_box .stars_detail {
  display: flex;
  overflow: hidden;

  width: 100%;
}
.big_box .stars_detail > img {
  width: 0.68rem;

  margin-right: 0.12rem;
  font-size: 0;
}

.big_box .star-item_main {
  font-size: 0.18rem;
  color: #333;
  float: left;
}
.big_box .star-item__focus {
  justify-content: space-between;
  margin-top: 0.12rem;
  display: flex;
  width: 100%;
  float: left;
}
.big_box .star_people {
  display: flex;
  align-items: center;
}
.big_box .star_people > img {
  font-size: 0;
}

.big_box .item__focus {
  width: 0.28rem;
  height: 0.28rem;
  border-radius: 50%;
  margin-right: 0.05rem;
}
.big_box .focus_bnt {
  font-size: 0.11rem;
  color: #999;
  line-height: .28rem;
}
.big_box .focus_bnt span:first-child {
  font-size: 0.14rem;
  font-weight: 700;
  color: #ffb200;
}

.big_box .item_btn {
  justify-content: center;
  display: flex;
  align-items: center;
  color: #4b8feb;
  width: 0.68rem;
  height: 0.28rem;
  text-align: center;
  border: 1px solid #4b8feb;
  border-radius: 0.14rem;
  background-color: #fff;
  box-sizing: border-box;
}
.big_box .star-item__focus .item_btn > span {
  color: #4b8feb;
}
.big_box .item_btn > img {
  height: 0.08rem;
  margin-right: 0.06rem;
}
.big_box .public {
  background-image: url("./img/right.png");
  display: block;
  right: 0.14rem;
  background-size: 0.08rem 0.13rem;
  height: 0.13rem;
  width: 0.08rem;
  position: absolute;
  top: 50%;
  margin-top: -0.07rem;
}
.big_box .section {
  overflow: hidden;
  background-color: #fff;
  margin-top: 0.1rem;
  height: 3rem;
}
.big_box .section_1 {
  position: relative;
  font-weight: 700;
  font-size: 0.15rem;
  padding-left: 0.15rem;
  margin-bottom: -0.15rem;
  overflow: hidden;
  height: 0.55rem;
  line-height: 0.55rem;
}
.big_box .bgy {
  padding-right: 0.15rem;
  color: #888;
  font-size: 0.14rem;
  margin-right: 0.1rem;
  float: right;
}
.big_box .tp {
  flex-wrap: nowrap;
  overflow: auto;
  display: flex;
}
.big_box .tp_ul {
  white-space: nowrap;
  display: flex;
  overflow-x: auto;
  font-size: 0.15rem;
  padding: 0.05rem 0.14rem 0;
  color: #666;
  margin-bottom: 0.15rem;
  padding-top: 0.15rem;
}
.big_box .tp_ul > li {
  position: relative;
  width: 1.71rem;
  height: 1.14rem;
  margin-right: 0.05rem;
}
.big_box .tp_ul > li > img {
  width: 1.71rem;
  height: 1.14rem;
  font-size: 0;
}
.big_box .bottom-container {
  position: fixed;
  display: flex;
  height: 0.49rem;
  width: 100%;
  bottom: 0;
  z-index: 9;
  font-size: 0.12rem;
}
.big_box .bottom-container .custom-service {
  width: 0.65rem;
  display: flex;
  background-color: #fff;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #e6e6e6;
}
.big_box .bottom-container .icon {
  width: 0.2rem;
  height: 0.2rem;
  margin-bottom: 0.02rem;
  background-size: contain;
  font-size: 0;
}

.big_box .bottom-container .kefu {
  height: 0.16rem;
  line-height: 0.16rem;
  text-align: center;
  font-size: 0.11rem;
  color: #666;
}
.big_box .bottom-container .bottom-btn_presale {
  background-color: #fd8612;
  flex: 1;
  font-size: 0.16rem;
  line-height: 0.49rem;
  min-width: 1.1rem;
  height: 100%;
  color: #fff;
  text-align: center;
  box-sizing: border-box;
}
</style>