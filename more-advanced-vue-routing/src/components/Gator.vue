<template>
  <div>Howdy, Gator {{ name }}!</div>
</template>

<script>
import pretendGet from '../scripts/pretendGet';

// Fetch before navigation
export default {
  name: 'Gator',
  data() {
    return { name: null }
  },
  // Component not loaded yet
  beforeRouteEnter(to, from, next) {
    pretendGet((err, name) => {
      next(vm => vm.setName(err, name));
    });
  },
  // Component already loaded and route changes
  beforeRouteUpdate(to, from, next) {
    this.name = null;
    pretendGet((err, name) => {
      this.setName(err, name);
      next();
    });
  },
  methods: {
    setName(err, name) {
      if (err) {
        console.error(err);
      } else {
        this.name = name;
      }
    }
  }
}
</script>
