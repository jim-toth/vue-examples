<template>
  <div>Welcome to the Swamp, {{ name }}!</div>
</template>

<script>
import pretendGet from '../scripts/pretendGet';

// Fetch after navigation
export default {
  name: 'Swamp',
  data() {
    return { name: null }
  },
  created() {
    this.fetchName();
  },
  watch: {
    // Re-fetch when route changes
    '$route': 'fetchName'
  },
  methods: {
    fetchName() {
      pretendGet((err, name) => {
        if (err) {
          console.error(err);
        } else {
          this.name = name;
        }
      });
    }
  }
}
</script>
