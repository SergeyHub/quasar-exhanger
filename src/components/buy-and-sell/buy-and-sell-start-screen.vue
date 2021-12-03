<template>
  <div class="start-screen">
    <div class="start-screen-logo items-center row justify-between">
      <div class="start-screen-logo__title flex">
        Начните покупать или продавать криптовалюту
        на нашей бирже Extra с помощью Extra-кошелька
      </div>
      <div class="">
        <img
          class="start-screen-logo__img"
          :src="iconLogo"
          alt=""
        >
        <div class="row start-screen-logo-title-in-img">
          <img
            :src="iconLogoExtra"
            alt=""
          >
          <div class="start-screen-logo-title-in-img__title">
            Extra
          </div>
          <div class="start-screen-logo-title-in-img__text">
            — Опережая будущее
          </div>
        </div>
      </div>
    </div>
    <div class="start-screen-what-is-work row">
      <img
        :src="iconWarning"
        alt=""
        class="start-screen-what-is-work__img"
      >
      <div class="start-screen-what-is-work__title">
        Как это работает?
      </div>
    </div>
    <div class="start-screen-explication row items-center">
      <div class="start-screen-explication__title">
        Не нужно покидать Extra, чтобы покупать криптовалюту и токены.
        Extra — это отличные предложения по криптовалютам, лучшие курсы,
        работа с удобными возможностями и не только.
        Используйте ваш баланс в Extra для покупки криптовалюты
        всего за несколько кликов. Купленные вами монеты будут сразу
        отправлены на ваш криптокошелек.
      </div>
      <div class="start-screen-explication-list">
        <div class="start-screen-explication-list__content row">
          <div class="start-screen-explication-list__number row items-center justify-center">
            <div>
              1
            </div>
          </div>
          <div class="start-screen-explication-list__title">
            Выберите валюту и введите сумму покупки
          </div>
        </div>
        <div class="start-screen-explication-list__content row">
          <div class="start-screen-explication-list__number row items-center justify-center">
            <div>
              2
            </div>
          </div>
          <div class="start-screen-explication-list__title">
            Выберите карту или добавьте новую
          </div>
        </div>
        <div class="start-screen-explication-list__content row">
          <div class="start-screen-explication-list__number row items-center justify-center">
            <div>
              3
            </div>
          </div>
          <div class="start-screen-explication-list__title">
            Проверьте данные и подтвердите оплату
          </div>
        </div>
        <div class="start-screen-explication-list__content row">
          <div class="start-screen-explication-list__number row items-center justify-center">
            <div>
              4
            </div>
          </div>
          <div class="start-screen-explication-list__title">
            Покупка криптовалюты совершена!
          </div>
        </div>
      </div>
    </div>
    <btn-pro-and-easy-exchange class="start-screen-btn" />
  </div>
</template>

<script>
import imgLogoExtra from 'assets/logo-start-screen-buy-and-sell.svg';
import imgWarning from 'assets/warning.svg';
import imgLogo from 'assets/img-start-screen-buy-and-sell.svg';
import BtnProAndEasyExchange from 'components/buy-and-sell/btn-pro-and-easy-exchange';

export default {
  name: 'BuyAndSellStartScreen',
  components: {
    BtnProAndEasyExchange,
  },
  data: () => ({
    iconLogo: imgLogo,
    iconLogoExtra: imgLogoExtra,
    iconWarning: imgWarning,
  }),
};
</script>

<style scoped lang="sass">
.start-screen-logo-title-in-img__title
  font-family: Montserrat, sans-serif
  font-size: 20px
  font-style: normal
  font-weight: 600
  line-height: 24px
  letter-spacing: 0em
  text-align: left
  margin-left: 8px
.start-screen-logo-title-in-img__text
  font-family: Montserrat, sans-serif
  font-size: 17px
  font-style: italic
  font-weight: 400
  line-height: 21px
  letter-spacing: 0em
  text-align: left
  margin-left: 8px
.start-screen-logo-title-in-img
  position: relative
  top: -17px
  left: 35%
  @media screen and (max-width: 1390px)
    left: -9%
.start-screen-btn
  margin-top: 108px
.start-screen-explication-list__number
  margin-right: 8px
.start-screen-explication-list
  @media screen and (max-width: 1432px)
    margin-top: 50px
.start-screen-explication-list__content
  margin-bottom: 12px
  &:last-child
    margin-bottom: 0
.start-screen-explication__title
  font-family: Montserrat, sans-serif
  font-size: 16px
  font-style: normal
  font-weight: 400
  line-height: 21px
  letter-spacing: 0.03em
  text-align: left
  width: 600px
  color: #969696
  margin-top: 30px
  @media screen and (max-width: 1432px)
    width: 100%
.start-screen-explication-list__title
  font-family: Montserrat, sans-serif
  font-size: 16px
  font-style: normal
  font-weight: 400
  line-height: 21px
  letter-spacing: 0.03em
  text-align: left
  @media screen and (max-width: 480px)
    width: 270px
.start-screen-explication-list__number
  font-family: Roboto, sans-serif
  font-size: 14px
  font-style: normal
  font-weight: 500
  line-height: 18px
  letter-spacing: 0.03em
  text-align: center
  background: #777777
  width: 22px
  height: 22px
  border-radius: 90px
.start-screen-what-is-work__title
  font-family: Montserrat, sans-serif
  font-size: 18px
  font-style: normal
  font-weight: 500
  line-height: 22px
  letter-spacing: 0em
  text-align: left
.start-screen-what-is-work__img
  margin-right: 8px
.start-screen-what-is-work
  margin-top: 63px
.start-screen-logo__img
  width: 500px
  max-width: 500px
  height: 225px
  @media screen and (max-width: 1390px)
    height: 206px
    max-width: 271px
.start-screen
  padding: 0 22px
.start-screen-logo
  background: #101010
  padding-left: 70px
.start-screen-logo__title
  margin-right: 30px
  height: 100%
  width: 380px
  font-family: Montserrat, sans-serif
  font-size: 26px
  font-style: normal
  font-weight: 500
  line-height: 32px
  letter-spacing: 0em
  text-align: left
  @media screen and (max-width: 1390px)
    width: 270px
</style>
