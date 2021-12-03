<template>
  <q-page class="items-center justify-center row">
    <template v-if="isScreenSizeSM">
      <profile-nav-up-panel
        class="profile-nav-up-panel"
      />
      <profile-router-btn
        class="profile-nav-up-panel line-bottom"
        :img-active="'user-data-grey.svg'"
        :img-not-active="'user-data.svg'"
        :title="'Личные данные'"
        :url-link="'personal-data'"
      />
    </template>
    <div
      class="personal-data-border profile-data"
      :class="{'personal-data-border-mob': isScreenSizeSM}"
    >
      <profile-data />
    </div>
    <div
      class="personal-data-border login-history"
      :class="{'personal-data-border-mob': isScreenSizeSM}"
    >
      <history-login />
    </div>
  </q-page>
</template>

<script>
import HistoryLogin from 'components/profile/history-login';
import ProfileData from 'components/profile/profile-data';
import ProfileNavUpPanel from 'layouts/layout-profile/profile-nav-up-panel';
import ProfileRouterBtn from 'layouts/layout-profile/profile-router-btn';

export default {
  name: 'PersonalData',
  components: {
    ProfileData,
    HistoryLogin,
    ProfileNavUpPanel,
    ProfileRouterBtn,
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
.personal-data-border-mob
  padding: 5px !important
  width: 350px !important
  height: 100% !important
  box-sizing: border-box
  margin-right: 0
  margin-bottom: 27px
  border-radius: 30px
  background: #000000 !important
.personal-data-border
  width: 500px
  height: 536px
  padding: 30px 50px 30px 50px
  box-sizing: border-box
  margin-right: 0
  margin-bottom: 27px
  border-radius: 30px
  &:last-child
    margin-bottom: 0
    margin-right: 0
.profile-data
  background: #191919
.login-history
  background: #101010
@media screen and (min-width: 1240px)
  .personal-data-border
    margin-right: 27px
    margin-bottom: 0
</style>
