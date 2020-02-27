<template>
  <div id="app">
    <InlineMethodComponent />
    <SimpleMethodComponent />
    <InlineMethodCallComponent />
    <MethodCallModifiersComponent />
    <MethodCallKeyModifiersComponent />
  </div>
</template>

<script>
import InlineMethodComponent from './components/InlineMethodComponent.vue'
import SimpleMethodComponent from './components/SimpleMethodComponent.vue'
import InlineMethodCallComponent from './components/InlineMethodCallComponent.vue'
import MethodCallModifiersComponent from './components/MethodCallModifiersComponent.vue'
import MethodCallKeyModifiersComponent from './components/MethodCallKeyModifiersComponent.vue'

export default {
  name: 'App',
  components: {
    InlineMethodComponent,
    SimpleMethodComponent,
    InlineMethodCallComponent,
    MethodCallModifiersComponent,
    MethodCallKeyModifiersComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
