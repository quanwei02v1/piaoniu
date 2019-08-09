<template>
  <div class="mine">
    <!-- 顶部 -->
    <div class="top">
      <img src="./img/left.png" />
      <span>我的</span>
    </div>
    <!-- 内容 -->
    <div class="other">
      <!-- 用户信息 -->
      <div class="info">
        <div class="name">
          <img src="./img/defaultAvatar.99f8eed.png" />
          <p>登录</p>
        </div>
        <span class="me">个人主页&nbsp;&gt;</span>
        <div class="di">
          <ul>
            <li>
              0
              <br />想看
            </li>
            <li>
              0
              <br />评价
            </li>
            <li>
              0
              <br />关注
            </li>
            <li>
              0
              <br />粉丝
            </li>
          </ul>
        </div>
      </div>
      <!-- 订单 -->
      <div class="order">
        <div class="myOrder">
          我的订单
          <span>产看全部订单&gt;</span>
        </div>
        <div class="orderInfo">
          <ul>
            <li>
              <img src="./img/order-topay.4cf62ce.png" />
              <span>待付款</span>
            </li>
            <li>
              <img src="./img/order-tosend.20248ed.png" />
              <span>待发货</span>
            </li>
            <li>
              <img src="./img/order-toreceive.d23cc4e.png" />
              <span>待收货</span>
            </li>
          </ul>
        </div>
      </div>
      <!-- 优惠 -->
      <div class="sale">
        <ul>
          <li>
            <span>0</span>
            <br />
            <p>优惠券</p>
          </li>
          <li>
            <span>0</span>
            <br />
            <p>礼品卡</p>
          </li>
        </ul>
      </div>
      <!-- 福利 -->
      <div class="welfare">
        <div>我的福利</div>
        <ul>
          <li>
            <img src="./img/icon-redpackage.e078ab8.png" />
            <p class="p1">邀请好友</p>
            <p>返10元现金</p>
          </li>
          <li>
            <img src="./img/icon-club.959250b.png" />
            <p class="p1">圈圈俱乐部</p>
            <p>达人专属奖励</p>
          </li>
        </ul>
      </div>
      <!-- 管理 -->
      <div class="manage">
        <ul>
          <li>地址管理</li>
          <li>帮助与客服</li>
          <li>卖家招募</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.mine {
  width: 100%;
  height: 100%;
  background-color: #f6f7f9;
  overflow: hidden;
}
.top {
  height: 0.4rem;
  width: 100%;
  background-color: white;
  text-align: center;
  line-height: 40px;
  overflow: hidden;
  position: fixed;
}
.top > img {
  height: 0.3rem;
  margin-left: 0.05rem;
  margin-top: 0.05rem;
}
.top > span {
  position: absolute;
  top: 0;
  left: 50%;
  color: #525252;
  font-size: 17px;
  font-weight: 500;
  margin-left: -0.2rem;
}
.other {
  width: 100%;
  margin-top: 0.4rem;
}
.info {
  height: 1.72rem;
  width: 100%;
  position: relative;
  background: linear-gradient(270deg, #ff5aa5 0%, #ff2661 100%);
  overflow: hidden;
}
.info > .name {
  height: 0.56rem;
  width: 100%;
  margin-top: 0.4rem;
}
.info > .name > img {
  height: 0.56rem;
  width: 0.56rem;
  border-radius: 50%;
  margin-left: 0.2rem;
  float: left;
}
.info > .name > p {
  color: white;
  font-size: 0.18rem;
  padding-top: 0.05rem;
  padding-left: 1rem;
  font-weight: 1000;
}
.info > .me {
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
  width: 0.8rem;
  height: 0.3rem;
  text-align: center;
  line-height: 0.3rem;
  border-radius: 0.15rem 0 0 0.15rem;
  right: 0;
  top: 0.5rem;
  color: white;
}
.info > .di {
  height: 0.5rem;
  width: 100%;
  position: absolute;
  bottom: 0;
}
.info > .di > ul {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.info > .di > ul > li {
  text-align: center;
  height: 0.4rem;
  color: white;
}
.myOrder {
  height: 0.45rem;
  width: 100%;
  background-color: white;
  font-size: 0.16rem;
  line-height: 0.45rem;
  padding: 0 0.15rem;
  color: #262626;
}
.myOrder > span {
  color: #999999;
  font-size: 0.14prem;
  float: right;
}
.orderInfo {
  height: 0.68rem;
  width: 100%;
  background-color: white;
}
.orderInfo > ul {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.orderInfo > ul li {
  display: block;
  width: 33%;
  height: 0.68rem;
  text-align: center;
}
.orderInfo > ul li img {
  width: 0.22rem;
  height: 0.22rem;
  margin-top: 0.15rem;
  margin-left: 0.5rem;
  margin-bottom: 0.04rem;
}
.sale {
  height: 0.7rem;
  width: 100%;
  background-color: white;
  margin-top: 0.1rem;
}
.sale > ul {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.sale > ul li {
  width: 50%;
  height: 0.7rem;
  text-align: center;
  font-size: 0.12rem;
}
.sale > ul li span {
  color: #ff2661;
  display: block;
  margin-top: 0.15rem;
  /* margin-bottom: .02rem; */
  font-size: 0.16rem;
}
.welfare {
  background-color: white;
  margin-top: 0.1rem;
}
.welfare div {
  width: 100%;
  height: 0.4rem;
  font-size: 0.16rem;
  line-height: 0.4rem;
  padding-left: 0.15rem;
}
.welfare > ul {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.welfare > ul li {
  display: block;
  height: 0.8rem;
  width: 50%;
}
.welfare > ul li img {
  width: 0.48rem;
  height: 0.48rem;
  float: left;
  margin-left: 0.2rem;
  margin-top: 0.15rem;
}
.welfare > ul li p {
  font-size: 0.12rem;
  color: #999999;
  margin-top: 0.06rem;
  margin-left: 0.8rem;
}
.welfare > ul li .p1 {
  font-size: 0.14rem;
  color: #262626;
  margin-top: 0.2rem;
}
.manage {
  width: 100%;
  height: 1.32rem;
  background-color: white;
  margin-top: 0.1rem;
}
.manage > ul li {
  width: 100%;
  height: 0.44rem;
  line-height: 0.44rem;
  font-size: 0.14rem;
  color: #262626;
  padding-left: 0.2rem;
}
</style>
