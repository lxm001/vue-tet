<template>
  <div class="personal-info">
    <nav-header title="车位锁问题车位锁问题车位锁问题"></nav-header>
    <div class="personal-info__content"></div>
    <nav-footer current="user"></nav-footer>
  </div>
</template>

<script>
  import NavHeader from '../../components/NavHeader.vue';
  import NavFooter from '../../components/NavFooter.vue';
  export default {
    name: 'PersonalInfo',
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
  @import '../../scss/mixins';
  .personal-info{
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
