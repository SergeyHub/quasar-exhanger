<template>
  <div class="justify-center items-center wallets-transfer-send-check">
    <div
      class="verification-account__close-btn flex justify-end"
    >
      <img
        @click="$emit('close')"
        src="~assets/close-modal-activate-account.svg"
        alt=""
      >
    </div>
    <div class="wallets-transfer-send-check-img flex items-center">
      <img
        src="~assets/arrow-activate-account.svg"
        class="wallets-transfer-send-check-img__img"
        alt=""
      >
    </div>
    <div class="wallets-transfer-send-check__title">
      Средства успешно отправлены!
    </div>
    <div class="wallets-transfer-send-check__text">
      Отправить чек на E-Mail
    </div>
    <q-input
      borderless
      v-model="email"
      dark
      placeholder="Введите E-Mail"
      class="wallets-transfer-send-check__input"
    />
    <div class="wallets-transfer-send-check__btn">
      Отправить
    </div>
  </div>
</template>

<script>
export default {
  name: 'WalletsTransferSendCheck',
  data: () => ({
    email: '',
  }),
};
</script>

<style scoped lang="sass">
.verification-account__close-btn
  position: absolute
  left: 77%
  top: 20%
  @media screen and (max-width: 1300px)
    left: 90%
    top: 22%
    @media screen and (max-width: 1200px)
      left: 81%
      top: 22%
      @media screen and (max-width: 1000px)
        left: 92%
        top: 22%
        @media screen and (max-width: 480px)
          left: 85%
          top: 30%
.wallets-transfer-send-check
  @media screen and (max-width: 480px)
    background: #191919
    padding: 22px
    border-radius: 12px
.wallets-transfer-send-check-img__img
  margin: 0 auto 59px auto
.wallets-transfer-send-check__title
  font-family: Montserrat, sans-serif
  font-size: 16px
  font-style: normal
  font-weight: 600
  line-height: 21px
  letter-spacing: 0.03em
  text-align: center
  margin-bottom: 80px
.wallets-transfer-send-check__text
  font-family: Montserrat, sans-serif
  margin-bottom: 26px
  font-size: 14px
  font-style: normal
  font-weight: 400
  line-height: 18px
  letter-spacing: 0.03em
  text-align: center
.wallets-transfer-send-check__input
  border: 1px solid #FFFFFF
  height: 42px
  border-radius: 10px
  width: 368px
  margin-bottom: 46px
  @media screen and (max-width: 480px)
    width: 300px
.wallets-transfer-send-check__btn
  background: #5AC06A
  border-radius: 10px
  padding: 10px 82px
  font-family: Montserrat, sans-serif
  font-size: 16px
  font-style: normal
  font-weight: 600
  line-height: 21px
  letter-spacing: 0.03em
  text-align: center

</style>
