<template>
  <div id="app">
    <HelloWorld2 />
  </div>
</template>

<script>
import HelloWorld2 from './components/HelloWorld2.vue'

export default {
  name: 'App',
  metaInfo: {
    title: 'Default App Title 2',
    titleTemplate: '%s | Vue-Meta Example App 2'
  },
  components: {
    HelloWorld2
  }
}
</script>
