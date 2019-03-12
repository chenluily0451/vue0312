<template>
  <div id="app">
    <Container msg="hello"/>
  </div>
</template>

<script>
import Container from './components/Container.vue'

export default {
  name: 'app',
  components: {
      Container
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  #app{text-align: center}
  @import "./assets/scss/common";
</style>

