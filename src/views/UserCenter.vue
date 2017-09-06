<template>
  <div class="user-center">
    <nav-footer current="user"></nav-footer>
  </div>
</template>

<script>
  import NavFooter from '../components/NavFooter.vue';
  export default {
    name: 'UserCenter',
    data () {
      return {}
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

</style>
