<template>
  <div>
    <q-page class="items-center justify-center column">
      <new-password />
    </q-page>
    <contacts-block />
    <additional-links style="position: absolute; top: auto" />
  </div>
</template>

<script>
import NewPassword from 'components/auth-form/new-password';
import AdditionalLinks from 'components/additional-links';
import ContactsBlock from 'components/contacts/contacts-block';

export default {
  name: 'SetPassword',
  components: {
    NewPassword,
    AdditionalLinks,
    ContactsBlock,
  },
};
</script>

<style scoped>

</style>
