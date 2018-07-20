<template>
  <div class="nofo">
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header" style="height: 74px">
        <!--<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">-->
          <!--<span class="sr-only">Toggle navigation</span>-->
          <!--<span class="icon-bar"></span>-->
          <!--<span class="icon-bar"></span>-->
          <!--<span class="icon-bar"></span>-->
        <!--</button>-->
        <a class="navbar-brand" href="#">
          <img src="../../assets/img/index/top_bar.png" alt="" style="position: absolute;z-index: -1;width: 100%;height:74px;left:0;top:0">
          <img src="../../assets/img/index/logo_bg_bar.png" alt="" style="z-index:0;position: absolute;width: 350px; height: 74px;left: 0;top: 5px;">
          <img src="../../assets/img/index/logo.png"  style="z-index: 1" width="284" alt="">
        </a>
      </div>
      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs">
        <ul class="nav navbar-nav">
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">实时监控<span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><router-link to="#"><img src="../../assets/img/index/icon_index_face.png" alt="" width="18"/>人脸识别</router-link> </li>
              <li><router-link to="#"><img src="../../assets/img/index/icon_index_danger.png"  width="18" />危险物识别</router-link> </li>
            </ul>
          </li>
          <li class=""><a href="#">报警信息<span class="sr-only">(current)</span></a></li>
          <li><router-link to="/test2">布防管理</router-link></li>
          <li><a href="#">系统管理</a></li>

        </ul>
        <!--<form class="navbar-form navbar-left">-->
          <!--<div class="form-group">-->
            <!--<input type="text" class="form-control" placeholder="Search">-->
          <!--</div>-->
          <!--<button type="submit" class="btn btn-default">Submit</button>-->
        <!--</form>-->
        <ul class="nav navbar-nav navbar-right">
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><img
              src="../../assets/img/boy_pic.png" alt="">Admin<span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
              <li><a href="#">Something else here</a></li>
              <li role="separator" class="divider"></li>
              <li><a href="#">Separated link</a></li>
            </ul>
          </li>
        </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>
  </div>
</template>

<script>
    export default {
        name: "site-index-navigation-bar"
    }
</script>

<style scoped>
  .navbar{
    height: 74px;
    font-size: 20px;
    background-color: #465484;
  }
  .navbar-right>li{
    margin-top: -10px;
  }
/*.navbar-header{*/
  /*background: url("../../assets/img/index/logo_bg_bar.png");*/
  /*z-index: 1;*/
/*}*/
  /*.nofo{*/
    /*position:relative;*/
  /*}*/
  /*.navbar-header>a{*/
    /*position:absolute;*/

  /*}*/


#bs>ul {
  margin-top: 15px;
  margin-left: 50px;
}
#bs>ul>li>a :hover,#bs>ul>li>a:active{
  color: white;
  border-bottom: #1feeed solid 3px;
}
  #bs>ul>li>ul{
    background: #6173b0;
    font-size: 16px;
  }
  #bs>ul>li{
    margin-right: 20px;
  }
#bs>ul>li>ul>li>a:hover,
#bs>ul>li>ul>li>a:active{
  background:#6173b0;
  color: #1feeed;
  border-left: #1feeed solid 3px;
}
</style>
