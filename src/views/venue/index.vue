<template>
  <div class="page">
    <!-- 头部 -->
    <div class="navbar">
      <div class="content-wrap">
        <div class="btn-left">
          <div
            class="icon-left"
            style="background-image: url(&quot;//static.piaoniu.com/m/static/img/back-grey.b0b2b3e.png&quot;);"
          ></div>
        </div>
        <div class="middle-wrap">
          <div class="middle-title">场馆详情</div>
        </div>
      </div>
    </div>
    <!-- 地图 -->
    <div class="map"></div>
    <!-- 地址信息 -->
    <div class="container">
      <div class="venue">
        <div class="name">
          <div class="venue-icon"></div>
          <div class="venue-content">工人体育场</div>
        </div>
        <div class="address">朝阳区工人体育场北路</div>
      </div>
      <div class="transport">
        <div class="span-wrap">
          <span class="transport-icon"></span>
          <span class="text">交通：</span>
        </div>
        <div class="transport-text">
          <p>地铁6号线，东大桥站下车，A口出 路线:北京市朝阳区工人体育场北路</p>
        </div>
      </div>
      <div class="parking">
        <div class="span-wrap">
          <span class="parking-icon"></span>
          <span class="text">停车：</span>
        </div>
        <div class="parking-text">
          <p>工人体育场-5号停车场 136米</p>
          <p></p>
          <p>工人体育场-4号停车场 144米</p>
          <p></p>
          <p>北京工人体育场-东一门停车场</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style>
.page {
  padding-top: 0.44rem;
}
/* 头部 */
.navbar {
  height: 0.44rem;
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

.navbar .btn-left {
  position: absolute;
  left: 0.14rem;
  top: 0;
  font-size: 0.16rem;
  line-height: 0.44rem;
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
}

.navbar .title {
  text-align: center;
  font-size: 0.16rem;
  height: 0.44rem;
  line-height: 0.44rem;
  max-width: 2rem;
  margin: 0 auto;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: #525252;
  font-weight: 600;
}
.page .navbar .middle-wrap {
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
.page .navbar .middle-wrap .middle-title {
  color: #525252;
  font-size: 0.17rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-weight: 500;
}
/* 地图 */
.map {
  height: 2.2rem;
  width: 100%;
  background-color: #005efc;
}

/* 地址信息 */
.venue {
  background: #fff;
  border-bottom: 1px solid #e6e6e6;
  overflow: hidden;
  font-size: 0.12rem;
}

.venue .name {
  margin-top: 0.13rem;
  position: relative;
}

.venue .venue-icon {
  background: url(//static.piaoniu.com/m/static/img/venueIcon.7ffd824.png);
  height: 0.16rem;
  width: 0.16rem;
  background-size: 0.16rem 0.16rem;
  position: absolute;
  left: 0.16rem;
}

.venue .venue-content {
  text-align: left;
  padding-right: 0.25rem;
  margin-left: 0.36rem;
}

.venue .address {
  color: #666;
  margin-left: 0.36rem;
  margin-top: 0.05rem;
  margin-bottom: 0.15rem;
}

.parking,
.transport {
  position: relative;
  padding-top: 0.1rem;
  line-height: 1;
  padding-bottom: 0.1rem;
  background-color: #fff;
  border-bottom: 1px dashed #e6e6e6;
  overflow: hidden;
}

.parking .transport-icon,
.transport .transport-icon {
  background: url(//static.piaoniu.com/m/static/img/venueTrafficIcon.f0db479.png);
  width: 0.15rem;
  height: 0.15rem;
  background-size: 0.15rem 0.15rem;
  position: absolute;
  left: 0.14rem;
}

.parking .parking-icon,
.transport .parking-icon {
  background: url(//static.piaoniu.com/m/static/img/venueParkingIcon.c61da4d.png);
  width: 0.15rem;
  height: 0.15rem;
  background-size: 0.15rem 0.15rem;
  position: absolute;
  left: 0.15rem;
}

.parking .text,
.transport .text {
  margin-left: 0.36rem;
  vertical-align: top;
  font-size: 0.12rem;
}

.parking .parking-text,
.parking .transport-text,
.transport .parking-text,
.transport .transport-text {
  overflow: hidden;
  margin-right: 0.15rem;
}

.parking .parking-text p,
.parking .transport-text p,
.transport .parking-text p,
.transport .transport-text p {
  line-height: 1.2;
  font-size: 0.12rem;
  color: #666;
  margin-top: 0.05rem;
}

.parking .parking-text p:first-child,
.parking .transport-text p:first-child,
.transport .parking-text p:first-child,
.transport .transport-text p:first-child {
  margin-top: 0;
}

.parking {
  border-bottom: none;
}

.span-wrap {
  float: left;
}
</style>
