<template>
  <q-page class="items-center column">
    <div class="page-width margin-top-60 fit">
      <div class="font-size-32 font-weight-600 row justify-center">
        Новости Extra
      </div>
      <new-all-link />
      <new-item />
      <new-all-link />
      <div class="items-center flex justify-center">
        <start-work-button class="btn-margins" />
      </div>
    </div>

    <contacts-block />

    <additional-links style="position: absolute; top: auto" />
  </q-page>
</template>

<script>
import NewAllLink from 'pages/new-item/new-all-link';
import NewItem from 'pages/new-item/new-item';
import StartWorkButton from 'components/start-work-button';
import ContactsBlock from 'components/contacts/contacts-block';
import AdditionalLinks from 'components/additional-links/index';

export default {
  name: 'New',
  components: {
    AdditionalLinks,
    ContactsBlock,
    StartWorkButton,
    NewAllLink,
    NewItem,
  },
};
</script>

<style lang="sass" scoped>
@import "src/css/app"

.bg-black
  background-color: black
.margin-top-60
  margin-top: 60px
.margin-bottom-60
  margin-bottom: 60px
.btn-margins
  margin-top: 110px
  margin-bottom: 110px
  @media only screen and (max-width: $layout-breakpoint-extra-small)
    margin: 70px 0
</style>
