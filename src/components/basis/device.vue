<template>
  <div id="wrapper">
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
        <button class="btn btn-default"><img src="../../assets/img/index/icon_add1.png" width="15" alt="">新增</button>
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
            <td>560001</td>
            <td>560001</td>
            <td>560001</td>
            <td>
              <button type="button">详情</button>
              <button type="button">编辑</button>
              <button type="button">删除</button>
            </td>
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
        name: "device"
    }
</script>

<style scoped>

</style>
