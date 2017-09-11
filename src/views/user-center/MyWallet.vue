<template>
  <div class="my-wallet">
    <nav-header title="我的钱包"></nav-header>
    <div class="my-wallet__content">
      <!--余额-->
      <div class="my-wallet__top">
        <div class="my-wallet__top--money">2800.00</div>
        <div class="my-wallet__top--tips">总余额（元）</div>
      </div>
      <!--充值-->
      <div class="my-wallet__recharge">充值</div>
      <!--查看列表-->
      <ul class="my-wallet__list">
        <li class="my-wallet__item">
          <router-link to="">
            <span class="my-wallet__item--title">我的押金</span>
            <span class="my-wallet__item--content">299，押金退款</span>
            <img src="../../assets/UserCenter/arrow.png" alt="">
          </router-link>
        </li>
        <li class="my-wallet__item">
          <router-link to="">
            <span class="my-wallet__item--title">我的优惠券</span>
            <span class="my-wallet__item--content">3张</span>
            <img src="../../assets/UserCenter/arrow.png" alt="">
          </router-link>
        </li>
        <li class="my-wallet__item">
          <router-link to="">
            <span class="my-wallet__item--title">账户明细</span>
            <span class="my-wallet__item--content"></span>
            <img src="../../assets/UserCenter/arrow.png" alt="">
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import NavHeader from '../../components/NavHeader.vue';
  export default {
    name: 'MyWallet',
    data () {
      return {}
    },
    components: {
      NavHeader
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

<style lang="scss" scoped>
  @import '../../scss/mixins';
  .my-wallet{
    &__content{
      position: absolute;
      width: 100%;
      height: auto;
      top: rem(88);
      overflow-y: scroll;
      background-color: $color-bg;
    }
    //余额
    &__top{
      height: rem(300);
      background: $color-white url("../../assets/UserCenter/my-bg.png") center bottom no-repeat;
      background-size: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      &--money{
        font-size: $font-size-bigger;
        line-height: rem(68);
      }
      &--tips{
        font-size: $font-size-content-big;
        color: $color-deep-gray;
        margin-top: rem(18);
      }
    }
    //充值
    &__recharge{
      margin: rem(20) rem(30);
      height: rem(88);
      line-height: rem(88);
      text-align: center;
      background-color: $color-blue;
      color: $color-white;
      border-radius: $border-radius-big;
    }
    //查看列表
    &__list{}
    &__item{
      margin-bottom: rem(6);
      a{
        display: flex;
        align-items: center;
        height: rem(80);
        padding: 0 rem(34) 0 rem(30);
        font-size: $font-size-content;
        background-color: $color-white;
        img{
          height: rem(36);
        }
      }
      &--title{
        color: $color-blue;
      }
      &--content{
        flex: 1;
        color: $color-gray;
        text-align: right;
        margin-right: rem(30);
      }
    }
  }
</style>
