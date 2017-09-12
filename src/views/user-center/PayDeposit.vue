<template>
  <div class="pay-deposit">
    <nav-header title="缴纳押金"></nav-header>
    <div class="pay-deposit__content">
      <div class="pay-deposit__top">
        <h3>299.00</h3>
        <p>停车前需支付押金才可随时停车</p>
        <img src="../../assets/UserCenter/pay-bg.png" alt="">
      </div>
      <div class="pay-deposit__pay">支付</div>
    </div>
  </div>
</template>

<script>
  import NavHeader from '../../components/NavHeader.vue';
  export default {
    name: 'PayDeposit',
    data () {
      return {}
    },
    components: {
      'nav-header': NavHeader
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
  .pay-deposit{
    &__content{
      position: absolute;
      width: 100%;
      height: auto;
      top: rem(88);
      bottom: rem(98);
      overflow-y: scroll;
      background-color: $color-bg;
      padding: rem(10) rem(30) 0;
    }
    &__top{
      padding: rem(30);
      background-color: $color-white;
      display: flex;
      flex-direction: column;
      border-radius: $border-radius-big;
      h3{
        line-height: rem(46);
        font-size: $font-size-big;
      }
      p{
        margin: rem(18) 0 rem(34);
        font-size: $font-size-small;
        line-height: rem(24);
        color: $color-deep-gray;
      }
      img{
        width: 100%;
      }
    }
    &__pay{
      line-height: rem(88);
      background-color: $color-blue;
      color: $color-white;
      text-align: center;
      font-size: $font-size-content-big;
      border-radius: $border-radius-big;
      margin-top: rem(38);
    }
  }
</style>
