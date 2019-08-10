<template>
  <div class="page_list">
    <BetScroll ref="listscroll">
      <div>
        <div class="headers">
          <div class="header_1">
            <div class="back">返回</div>
            <div class="inputs">
              <div class="inner">
                <div class="warp">
                  <div class="bgt"></div>
                  <input value="" type="search" placeholder="搜索明星、演出、场馆" @focus="focusHandler()"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer_0">
          <div class="footer_1">
            <BetScroll >
            <ul>
              <li
                v-for="(item,index) in arr"
                :class="flag == index ? 'active1' : ''"
                @click="clickHandler(index)"
                :key="index"
              >
                <a
                  href="#"
                  :class="flag == index ? 'active' : ''"
                  @click="clickHandler(index)"
                >{{item}}</a>
              </li>
            </ul>
          </BetScroll>
          </div>
          <div class="listing-filter">
            <div class="listing_1">综合排序</div>
            <div class="listing_2">全部时间</div>
            <div class="listing_3">在线选座</div>
          </div>
        </div>
        <div class="ul_list">
          <ul>
            <li v-for="(item,index) in shoppingList " :key="index">
              <v-touch class="box" tag="div" @tap="clickHandlerTo(item.id)">
                <div class="imgCon">
                  <img :src="item.poster" alt />
                </div>
                <div class="Contents">
                  <div class="title_line">
                    <a class="title" href>
                      <span>[北京]</span>
                      {{item.properName}}
                    </a>
                    <div class="activityTag">
                      <div class="choose">座</div>
                    </div>
                  </div>
                  <p class="time-address">
                    <span>{{item.timeRange}}</span>
                    <span>|</span>
                    <span>{{item.venueName}}</span>
                  </p>
                  <div class="rank">
                    评分&nbsp;
                    <span>{{item.rank}}</span>
                  </div>
                  <div class="bom">
                    <span class="price">{{item.lowPrice}}</span>
                    <span class="qi">元起</span>
                  </div>
                  <p class="promotion-info">
                    <a href>
                      <span></span>
                      <span class="desc">{{item.look}}</span>
                    </a>
                  </p>
                  <div class="light-spot">{{item.desc}}</div>
                </div>
              </v-touch>
            </li>
          </ul>
        </div>
      </div>
    </BetScroll>
  </div>
</template>


<script>
import { list_api } from "api/list";
// import axios from "axios"
export default {
  name: "list",
  async created() {
    let data = await list_api();
    this.shoppingList = data.data;
    sessionStorage.setItem("shoppingList", JSON.stringify(data.data));
    document.title = this.$route.meta.title;
  },
  async activated() {
    if (this.pageId !== this.id) {
      let data = await list_api();
      this.shoppingList = data.data;
      this.pageId == this.id;
    }
  },
  mounted() {
    this.$refs.listscroll.pullDownHandler(async () => {
      if (this.pageId !== this.id) {
        let data = await list_api();
        this.shoppingList = data.data;
        this.pageId == this.id;
        this.$refs.listscroll.finishPullDownHandler();
      }
    });
    this.$refs.listscroll.pullUploadHandler(async () => {
      if (this.pageId !== this.id) {
        let data = await list_api();
        this.shoppingList = data.data;
        this.pageId == this.id;
        this.$refs.listscroll.finishPullUpHandler();
      }
    });
  },
  data() {
    return {
      pageId: -1,
      shoppingList: [],
      arr: [
        "全部分类",
        "演唱会",
        "话剧歌剧",
        "休闲展览",
        "体育赛事",
        "旅游玩乐",
        "音乐会",
        "儿童亲子",
        "舞蹈芭蕾"
      ],
      flag: 0
    };
  },
  methods: {
    clickHandler(index) {
      this.flag = index;
    },
    clickHandlerTo(id) {
      this.$router.push({ name: "show", params: { id: id } });
    },
    focusHandler(){
      this.$router.push({name:"search"})
    }
  }
};
</script>




<style scoped>
.page_list {
  overflow: auto;
  height: 100%;
}
.page_list .headers .header_1 {
  overflow: hidden;
}
.page_list .headers .back {
  height: 0.46rem;
  float: left;
  line-height: 0.46rem;
  padding: 0 0.15rem 0 0.1rem;
  font-size: 0.16rem;
}
.page_list .headers .inputs {
  width: 3.13rem;
  float: right;
}
.page_list .headers .inner {
  height: 0.34rem;
  line-height: 0.34rem;
  margin: 0.05rem 0.08rem;


  border-radius: 0.03rem;
}
.page_list .headers .warp {
  margin: 0 auto;
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
}
.page_list .headers .warp > input {
  outline: none;
  color: #8f8f8f;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: 1px solid #f2f2f2;
   background-color: #f2f2f2;
  padding-left: 0.37rem;
  font-size: 0.12rem;
    border-radius: .17rem;
}
.page_list .ul_list > ul {
  margin: 0;
  padding: 0;
  color: #262626;
  font-size: 0.14rem;
  list-style: none;
  margin: 0;
  padding: 0;
 
}
.page_list .ul_list > ul > li {
  position: relative;
  margin-left: 0.15rem;
  margin-right: 0.15rem;
  background-color: #fff;
}
.page_list .ul_list .box {
  min-height: 1.25rem;
  position: relative;
}
.page_list .ul_list .imgCon {
  position: absolute;
  left: 0;
  top: 0.15rem;
  width: 0.75rem;
  height: 1rem;
}
.page_list .ul_list .imgCon > img {
  width: 100%;
  height: 100%;
}
.page_list .ul_list .Contents {
  padding-top: 0.15rem;
  margin-left: 0.92rem;
  border-bottom: 1px solid hsla(0, 0%, 90%, 0.5);
}
.page_list .ul_list .title_line {
  display: flex;
}
.page_list .ul_list .title {
  font-size: 0.15rem;
  color: #333;
  max-height: 0.44rem;
  line-height: 0.22rem;

  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  text-decoration: none;
}
.page_list .ul_list .activityTag {
  flex-shrink: 0;
  max-width: 0.4rem;
  margin-left: 0.04rem;
  color: #fff;
}
.page_list .ul_list .choose {
  display: inline-block;
  border-radius: 0.02rem;
  padding: 1px;
  margin-right: 0.05rem;
  bottom: 0.12rem;
  text-align: center;
  font-size: 0.12rem;
  width: 0.18rem;
  height: 0.18rem;
  background-color: #f66b9d;
  box-sizing: border-box;
}

.page_list .ul_list .time-address {
  font-size: 0.12rem;
  color: #999;
  margin-top: 0.09rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-bottom: 0;
}
.page_list .ul_list .rank {
  font-size: 0.1rem;
  color: #999;
  margin-top: 0.04rem;
  margin-bottom: 0.12rem;
}
.page_list .ul_list .rank > span {
  font-size: 0.12rem;
  font-weight: 700;
  color: #ffb02e;
}
.page_list .ul_list .price {
  position: relative;
  top: 1px;
  color: #ff2661;
  font-size: 0.16rem;
  font-weight: 700;
  margin-right: 0.04rem;
}
.page_list .ul_list .qi {
  font-size: 0.12rem;
  color: #999;
}
.page_list .ul_list .bom {
  margin-bottom: 0.1rem;
}
.page_list .ul_list .promotion-info {
  margin-bottom: 0rem;
  margin-top: 0;
}
.page_list .ul_list .promotion-info > a {
  text-decoration: none;
}
.page_list .ul_list .desc {
  font-size: 0.12rem;
  color: #efaa35;
}
.page_list .ul_list .light-spot {
  font-size: 0.12rem;
  color: #999;
  padding: 14px 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  border-top: 1px solid hsla(0, 0%, 90%, 0.5);
}
.page_list .footer_0 .footer_1 {
  width: 100%;
  overflow:hidden;
}
.page_list .footer_0 .footer_1  ul {
  white-space: nowrap;
  display: inline-block;
}
.page_list .footer_0 .footer_1 li {
  width: 0.56rem;
  display: inline-block;
  padding: 10px 0;
  text-align: center;
  margin: 0 0.15rem;
}

.page_list .footer_0 a {
  font-size: 0.14rem;
  text-decoration: none;
  color: #333;
  display: block;
}
.page_list .footer_0 .listing-filter {
  position: relative;
  width: 100%;

  z-index: 10;
  background-color: #fff;
  display: flex;
  box-shadow: 0 0 0.04rem 0 rgba(0, 0, 0, 0.15);
}
.page_list .footer_0 .listing_1,
.page_list .footer_0 .listing_3,
.page_list .footer_0 .listing_2 {
  flex: 1;
  display: block;
  font-size: 0.12rem;
  color: #666;
  text-align: center;
  padding: 0.1rem 0;
  border-bottom: 1px solid #e6e6e6;
}
.page_list .footer_0 .listing_1:after,
.page_list .footer_0 .listing_2:after,
.page_list .footer_0 .listing_3:after {
  content: "";
  display: inline-block;
  position: relative;
  top: 0;
  left: 0.03rem;
  width: 0;
  height: 0;
  border: 0.03rem solid transparent;
  border-top-color: #666;
}

.page_list .footer_0 .footer_1 .active {
  color: #ff2661;
}
.page_list .footer_0 .footer_1 .active1 {
  border-bottom: 0.03rem solid #ff2661;
}
</style>