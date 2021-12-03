<template>
  <div class="b-why">
    <div class="b-why__item">
      <div class="b-why__item__image">
        <img
          src="~assets/chart.svg"
          alt=""
        >
      </div>
      <div class="b-why__item__desc">
        <h2 class="title-h2">
          Удобная торговая площадка
        </h2>
        <ul>
          <li>Операции с криптовалютами</li>
          <li>Торги без комиссий</li>
          <li>Мгновенный обмен</li>
          <li>Операции с фиатными валютами</li>
        </ul>
        <a
          href="#"
          class="btn btn-white"
        >Начать торги</a>
      </div>
    </div>
    <div class="b-why__item">
      <div class="b-why__item__image is-two">
        <img
          v-if="isScreenSizeSM"
          src="~assets/messenger-mobile.svg"
          alt=""
        >
        <img
          v-else
          src="~assets/messenger.svg"
          alt=""
        >
      </div>
      <div class="b-why__item__desc">
        <h2 class="title-h2">
          Встроенный<br> безопасный чат
        </h2>
        <ul>
          <li>Транзакции в диалогах</li>
          <li>Групповые чаты</li>
          <li>Звонки и конференции</li>
          <li>Сквозное шифрование</li>
        </ul>
        <a
          href="#"
          class="btn btn-white"
        >Начать диалог</a>
      </div>
    </div>
    <div class="b-why__btn">
      <a
        href="#"
        class="btn btn-red"
      >Начать работу</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Why',
  computed: {
    isScreenSizeSM() {
      return this.$q.screen.lt.sm;
    },
  },
};
</script>
