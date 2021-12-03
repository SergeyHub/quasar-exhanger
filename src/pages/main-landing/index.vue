<template>
  <div>
    <q-page class="b-container">
      <instrument />

      <info />

      <why />
    </q-page>
    <contacts-block />

    <additional-links style="position: absolute; top: auto" />
  </div>
</template>

<script>
import Instrument from 'pages/main-landing/instrument';
import ContactsBlock from 'components/contacts/contacts-block';
import AdditionalLinks from 'components/additional-links/index';
import Info from 'pages/main-landing/info';
import Why from 'pages/main-landing/why';

export default {
  name: 'MainLanding',
  components: {
    Why,
    Info,
    AdditionalLinks,
    ContactsBlock,
    Instrument,
  },
};
</script>
