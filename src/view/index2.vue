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
    name: "index2",
    components:{
      SiteIndexNavigationBar,
      Device
    },
    methods:{
      submit(e){
        axios.post('/user', {
          firstName: 'Fred',
          lastName: 'Flintstone'
        })
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
