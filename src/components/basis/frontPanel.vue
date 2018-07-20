<template>
    <!--布防管理的面板组件-->
<div>
  <!-- Large modal -->
  <button type="button" class="btn btn-xs btn-default" data-toggle="modal" data-target=".bs-example-modal-lg">

    <img src="../../assets/img/index/icon_more.png" alt="" width="18"><span style="font-size: 16px">详情</span>

  </button>
  <button type="button" class="btn btn-default" data-toggle="modal" data-target=".bs-example-modal-lg1">

    <img src="../../assets/img/index/icon_edit.png" alt="" width="18"><span style="font-size: 16px">编辑</span>

  </button>
  <button type="button" class="btn btn-default" data-toggle="modal" data-target=".bs-example-modal-lg">

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
          <ul class="list-group col-md-6">
            <li class="list-group-item"><i>*</i>名称:"'' +ren"</li>
            <li class="list-group-item"><i>*</i>用户名:Dapibus ac facilisis in</li>
            <li class="list-group-item"><i>*</i>IP:Morbi leo risus</li>
            <li class="list-group-item"><span>安装地点</span>Porta ac consectetur ac</li>
            <li class="list-group-item"><span>设备型号</span>Vestibulum at eros</li>
          </ul>
          <ul class="list-group col-md-6">
            <li class="list-group-item"><i>*</i>名称:Cras justo odio</li>
            <li class="list-group-item"><i>*</i>用户名:Dapibus ac facilisis in</li>
            <li class="list-group-item"><i>*</i>IP:Morbi leo risus</li>
            <li class="list-group-item"><span>流分发服务器</span>Porta ac consectetur ac</li>
            <li class="list-group-item"><span>通道个数</span>Vestibulum at eros</li>
          </ul>
        </div>
        <ul class="list-group col-md-12">
          <li class="list-group-item"> 设备不稳定的情况联系厂商</li>
        </ul>

        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
        </div>
      </div>
    </div>
  </div></div>
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
</style>
