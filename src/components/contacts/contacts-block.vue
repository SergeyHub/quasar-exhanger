<template>
  <div class="content-border full-width row justify-between">
    <div class="content-wrapper full-width items-center q-py-md">
      <div class="contacts-wrapper">
        <div class="phone-e-mail-wrapper">
          <phone-block />
          <div class="vertical-separator-1" />
          <e-mail-block class="e-mail-block" />
        </div>

        <div class="vertical-separator-2" />

        <tech-support class="tech-support-padding-t" />
      </div>
    </div>
    <social-networks-block class="social" />
  </div>
</template>

<script>
import PhoneBlock from 'components/contacts/phone-block';
import EMailBlock from 'components/contacts/e-mail-block';
import TechSupport from 'components/contacts/tech-support';
import SocialNetworksBlock from 'components/contacts/social-networks-block';

export default {
  name: 'ContactsBlock',
  components: {
    SocialNetworksBlock, TechSupport, EMailBlock, PhoneBlock,
  },
};
</script>

<style lang="sass" scoped>
@import "../../css/app"

.content-border
  background: #000000
  border-top: 0.5px solid #777777
  @media screen and (max-width: 850px)
    justify-content: center
.content-wrapper
  display: flex
  flex-direction: row
  justify-content: space-between
  max-width: 1060px
  padding: 12px 20px

  @media (max-width: $laptop)
    padding: 17px 65px
  @media (max-width: $mobile)
    padding: 30px 0 0 0

.contacts-wrapper
  display: flex
  flex-wrap: nowrap
  align-items: center

.phone-e-mail-wrapper
  display: flex
  flex-direction: row
  align-items: center
  @media (max-width: $laptop)
    padding-right: 10px
  @media (max-width: $mobile)
    padding-right: 0

.vertical-separator-1, .vertical-separator-2
  height: 26px
  border-left: 1.5px solid #FFFFFF
  margin-left: 23px
  margin-right: 20px

.social
  padding: 23px 12px
  align-items: center

  @media (max-width: $laptop)
    padding-right: 0
  @media (max-width: $laptop)
    padding-left: 0

@media (max-width: $laptop)
  .content-wrapper
  .phone-e-mail-wrapper
    flex-direction: column
    align-items: flex-start
  .vertical-separator-1
    display: none
  .vertical-separator-2
    height: 36px

@media (max-width: $laptop)
  .content-wrapper
    flex-direction: column

  .phone-e-mail-wrapper
    flex-direction: column

  .vertical-separator-2, .vertical-separator-1
    display: none

  .contacts-wrapper
    flex-direction: column

  .tech-support-padding-t
    padding-top: 18px

  .e-mail-block
    padding-top: 8px
</style>
