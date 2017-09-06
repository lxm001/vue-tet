<template>
  <header class="header-nav">
    <div class="header-nav__home" @click="goIndex">
      <img src="../assets/Header/home.png" alt="">
      <span>首页</span>
    </div>
    <div class="header-nav__title">{{ title }}</div>
  </header>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      }
    },
    name: '',
    data () {
      return {}
    },
    components: {},
    computed: {},
    methods: {
      goIndex: function () {
        this.$router.push({ path: '/' });
      }
    },
    created: function () {
    },
    mounted: function () {
    },
    watch: {}
  }
</script>

<style lang="scss">
  @import '../scss/mixins';
  .header-nav{
    position: fixed;
    top: 0;
    width: 100%;
    z-index: $z-index-nav;
    background-color: $color-blue;
    color: $color-white;
    &__home{
      position: absolute;
      top: 0;
      left: 0;
      width: rem(160);
      padding: 0 rem(34);
      height: rem(88);
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: $font-size-small;
      img{
        width: rem(32);
      }
    }
    &__title{
      padding: 0 rem(180);
      height: rem(88);
      line-height: rem(88);
      text-align: center;
      @include ellipsis;
    }
  }
</style>
