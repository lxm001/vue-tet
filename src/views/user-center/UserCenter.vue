<template>
  <div class="user-center">
    <div class="user-center__content">
      <div class="user-center__top">
        <img class="user-center__top--bg" src="../../assets/UserCenter/bg.jpg" alt="">
        <div class="user-center__top--info">
          <img src="../../assets/UserCenter/head-img.png" alt="">
          <p>测试</p>
        </div>
        <div class="user-center__top--bottom">
          <router-link to="">
            <div>手机号码</div>
            <div>未绑定</div>
          </router-link>
          <div class="user-center__top--bottom-line"></div>
          <router-link to="">
            <div>我的余额</div>
            <div>0元</div>
          </router-link>
        </div>
      </div>
      <!--功能列表-->
      <ul class="user-center__list">
        <li class="user-center__item">
          <router-link to="">
            <img class="user-center__item--left" src="../../assets/UserCenter/info.png" alt="">
            <span>个人信息</span>
            <img class="user-center__item--right" src="../../assets/UserCenter/arrow.png" alt="">
          </router-link>
        </li>
        <li class="user-center__item">
          <router-link to="">
            <img class="user-center__item--left" src="../../assets/UserCenter/wallet.png" alt="">
            <span>我的钱包</span>
            <img class="user-center__item--right" src="../../assets/UserCenter/arrow.png" alt="">
          </router-link>
        </li>
        <li class="user-center__item">
          <router-link to="">
            <img class="user-center__item--left" src="../../assets/UserCenter/order.png" alt="">
            <span>我的订单</span>
            <img class="user-center__item--right" src="../../assets/UserCenter/arrow.png" alt="">
          </router-link>
        </li>
        <li class="user-center__item">
          <router-link to="">
            <img class="user-center__item--left" src="../../assets/UserCenter/tet.png" alt="">
            <span>关于停E停</span>
            <img class="user-center__item--right" src="../../assets/UserCenter/arrow.png" alt="">
          </router-link>
        </li>
      </ul>
    </div>
    <nav-footer current="user"></nav-footer>
  </div>
</template>

<script>
  import NavFooter from '../../components/NavFooter.vue';
  export default {
    name: 'UserCenter',
    data () {
      return {
        testUrl: '../../assets/UserCenter/info.png'
      }
    },
    components: {
      'nav-footer': NavFooter
    },
    computed: {},
    methods: {},
    created: function () {
    },
    mounted: function () {
    },
    watch: {}
  }
</script>

<style lang="scss">
  @import '../../scss/mixins';
  .user-center{
    &__content{
      position: absolute;
      width: 100%;
      height: auto;
      top: 0;
      bottom: rem(98);
      //background-color: $color-bg;
      overflow-y: scroll;
    }
    //顶部个人信息
    &__top{
      position: relative;
      height: rem(388);
      &--bg{
        width: 100%;
      }
      &--info{
        position: absolute;
        top: rem(59);
        left: 0;
        width: 100%;
        text-align: center;
        img{
          width: rem(110);
          height: rem(110);
          border-radius: 50%;
        }
        p{
          font: normal $font-size-content-min/rem(70) '苹方';
          height: rem(70);
          color: $color-white;
        }
      }
      &--bottom{
        position: absolute;
        height: rem(120);
        bottom: 0;
        left: 0;
        width: 100%;
        display: flex;
        align-items: center;
        background-color: rgba(0,0,0,0.25);
        &-line{
          width: 1px;
          background-color: $color-white;
          height: rem(80);
        }
        a{
          flex: 1;
          height: rem(120);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: $color-white;
          font: normal $font-size-small/rem(32) '苹方';
        }
      }
    }
    //功能列表
    &__list{
      margin-top: rem(20);
    }
    &__item{
      margin-bottom: rem(6);
      background-color: $color-white;
      a{
        display: flex;
        align-items: center;
        height: rem(80);
        padding: 0 rem(30);
        span{
          flex: 1;
          margin-left: rem(20);
          font: normal $font-size-content '苹方';
          color: $color-blue;
        }
      }
      &--left{
        height: rem(40);
      }
      &--right{
        height: rem(34);
      }
    }
  }
</style>
