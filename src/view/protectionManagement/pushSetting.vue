<template>
  <!--设备管理-->
  <div>
    <site-index-navigation-bar></site-index-navigation-bar>
    <site-main-navigation-bar></site-main-navigation-bar>
    <site-main-table></site-main-table>
  </div>
</template>

<script>
  import SiteIndexNavigationBar from '../../components/basis/siteIndexNavigationBar'
  import SiteMainNavigationBar from '../../components/basis/siteMainNavigationBar'
  import SiteMainTable from '../../components/basis/siteMainTable'
  export default {
    name: "push-setting",
    components:{
      SiteIndexNavigationBar,
      SiteMainNavigationBar,
      SiteMainTable
    }
  }
</script>

<style scoped>

</style>
