<template>
  <div>
    <q-page class="items-center justify-center column">
      <auth-button
        :is-auth-mobile="isAuthPhone"
        :is-hidden-button="isHiddenButton"
        @authPhone="isAuthPhone = true"
        @authMail="isAuthPhone = false"
      />
      <auth-via-phone
        @hiddenButton="isHiddenButton = false"
        @helpModelMob="isHelpModelMob = true"
        v-if="isAuthPhone && !isHelpModelMob"
      />

      <auth-via-mail
        v-else-if="!isAuthPhone && !isHelpModelMob"
        @helpModelMob="isHelpModelMob = true"
        @hiddenButton="isHiddenButton = false"
      />
      <help-modal
        v-else
        @close="isHelpModelMob = false"
      />
    </q-page>
    <contacts-block />
    <additional-links style="position: absolute; top: auto" />
  </div>
</template>

<script>
import AuthButton from 'components/auth-form/auth-button';
import AuthViaMail from 'components/auth-form/auth-via-mail';
import AuthViaPhone from 'components/auth-form/auth-via-phone';
import HelpModal from 'components/auth-form/help-modal';
import AdditionalLinks from 'components/additional-links';
import ContactsBlock from 'components/contacts/contacts-block';

export default {
  name: 'Auth',
  components: {
    AuthButton,
    AuthViaMail,
    AuthViaPhone,
    HelpModal,
    AdditionalLinks,
    ContactsBlock,
  },
  data: () => ({
    isAuthPhone: true,
    isHiddenButton: true,
    isHelpModelMob: false,
  }),
};
</script>

<style scoped>

</style>
