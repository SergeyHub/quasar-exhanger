<template>
  <div class="b-main">
    <div class="b-main__logo">
      <div class="b-main__logo__image">
        <img
          alt="arrow-up"
          src="~assets/logo-white.svg"
        >
      </div>
      <div class="b-main__logo__title">
        Extra
      </div>
      <div class="b-main__logo__sub">
        — Опережая будущее
      </div>
    </div>
    <div class="b-main__desc">
      <div class="b-main__exchange">
        <div class="b-main__exchange__item">
          <span>$</span>
          0.86
          <img
            alt="arrow-up"
            src="~assets/arrow-up.svg"
          >
        </div>
        <div class="b-main__exchange__item">
          <span>€</span>
          0.86
          <img
            alt="arrow-up"
            src="~assets/arrow-up.svg"
          >
        </div>
        <div class="b-main__exchange__item">
          <span>
            <img
              alt="bitcoin"
              src="~assets/bitcoin.svg"
            >
          </span>
          0.86
          <img
            alt="arrow-up"
            src="~assets/arrow-up.svg"
          >
        </div>
      </div>
      <div class="b-main__title">
        Инструмент, который работает для Вас
      </div>
      <div class="b-main__btn">
        <router-link
          class="btn btn-white"
          to="/authorization"
        >
          Войти
        </router-link>
      </div>
    </div>
    <div class="b-main__image">
      <img
        v-if="isScreenSizeSM"
        alt="pyramid"
        src="~assets/1-mobile.png"
      >
      <img
        v-else
        alt="pyramid"
        src="~assets/1.png"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'Instrument',
  computed: {
    isScreenSizeSM() {
      return this.$q.screen.lt.sm;
    },
  },
};
</script>
