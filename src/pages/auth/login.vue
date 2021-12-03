<template>
  <div>
    <q-page class="items-center justify-center column">
      <auth-login />
    </q-page>
    <contacts-block />

    <additional-links style="position: absolute; top: auto" />
  </div>
</template>

<script>
import AuthLogin from 'components/auth-form/auth-login';
import AdditionalLinks from 'components/additional-links';
import ContactsBlock from 'components/contacts/contacts-block';

export default {
  name: 'Login',
  components: {
    AuthLogin,
    AdditionalLinks,
    ContactsBlock,
  },
};
</script>

<style scoped>

</style>
