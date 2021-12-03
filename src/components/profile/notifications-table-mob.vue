<template>
  <div class="">
    <div class="notifications-block">
      <div class="notifications-block-title flew row items-center items-center">
        <div class="notifications-block-title__column-name">
          Событие
        </div>
        <div class="notifications-block-title__text">
          Пополнение кошелька
        </div>
      </div>
      <div class="notifications-block-btn flex row justify-between">
        <div class="notifications-block-btn__title-and-btn flex column justify-between">
          <div class="notifications-block-title__column-name">
            E-mail
          </div>
          <div class="notifications-block-btn__btn">
            <input
              type="checkbox"
              v-model="isReplenishmentWalletEmail"
              class="toggle-button"
            >
          </div>
        </div>
        <div class="notifications-block-btn__title-and-btn flex column justify-between">
          <div class="notifications-block-title__column-name flex items-center justify-center">
            SMS
          </div>
          <div class="notifications-block-btn__btn flex items-center justify-center">
            <input
              type="checkbox"
              v-model="isReplenishmentWalletSms"
              class="toggle-button"
              style="margin: 0 auto"
            >
          </div>
        </div>
        <div class="notifications-block-btn__title-and-btn flex column justify-between">
          <div class="notifications-block-title__column-name text-center">
            Push-уведомления
          </div>
          <div class="notifications-block-btn__btn flex items-center justify-center">
            <input
              type="checkbox"
              v-model="isReplenishmentWalletPush"
              class="toggle-button"
            >
          </div>
        </div>
      </div>
    </div>
    <div class="line"></div>
    <div class="notifications-block">
      <div class="notifications-block-title flew row items-center">
        <div class="notifications-block-title__column-name">
          Событие
        </div>
        <div class="notifications-block-title__text">
          Пополнение карты
        </div>
      </div>
      <div class="notifications-block-btn flex row justify-between">
        <div class="notifications-block-btn__title-and-btn flex column justify-between">
          <div class="notifications-block-title__column-name">
            E-mail
          </div>
          <div class="notifications-block-btn__btn">
            <input
              type="checkbox"
              v-model="isReplenishmentCardEmail"
              class="toggle-button"
            >
          </div>
        </div>
        <div class="notifications-block-btn__title-and-btn flex column justify-between">
          <div class="notifications-block-title__column-name flex items-center justify-center">
            SMS
          </div>
          <div class="notifications-block-btn__btn flex items-center justify-center">
            <input
              type="checkbox"
              v-model="isReplenishmentCardSms"
              class="toggle-button"
              style="margin: 0 auto"
            >
          </div>
        </div>
        <div class="notifications-block-btn__title-and-btn flex column justify-between">
          <div class="notifications-block-title__column-name text-center">
            Push-уведомления
          </div>
          <div class="notifications-block-btn__btn flex items-center justify-center">
            <input
              type="checkbox"
              v-model="isReplenishmentCardPush"
              class="toggle-button"
            >
          </div>
        </div>
      </div>
    </div>
    <div class="line"></div>
    <div class="notifications-block">
      <div class="notifications-block-title flew row items-center">
        <div class="notifications-block-title__column-name">
          Событие
        </div>
        <div class="notifications-block-title__text">
          Обмен валют
        </div>
      </div>
      <div class="notifications-block-btn flex row justify-between">
        <div class="notifications-block-btn__title-and-btn flex column justify-between">
          <div class="notifications-block-title__column-name">
            E-mail
          </div>
          <div class="notifications-block-btn__btn">
            <input
              type="checkbox"
              v-model="isCurrencyExchangeEmail"
              class="toggle-button"
            >
          </div>
        </div>
        <div class="notifications-block-btn__title-and-btn flex column justify-between">
          <div class="notifications-block-title__column-name flex items-center justify-center">
            SMS
          </div>
          <div class="notifications-block-btn__btn flex items-center justify-center">
            <input
              type="checkbox"
              v-model="isCurrencyExchangeSms"
              class="toggle-button"
              style="margin: 0 auto"
            >
          </div>
        </div>
        <div class="notifications-block-btn__title-and-btn flex column justify-between">
          <div class="notifications-block-title__column-name text-center">
            Push-уведомления
          </div>
          <div class="notifications-block-btn__btn flex items-center justify-center">
            <input
              type="checkbox"
              v-model="isCurrencyExchangePush"
              class="toggle-button"
            >
          </div>
        </div>
      </div>
    </div>
    <div class="line"></div>
    <div class="notifications-block">
      <div class="notifications-block-title flew row items-center">
        <div class="notifications-block-title__column-name">
          Событие
        </div>
        <div class="notifications-block-title__text">
          Перевод средств
        </div>
      </div>
      <div class="notifications-block-btn flex row justify-between">
        <div class="notifications-block-btn__title-and-btn flex column justify-between">
          <div class="notifications-block-title__column-name">
            E-mail
          </div>
          <div class="notifications-block-btn__btn">
            <input
              type="checkbox"
              v-model="isMoneyTransactionEmail"
              class="toggle-button"
            >
          </div>
        </div>
        <div class="notifications-block-btn__title-and-btn flex column justify-between">
          <div class="notifications-block-title__column-name flex items-center justify-center">
            SMS
          </div>
          <div class="notifications-block-btn__btn flex items-center justify-center">
            <input
              type="checkbox"
              v-model="isMoneyTransactionSms"
              class="toggle-button"
              style="margin: 0 auto"
            >
          </div>
        </div>
        <div class="notifications-block-btn__title-and-btn flex column justify-between">
          <div class="notifications-block-title__column-name text-center">
            Push-уведомления
          </div>
          <div class="notifications-block-btn__btn flex items-center justify-center">
            <input
              type="checkbox"
              v-model="isMoneyTransactionPush"
              class="toggle-button"
            >
          </div>
        </div>
      </div>
    </div>
    <div class="line"></div>
    <div class="notifications-block">
      <div class="notifications-block-title flew row items-center">
        <div class="notifications-block-title__column-name">
          Событие
        </div>
        <div class="notifications-block-title__text">
          Вход в аккаунт
        </div>
      </div>
      <div class="notifications-block-btn flex row justify-between">
        <div class="notifications-block-btn__title-and-btn flex column justify-between">
          <div class="notifications-block-title__column-name">
            E-mail
          </div>
          <div class="notifications-block-btn__btn">
            <input
              type="checkbox"
              v-model="isLoginEmail"
              class="toggle-button"
            >
          </div>
        </div>
        <div class="notifications-block-btn__title-and-btn flex column justify-between">
          <div class="notifications-block-title__column-name flex items-center justify-center">
            SMS
          </div>
          <div class="notifications-block-btn__btn flex items-center justify-center">
            <input
              type="checkbox"
              v-model="isLoginSms"
              class="toggle-button"
              style="margin: 0 auto"
            >
          </div>
        </div>
        <div class="notifications-block-btn__title-and-btn flex column justify-between">
          <div class="notifications-block-title__column-name text-center">
            Push-уведомления
          </div>
          <div class="notifications-block-btn__btn flex items-center justify-center">
            <input
              type="checkbox"
              v-model="isLoginPush"
              class="toggle-button"
            >
          </div>
        </div>
      </div>
    </div>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  name: 'NotificationsTableMob',
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
.notifications-block-title__column-name
  margin-bottom: 10px
.notifications-block-btn__btn
  margin-bottom: 30px
.line
  background: #444444
  width: 100%
  height: 0.5px
  margin-bottom: 20px
.notifications-block-title
  margin-bottom: 34px
.notifications-block-btn__title-and-btn
  width: 33.3%
.notifications-block-title__column-name
  font-family: Montserrat, sans-serif
  font-size: 12px
  font-style: normal
  font-weight: 400
  line-height: 16px
  letter-spacing: 0.03em
  color: #999999
.notifications-block-title__text
  margin-left: auto
  font-family: Montserrat, sans-serif
  font-size: 14px
  font-style: normal
  font-weight: 600
  line-height: 18px
  letter-spacing: 0.03em
  text-align: right
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
    top: 2.5px

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
</style>
