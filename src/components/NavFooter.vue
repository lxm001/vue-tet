<template>
  <footer class="footer-nav">
    <ul class="footer-nav__wrapper">
      <li class="footer-nav__li footer-nav__my">
        <router-link to="/my-parking" v-if="!isMy">
          <img src="../assets/NavFooter/my-parking.png" alt="">
          <span>我的车位</span>
        </router-link>
        <a href="javascript:void(0)" class="footer-nav__li--select" v-if="isMy">
          <img src="../assets/NavFooter/my-parking-select.png" alt="">
          <span>我的车位</span>
        </a>
      </li>
      <li class="footer-nav__li footer-nav__reserve">
        <router-link to="/" v-if="!isReserve">
          <img src="../assets/NavFooter/reserved-parking.png" alt="">
          <span>预约停车</span>
        </router-link>
        <a href="javascript:void(0)" class="footer-nav__li--select" v-if="isReserve">
          <img src="../assets/NavFooter/reserved-parking-select.png" alt="">
          <span>预约停车</span>
        </a>
      </li>
      <li class="footer-nav__li footer-nav__user">
        <router-link to="/user" v-if="!isUser">
          <img src="../assets/NavFooter/user-center.png" alt="">
          <span>用户中心</span>
        </router-link>
        <a href="javascript:void(0)" class="footer-nav__li--select" v-if="isUser">
          <img src="../assets/NavFooter/user-center-select.png" alt="">
          <span>用户中心</span>
        </a>
      </li>
    </ul>
  </footer>
</template>

<script>
  export default {
    props: {
      current: {
        type: String,
        default: 'reserve',
      }
    },
    data () {
      return {}
    },
    components: {},
    computed: {
      isMy: function () {
        return this.current === 'my';
      },
      isReserve: function () {
        return this.current === 'reserve';
      },
      isUser: function () {
        return this.current === 'user';
      }
    },
    methods: {
    },
    created: function () {
    },
    mounted: function () {
    },
    watch: {}
  }
</script>

<style lang="scss">
  @import "../scss/mixins";
  .footer-nav{
    position: fixed;
    width: 100%;
    bottom: 0;
    z-index: $z-index-nav;
    &__wrapper{
      display: flex;
    }
    &__li{
      flex: 1;
      a{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: rem(98);
        padding: rem(12) 0;
        img{
          width: rem(46);
        }
        span{
          font-size: $font-size-small;
        }
      }
      &--select{
        span{
          color: $color-blue;
        }
      }
    }
  }
</style>
