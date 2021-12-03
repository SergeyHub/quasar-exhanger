<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App',
  created() {
    this.$q.screen.setSizes({
      sm: 767, md: 991, lg: 1280, xl: 1920,
    });
  },
};
</script>
