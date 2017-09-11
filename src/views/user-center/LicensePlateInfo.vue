<template>
  <div class="plate-info">
    <nav-header title="车牌信息"></nav-header>
    <div class="plate-info__content">
      <!--车牌列表-->
      <ul class="plate-info__list">
        <li class="plate-info__item" v-for="(item, index) in plateList">
          <h3>{{ item.plate }}</h3>
          <div class="plate-info__item--operate">
            <div class="plate-info__item--left" :class="item.isDefault ? 'selected' : ''">{{ item.isDefault ? '当前默认' : '设为默认' }}</div>
            <div class="plate-info__item--right">
              <span class="plate-info__item--editor">
                <img src="../../assets/UserCenter/editor.png" alt="">
                编辑
              </span>
              <span class="plate-info__item--delete">
                <img src="../../assets/UserCenter/delete.png" alt="">
                删除
              </span>
            </div>
          </div>
        </li>
      </ul>
      <!--新增-->
      <div class="plate-info__add">新增车牌信息</div>
    </div>
  </div>
</template>

<script>
  import NavHeader from '../../components/NavHeader.vue';
  export default {
    name: 'LicensePlateInfo',
    data () {
      return {
        plateList: [
          {
            plate: '沪A12345',
            isDefault: true
          },
          {
            plate: '沪A12345',
            isDefault: false
          },
          {
            plate: '沪A12345',
            isDefault: false
          },
          {
            plate: '沪A12345',
            isDefault: false
          },
          {
            plate: '沪A12345',
            isDefault: false
          },
          {
            plate: '沪A12345',
            isDefault: false
          },
          {
            plate: '沪A12345',
            isDefault: false
          },
          {
            plate: '沪A12345',
            isDefault: false
          },
          {
            plate: '沪A12345',
            isDefault: false
          },
          {
            plate: '沪A12345',
            isDefault: false
          }
        ]
      }
    },
    components: {
      NavHeader,
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
  .plate-info{
    &__content{
      position: absolute;
      width: 100%;
      height: auto;
      top: rem(88);
      overflow-y: scroll;
      padding: rem(10) rem(30) 0;
      background-color: $color-bg;
    }
    //车牌列表
    &__list{}
    &__item{
      padding: rem(18) rem(22) rem(34) rem(50);
      margin-bottom: rem(10);
      background-color: $color-white;
      border-radius: $border-radius-small;
      h3{
        font-size: $font-size-content-big;
        line-height: rem(60);
      }
      &--operate{
        display: flex;
        justify-content: space-between;
      }
      &--left{
        width: rem(138);
        height: rem(48);
        line-height: rem(48);
        text-align: center;
        font-size: $font-size-small;
        color: $color-white;
        background-color: $color-blue;
        border-radius: $border-radius-big;
        &.selected{
          background-color: $color-gray;
        }
      }
      &--right{
        display: flex;
        span{
          display: flex;
          align-items: center;
          margin-right: rem(28);
          height: rem(48);
          line-height: rem(48);
          font-size: $font-size-content;
          img{
            height: rem(32);
            margin-right: rem(12);
          }
        }
      }
    }
    //新增按钮
    &__add{
      margin: rem(50);
      background-color: $color-blue;
      color: $color-white;
      height: rem(88);
      line-height: rem(88);
      text-align: center;
      font-size: $font-size-content-big;
      border-radius: $border-radius-big;
    }
  }
</style>
