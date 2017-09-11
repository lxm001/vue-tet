<template>
  <div class="personal-info">
    <nav-header title="个人信息"></nav-header>
    <div class="personal-info__content">
      <ul class="personal-info__list">
        <li class="personal-info__item">
          <router-link to="/user/bind-phone">
            <img src="../../assets/UserCenter/phone.png" class="personal-info__item--icon" alt="">
            <span class="personal-info__item--title">手机号码</span>
            <span class="personal-info__item--content">已认证：185XXXX0512</span>
            <span class="personal-info__item--arrow">
              <img src="../../assets/UserCenter/arrow.png" alt="">
            </span>
          </router-link>
        </li>
        <li class="personal-info__item">
          <router-link to="/user/license-plate-info">
            <img src="../../assets/UserCenter/license-plate.png" class="personal-info__item--icon" alt="">
            <span class="personal-info__item--title">车牌信息</span>
            <span class="personal-info__item--content">默认车牌号：沪A12345</span>
            <span class="personal-info__item--arrow">
              <img src="../../assets/UserCenter/arrow.png" alt="">
            </span>
          </router-link>
        </li>
        <li class="personal-info__item">
          <a href="javascript:void(0)">
            <img src="../../assets/UserCenter/user-level.png" class="personal-info__item--icon" alt="">
            <span class="personal-info__item--title">用户级别</span>
            <span class="personal-info__item--content">
              <img src="../../assets/UserCenter/v1.png" alt="">
              普通用户
            </span>
            <span class="personal-info__item--arrow"></span>
          </a>
        </li>
        <li class="personal-info__item">
          <a href="javascript:void(0)">
            <img src="../../assets/UserCenter/credit-points.png" class="personal-info__item--icon" alt="">
            <span class="personal-info__item--title">信用分</span>
            <span class="personal-info__item--content">100</span>
            <span class="personal-info__item--arrow"></span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import NavHeader from '../../components/NavHeader.vue';
  export default {
    name: 'PersonalInfo',
    data () {
      return {}
    },
    components: {
      'nav-header': NavHeader,
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
  .personal-info{
    &__content{
      position: absolute;
      width: 100%;
      height: auto;
      top: rem(88);
      overflow-y: scroll;
      background-color: $color-bg;
    }
    //个人信息内容列表
    &__item{
      margin-bottom: rem(10);
      background-color: $color-white;
      a{
        display: flex;
        align-items: center;
        height: rem(80);
        padding: 0 rem(34) 0 rem(42);
      }
      &--icon{
        margin-right: rem(10);
        height: rem(30);
      }
      &--title{
        font-size: $font-size-content;
        color: $color-blue;
      }
      &--content{
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        font-size: $font-size-content;
        margin-right: rem(30);
        img{
          height: rem(32);
          margin-right: rem(12);
        }
      }
      &--arrow{
        display: block;
        @include size(rem(20),rem(36));
        img{
          @include size(100%, 100%);
        }
      }
    }
  }
</style>
