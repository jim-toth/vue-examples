<template>
  <div>
    <h2>SimpleMethodComponent</h2>
    <button v-on:click="log">Click Me</button>
  </div>
</template>

<script>
export default {
  name: 'SimpleMethodComponent',
  methods: {
    log() {
      console.log('Button clicked!');
    }
  }
}
</script>
