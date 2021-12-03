<template>
  <div class="flex column full-width items-center">
    <div class="contacts-methods-container full-width">
      <div class="fit row items-center justify-center">
        <img
          alt="pyramid"
          src="~assets/phone.svg"
        >
        <div class="font-size-32 margin-left-14">
          +7 995 131 77 77
        </div>
        <img
          class="margin-left-right-15"
          alt="pyramid"
          src="~assets/line.svg"
        >
        <div>
          <div class="font-size-12 font-weight-500">
            Служба поддержки
          </div>
          <div class="font-size-12 text-gray">
            пн-пт 09:00-18:00 мск
          </div>
        </div>
      </div>
    </div>

    <div class="payment-methods-container full-width">
      <div class="fit flex row items-center justify-around page-width margin-center">
        <img
          class="q-pa-sm"
          alt="pyramid"
          src="~assets/sepa.svg"
        >
        <img
          class="q-pa-sm"
          alt="pyramid"
          src="~assets/qiwi.svg"
        >
        <img
          class="q-pa-sm"
          alt="pyramid"
          src="~assets/swift.svg"
        >
        <img
          class="q-pa-sm"
          alt="pyramid"
          src="~assets/visa.svg"
        >
        <img
          class="q-pa-sm"
          alt="pyramid"
          src="~assets/mir.svg"
        >
        <img
          class="q-pa-sm"
          alt="pyramid"
          src="~assets/yandex-money.svg"
        >
      </div>
    </div>

    <div class="social-links-container full-width q-px-lg flex items-center">
      <div class="fit row items-center justify-around page-width margin-center q-gutter-md">
        <div>
          <img
            alt="pyramid"
            src="~assets/google-play.svg"
          >
          <img
            class="q-ml-lg"
            alt="pyramid"
            src="~assets/app-store.svg"
          >
        </div>
        <div class="q-gutter-x-lg font-size-12 font-weight-500">
          <a
            class="text-white"
            href="#"
          >AML-программа</a>
          <a
            class="text-white"
            href="#"
          >Соглашение</a>
          <a
            class="text-white"
            href="#"
          >Защита данных</a>
        </div>
        <div>
          <img
            alt="pyramid"
            src="~assets/instagram.svg"
          >
          <img
            class="q-ml-lg"
            alt="pyramid"
            src="~assets/facebook.svg"
          >
          <img
            class="q-ml-lg"
            alt="pyramid"
            src="~assets/youtube.svg"
          >
          <img
            class="q-ml-lg"
            alt="pyramid"
            src="~assets/telegram.svg"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExtraInfo',
};
</script>

<style lang="sass" scoped>
.payment-methods-container
  height: 210px
  border-top: 0.5px solid #777777

.margin-left-14
  margin-left: 14px

.margin-left-right-15
  margin: 0 15px

.contacts-methods-container
  height: 125px
  border-top: 0.5px solid #777777

.social-links-container
  min-height: 140px
  border-top: 0.5px solid #777777
</style>
