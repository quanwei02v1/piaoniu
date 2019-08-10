<template>
  <div class="page_man">
    <BetScroll>
    <div class="page">
      <div class="page_1">
        <div class="star">
          <img class="imgs" :src="list.backgroundImage" alt />
          <div class="navbar">
            <p @click="clickHandler()"></p>
          </div>
          <div class="star_1">{{list.name}}</div>
          <div class="gz">
            <img class="iCon" src="./img/jia.png" alt />
            <span class="guanz">关注</span>
          </div>
        </div>
        <div class="info">
          <div class="introduction">
            <p>
              {{list.showDesc}}
              <span class="more">更多</span>
            </p>
          </div>
          <div class="focus_block">
            <div class="imgCon">
              <img src="./img/134.png" alt />
              <img src="./img/134.png" alt />
              <img src="./img/134.png" alt />
            </div>
            <div class="num">
              <span>{{list.followNum}}</span>人关注>
            </div>
          </div>
        </div>
      </div>
      <div class="page_2">
        <div class="activities">
          <div class="activities__head">
            <span>他的演出</span>
            <span>全部></span>
          </div>
          <div class="activities__content">
            <div class="activities__item" v-for="(item,index) in arr" :key="index">
              <div class="item-left">
                <span class="date">{{item.date}}</span>
                <div class="time_line"></div>
              </div>
              <div class="item-right">
                <img src="./img/zhang.jpg" alt />
                <div class="item-right_box">
                  <p>{{item.city}}</p>
                  <div class="item-right_box_1">{{item.titled}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </BetScroll>
  </div>
</template>







<script>
// import axios from "axios"
import { star_api } from "api/list";
export default {
  name: "star",
  props: ["id"],
  async created() {
    document.title = this.$route.meta.title;
    if (!sessionStorage.getItem("list")) {
      let data = await star_api(this.id);
      this.list = data;
      sessionStorage.setItem("list", JSON.stringify(data));
    }
  },
  async activated() {
    if (this.pageId !== this.id) {
      let data = await star_api(this.id);
      this.list = data;
      sessionStorage.setItem("list", JSON.stringify(data));
      this.pageId = this.id;
    }
  },
  data() {
    return {
      pageId: -1,
      list: [],
      // str:[],
      arr: [
        {
          date: "08.10",
          city: "北京",
          titled: "张杰北京演唱会"
        },
        {
          date: "07.27",
          city: "重庆",
          titled: "张杰重庆演唱会"
        },
        {
          date: "07.13",
          city: "福州",
          titled: "张杰巡回演唱会 福州站"
        }
      ]
    };
  },
  methods: {
    clickHandler() {
      this.$router.back();
    }
  },
  
};
</script>




<style scoped>
.page_man {
  height: 100%;
  overflow: auto;
}
.page .page_1 {
  background-color: #fff;

  overflow: hidden;
}
.page .star {
  position: relative;
  width: 100%;
  height: 2.1rem;
  background-color: rgba(115, 113, 126, 0.2);
  overflow: hidden;
}
.page .navbar {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  padding-top: 12px;
  overflow: hidden;
}
.page .navbar > p {
  background: url("./img/you.png");
  float: left;
  width: 0.11rem;
  height: 0.2rem;
  background-size: 100%;
  margin-left: 0.15rem;
}
.imgs {
  width: 100%;
}
.page .star_1 {
  position: absolute;
  left: 0.16rem;
  bottom: 0.12rem;
  font-size: 0.2rem;
  font-weight: bold;
  color: #fff;
}
.page .gz {
  position: absolute;
  right: 14px;
  bottom: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 68px;
  height: 28px;
  text-align: center;
  border: 1px solid #fff;
  border-radius: 14px;
  box-sizing: border-box;
  color: rgb(252, 254, 255);
  background-color: rgba(0, 0, 51, 0.2);
}
.page .guanz {
  font-size: 0.13rem;
}
.page .iCon {
  height: 0.08rem;
  margin-right: 0.06rem;
}
.page .introduction {
  font-size: 0.13rem;
  color: #666;
  line-height: 0.23rem;
  padding: 0.14rem;
}
.page .introduction .more {
  color: #5c8de4;
}
.page .imgCon {
  color: #262626;
  font-size: 0.14rem;
}
.page .focus_block {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.11rem 0.14rem 0.11rem 0;
  margin-left: 0.14rem;
  border-top: 1px solid #f5f5f5;
}
.page .imgCon > img {
  width: 0.28rem;
  height: 0.28rem;
  border-radius: 50%;
  margin-right: 0.05rem;
}
.page .num {
  font-size: 0.11rem;
  color: #999;
}
.page .num > span {
  font-size: 0.14rem;
  color: #ffb200;
}
.page .page_2 {
  background-color: #fff;
  margin-top: 0.1rem;
}
.page .page_1 {
  background-color: #fff;

  overflow: hidden;
}
.page .activities {
  padding: 0.2rem 0.14rem;
  background-color: #fff;
  margin-top: 0.1rem;
}
.page .activities__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.page .activities__head span:first-child {
  font-size: 0.15rem;
  font-weight: bold;
  color: #333;
}
.page .activities__head span:last-child {
  font-size: 0.13rem;
  color: #888;
}
.page .activities__content {
  padding: 0.2rem 0;
}
.page .activities__item {
  display: flex;
  align-items: flex-start;
}
.page .date {
  font-size: 0.14rem;
  color: #333;
}
.page .item-left > .time_line {
  width: 0.01rem;
  height: 0.31rem;
  background-color: #f5f5f5;
  margin: 0.07rem auto;
}
.page .item-right {
  flex: 1;
  background-color: #f3f5f5;
  margin-left: 0.2rem;
  display: flex;
}
.page .item-right > img {
  width: 0.36rem;
  height: 0.48rem;
  margin-right: 0.11rem;
}
.page .item-right_box > p {
  font-size: 0.14rem;
  color: #4b8feb;
  margin-top: 0.05rem;
}
.page .item-right_box > .item-right_box_1 {
  font-size: 0.12rem;
  color: #666;
  margin-top: 0.05rem;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>