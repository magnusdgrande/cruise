<template>
  <div id="app">
    <sidebar></sidebar>
    <router-view/>
  </div>
</template>
<script>
import sidebar from '@/components/sidebar'
export default {
  name: 'app',
  components: {
    'sidebar': sidebar
  },
  data: function () {
    return {
    }
  }
}
</script>
<style lang="scss">
body {
  margin: 0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  background-color: #21a2a7;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
