<template>
  <div>
    <site-index-navigation-bar>
    </site-index-navigation-bar>
    <device>

    </device>
  </div>
</template>

<script>
  import SiteIndexNavigationBar from '../components/basis/siteIndexNavigationBar'
  import Device from '../components/basis/device'
  import axios from 'axios'

    export default {
      name: "test",
      components:{
        SiteIndexNavigationBar,
        Device
      },
      created(){
      },
      methods: {
        submit() {
          axios.get('/https://api.douban.com/v2/book/?id=12345')
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      }
    }
</script>

<style scoped>

</style>
