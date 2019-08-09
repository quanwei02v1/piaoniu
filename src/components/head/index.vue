<template>
    <div class="navbar">
      <div class="content-wrap">
        <div class="btn-left">
          <div class="icon-left"></div>
        </div>
        <div class="middle-wrap">
          <div class="middle-title">{{title}}</div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name:'Head',
    props:{
        title:{
            type:String,
            default:'抢手票'
        }
    }
}
</script>

<style>
.navbar {
  height: .44rem;
  width: 100%;
  background-color: #fff;
  top: 0;
  box-sizing: border-box;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15);
  position: fixed;
  left: 0;
  overflow: hidden;
  z-index: 10;
}
.navbar .content-wrap {
  position: relative;
  height: 0.44rem;
}
.navbar .btn-left {
  position: absolute;
  left: 0.14rem;
  top: 0;
  font-size: 0.16rem;
  line-height: 0.16rem;
  height: 0.44rem;
  width: 0.44rem;
  display: flex;
  align-items: center;
}
.navbar .btn-left .icon-left {
  width: 0.1rem;
  height: 0.19rem;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url("../../../public/img/left.png");
}
.navbar .middle-wrap {
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
.navbar .middle-wrap .middle-title {
  color: #525252;
  font-size: 0.17rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-weight: 700;
}
</style>
