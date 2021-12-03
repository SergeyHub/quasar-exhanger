<template>
  <q-page class="items-center column">
    <div class="page-width margin-top-60 fit">
      <div class="font-size-32 font-weight-600 row justify-center">
        Новости Extra
      </div>
      <nav-bar />
      <news-list />
      <page-bar />
      <div class="items-center flex justify-center">
        <start-work-button class="btn-margins" />
      </div>
    </div>

    <contacts-block />

    <additional-links style="position: absolute; top: auto" />
  </q-page>
</template>

<script>
import NavBar from 'components/blocks/nav-bar';
import NewsList from 'pages/news/list';
import PageBar from 'components/blocks/page-bar';
import StartWorkButton from 'components/start-work-button';
import ContactsBlock from 'components/contacts/contacts-block';
import AdditionalLinks from 'components/additional-links/index';

export default {
  name: 'News',
  components: {
    AdditionalLinks,
    ContactsBlock,
    StartWorkButton,
    PageBar,
    NewsList,
    NavBar,
  },
};
</script>

<style lang="sass" scoped>
@import "src/css/app"
.page-width
  width: 50% !important
  @media only screen and (max-width: $layout-breakpoint-small)
    width: 100% !important
.margin-top-60
  margin-top: 60px
.btn-margins
  margin-top: 110px
  margin-bottom: 110px
  @media only screen and (max-width: $layout-breakpoint-extra-small)
    margin: 70px 0
</style>
