<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>


<script>
// import http from "utils/http"

export default {
  name: "App"
};
</script>                 
<style >
html {
  font-size: 26.7vw;
}
body {
  margin: 0;
  padding: 0;
}
#app {
  height: 100%;
}
</style>
