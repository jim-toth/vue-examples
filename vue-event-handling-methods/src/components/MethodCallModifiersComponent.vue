<template>
  <div>
    <h2>MethodCallModifiersComponent</h2>
    <form v-on:submit.stop.prevent="log('clicked!', $event)">
      <button type="Submit">
        Click Me
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'MethodCallModifiersComponent',
  methods: {
    log(msg, event) {
      console.log(event.target.tagName, msg);
    }
  }
}
</script>