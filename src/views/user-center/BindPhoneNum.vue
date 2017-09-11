<template>
  <div class="phone-num">
    <!--头部-->
    <nav-header title="手机验证"></nav-header>
    <!--内容-->
    <div class="phone-num__content">
      <!--输入手机号-->
      <div class="phone-num__phone phone-num__number">
        <div class="phone-num__number--input">
          <label>
            <img src="../../assets/UserCenter/input-phone.png" alt="">
            <input type="number" placeholder="请输入您的手机号" maxlength="11" v-model="phoneNum">
          </label>
        </div>
      </div>
      <!--输入验证码-->
      <div class="phone-num__code phone-num__number">
        <div class="phone-num__code--input phone-num__number--input">
          <label>
            <img src="../../assets/UserCenter/code.png" alt="">
            <input type="number" placeholder="验证码" maxlength="6" v-model="inputCode">
          </label>
        </div>
        <div class="phone-num__code--get" @click="getCode" v-if="!isStartTime">获取验证码</div>
        <div class="phone-num__code--time" v-else>{{countdown}}s</div>
      </div>
      <!--提示-->
      <div class="phone-num__tips">
        <span>点击确定即表示您已阅读并同意</span>
        <span class="phone-num__tips--view">《使用规则与停车服务协议》</span>
      </div>
      <!--确定-->
      <div class="phone-num__sure" @click="sureAgree">确认</div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import NavHeader from '../../components/NavHeader.vue';
  export default {
    name: 'BindPhoneNum',
    data () {
      return {
        isGetCode: false,//是否点击获取验证码
        isSureClick: false,//是否点击确定
        isStartTime: false,//是否开始计时
        countdown: 60,//倒计时
        timeOut: '',//倒计时setInterval返回值
        phoneNum: '',//手机号
        inputCode: '',//验证码
        code: '',//后台返回code值
      }
    },
    components: {
      NavHeader
    },
    computed: {},
    methods: {
      ...mapActions([
        'postData'
      ]),
      //验证手机号格式
      checkPhoneNum: function () {
        if(!this.phoneNum){
          alert("请输入您的手机号");
          return false;
        }else{
          let reg = /^1[345678]\d{9}$/;
          if(!reg.test(this.phoneNum)){
            alert("请输入正确的手机号");
            this.phoneNum = "";
            return false;
          }else{
            return true;
          }
        }
      },
      //验证并核对code
      checkCodeNum: function (code) {
        if(!this.inputCode){
          alert("请输入验证码");
          return false;
        }else{
          let reg = /^\d{6}/;
          if(!reg.test(this.inputCode)){
            alert("请输入正确的验证码");
            this.inputCode = "";
            return false;
          }else{
            if(!!code){
              console.log("有Code");
              if(this.inputCode == code){
                return true;
              }else{
                alert("您输入验证码不正确");
                return false;
              }
            }else{
              console.log("无code");
              return true;
            }
          }
        }
      },
      //点击获取code
      getCode: function () {
        if(this.isStartTime){
          return false;
        }
        if(!this.checkPhoneNum()){
          return false;
        }
        this.isGetCode = true;
        this.isStartTime = true;
        this.timeOut = setInterval(() => {
          if(this.countdown <= 1){
            this.isStartTime = false;
            this.countdown = 60;
            clearInterval(this.timeOut);
          }else{
            this.countdown = this.countdown - 1;
            console.log(this.countdown);
          }
        }, 1000);
        //在此填写获取验证码ajax
      },
      //确定同意绑定
      sureAgree: function () {
        //验证是否点击获取验证码
        if(!this.isGetCode){
          alert("请点击获取验证码后再点击确认");
          return false;
        }
        //再次核对手机号
        if(!this.checkPhoneNum()){
          return false;
        }
        //验证验证码是否正确
        if(!this.checkCodeNum(this.code)){
          return false;
        }
        //避免重复点击提交
        if(this.isSureClick){
          return false;
        }
        this.isSureClick = true;
        //在此填写提交ajax
      }
    },
    created: function () {
    },
    mounted: function () {
    },
    //在离开前清除计数器
    beforeRouteLeave (to, from, next) {
      // 导航离开该组件的对应路由时调用
      // 可以访问组件实例 `this`
      clearInterval(this.timeOut);
      next();
    },
    watch: {
      phoneNum: function (val, oldVal) {
        if(val.length > 11){
          this.phoneNum = val.slice(0,11);
        }
      },
      inputCode: function (val, oldVal) {
        if(val.length > 6){
          this.inputCode = val.slice(0,6);
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../scss/mixins";
  .phone-num{
    &__content{
      position: absolute;
      width: 100%;
      height: auto;
      top: rem(88);
      overflow-y: scroll;
      background-color: $color-bg;
      padding: rem(100) rem(30) 0;
    }
    //输入手机号 验证码 公共样式
    &__number{
      display: flex;
      margin-bottom: rem(20);
      &--input{
        flex: 1;
        display: flex;
        label{
          flex: 1;
          display: flex;
          align-items: center;
          height: rem(88);
          background-color: $color-white;
          border-radius: $border-radius-small;
          overflow: hidden;
          img{
            width: rem(24);
            margin: 0 rem(20);
          }
          input{
            flex: 1;
            height: rem(88);
            border: none;
            font-size: $font-size-content-big;
          }
        }
      }
    }
    //输入验证码
    &__code{
      &--get,
      &--time{
        @include size(rem(254), rem(88));
        line-height: rem(88);
        text-align: center;
        margin-left: rem(16);
        border-radius: $border-radius-big;
        overflow: hidden;
        background-color: $color-blue;
        color: $color-white;
        font-size: $font-size-content-big;
      }
      &--time{
        background-color: $color-gray;
      }
    }
    //提示
    &__tips{
      font-size: $font-size-small;
      text-align: center;
      &--view{
        color: $color-blue;
      }
    }
    @media screen and (max-width: 360px) {
      &__tips{
        span{
          display: block;
        }
      }
    }
    //确认
    &__sure{
      @include size(rem(590), rem(80));
      line-height: rem(80);
      margin: rem(68) auto 0;
      background-color: $color-blue;
      color: $color-white;
      text-align: center;
      border-radius: $border-radius-big;
      overflow: hidden;
      font-size: $font-size-content-big;
    }
  }
</style>
