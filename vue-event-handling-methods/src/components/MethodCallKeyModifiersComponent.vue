<template>
  <div>
    <h2>MethodCallKeyModifiersComponent</h2>
    <input
      class="focusable"
      placeholder="Press Enter"
      v-on:keyup.esc.stop="clear"
      v-on:keyup.enter.stop="log"
    />
  </div>
</template>

<script>
export default {
  name: 'MethodCallKeyModifiersComponent',
  methods: {
    log(event) {
      console.log(
        event.target.tagName,
        event.type,
        event.key,
        event.target.value
      );
    },
    clear(event) {
      event.target.value = '';
    }
  }
}
</script>
