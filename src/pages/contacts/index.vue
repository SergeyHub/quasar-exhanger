<template>
  <div>
    <div class="b-container">
      <div class="page-contact">
        <div class="font-size-32 font-weight-600 row justify-center">
          Контакты
        </div>

        <tech-support />
      </div>
    </div>

    <map-contact />

    <get-started />

    <contacts-block />

    <additional-links style="position: absolute; top: auto" />
  </div>
</template>

<script>
import TechSupport from 'pages/contacts/tech-support';
import ContactsBlock from 'components/contacts/contacts-block';
import AdditionalLinks from 'components/additional-links/index';
import GetStarted from 'components/blocks/get-started';
import MapContact from 'pages/contacts/map-contact';

export default {
  name: 'Contacts',
  components: {
    MapContact,
    GetStarted,
    AdditionalLinks,
    ContactsBlock,
    TechSupport,
  },
};
</script>

<style lang="sass" scoped>
@import "src/css/app"
.page-contact
  max-width: 817px
  margin: 0 auto
  margin-top: 40px
.font-size-32
  @media (max-width: $mobile)
    font-weight: 600
    font-size: 24px
    line-height: 113.84%
</style>
