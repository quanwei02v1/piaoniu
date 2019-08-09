<template>
    <div class="city_body" ref="scroll">
      <Btscroll ref="btlist">
      <div>
        <!--热门城市-->
        <div class="hot_city">
          <div class="hot_title">热门城市</div>
          <div class="hot_city_list">
            <div
              class="hot_city_name"
              v-for="(item,index) in cityHot"
              :key="index"
              @tap="handleTo(item)"
            >{{item.cityName}}</div>
          </div>
        </div>
        <!--城市列表-->
        <div class="city_list" ref="list">
          <div class="city_list_item" v-for="(item,index) in cityList" :key="index">
            <div class="city_title_letter">{{item.index}}</div>
            <div class="city_list_name">
              <v-touch
                class="city_list_name_item"
                v-for="(child,idx) in item.list"
                :key="idx"
                tag="div"
                @tap="handleTo(child)"
              >{{child.cityName}}</v-touch>
            </div>
          </div>
        </div>
      </div>

    <!--城市列表下标-->
    <div class="city_list_index">
      <v-touch
        class="index_item"
        v-for="(item,index) in cityList"
        :key="index"
        @tap="handleIndexTo(index)"
        tag="div"
      >{{item.index}}</v-touch>
    </div>
    </Btscroll>
  </div>
</template>

<script>
import {mapActions,mapState,mapMutations} from 'vuex'
export default {
  name:'CityList',
  created(){
    this.handleGetCityList()
  },
  computed:{
    ...mapState({
      cityList:state=>state.city.cityList,
      cityHot:state=>state.city.cityHot
    })
  },
  methods:{
    ...mapActions({
      handleGetCityList:'city/handleGetCityList'
    }),
    ...mapMutations({
      handleToggleCity:"city/handleToggleCity"
    }),
    handleIndexTo(index)
    {
      let city_list = this.$refs.list.querySelectorAll(".city_title_letter")
      this.$refs.btlist.handleScrollTo(0,-city_list[index].offsetTop)
    },
    handleTo(params)
    {
      this.$router.push('/')
      this.handleToggleCity(params)
    }
  }
}
</script>

<style>
.city_body {
  background: #ebebeb;
  height: 100%;
  _overflow: auto;
}

/*热门城市*/
.hot_title,
.city_title_letter {
  line-height: 0.3rem;
  padding-left: 0.13rem;
  font-size: 0.14rem;
  background: #ccc;
}

.hot_city_list,
.city_list_name {
  /* width: 96%; */
  background: #f5f5f5;
  padding-bottom: 0.08rem;
  display: flex;
  flex-wrap: wrap;
}
.hot_city_name {
  margin-top: 0.15rem;
  margin-left: 0.13rem;
  width: 0.7rem;
  height: 0.33rem;
  background: #fff;
  text-align: center;
  line-height: 0.33rem;
  font-size: 0.14rem;
  border: 1px solid #e6e6e6;
}

.city_list > div {
  width: 100%;
}
.city_list_name_item {
  line-height: 0.4rem;
  margin-left: 0.13rem;
  width: 100%;
  border-bottom: 1px solid #e6e6e6;
  font-size: 0.14rem;
}

/*城市列表下标*/
.city_list_index {
  position: fixed;
  right: 0;
  top: 0.25rem;
  background: #ccc;
}
.city_list_index > div {
  padding: 0.05rem 0.05rem;
  font-size: 0.13rem;
}
</style>