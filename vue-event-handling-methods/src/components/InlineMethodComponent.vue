<template>
  <div>
    <h2>InlineMethodComponent</h2>
    <button v-on:click="clicked += 1">Clicked {{ clicked }} times</button>
  </div>
</template>

<script>
export default {
  name: 'InlineMethodComponent',
  data: function () {
    return {
      clicked: 0
    }
  }
}
</script>
