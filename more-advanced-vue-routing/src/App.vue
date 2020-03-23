<template>
  <div id="app">
    <div class="nav">
      <router-link to="/swamp">Swamp</router-link> |
      <router-link to="/gator">Gator</router-link>
    </div>
    <hr />
    <div class="router-view">
      <transition :name="transitionName">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return { transitionName: null }
  },
  watch: {
    '$route' (to, from) {
      if (from.path === '/swamp') {
        this.transitionName = 'drain';
      } else {
        this.transitionName = 'slither';
      }
    }
  }
}
</script>

<style>
.slither-enter-active, .slither-leave-active {
  transition: transform 1s;
}

.slither-enter, .slither-leave-to {
  transform: translateX(-100%);
}

.slither-enter-to, .slither-leave {
  transform: translateX(0);
}


.drain-enter-active, .drain-leave-active {
  transition: transform 1s;
}

.drain-enter, .drain-leave-to {
  transform: translateY(100%);
}

.drain-enter-to, .drain-leave {
  transform: translateY(0);
}
</style>
