<template>
  <div>
    <h2>InlineMethodCallComponent</h2>
    <button v-on:click="log('clicked!', $event)">Click Me</button>
  </div>
</template>

<script>
export default {
  name: 'InlineMethodCallComponent',
  methods: {
    log(msg, event) {
      if (event) {
        event.preventDefault();
      }

      console.log(event.target.tagName, msg);
    }
  }
}
</script>