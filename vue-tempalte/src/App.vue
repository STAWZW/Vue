<template>
  <div id="app" style="height:100%">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>

<style lang="scss">
  body {
    padding: 0;
    margin: 0;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    //text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;

    a {
    font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
  a:hover{
    color:red;
  }
</style>
