<template>
  <div class="new-item">
    <b-text-info text-info="Aug 05 2020" />
    <h2 class="font-size-24 font-weight-600 mt-40">
      Получите скидочный купон на 20 долларов для бронирования за покупку криптовалюты
    </h2>
    <p>
      Дорогие участники сообщества Extra,<br>
      Купите криптовалюту и получите купон на 20 долларов Travala.com
    </p>
    <coupon />
    <p>
      В период с 5 августа 12:00 по 12 августа 12:00 (мск), при совершении одной покупки
      криптовалюты на сумму более 100 долларов (или эквивалент) с помощью кнопки "Купить
      за фиат" в приложении Binance или кнопки "Купить криптовалюту: кредитная / дебетовая
      карта / Криптовалютный обмен P2P" на сайте Binance, вы получите купон на 20 долларов
      от Travala.com, который можно использовать при бронировании на сумму, эквивалентную
      100 долларам или более.
    </p>
    <p>
      Вы можете хранить, тратить криптовалюту и торговать ей на
      <a
        href="#"
        class="link link-green"
      >Travala.com/Extra</a>. Все,
      что вам нужно сделать, - это
      <a
        href="#"
        class="link link-green"
      >подтвердить аккаунт</a>.
      Если вы уже сделали это, просто
      <a
        href="#"
        class="link link-green"
      >войдите</a>
      и
      <a
        href="#"
        class="link link-green"
      >купите криптовалюту</a> прямо сейчас!
    </p>
    <h3>
      Правила и условия для получения купона от Travala.com
    </h3>
    <ul>
      <li>
        Вознаграждения в виде купона применяются только к транзакциям через шлюз
        "Купить за наличные" на домашней странице в приложении Binance или через шлюз
        "Купить криптовалюту: Кредитная / Дебетовая карта / Криптовалютный обмен P2P"
        в меню сайта Binance. Транзакции в книге ордеров не учитываются в данной акции.
      </li>
      <li>
        Уникальный код купона для одноразового использования будет выслан по электронной
        почте в течение 5 рабочих дней после окончания акции. Вы можете использовать скидку
        в размере 20 долларов, создав аккаунт на Travala.com/Extra и введя уникальный код
        на странице оформления заказа для бронирования на сумму, эквивалентную 100 долларам.
        Используйте код в течение 180 дней после получения кода погашения. Каждый пользователь
        может получить только один купон.
      </li>
      <li>
        Пользователи, замеченные в мошенничестве, будут автоматически дисквалифицированы.
      </li>
      <li>
        Binance оставляет за собой право отмены или внесения изменений в конкурс или его
        правила по своему усмотрению.
      </li>
    </ul>
    <b-text-info
      text-info="Команда Extra"
      class-custom="mt-40"
    />
    <share />
  </div>
</template>

<script>
import BTextInfo from 'components/blocks/b-text-info';
import Coupon from 'pages/new-item/coupon';
import Share from 'components/blocks/b-share';

export default {
  name: 'NewItem',
  components: {
    Share,
    Coupon,
    BTextInfo,
  },
};
</script>

<style lang="sass">
@import "src/css/app"

.new-item
  margin-top: 44px
  margin-left: 64px
  margin-bottom: 85px
  position: relative
  @media only screen and (max-width: $layout-breakpoint-small)
    margin-left: 0
  @media only screen and (max-width: $layout-breakpoint-extra-small)
    margin-bottom: 70px
  .coupon
    margin-top: 14px
    margin-bottom: 50px
    @media only screen and (max-width: $layout-breakpoint-extra-small)
      margin-left: -25px
      margin-right: -25px
      margin-bottom: 30px
  .share
    position: absolute
    left: -84px
    top: 56px
    flex-direction: column
  h2
    line-height: 113.84%
    @media only screen and (max-width: $layout-breakpoint-extra-small)
      font-size: 20px
  h3
    font-weight: 600
    font-size: 20px
    line-height: 113.84%
    margin-bottom: 20px
    @media only screen and (max-width: $layout-breakpoint-extra-small)
      font-size: 18px
  .mt-40
    margin-top: 40px
  p,
  li
    font-weight: normal
    font-size: 16px
    line-height: 140%
    margin-bottom: 22px
    @media only screen and (max-width: $layout-breakpoint-extra-small)
      font-size: 14px
  ul
    margin: 0
    padding: 0
    li
      list-style: none
      position: relative
      padding: 0 0 0 28px
      @media only screen and (max-width: $layout-breakpoint-extra-small)
        padding-left: 21px
      &:before
        content: ''
        width: 7px
        height: 7px
        background: #D8014E
        border-radius: 50%
        position: absolute
        left: 0
        top: 5px
@media only screen and (max-width: $layout-breakpoint-small)
  .share
    display: none
</style>
