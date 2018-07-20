<template>
  <!--<div id="siteMainNavigationBar">-->
    <!---->
      <!--<ul class="nav nav-pills">-->
        <!--<li  role="presentation" class="col-md-2 col-sm-6" v-bind:class="{active:isActive}" @click="toggle"><router-link to="/device"><img src="../../assets/img/index/icon_monitor1.png" alt="">设备管理</router-link ></li>-->
        <!--<li role="presentation" class="col-md-2 col-sm-6"  v-bind:class="{active:isActive}" @click="toggle"><router-link to="/deployDefence"><img src="../../assets/img/index/icon_chuan2.png" alt="">设备布防</router-link></li>-->
        <!--<li role="presentation"  class="col-md-2 col-sm-6" v-bind:class="{active:isActive}" @click="toggle"><router-link to="#"><img src="../../assets/img/index/icon_message1.png"  alt="">推送设置</router-link></li>-->
        <!--<li role="presentation" class="col-md-2 col-sm-6"   v-bind:class="{active:isActive}" @click="toggle"><router-link to="#"><img src="../../assets/img/index/icon_message1.png" alt="">底库管理</router-link></li>-->
      <!--</ul>-->
  <!--</div>-->
  <!--<ul class="row">-->
    <!--<li class=""><router-link to="#"><img src="../../assets/img/index/icon_monitor1.png" alt="">查询条件</router-link> </li>-->
    <!--<li class=""><router-link to="#"><img src="../../assets/img/index/icon_monitor1.png" alt="">查询条件</router-link> </li>-->
    <!--<li class=""><router-link to="#"><img src="../../assets/img/index/icon_monitor1.png" alt="">查询条件</router-link> </li>-->
    <!--<li class=""><router-link to="baidu.com"><img src="../../assets/img/index/icon_monitor1.png" alt="">查询条件</router-link> </li>-->
  <!--</ul>-->
  <!--<div class="row" id="siteMainNavigation">-->
    <!--<div class="col-lg-8 col-md-8 col-sm-8">-->
      <!--<ul class="row">-->
        <!--<li class="btn btn-default col-lg-2 col-md-2 col-sm-2 active"><router-link to=""><img src="../../assets/img/index/icon_monitor1.png" alt="">查询条件</router-link></li>-->
        <!--<li class="btn btn-default col-lg-2 col-md-2 col-sm-2"><router-link to=""><img src="../../assets/img/index/icon_2_1.png" alt="">设备布防</router-link></li>-->
        <!--<li class="btn btn-default col-lg-2 col-md-2 col-sm-2"><router-link to=""><img src="../../assets/img/index/icon_message1.png"  alt="">推送设置</router-link></li>-->
        <!--<li class="btn btn-default col-lg-2 col-md-2 col-sm-2"><router-link to=""><img src="../../assets/img/index/icon_message1.png" alt="">底库管理</router-link></li>-->
      <!--</ul>-->
    <!--</div>-->
  <!--</div>-->

    <ul class="nav nav-tabs">
      <li role="presentation" ><router-link to="/test2"><img src="../../assets/img/index/icon_monitor1.png" alt="">设备管理</router-link></li>
      <li role="presentation"><router-link to="/test"><img src="../../assets/img/index/icon_2_1.png" alt="">设备布防</router-link></li>
      <li role="presentation"><router-link to=""><img src="../../assets/img/index/icon_message1.png"  alt="">推送设置</router-link></li>
      <li role="presentation"><router-link to=""><img src="../../assets/img/index/icon_message1.png" alt="">底库管理</router-link></li>
  </ul>

</template>

<script>
    export default {
        name: "site-main-navigation-bar",
      data(){
        return {
          isActive:false,
        };
      },
      methods:{
        toggle(){
          this.isActive = !this.isActive
        }

      },
      computed:{

      }
    }
</script>

<style scoped>
ul>li>a{
  font-size: 16px;
  color: white;
  background: #dcdee0;
  margin-right: 10px;
}

ul>li>a:hover,ul>li>a:active{
    background: #465484;
  }
</style>
