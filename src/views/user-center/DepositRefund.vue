<template>
  <div class="deposit-refund">
    <nav-header title="押金退款"></nav-header>
    <div class="deposit-refund__content">
      <div class="deposit-refund__select">
        <label>
          <span class="deposit-refund__select--left">
            退款理由
            <span>*</span>
          </span>
          <select name="reason" class="deposit-refund__select--right" v-model="selectReason">
            <option value="" selected>请选择退款理由</option>
            <option value="1">不想用了</option>
            <option value="2">不想用了2</option>
            <option value="3">不想用了3</option>
          </select>
        </label>
      </div>
      <div class="deposit-refund__reason">
        <label>
          <span class="deposit-refund__reason--left">补充理由</span>
          <textarea name="detail-reason" class="deposit-refund__reason--right" v-model="detailReason"></textarea>
        </label>
      </div>
      <div class="deposit-refund__sure">申请退款</div>
    </div>
  </div>
</template>

<script>
  import NavHeader from '../../components/NavHeader.vue';
  export default {
    name: 'DepositRefund',
    data () {
      return {
        selectReason: '',//select选择的退款理由
        detailReason: '',//补充描述
      }
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

<style lang="scss">
  @import '../../scss/mixins';
  .deposit-refund{
    &__content{
      position: absolute;
      width: 100%;
      height: auto;
      top: rem(88);
      overflow-y: scroll;
      background-color: $color-bg;
      padding: rem(100) rem(80) 0;
      font-size: $font-size-content-big;
    }
    &__select{
      label{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
      }
      &--left{
        line-height: rem(50);
        span{
          color: $color-red;
        }
      }
      &--right{
        width: rem(426);
        height: rem(50);
        padding-left: rem(20);
        background-color: $color-white;
        border: none;
        border-radius: $border-radius-big;
      }
    }
    &__reason{
      label{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
      }
      margin: rem(58) 0 rem(50);
      &--left{
        line-height: rem(88);
      }
      &--right{
        @extend .deposit-refund__select--right;
        height: rem(296);
        resize: none;
        padding: 10px;
        overflow-y: auto;
      }
    }
    &__sure{
      line-height: rem(88);
      text-align: center;
      background-color: $color-blue;
      color: $color-white;
      border-radius: $border-radius-big;
    }
  }
</style>
