<template>
  <div id="app">
    <router-view></router-view>
    <h1>Locations</h1>
    <router-link to="/swamp">Swamp</router-link>
    <h1>Animals</h1>
    <router-link to="/gator">Gator</router-link>
    <router-link to="/croc">Croc</router-link>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
