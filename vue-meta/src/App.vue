<template>
  <div id="app">
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  metaInfo: {
    title: 'Default App Title',
    titleTemplate: '%s | Vue-Meta Example App',
    htmlAttrs: {
      reptilian: 'gator'
    },
    headAttrs: {
      nest: 'eggs'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'description', content: 'gator' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },
  components: {
    HelloWorld
  }
}
</script>
