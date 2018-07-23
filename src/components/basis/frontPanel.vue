<template>
    <!--布防管理的面板组件-->
<div>
  <!-- Large modal -->
  <button type="button" class="btn btn-xs btn-default" data-toggle="modal" data-target=".bs-example-modal-lg">

    <img src="../../assets/img/index/icon_more.png" alt="" width="18"><span style="font-size: 16px">详情</span>

  </button>

  <button type="button" class="btn btn-xs btn-default" data-toggle="modal" data-target=".bs-example-modal-lg1">

    <img src="../../assets/img/index/icon_edit.png" alt="" width="18"><span style="font-size: 16px">编辑</span>

  </button>

  <button type="button" class="btn btn-xs btn-default" data-toggle="modal" data-target=".bs-example-modal-lg3">

    <img src="../../assets/img/index/icon_delete.png" alt="" width="18"><span style="font-size: 16px">删除</span>

  </button>



  <div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title pull-left" id="gridSystemModalLabel">设备详情</h4>
        </div>

        <div class="modal-body">



        </div>
        <!--<div class="modal-footer">-->

          <!---->
          <!--<button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>-->
        <!--</div>-->
      </div>
    </div>
  </div>


  <div class="modal fade bs-example-modal-lg1" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title pull-left" id="gridSystemModalLabel1">设备详情</h4>
        </div>

        <div class="modal-body">
           <label for="in1">名称:</label>
          <input id="in1" type="text" disabled value="大华" style="border: none">
          <label for="in3">名称:</label>
          <input id="in3" type="text" disabled value="大华" style="border: none">
          <label for="in2">名称:</label>
          <input id="in2" type="text" disabled value="大华" style="border: none">
          <label for="in2">名称:</label>
          <input id="in2" type="text" disabled value="大华" style="border: none">
        </div>


        <!--<div class="modal-footer">-->
          <!--<button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>-->
        <!--</div>-->
      </div>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: "front-panel"
    }
</script>

<style scoped>
i{
  color: red;
}
  span{
    margin-top: 20px;
  }
  .modal-header{
    font-size: 18px;
    color: #202846;
  }
  .modal-content{
    margin-top: 180px;
    width: 892px;
    height: 562px;
  }
</style>
