<template>
  <div class="user-center">
    <nav-header title="车位锁问题车位锁问题车位锁问题"></nav-header>
    <div class="user-center__content"></div>
    <nav-footer current="user"></nav-footer>
  </div>
</template>

<script>
  import NavHeader from '../components/NavHeader.vue';
  import NavFooter from '../components/NavFooter.vue';
  export default {
    name: 'UserCenter',
    data () {
      return {}
    },
    components: {
      'nav-header': NavHeader,
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
  @import '../scss/mixins';
  .user-center{
    &__content{
      position: absolute;
      width: 100%;
      height: auto;
      top: rem(88);
      bottom: rem(98);
      //background-color: $color-bg;
      overflow-y: scroll;
    }
  }
</style>
