<template>
    <!--设备管理表单组件-->
  <!--<div class="container">-->
    <table class="table table-responsive">
      <thead>
      <tr>
        <th>名称</th>
        <th>设备</th>
        <th>用户名</th>
        <th>密码</th>
        <th>IP</th>
        <th>端口号</th>
        <th>安装地点</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <tr v-for="(item,index) in items">
        <td>{{item.class}}</td>
        <td>{{item.deviceName}}</td>
        <td>{{item.device}}</td>
        <td>{{item.deviceALG}}</td>
        <td>{{item.deviceAddress}}</td>
        <td>{{item.deviceFa}}</td>
        <td>
          <div class="material-switch">
            <input id="someSwitchOptionPrimary" v-bind:name="deviceStatus" type="checkbox"/>
            <label for="someSwitchOptionPrimary" class="label-success"></label>
          </div>
        </td>
        <td>
          <div class="material-switch">
            <input id="someSwitchOptionSuccess" v-bind:name="deviceStatus" type="checkbox"/>
            <label for="someSwitchOptionSuccess" class="label-success"></label>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  <!--</div>-->

</template>

<script>
    export default {
        name: "site-mains-device",
      components:{

      }
      ,
      data(){
        return {items:[
            {
              class:"人脸识别摄像头",
              deviceId:'大华',
              deviceName:'Admin',
              device:'123456',
              deviceALG:'192.168.0.2',
              deviceAddress:'8080',
              deviceFa:'大门口岗亭',
              deviceStatus:true
            },
            {
              deviceId:1,
              deviceName:'人脸识别',
              device:'NVR设备通道1',
              deviceALG:'人脸识别',
              deviceAddress:'小区门口',
              deviceFa:0.8,
              deviceStatus:true
            },
            {
              deviceId:1,
              deviceName:'人脸识别',
              device:'NVR设备通道1',
              deviceALG:'人脸识别',
              deviceAddress:'小区门口',
              deviceFa:0.8,
              deviceStatus:true
            },
            {
              class:"人脸识别摄像头",
              deviceId:'大华',
              deviceName:'Admin',
              device:'123456',
              deviceALG:'192.168.0.2',
              deviceAddress:'8080',
              deviceFa:'大门口岗亭',
              deviceStatus:true
            },
            {
              deviceId:1,
              deviceName:'人脸识别',
              device:'NVR设备通道1',
              deviceALG:'人脸识别',
              deviceAddress:'小区门口',
              deviceFa:0.8,
              deviceStatus:true
            },
            {
              deviceId:1,
              deviceName:'人脸识别',
              device:'NVR设备通道1',
              deviceALG:'人脸识别',
              deviceAddress:'小区门口',
              deviceFa:0.8,
              deviceStatus:true
            }
          ]
        }
      }
    }
</script>

<style scoped>

  table{
    font-size: 14px;
    color: #0f0f0f;
  }
  th,td{
    height: 70px;
  }
  th{
    color: #202846;
  }
  td{
    color: #7a7e86;
  }

</style>
