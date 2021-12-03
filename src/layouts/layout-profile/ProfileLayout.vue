<template>
  <div class="fit">
    <q-layout view="hHh lpr fFf">
      <q-page-container class="column">
        <page-header
          class="line-bottom page-width margin-center"
          @open="isOpenSideBar = true"
        />
        <side-bar
          :is-open-side-bar="isOpenSideBar"
          @close="isOpenSideBar = false"
        />
        <div class="content-wrapper">
          <router-view />
        </div>
        <q-footer
          class="q-footer q-layout__section--marginal footer-profile"
        >
          <contacts-block />
          <additional-links />
        </q-footer>
        <aside
          v-if="!isScreenSizeSM"
          class="left-panel-nav q-drawer q-drawer--left q-drawer--bordered q-drawer--standard"
          style=""
        >
          <div class="q-drawer__content fit">
            <profile-navigate class="line-right" />
          </div>
        </aside>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import PageHeader from 'layouts/layout-profile/profile-header';
import ProfileNavigate from 'layouts/layout-profile/profile-navigate';
import SideBar from 'components/blocks/side-bar';
import AdditionalLinks from 'components/additional-links';
import ContactsBlock from 'components/contacts/contacts-block';

export default {
  name: 'MainLayout',
  components: {
    PageHeader,
    SideBar,
    AdditionalLinks,
    ContactsBlock,
    ProfileNavigate,
  },
  data: () => ({
    isOpenSideBar: false,
  }),
  computed: {
    isScreenSizeSM() {
      return this.$q.screen.lt.sm;
    },
    isScreenSizeMD() {
      return this.$q.screen.lt.md;
    },
  },
};
</script>

<style lang="sass" scoped>
.left-panel-nav
  width: 370px
  top: 56px
  bottom: 203px
  transform: translateX(0px)
  @media only screen and (max-width: 880px)
    width: 250px !important
.q-page
  margin-top: 247px
.q-page-container
  padding-top: 56px
  padding-bottom: 450px !important
  padding-left: 370px !important
  @media only screen and (max-width: 880px)
    padding-left: 250px !important
.footer-profile
  position: absolute
  bottom: 0
  right: 0
  left: 0
  height: auto
.fit
  background: #000000
.line-bottom
  border-bottom: #777777 0.5px solid
.line-right
  border-right: #777777 0.5px solid
.content-wrapper
  flex: 1 0 auto
.left-panel
  height: 536px !important
@media screen and (max-width: 479px)
  .q-page
    margin-top: 0 !important
  .left-panel
    display: none
  .q-page
    margin-top: 0 !important
  .q-page-container
    padding-left: 0 !important
</style>
