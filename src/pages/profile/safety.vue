<template>
  <q-page class="items-center justify-center row">
    <template v-if="isScreenSizeSM">
      <profile-nav-up-panel
        class="profile-nav-up-panel"
      />
      <profile-router-btn
        class="profile-nav-up-panel line-bottom"
        :img-active="'Subtract-grey.svg'"
        :img-not-active="'Subtract.svg'"
        :title="'Безопасность'"
        :url-link="'safety'"
      />
    </template>
    <safety-component />
  </q-page>
</template>

<script>
import ProfileNavUpPanel from 'layouts/layout-profile/profile-nav-up-panel';
import ProfileRouterBtn from 'layouts/layout-profile/profile-router-btn';
import SafetyComponent from 'components/profile/safety-component';

export default {
  name: 'Safety',
  components: {
    ProfileNavUpPanel,
    ProfileRouterBtn,
    SafetyComponent,
  },
  computed: {
    isScreenSizeSM() {
      return this.$q.screen.lt.sm;
    },
  },
};
</script>

<style scoped lang="sass">
.profile-nav-up-panel
  width: 100%
  justify-content: left!important
.line-bottom
  border-bottom: #777777 0.5px solid
</style>
