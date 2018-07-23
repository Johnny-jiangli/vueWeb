<template>
  <!--<div class="">-->
    <!--<div class="row">-->
      <!--<div class="col-md-6">-->
        <!--<ul class="nav nav-pills nav-justified">-->
          <!--<li role="presentation" class="active"><router-link to="/test2"><img src="../../assets/img/index/icon_monitor1.png" alt="">设备管理</router-link></li>-->
          <!--<li role="presentation"><router-link to="/"><img src="../../assets/img/index/icon_2_1.png" alt="">设备布防</router-link></li>-->
          <!--<li role="presentation"><router-link to="/pushSetting"><img src="../../assets/img/index/icon_message1.png"  alt="">推送设置</router-link></li>-->
          <!--<li role="presentation"><router-link to="/test3"><img src="../../assets/img/index/icon_message1.png" alt="">底库管理</router-link></li>-->
        <!--</ul>-->
      <!--</div>-->
    <!--</div>-->
    <!--<div id="siteMainBor"></div>-->
  <!--</div>-->
  <div id="wrapper" class="row">
    <nav>
      <div class="inner">
        <ul class="nav">
          <li class="active"><a href="#">设备管理</a></li>
          <li><a href="#">设备布防</a></li>
          <li><a href="#">推送设置</a></li>
          <li><a href="#">底库管理</a></li>
        </ul>
      </div>
    </nav>
    <article>
      <div class="inner">
        <button class="btn btn-default"><img src="../src/assets/img/index/icon_add1.png" width="15" alt="">新增</button>
      </div>
    </article>
    <section>
      <div class="inner">
        <table class="table table-condensed">
          <!--<caption>精简表格布局</caption>-->
          <thead>
          <tr>
            <th>名称</th>
            <th>城市</th>
            <th>邮编</th>
            <th>邮编</th>
            <th>邮编</th>
            <th>邮编</th>
            <th>邮编</th>

          </tr>
          </thead>
          <tbody>
          <tr>
            <td>Tanmay</td>
            <td>Bangalore</td>
            <td>560001</td>
          </tr>
          <tr>
            <td>Sachin</td>
            <td>Mumbai</td>
            <td>400003</td>
          </tr>
          <tr>
            <td>Uma</td>
            <td>Pune</td>
            <td>411027</td>
          </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>

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

li>a{
  color: white;
  background: #cccccc;
  width: 134px;
  height: 48px;
}

  #siteMainBor{
    margin-bottom: 20px;
    border-bottom: #cccccc solid 1px;
  }
</style>
