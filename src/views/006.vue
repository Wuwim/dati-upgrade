<template>
  <div class="content">
    <div class="biaotilan">
      <img
        @click="goBack()"
        class="goback"
        src="../assets/img/goback.png"
        alt=""
      />
      <span class="biaoti-w1">建工课题答题系统</span>
    </div>
    <div class="set-bg">
      <div class="block1">
        <img class="house" src="../assets/img/house.png" alt="" />
        <img class="cloud" src="../assets/img/cloud.png" alt="" />
        <img class="cloud1" src="../assets/img/cloud.png" alt="" />
      </div>
      <img class="dd" src="../assets/img/dd.png" alt="" />
      <div class="block3">
        <div class="w1-box">
          <span class="w1">恭喜完成</span>
        </div>
        <span class="w2 zq1">正确答题 4题</span>

        <span class="w2 cw1">错误答题 1题</span>

        <div class="ljys-box">
          <div class="gang1"></div>
          <div class="ljys">
            <span>累计用时</span>
          </div>
          <div class="gang2"></div>
        </div>
        <div class="times-box">
          <div class="timebg1">
            <div class="timebg">
              <div class="timebg2">
                <div class="shi-box">
                  <div class="shi">
                    <span class="sj">{{ hour }}</span>
                  </div>
                  <div class="shi"></div>
                  <span class="sj1">时</span>
                </div>
                <div class="fen-box">
                  <div class="shi">
                    <span class="sj">{{ min }}</span>
                  </div>
                  <div class="shi"></div>
                  <span class="sj1">分</span>
                </div>
                <div class="miao-box">
                  <div class="shi">
                    <span class="sj">{{ second }}</span>
                  </div>
                  <div class="shi"></div>
                  <span class="sj1">秒</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="block4">
          <button class="dati" @click="goNext()">结束</button>
        </div>
        <div style="height: 20px">
          <img
            id="fireworks"
            class="fireworks"
            src="../assets/img/fireworks.png"
            alt=""
          />
        </div>

        <div style="height: 1px">
          <img
            id="fireworks1"
            class="fireworks1"
            src="../assets/img/fireworks.png"
            alt=""
          />
        </div>

        <div style="height: 1px">
          <img
            id="fireworks2"
            class="fireworks2"
            src="../assets/img/fireworks.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { fireworks } from "../js/fireworks";
export default {
  data() {
    return {
      time: 0,
      finish: true,
      second: "00",
      min: "00",
      hour: "00",
    };
  },
  created() {
    this.getParams();
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    goNext() {
      this.$router.push({
        path: "007",
      });
    },
    getParams() {
      var routerParams = this.$route.query.time;
      this.time = routerParams;
      console.log(this.time);
      if (this.time > 60) {
        this.second = parseInt(this.time) % 60;
        this.min = parseInt(this.time / 60);
        if (this.second < 10) {
          this.second = String("0" + this.second);
          console.log(this.second);
        }
        if (this.min < 10) {
          this.min = String("0" + this.min);
          console.log(this.min);
        }
        if (this.min > 60) {
          this.min = parseInt(this.time / 60) % 60;
          this.hour = parseInt(parseInt(this.time / 60) / 60);
          console.log(this.min);
          console.log(this.hour);
        }
      } else {
        this.second = parseInt(this.time);
        if (this.second < 10) {
          this.second = String("0" + this.second);
          console.log(this.second);
        }
      }
    },
    fireworksout() {
      document.getElementById("fireworks").style.display = "none";
      document.getElementById("fireworks1").classList.add("animate");
      setTimeout(() => {
        document.getElementById("fireworks2").classList.add("animate1");
      }, 600);
    },
    firework1sout() {
      document.getElementById("fireworks1").style.display = "none";
    },
    firework2sout() {
      document.getElementById("fireworks1").style.display = "none";
    },
    // fadeIn() {
    //   if (
    //     document.getElementById("fireworks").style.opacity == 0 ||
    //     document.getElementById("fireworks").style.opacity == ""
    //   ) {
    //     var sped = sped || 30; //默认速度为16.6ms
    //     var num = 0; //累加器
    //     var timer = setInterval(function () {
    //       num++;
    //       document.getElementById("fireworks").style.opacity = num / 20;
    //       if (num >= 20) {
    //         clearInterval(timer);
    //       }
    //     }, sped);
    //   }
    //   setTimeout(() => {
    //     var num1 = -120; //累加器
    //     var timer1 = setInterval(function () {
    //       console.log("上升");
    //       num1 -= 10;
    //       // console.log(num1);
    //       document.getElementById("fireworks").style.top = num1 + "px";
    //       if (num1 <= -350) {
    //         clearInterval(timer1);
    //       }
    //     }, sped);
    //   }, 1000);
    //   setTimeout(() => {
    //     var num2 = 30; //累加器
    //     var num3 = 25; //累加器
    //     var timer2 = setInterval(function () {
    //       console.log("变大");
    //       num2 += 13;
    //       num3 += 10;
    //       document.getElementById("fireworks").style.width = num2 + "px";
    //       document.getElementById("fireworks").style.height = num3 + "px";
    //       if (num2 >= 200) {
    //         clearInterval(timer2);
    //       }
    //     }, sped);
    //   }, 2000);
    //   setTimeout(() => {
    //     var num4 = 20; //累加器
    //     var timer3 = setInterval(function () {
    //       num4--;
    //       document.getElementById("fireworks").style.opacity = num4 / 20;
    //       if (num4 <= 0) {
    //         clearInterval(timer3);
    //       }
    //     }, sped);
    //   }, 2500);
    //   setTimeout(() => {
    //     var num5 = 0; //累加器
    //     var timer4 = setInterval(function () {
    //       num5++;
    //       document.getElementById("fireworks").style.opacity = num5 / 20;
    //       if (num5 >= 20) {
    //         clearInterval(timer4);
    //       }
    //     }, sped);
    //   }, 3000);
    //   setTimeout(() => {
    //     var num4 = 20; //累加器
    //     var timer3 = setInterval(function () {
    //       num4--;
    //       document.getElementById("fireworks").style.opacity = num4 / 20;
    //       if (num4 <= 0) {
    //         clearInterval(timer3);
    //       }
    //     }, sped);
    //   }, 3500);
    //   setTimeout(() => {
    //     var num5 = 0; //累加器
    //     var timer4 = setInterval(function () {
    //       num5++;
    //       document.getElementById("fireworks1").style.opacity = num5 / 20;
    //       if (num5 >= 20) {
    //         clearInterval(timer4);
    //       }
    //     }, sped);
    //   }, 4000);
    //   setTimeout(() => {
    //     var num4 = 20; //累加器
    //     var timer3 = setInterval(function () {
    //       num4--;
    //       document.getElementById("fireworks1").style.opacity = num4 / 20;
    //       if (num4 <= 0) {
    //         clearInterval(timer3);
    //       }
    //     }, sped);
    //   }, 4500);
    //   setTimeout(() => {
    //     var num5 = 0; //累加器
    //     var timer4 = setInterval(function () {
    //       num5++;
    //       document.getElementById("fireworks2").style.opacity = num5 / 20;
    //       if (num5 >= 20) {
    //         clearInterval(timer4);
    //       }
    //     }, sped);
    //   }, 4800);
    //   setTimeout(() => {
    //     var num4 = 20; //累加器
    //     var timer3 = setInterval(function () {
    //       num4--;
    //       document.getElementById("fireworks2").style.opacity = num4 / 20;
    //       if (num4 <= 0) {
    //         clearInterval(timer3);
    //       }
    //     }, sped);
    //   }, 5300);
    // },
  },
  mounted() {
    // console.log(111);
    // fireworks();
    setTimeout(() => {
      // this.fadeIn();
      this.fireworksout();
    }, 2000);
    setTimeout(() => {
      this.firework1sout();
    }, 4000);
  },
};
</script>

<style scoped>
@import "../assets/css/common.css";
.set-bg {
  width: 100%;
  height: 100%;
  background: url(~@/assets/img/bg2.jpg);
  background-size: cover;
}
.dd {
  width: 185px;
  height: 42px;
  position: relative;
  top: -25px;
  z-index: 6;
}
.block3 {
  top: -50px;
  margin: 0 29px 95px 29px;
}
.w1-box {
  padding-top: 50px;
}

.w1 {
  font-size: 30px;
  font-family: Adobe Heiti Std;
  font-weight: bold;
  color: #ffffff;
  text-shadow: 6px 7px 23px rgba(43, 16, 161, 0.65);
}
.w2 {
  font-size: 18px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: #ffffff;
}
.zq1 {
  margin-top: 28px;
}
.cw1 {
  margin-top: 16px;
}
.ljys-box {
  margin: auto;
  margin-top: 53px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.gang1 {
  width: 28px;
  height: 1px;
  background: #8b83ee;
}

.gang2 {
  margin-left: 5px;
  width: 28px;
  height: 1px;
  background: #8b83ee;
}

.ljys {
  margin-left: 5px;
  font-size: 12px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: #ffffff;
  line-height: 15px;
  opacity: 0.93;
}

.times-box {
  margin-top: 13px;
  margin-left: 58px;
  width: 203px;
  height: 57px;
}

.timebg1 {
  width: 203px;
  height: 57px;
  background: #3751cb;
  box-shadow: 0px 3px 5px 0px rgba(36, 28, 198, 0.52);
  border-radius: 4px;
}

.timebg {
  padding-top: 7px;
}

.timebg2 {
  margin: auto;
  width: 185px;
  height: 45px;
  background: #ffffff;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.shi-box {
  padding-left: 13px;
  width: 57px;
  height: 27px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.fen-box {
  width: 57px;
  height: 27px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.miao-box {
  width: 57px;
  height: 27px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.shi {
  margin-left: 2px;
  width: 19px;
  height: 27px;
  background: #373636;
  border-radius: 1px;
}

.sj {
  position: relative;
  bottom: 3px;
  z-index: 100;
  margin-left: 4px;
  font-size: 19px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #ffffff;
  line-height: 27px;
  letter-spacing: 10px;
}

.sj1 {
  margin-left: 3px;
  font-size: 9px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #010101;
  line-height: 27px;
}
.block4 {
  margin: auto;
  margin-top: 33px;
  width: 208px;
  height: 45px;
}
.dati {
  width: 208px;
  height: 45px;
  background: #2652e1;
  border-radius: 23px;
  border: 0;
  font-size: 19px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: #ffffff;
}
.fireworks {
  /* display: none; */
  /* opacity: 0; */
  z-index: 25;
  width: 30px;
  height: 25px;
  position: absolute;
  top: 80px;
  animation: fire 2s linear 1 normal;
}

@keyframes fire {
  0% {
    transform: translateY(160px);
  }
  20% {
    transform: translateY(0px);
  }
  40% {
    transform: scale(5);
  }
  60% {
    transform: scale(4);
  }
  80% {
    transform: scale(5);
  }
  100% {
    transform: scale(4);
  }
}
.fireworks1 {
  z-index: 25;
  width: 140px;
  height: 100px;
  transform: scale(0);
  position: relative;
  top: -520px;
  left: 110px;
}
.animate {
  animation: fire1 1.6s linear 1 normal;
}

@keyframes fire1 {
  0% {
    transform: scale(0);
  }
  25% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.8);
  }
  75% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.8);
  }
}
.fireworks2 {
  z-index: 25;
  width: 140px;
  height: 100px;
  transform: scale(0);
  position: relative;
  top: -450px;
  left: -180px;
  /* animation: fire2 1.6s linear 1 normal; */
}
.animate1 {
  animation: fire2 1.6s linear 1 normal;
}
@keyframes fire2 {
  0% {
    transform: scale(0);
  }
  25% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.8);
  }
  75% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.8);
  }
}
</style>
