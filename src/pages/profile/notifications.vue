<template>
  <q-page class="items-center justify-center row">
    <template v-if="isScreenSizeSM">
      <profile-nav-up-panel
        class="profile-nav-up-panel"
      />
      <profile-router-btn
        class="profile-nav-up-panel line-bottom"
        :img-active="'notifications-grey.svg'"
        :img-not-active="'notifications.svg'"
        :title="'Уведомления'"
        :url-link="'notifications'"
      />
    </template>
    <notifications-component />
  </q-page>
</template>

<script>
import NotificationsComponent from 'components/profile/notifications-component';
import ProfileNavUpPanel from 'layouts/layout-profile/profile-nav-up-panel';
import ProfileRouterBtn from 'layouts/layout-profile/profile-router-btn';

export default {
  name: 'Notifications',
  components: {
    ProfileNavUpPanel,
    ProfileRouterBtn,
    NotificationsComponent,
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
