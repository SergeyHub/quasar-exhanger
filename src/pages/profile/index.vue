<template>
  <q-page class="items-center column">
    <profile-navigate
      v-if="isScreenSizeSM"
      class="line-right"
    />
  </q-page>
</template>

<script>
import ProfileNavigate from 'layouts/layout-profile/profile-navigate';

export default {
  components: {
    ProfileNavigate,
  },
  name: 'Index',
  computed: {
    isScreenSizeSM() {
      return this.$q.screen.lt.sm;
    },
  },
};
</script>

<style scoped>

</style>
