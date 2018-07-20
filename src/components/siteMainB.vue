<template>
  <div class="wai">
    <div class="bar">
      <site-main-navigation-bar></site-main-navigation-bar>
    </div>
    <div class="bar1">
      <site-mains-device></site-mains-device>
    </div>
  </div>
</template>

<script>
  import SiteMainNavigationBar from './basis/siteMainNavigationBar'
  import SiteMainsDevice from './basis/siteMainsDevice'
  export default {
    name: "site-main-B",
    components:{
      SiteMainNavigationBar,
      SiteMainsDevice
    }
  }
</script>

<style scoped>

  .bar{
    margin: 20px 50px;
    color: #0f0f0f;
    border-bottom: #cccccc solid 1px;
  }
  .bar1{
    margin: 20px 50px;
  }
</style>
