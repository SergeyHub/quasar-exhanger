<template>
  <div class="fit">
    <q-layout
      view="lHr LpR lFr"
    >
      <q-page-container class="column">
        <page-header
          class="page-width margin-center"
          @open="isOpenSideBar = true"
          v-if="$route.meta.standartHeader"
        />
        <side-bar
          :isOpenSideBar="isOpenSideBar"
          @close="isOpenSideBar = false"
        />
        <div class="content-wrapper">
          <router-view />
        </div>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import PageHeader from 'layouts/page-header';
import SideBar from 'components/blocks/side-bar';

export default {
  name: 'MainLayout',
  components: { PageHeader, SideBar },
  data: () => ({
    isOpenSideBar: false,
  }),
};
</script>

<style lang="sass" scoped>
.content-wrapper
  flex: 1 0 auto
</style>
