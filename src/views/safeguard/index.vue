<template>
  <div class="safeguard">
    <!-- 顶部 -->
    <div class="top">
      <img src="./img/back-grey.b0b2b3e.png" />
      <span>票牛服务保障</span>
    </div>
    <!-- 内容 -->
    <div class="other">
      <!-- 图 -->
      <div class="img">
        <h3>票牛服务保障</h3>
        <p>多重保障，让您购票无忧</p>
        <img src="./img/headerBg.49e9ae3.png" />
      </div>
      <!-- 无票赔付 -->
      <div class="none">
        <div class="none_top">
          <span>无票赔付</span>
          <div></div>
        </div>
        <div class="title">
          <p>
            在票牛购买门票时，如果因为卖家原因无法获得指定票品（因主办方或不可抗
            力的因素导致演出取消除外），除全额退款外，可获得额外赔付
          </p>
        </div>
        <ul>
          <li>
            <img src="./img/service1.d6e0905.png" />
            <h4>提前一周（非现场）</h4>
            <p>
              若商家距开演时间前7天（不含）确认无票，非现场自取订单按订单支付全价
              全额退款并按票面价30%的票牛余额进行赔付
            </p>
          </li>
          <li>
            <img src="./img/service2.2117c69.png" />
            <h4>提前一周（现场）</h4>
            <p>
              若商家距开演时间前7天（不含）确认无票，非现场自取订单按订单支付全价
              全额退款并按票面价50%的票牛余额进行赔付
            </p>
          </li>
          <li>
            <img src="./img/service3.57d688c.png" />
            <h4>临近开演</h4>
            <p>
              若商家于非现场自取订单距开演时间前7天（含）、开演前一天18前确认无票，现场自取订单按订单支付全价
              全额退款并按票面价80%的票牛余额进行赔付
            </p>
          </li>
          <li>
            <img src="./img/service4.2f4d301.png" />
            <h4>演出当天</h4>
            <p>
              若商家于开演前一天18前（含）后确认无票，现场自取订单按订单支付全价
              全额退款并按票面价80%的票牛余额进行赔付
            </p>
          </li>
        </ul>
      </div>
      <!-- 出票保真 -->
      <div class="bao">
        <div class="none_top">
          <span>出票保真</span>
          <div></div>
        </div>
        <div class="bao1">
            <img src="./img/serviceBanner1.88c9ff7.png">
            <p>回房间康师傅会计师金黄色的费就开始三阶段合肥市看景的肯定是飞机可视电话好上课 很舒服就得看后方可三阶段</p>
        </div>
      </div>
      <!-- 配送保障 -->
      <div class="bao">
        <div class="none_top">
          <span>出票保真</span>
          <div></div>
        </div>
        <div class="bao1">
            <img src="./img/serviceBanner1.88c9ff7.png">
            <p>回房间康师傅会计师金黄色的费就开始三阶段合肥市看景的肯定是飞机可视电话好上课 很舒服就得看后方可三阶段</p>
        </div>
      </div>
      <!-- 15分钟内无条件退款 -->
      <div class="bao">
        <div class="none_top">
          <span>出票保真</span>
          <div></div>
        </div>
        <div class="bao1">
            <img src="./img/serviceBanner1.88c9ff7.png">
            <p>回房间康师傅会计师金黄色的费就开始三阶段合肥市看景的肯定是飞机可视电话好上课 很舒服就得看后方可三阶段</p>
        </div>
      </div>
      <!-- 服务流程 -->
      <!-- 我们的目标 -->
      <!-- 公司背景 -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.safeguard {
  width: 100%;
  /* height: 100%; */
  background-color: #f6f7f9;
  position: relative;
  /* overflow: hidden; */
  float: left;
}
.top {
  height: 0.4rem;
  width: 100%;
  background-color: white;
  text-align: center;
  line-height: 40px;
  /* overflow: hidden; */
  position: fixed;
  z-index: 100;
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
  margin-left: -0.45rem;
}
.other {
  width: 100%;
  margin-top: 0.4rem;
  overflow: hidden;
  height: 100%;
}
.img {
  width: 100%;
  height: 1.51rem;
  background: linear-gradient(180deg, #4994ff, #337aec);
  position: relative;
  color: white;
  text-align: center;
  font-size: 0.12rem;
  overflow: hidden;
}
.img > h3 {
  font-size: 0.24rem;
  margin-top: 0.5rem;
  margin-bottom: 0.1rem;
}
.img > img {
  position: absolute;
  width: 0.8rem;
  height: 0.88rem;
  right: 0;
  bottom: 0;
}
.none {
  width: 95%;
  /* overflow: hidden; */
  /* background-color: greenyellow; */
  margin: 0 auto;
  margin-top: 0.1rem;
}
.none_top {
  font-size: 0.18rem;
  color: #525252;
  text-align: center;
  height: 0.29rem;
  /* line-height: .19rem; */
  position: relative;
}
.none_top > div {
  width: 0.6rem;
  height: 0.02rem;
  background-color: #f35983;
  border-radius: 0.02rem;
  position: absolute;
  left: 50%;
  margin-left: -0.3rem;
  bottom: 0;
}
.none > .title {
  font-size: 0.12rem;
  color: #666666;
  margin-top: 0.2rem;
}
.none > ul li {
  display: block;
  width: 100%;
  height: 1rem;
  margin-top: 0.08rem;
  overflow: hidden;
}
.none > ul li h4 {
  font-size: 0.14rem;
  color: #262626;
  margin-top: 0.1rem;
  margin-bottom: 0.1rem;
}
.none > ul li p {
  font-size: 0.12rem;
  color: #666666;
}
.none > ul li img {
  width: 1.11rem;
  height: 1rem;
  float: left;
}
.bao {
  width: 95%;
  /* overflow: hidden; */
  /* background-color: greenyellow; */
  margin: 0 auto;
  margin-top: 0.1rem;
}
.bao>.bao1{
    width: 100%;
    margin-top: .15rem;

}
.bao>.bao1>img{
    width: 100%;
}
.bao>.bao1>p{
    display: block;
    padding: .1rem .13rem;
    font-size: .12rem;;
    color: #666666;
}
</style>
