<template>

  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header col-md-3">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#"></a>
      </div>
      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse col-md-7" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li class="dropdown active">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">实时监控<span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="#">人脸识别</a></li>
              <li><a href="#">危险物识别</a></li>
            </ul>
          </li>
          <li class="" ><a href="#">报警信息<span class="sr-only">(current)</span></a></li>
          <li><a href="#">布防管理</a></li>
          <li><a href="#">系统管理</a></li>
        </ul>


      </div><!-- /.navbar-collapse -->
      <div>
        <ul class="nav navbar-nav navbar-right">
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><img
              src="../../assets/img/boy_pic.png" width="28" alt="">Admin<span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="#">设置</a></li>
              <li><a href="#">个人中心</a></li>
              <li><a href="#">登出</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div><!-- /.container-fluid -->
  </nav>

</template>

<script>
    export default {
        name: "site-index-navigation-bar"
    }
</script>

<style scoped>

.navbar-default{
  font-size: 18px;
  height: 74px;
  border:none;
  background:
    url("../../assets/img/index/logo.png") 10px 10px no-repeat,
    url("../../assets/img/index/top_bar.png"),
    url("../../assets/img/index/logo_bg_bar.png")20px 0 no-repeat #1E2541;
}



  /*.navbar-collapse{*/
    /*margin:12px 0 0 350px;*/
  /*}*/
.navbar-nav{
  margin-top: 15px;
}
.navbar-right a{
 margin-top: 17px;
}

.navbar-nav>li>a:hover,.navbar-nav>li>a:active{
  color: #1feeed;
  background:transparent;
  border-bottom: #1FEEED solid 3px;
}

.navbar-nav>a{
  color: #4cae4c;
  background-color:red ;
}

.navbar-nav>.active>a:hover,
.navbar-nav>.active>a:focus{
  border-bottom: #1feeed solid 4px;
}

.dropdown-menu{
  background:transparent;
}
  .dropdown-menu a{
    color: #FAFAFA ;
    font-size: 16px;
  }
  .dropdown-menu a:hover{
    color:#1FEEED ;
    background: transparent;
    border-left: #1FEEED solid 3px;

  }
  .navbar-right{
    margin-top: -10px;
    margin-right: 0;
  }

</style>
