<template>
  <div class="notifications-container">
    <div class="notifications-title">
      Настройки уведомлений
    </div>
    <notifications-table-desktop
      :is-replenishment-wallet-email="isReplenishmentWalletEmail"
      :is-replenishment-wallet-sms="isReplenishmentWalletSms"
      :is-replenishment-wallet-push="isReplenishmentWalletPush"
      :is-replenishment-card-email="isReplenishmentCardEmail"
      :is-replenishment-card-sms="isReplenishmentCardSms"
      :is-replenishment-card-push="isReplenishmentCardPush"
      :is-currency-exchange-email="isCurrencyExchangeEmail"
      :is-currency-exchange-sms="isCurrencyExchangeSms"
      :is-currency-exchange-push="isCurrencyExchangePush"
      :is-money-transaction-email="isMoneyTransactionEmail"
      :is-money-transaction-sms="isMoneyTransactionSms"
      :is-money-transaction-push="isMoneyTransactionPush"
      :is-login-email="isLoginEmail"
      :is-login-sms="isLoginSms"
      :is-login-push="isLoginPush"
      v-if="!isScreenSizeSM"
    />
    <notifications-table-mob
      v-else
      :is-replenishment-wallet-email="isReplenishmentWalletEmail"
      :is-replenishment-wallet-sms="isReplenishmentWalletSms"
      :is-replenishment-wallet-push="isReplenishmentWalletPush"
      :is-replenishment-card-email="isReplenishmentCardEmail"
      :is-replenishment-card-sms="isReplenishmentCardSms"
      :is-replenishment-card-push="isReplenishmentCardPush"
      :is-currency-exchange-email="isCurrencyExchangeEmail"
      :is-currency-exchange-sms="isCurrencyExchangeSms"
      :is-currency-exchange-push="isCurrencyExchangePush"
      :is-money-transaction-email="isMoneyTransactionEmail"
      :is-money-transaction-sms="isMoneyTransactionSms"
      :is-money-transaction-push="isMoneyTransactionPush"
      :is-login-email="isLoginEmail"
      :is-login-sms="isLoginSms"
      :is-login-push="isLoginPush"
    />
  </div>
</template>

<script>
import NotificationsTableDesktop from 'components/profile/notifications-table-desktop';
import NotificationsTableMob from 'components/profile/notifications-table-mob';

export default {
  components: {
    NotificationsTableDesktop,
    NotificationsTableMob,
  },
  name: 'NotificationsComponents',
  computed: {
    isScreenSizeSM() {
      return this.$q.screen.lt.sm;
    },
  },
  data: () => ({
    isReplenishmentWalletEmail: false,
    isReplenishmentWalletSms: false,
    isReplenishmentWalletPush: false,
    isReplenishmentCardEmail: false,
    isReplenishmentCardSms: false,
    isReplenishmentCardPush: false,
    isCurrencyExchangeEmail: false,
    isCurrencyExchangeSms: false,
    isCurrencyExchangePush: false,
    isMoneyTransactionEmail: false,
    isMoneyTransactionSms: false,
    isMoneyTransactionPush: false,
    isLoginEmail: false,
    isLoginSms: false,
    isLoginPush: false,
  }),
};
</script>

<style scoped lang="sass">
.notifications-container
  width: 800px
  padding: 37px 70px
  background: #191919
  border-radius: 30px
  @media only screen and (max-width: 1180px)
    width: 100% !important
    padding: 37px 29px !important
.notifications-title
  margin-bottom: 50px
  font-family: Montserrat, sans-serif
  font-size: 20px
  font-style: normal
  font-weight: 500
  line-height: 26px
  letter-spacing: 0.03em
  text-align: left
  @media screen and (max-width: 850px)
    justify-content: center
    display: flex
@media screen and (max-width: 700px)
  .notifications-container
    padding: 37px 5px
    background: #191919
    border-radius: 30px
  @media screen and (max-width: 479px)
    .notifications-container
      padding: 15px!important
      background: #000000!important
      border-radius: 0 !important
</style>
