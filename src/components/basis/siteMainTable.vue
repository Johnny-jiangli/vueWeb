<template>
  <!--设备布防组件-->
  <!--<div class="container">-->
        <table class="table table-responsive">
          <thead>
          <tr>
            <th>序号</th>
            <th>布防名称</th>
            <th>设备</th>
            <th>算法</th>
            <th>安装地点</th>
            <th>阀值</th>
            <th>开关</th>
            <th>操作</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <tr v-for="(item,index) in items">
            <td>{{index}}</td>
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
        name: "site-main-table",
      components:{
      }
      ,
      data(){
          return {items:[
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
              }, {
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

.material-switch > input[type="checkbox"] {
  display: none;
}

.material-switch > label {
  cursor: pointer;
  height: 0px;
  position: relative;
  width: 40px;
}

.material-switch > label::before {
  background: rgb(0, 0, 0);
  box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  content: '';
  height: 16px;
  margin-top: -8px;
  position:absolute;
  opacity: 0.3;
  transition: all 0.4s ease-in-out;
  width: 40px;
}
.material-switch > label::after {
  background: rgb(255, 255, 255);
  border-radius: 16px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  content: '';
  height: 24px;
  left: -4px;
  margin-top: -8px;
  position: absolute;
  top: -4px;
  transition: all 0.3s ease-in-out;
  width: 24px;
}
.material-switch > input[type="checkbox"]:checked + label::before {
  background: inherit;
  opacity: 0.5;
}
.material-switch > input[type="checkbox"]:checked + label::after {
  background: inherit;
  left: 20px;
}
</style>
