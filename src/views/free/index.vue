<template>
  <div class="freedraw">
    <div class="list-container">
      <div class="taro-img introduce"></div>
    <div class="activity-card">
        <div class="activity-card__poster-wrap">
          <div class="activity-card__title">周杰伦2019全新世界巡回演唱会—南京站</div>
        </div>
        <div class="activity-card__info">
          <div class="activity-card__time false">
            <span class="taro-text">09月12日 14:00 开奖</span>
          </div>
          <button class="activity-card__button">免费抽奖</button>
        </div>
    </div>
    <div class="activity-card">
        <div class="activity-card__poster-wrap">
          <div class="activity-card__title">周杰伦2019全新世界巡回演唱会—南京站</div>
        </div>
        <div class="activity-card__info">
          <div class="activity-card__time false">
            <span class="taro-text">09月12日 14:00 开奖</span>
          </div>
          <button class="activity-card__button">免费抽奖</button>
        </div>
    </div>
    <div class="activity-card">
        <div class="activity-card__poster-wrap">
          <div class="activity-card__title">周杰伦2019全新世界巡回演唱会—南京站</div>
        </div>
        <div class="activity-card__info">
          <div class="activity-card__time false">
            <span class="taro-text">09月12日 14:00 开奖</span>
          </div>
          <button class="activity-card__button">免费抽奖</button>
        </div>
    </div>
    <div class="activity-card">
        <div class="activity-card__poster-wrap">
          <div class="activity-card__title">周杰伦2019全新世界巡回演唱会—南京站</div>
        </div>
        <div class="activity-card__info">
          <div class="activity-card__time false">
            <span class="taro-text">09月12日 14:00 开奖</span>
          </div>
          <button class="activity-card__button">免费抽奖</button>
        </div>
    </div>
    </div>
    
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
.freedraw{
  height: 100%;
  width: 100%;
}
.freedraw .list-container{
  padding: .1rem .1rem;
}
.list-container .introduce{
    width: 100%;
    display: block;
    height: 0.5rem;
    margin-bottom: .2rem;
    border-radius: 3px;
}
.taro-img {
    display: inline-block;
    overflow: hidden;
    position: relative;
    font-size: 0;
    background: #c33;
}
.activity-card {
    overflow: hidden;
    height: 2.5rem;
    box-shadow: 0 0.08533rem 0.34133rem 0 rgba(0,0,0,.1);
    margin-bottom: .2rem;
}
.activity-card__poster-wrap {
    height: 2rem;
    box-sizing: border-box;
    background-size: cover;
    position: relative;
    background-position: center;
    background-image: url('../../../public/img/jay.jpg')
}
.activity-card__title {
    position: absolute;
    padding-left: .3rem;
    bottom: 0;
    left: 0;
    right: 0;
    font-weight: 800;
    font-size: .16rem;
    color: #fff;
    padding-bottom: .2rem;
    background: -webkit-gradient(linear,left top,left bottom,from(transparent),to(rgba(0,0,0,.5)));
    background: -webkit-linear-gradient(top,transparent 0%,rgba(0,0,0,.5) 100%);
    background: linear-gradient(180deg,transparent 0%,rgba(0,0,0,.5) 100%);
}
.activity-card__info {
    height: .2rem;
    line-height: .2rem;
    box-sizing: border-box;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    padding: .1rem;
    display: flex;
    /* align-items: center */
}
.activity-card__time {
    font-size: .14rem;
    font-weight: 700;
    color: #262626;
}

.activity-card__button {
    cursor: pointer;
    width: auto;
    height: .2rem;
    border: 0;
    background: -webkit-gradient(linear,left top,right top,from(#ff2a5f),to(#ff564d));
    background: -webkit-linear-gradient(left,#ff2a5f 0%,#ff564d 100%);
    background: linear-gradient(90deg,#ff2a5f 0%,#ff564d 100%);
    border-radius: .1rem;
    text-align: center;
    font-size: .12rem;
    font-weight: 400;
    color: #fff;
    margin: 0;
}
</style>
