<template>
  <div class="page_search">
    <div class="headers">
      <div class="header_1">
        <div class="back" @click="clickTo()">返回</div>
        <div class="inputs">
          <div class="inner">
            <div class="warp">
              <div class="bgt"></div>
              <input type="search" placeholder="搜索明星、演出、场馆" v-model="searchVal" ref="inputs" />
            </div>
          </div>
        </div>
        <div class="back right" @click="clickTo()">取消</div>
      </div>
    </div>
    <p class="row-title">热门搜索</p>
    <div class="hot-searches">
      <div class="keyword" v-for="(item,index) in arr" :key="index">{{item.keyword}}</div>
    </div>
    <p class="row-title">搜索记录</p>
    <div class="search_histroy">
      <div class="suggest-activity" v-for="(item,index) in search" :key="index">
        <div class="suggest-activity_poster">
          <img :src="item.poster" alt />
        </div>
        <div class="suggest-activity__detail">
          <div class="suggest-activity__name">
            <span>[{{item.cityName}}]</span>
            {{item.name}}
          </div>
          <div class="suggest-activity__line">
            <div class="suggest-activity__rank">
              评分&nbsp;
              <span>{{item.rank}}</span>
            </div>
            <div class="suggest-activity__price">
              <span class="unit">￥</span>
              <span class="num">{{item.lowPrice}}</span>
              <span class="end">起</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import { hottest_api, histroy_api,cityID_api} from "api/list";
export default {
  name: "search",
  async created() {
    document.title = this.$route.meta.title;
    let data = await hottest_api();
    this.arr = data;
     
     
  },

  data() {
    return {
      arr: [],
      searchVal: "",
      search: [],
    };
  },
  watch: {
    async searchVal(newVal) {
      let data = await histroy_api(newVal);
      let citys=await cityID_api();

      for(var i=0,len=data.length;i<len;i++){
         citys.map((item)=>{
            if(data[i].cityId == item.cityId){
              data[i].cityName = item.cityName
            }
        })
      }

      this.search = data;
      
      // console.log(citys,this.search)
    //    for (var index in this.search){
    //     this.str.push(this.search[index].cityId);
    // }
     
    //    for(var j=0;j<this.str.length;j++){
    //      for(var k=0;k<citys.length;k++){ 
    //       if(this.str[j]== citys[k].cityId){
    //       this.search[j].cityName2 = citys[k].cityName
    //   }
    //    }
    //  }
    //  console.log(this.search[5].cityName2)
   
  },
  },
  methods: {
    clickTo() {
      this.$router.back();
    }
  },
  activated() {
    this.$refs.inputs.focus();
    this.$refs.inputs.value="";
  },
  }
</script>


<style scoped>
.page_search .headers .header_1 {
  overflow: hidden;
  display: flex;
}
.page_search {
  height: 100%;
  overflow: auto;
}
.page_search .headers .back {
  height: 0.46rem;
  float: left;
  line-height: 0.46rem;
  padding: 0 0.15rem 0 0.1rem;
  font-size: 0.16rem;
}
.page_search .headers .header_1 .right {
  float: right;
}
.page_search .headers .inputs {
  width: 3.13rem;
  flex: 1;
}
.page_search .headers .inner {
  height: 0.34rem;
  line-height: 0.34rem;
  margin: 0.05rem 0.08rem;

  border-radius: 0.03rem;
}
.page_search .headers .warp {
  margin: 0 auto;
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
}
.page_search .headers .warp > input {
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
  border-radius: 0.17rem;
}
.row-title {
  background-color: #f2f2f2;
  height: 0.32rem;
  line-height: 0.32rem;
  padding-left: 0.15rem;
  color: #666;
  font-size: 0.14rem;
}
.hot-searches {
  padding: 0.15rem 0 0 0.15rem;
  overflow: hidden;
}
.keyword {
  margin-right: 0.13rem;
  margin-bottom: 0.13rem;
  font-size: 0.14rem;
  padding: 0.09rem 0.13rem;
  border: 1px solid #e6e6e6;
  border-radius: 0.04rem;
  float: left;
}
.search_histroy {
  top: 0.44rem;
  right: 0;
  bottom: 0;
  padding-left: 0.14rem;
  background-color: #fff;
  z-index: 16;
  box-sizing: border-box;
  overflow: auto;
}

.suggest-activity {
  display: flex;
  border-bottom: 1px solid #e6e6e6;
  padding: 0.1rem 0.1rem 0.1rem 0;
}
.suggest-activity_poster {
  position: relative;
  margin-right: 0.16rem;
}
.suggest-activity_poster > img {
  width: 0.44rem;
  height: 0.58rem;
}
.suggest-activity__detail {
  flex: 1;
}
.suggest-activity__name {
  font-size: 0.15rem;
  font-weight: 700;
  line-height: 0.22rem;
  color: #262626;
  margin-bottom: 0.09rem;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
}
.suggest-activity__line {
  align-items: center;
  display: flex;
  justify-content: space-between;
}
.suggest-activity__rank {
  font-size: 0.12rem;
  color: #666;
}
.suggest-activity__rank span {
  font-size: 0.14rem;
  color: #ffb02e;
}
.unit {
  font-size: 0.1rem;
  color: #ff2661;
}
.num {
  font-size: 0.18rem;
  color: #ff2661;
}
.end {
  font-size: 0.1rem;
  color: #666;
}
</style>