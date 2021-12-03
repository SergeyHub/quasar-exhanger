<template>
  <div>
    <q-page class="items-center justify-center column">
      <auth-reset-password />
    </q-page>
    <contacts-block />

    <additional-links style="position: absolute; top: auto" />
  </div>
</template>

<script>
import AuthResetPassword from 'components/auth-form/auth-reset-password';
import AdditionalLinks from 'components/additional-links';
import ContactsBlock from 'components/contacts/contacts-block';

export default {
  name: 'ResetPassword',
  components: {
    AuthResetPassword,
    AdditionalLinks,
    ContactsBlock,
  },
};
</script>

<style scoped>

</style>
