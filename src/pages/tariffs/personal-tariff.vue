<template>
  <div class="b-tablePrice">
    <div class="b-tablePrice-tab">
      <div
        :class="{ 'is-active' : input }"
        @click="eventInput"
      >
        Пополнение счёта
      </div>
      <div
        :class="{ 'is-active' : output }"
        @click="eventOutput"
      >
        Вывод средств
      </div>
    </div>

    <div class="b-tablePrice-info">
      <div class="b-tablePrice-info__row">
        <div class="text-gray">
          Создание аккаунта
        </div>
        <div>
          Бесплатно
        </div>
      </div>
      <div class="b-tablePrice-info__row">
        <div class="text-gray">
          Обслуживание в месяц
        </div>
        <div>
          Бесплатно
        </div>
      </div>
    </div>

    <div
      class="b-tablePrice-box"
      :class="{ isActive : input }"
    >
      <div class="row items-center row-padding-title">
        <div class="col-6 text-green">
          Пополнение счёта
        </div>
        <div class="col-4 text-green">
          Валюта
        </div>
        <div class="col-2 text-green">
          Комиссия
        </div>
      </div>

      <div class="row border-top items-center row-padding">
        <div class="col-6 text-gray">
          Перевод от ICP-пользователя
        </div>
        <div class="col-4">
          USD, EUR, RUB, GBP, UAH, KZT, BRL, TRY
        </div>
        <div class="col-2">
          Без комиссии
        </div>
      </div>

      <div class="row border-top items-center row-padding">
        <div class="col-6 text-gray">
          Перевод SEPA
        </div>
        <div class="col-4">
          EUR
        </div>
        <div class="col-2">
          5 EUR
        </div>
      </div>

      <div class="row border-top items-center row-padding">
        <div class="col-6 text-gray">
          Карты Visa / Mastercard / Мир
        </div>
        <div class="col-4">
          USD, EUR, RUB, UAH, KZT, TRY
        </div>
        <div class="col-2">
          от 3%
        </div>
      </div>

      <div class="row items-center row-padding-title-sm">
        <div class="col-6" />
        <div class="col-6 text-gray border-top row-padding">
          Платежные шлюзы
        </div>
      </div>

      <div class="row items-center row-padding-s">
        <div class="col-6" />
        <div class="col-4">
          USD
        </div>
        <div class="col-2">
          3,5%
        </div>
      </div>

      <div class="row items-center row-padding-s">
        <div class="col-6" />
        <div class="col-4">
          EUR
        </div>
        <div class="col-2">
          3,5%
        </div>
      </div>

      <div class="row items-center row-padding-s">
        <div class="col-6" />
        <div class="col-4">
          RUB
        </div>
        <div class="col-2">
          3%
        </div>
      </div>

      <div class="row items-center row-padding-s">
        <div class="col-6" />
        <div class="col-4">
          UAH
        </div>
        <div class="col-2">
          3%
        </div>
      </div>

      <div class="row items-center row-padding-s">
        <div class="col-6" />
        <div class="col-4">
          KZT
        </div>
        <div class="col-2">
          3%
        </div>
      </div>

      <div class="row items-center row-padding-s row-padding-sb ">
        <div class="col-6" />
        <div class="col-4">
          TRY
        </div>
        <div class="col-2">
          3%
        </div>
      </div>

      <div class="row border-top items-center row-padding">
        <div class="col-6 text-gray">
          Яндекс.Деньги
        </div>
        <div class="col-4">
          RUB
        </div>
        <div class="col-2">
          4%
        </div>
      </div>

      <div class="row border-top items-center row-padding">
        <div class="col-6 text-gray">
          QIWI
        </div>
        <div class="col-4">
          RUB
        </div>
        <div class="col-2">
          4%
        </div>
      </div>

      <div class="row border-top items-center row-padding">
        <div class="col-6 text-gray">
          Терминалы QIWI
        </div>
        <div class="col-4">
          RUB
        </div>
        <div class="col-2">
          6%
        </div>
      </div>

      <div class="row border-top items-center row-padding">
        <div class="col-6 text-gray">
          Терминалы Kassa24 (Казахстан)
        </div>
        <div class="col-4">
          KZT
        </div>
        <div class="col-2">
          3%
        </div>
      </div>

      <div class="row border-top items-center row-padding">
        <div class="col-6 text-gray">
          Онлайн-банкинг в Казахстане
        </div>
        <div class="col-4">
          KZT
        </div>
        <div class="col-2">
          3%
        </div>
      </div>

      <div class="row border-top items-center row-padding">
        <div class="col-6 text-gray">
          Tether
        </div>
        <div class="col-4">
          USDT
        </div>
        <div class="col-2">
          1 USD
        </div>
      </div>

      <div class="row border-top items-center row-padding">
        <div class="col-6 text-gray">
          Криптовалюты
        </div>
        <div class="col-4">
          BTC, ETH, LTC, BCH, XRP, ZEC
        </div>
        <div class="col-2">
          По курсу системы
        </div>
      </div>
    </div>

    <div
      class="b-tablePrice-box b-tablePrice-box-last"
      :class="{ isActive : output }"
    >
      <div class="row items-center row-padding-title">
        <div class="col-6 text-green">
          Вывод средств
        </div>
        <div class="col-4 text-green">
          Валюта
        </div>
        <div class="col-2 text-green">
          Комиссия
        </div>
      </div>

      <div class="row border-top items-center row-padding">
        <div class="col-6 text-gray">
          Перевод ICP-пользователя
        </div>
        <div class="col-4">
          USD, EUR, RUB, GBP, UAH, KZT, BRL, TRY
        </div>
        <div class="col-2">
          Без комиссии
        </div>
      </div>

      <div class="row border-top items-center row-padding">
        <div class="col-6 text-gray">
          Перевод SEPA
        </div>
        <div class="col-4">
          EUR
        </div>
        <div class="col-2">
          5 EUR + 0,5%
        </div>
      </div>

      <div class="row border-top items-center row-padding">
        <div class="col-6 text-gray">
          Пластиковая или виртуальная ICP-карта в RUB
        </div>
        <div class="col-4">
          RUB
        </div>
        <div class="col-2">
          69 RUB
        </div>
      </div>

      <div class="row border-top items-center row-padding">
        <div class="col-6 text-gray">
          Пластиковая или виртуальная ICP-карта в EUR
        </div>
        <div class="col-4">
          EUR
        </div>
        <div class="col-2">
          0,99 EUR
        </div>
      </div>

      <div class="row border-top items-center row-padding">
        <div class="col-6 text-gray">
          Пластиковая или виртуальная ICP-карта в USD
        </div>
        <div class="col-4">
          USD
        </div>
        <div class="col-2">
          0,99 USD
        </div>
      </div>

      <div class="row border-top items-center row-padding">
        <div class="col-6 text-gray">
          Карты Visa/MC по всему миру
        </div>
        <div class="col-4">
          USD, EUR
        </div>
        <div class="col-2">
          4 USD/EUR + 2,5%
        </div>
      </div>

      <div class="row border-top items-center row-padding">
        <div class="col-6 text-gray">
          Карты Visa/MC/МИР, выпущенные в России
        </div>
        <div class="col-4">
          RUB
        </div>
        <div class="col-2">
          50 RUB + 1,5%
        </div>
      </div>

      <div class="row border-top items-center row-padding">
        <div class="col-6 text-gray">
          Карты Visa/MC, выпущенные в Украине
        </div>
        <div class="col-4">
          UAH
        </div>
        <div class="col-2">
          30 UAH + 1,5%
        </div>
      </div>

      <div class="row border-top items-center row-padding">
        <div class="col-6 text-gray">
          Карты Visa/MC, выпущенные в Казахстане
        </div>
        <div class="col-4">
          KZT
        </div>
        <div class="col-2">
          600 KZT + 2,5%
        </div>
      </div>

      <div class="row border-top items-center row-padding">
        <div class="col-6 text-gray">
          Яндекс.Деньги
        </div>
        <div class="col-4">
          RUB
        </div>
        <div class="col-2">
          2%
        </div>
      </div>

      <div class="row border-top items-center row-padding">
        <div class="col-6 text-gray">
          QIWI
        </div>
        <div class="col-4">
          RUB
        </div>
        <div class="col-2">
          2%
        </div>
      </div>

      <div class="row border-top items-center row-padding">
        <div class="col-6 text-gray">
          Tether
        </div>
        <div class="col-4">
          USDT
        </div>
        <div class="col-2">
          0,5%
        </div>
      </div>

      <div class="row border-top items-center row-padding">
        <div class="col-6 text-gray">
          Криптовалюты
        </div>
        <div class="col-4">
          BTC, ETH, LTC, BCH, XRP, ZEC, TRX
        </div>
        <div class="col-2">
          По курсу системы
        </div>
      </div>
    </div>

    <div class="b-tablePrice-tab">
      <div
        :class="{ 'is-active' : input }"
        @click="eventInput"
      >
        Пополнение счёта
      </div>
      <div
        :class="{ 'is-active' : output }"
        @click="eventOutput"
      >
        Вывод средств
      </div>
    </div>

    <get-started />
  </div>
</template>

<script>
import GetStarted from 'components/blocks/get-started';

export default {
  name: 'PersonalTariff',
  components: { GetStarted },
  data() {
    return {
      input: true,
      output: false,
    };
  },
  methods: {
    eventInput() {
      this.input = true;
      this.output = false;
    },
    eventOutput() {
      this.input = false;
      this.output = true;
    },
  },
};
</script>

<style lang="sass" scoped>
.border-top
  border-top: 1px solid #666666

.row-padding
  padding-top: 15px
  padding-bottom: 15px

.margin-top-60
  margin-top: 60px

.text-green
  color: #27AE60

.btn-margins
  margin: 60px 0
.col-4
  padding-left: 10px
  padding-right: 10px
.row-padding
  padding-top: 10px
  padding-bottom: 10px

</style>
