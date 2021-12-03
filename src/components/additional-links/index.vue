<template>
  <div class="content-border full-width row justify-between q-py-md">

      <app-stores-links />

      <agreements class="agreements" />

      <extra-logo class="logo" />
    </div>
</template>

<script>
import AppStoresLinks from 'components/additional-links/app-stores-links';
import Agreements from 'components/additional-links/agreements';
import ExtraLogo from 'components/additional-links/extra-logo';

export default {
  name: 'AdditionalLinks',
  components: { ExtraLogo, Agreements, AppStoresLinks },
};
</script>

<style lang="sass" scoped>
@import "../../css/app"

.content-border
  background: #000000
  border-top: 0.5px solid #777777
  padding: 12px 20px
  @media (max-width: $mobile)
    padding-top: 22px
    padding-bottom: 17px
    justify-content: center
.content-wrapper
  display: flex
  flex-direction: row
  justify-content: space-between
  max-width: 1060px
  padding: 0 20px

  @media (max-width: $laptop)
    padding: 0 65px
  @media (max-width: $mobile)
    padding: 0

@media (max-width: $laptop)
  .agreements
    padding-top: 24px

  .logo
    padding-top: 21px

  .content-wrapper
    flex-direction: column
</style>
