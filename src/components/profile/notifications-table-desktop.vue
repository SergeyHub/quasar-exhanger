<template>
  <table class="table-notifications">
    <tr>
      <th class="notifications-name-column">
        Событие
      </th>
      <th class="notifications-name-column">
        E-mail
      </th>
      <th class="notifications-name-column">
        SMS
      </th>
      <th class="notifications-name-column">
        Push-уведомления
      </th>
    </tr>
    <tr>
      <td class="notifications-title-column line">
        Пополнение кошелька
      </td>
      <td class="notifications-toggle-btn line">
        <input
          type="checkbox"
          v-model="isReplenishmentWalletEmail"
          class="toggle-button"
        >
      </td>
      <td class="notifications-toggle-btn line">
        <input
          type="checkbox"
          v-model="isReplenishmentWalletSms"
          class="toggle-button"
        >
      </td>
      <td class="notifications-toggle-btn line">
        <input
          type="checkbox"
          v-model="isReplenishmentWalletPush"
          class="toggle-button"
        >
      </td>
    </tr>
    <tr>
      <td class="notifications-title-column line">
        Пополнение карты
      </td>
      <td class="notifications-toggle-btn line">
        <input
          type="checkbox"
          v-model="isReplenishmentCardEmail"
          class="toggle-button"
        >
      </td>
      <td class="notifications-toggle-btn line">
        <input
          type="checkbox"
          v-model="isReplenishmentCardSms"
          class="toggle-button"
        >
      </td>
      <td class="notifications-toggle-btn line">
        <input
          type="checkbox"
          v-model="isReplenishmentCardPush"
          class="toggle-button"
        >
      </td>
    </tr>
    <tr>
      <td class="notifications-title-column line">
        Обмен валют
      </td>
      <td class="notifications-toggle-btn line">
        <input
          type="checkbox"
          v-model="isCurrencyExchangeEmail"
          class="toggle-button"
        >
      </td>
      <td class="notifications-toggle-btn line">
        <input
          type="checkbox"
          v-model="isCurrencyExchangeSms"
          class="toggle-button"
        >
      </td>
      <td class="notifications-toggle-btn line">
        <input
          type="checkbox"
          v-model="isCurrencyExchangePush"
          class="toggle-button"
        >
      </td>
    </tr>
    <tr>
      <td class="notifications-title-column line">
        Перевод средств
      </td>
      <td class="notifications-toggle-btn line">
        <input
          type="checkbox"
          v-model="isMoneyTransactionEmail"
          class="toggle-button"
        >
      </td>
      <td class="notifications-toggle-btn line">
        <input
          type="checkbox"
          v-model="isMoneyTransactionSms"
          class="toggle-button"
        >
      </td>
      <td class="notifications-toggle-btn line">
        <input
          type="checkbox"
          v-model="isMoneyTransactionPush"
          class="toggle-button"
        >
      </td>
    </tr>
    <tr>
      <td class="notifications-title-column line-finish">
        Вход в аккаунт
      </td>
      <td class="notifications-toggle-btn line-finish">
        <input
          type="checkbox"
          v-model="isLoginEmail"
          class="toggle-button"
        >
      </td>
      <td class="notifications-toggle-btn line-finish">
        <input
          type="checkbox"
          v-model="isLoginSms"
          class="toggle-button"
        >
      </td>
      <td class="notifications-toggle-btn line-finish">
        <input
          type="checkbox"
          v-model="isLoginPush"
          class="toggle-button"
        >
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  name: 'NotificationsTableDesktop',
  props: {
    isReplenishmentWalletEmail: {
      type: Boolean,
    },
    isReplenishmentWalletSms: {
      type: Boolean,
    },
    isReplenishmentWalletPush: {
      type: Boolean,
    },
    isReplenishmentCardEmail: {
      type: Boolean,
    },
    isReplenishmentCardSms: {
      type: Boolean,
    },
    isReplenishmentCardPush: {
      type: Boolean,
    },
    isCurrencyExchangeEmail: {
      type: Boolean,
    },
    isCurrencyExchangeSms: {
      type: Boolean,
    },
    isCurrencyExchangePush: {
      type: Boolean,
    },
    isMoneyTransactionEmail: {
      type: Boolean,
    },
    isMoneyTransactionSms: {
      type: Boolean,
    },
    isMoneyTransactionPush: {
      type: Boolean,
    },
    isLoginEmail: {
      type: Boolean,
    },
    isLoginSms: {
      type: Boolean,
    },
    isLoginPush: {
      type: Boolean,
    },
  },
};
</script>

<style scoped lang="sass">
.table-notifications
  border-collapse: collapse
.notifications-title-column
  font-family: Montserrat, sans-serif
  font-size: 16px
  font-style: normal
  font-weight: 600
  line-height: 21px
  letter-spacing: 0.03em
  text-align: left
.toggle-button
  margin-left: auto
  position: relative
  display: inline-block
  width: 37px
  height: 25px
  vertical-align: top
  background: #555555
  border-radius: 30px
  outline: none
  cursor: pointer
  -webkit-appearance: none
  -moz-appearance: none
  appearance: none
  &::after
    content: ""

    display: inline-block
    position: absolute
    left: 0.5px
    top: 3px

    width: 19px
    height: 19px
    background-color: #FFFFFF
    border-radius: 50%

    transform: translateX(0)
  &:checked:after
    transform: translateX(calc(100% - 1.5px))
    background-color: #fff
  &:checked
    background-color: #D8004E
.notifications-name-column
  font-family: Montserrat, sans-serif
  font-size: 12px
  font-style: normal
  font-weight: 400
  line-height: 16px
  letter-spacing: 0.03em
  text-align: left
  color: #999999 !important
.line
  border-bottom: 0.5px #999999 solid
  padding: 27px 57px 23px 0
.line-finish
  padding: 27px 57px 0 0
@media screen and (max-width: 850px)
  .line
    border-bottom: 0.5px #999999 solid
    padding: 27px 30px 23px 0
  .line-finish
    padding: 27px 30px 0 0
  .notifications-title-column
    font-family: Montserrat, sans-serif
    font-size: 14px
    font-style: normal
    font-weight: 600
    line-height: 18px
    letter-spacing: 0.03em
    text-align: left
</style>
