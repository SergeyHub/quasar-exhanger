<template>
  <div class="new-list">
    <div class="new-list__item new-list__item-bg">
      <div class="background-moon">
        <img
          src="~assets/background-moon.svg"
        >
      </div>
      <b-text-info text-info="Aug 05 2020" />
      <h3 class="new-list__item__title">
        <a href="#">
          Получите скидочный купон на 20 долларов для бронирования за покупку криптовалюты
        </a>
      </h3>
      <div class="new-list__item__sub">
        3 мин читать • команда EXTRA
      </div>
      <div class="new-list__item__image">
        <img
          alt=""
          src="~assets/new-img-2.svg"
          class="img-test"
          :class="{'img-opacity': isOpenNews}"
        >
      </div>
      <div
        v-if="!isOpenNews"
        @click="isOpenNews = true"
        class="new-list__item__button"
      >
        <button-link
          value="Читать"
          custom-class="btn-red"
          class="btn_read"
          icon="more"
        />
      </div>
      <div
        v-else
        class="news-content"
      >
        <p class="news_description__title">
          Дорогие участники сообщества Extra,
          Купите криптовалюту и получите купон на 20 долларов от Travala.com
        </p>
      </div>
    </div>
    <div
      v-if="isOpenNews"
      class="news_description"
    >
      <div class="news_description__content">
        <p class="news_description__content__text">
          В период с 5 августа 12:00 по 12 августа 12:00 (мск),
          при совершении одной покупки криптовалюты на сумму
          более 100 долларов (или эквивалент)
          с помощью кнопки "Купить за фиат"
          в приложении Binance или кнопки "Купить криптовалюту:
          кредитная / дебетовая карта / Криптовалютный обмен P2P" на
          сайте Binance, вы получите купон на 20 долларов от Travala.com
          , который можно использовать при бронировании
          на сумму, эквивалентную 100 долларам или более.
        </p>
        <p>
          Вы можете хранить, тратить криптовалюту и торговать ей
          на <a
            class="news_description__content__link"
            href="#"
          >Travala.com/Extra.</a>
          Все, что вам нужно сделать,
          - это <a
            class="news_description__content__link"
            href="#"
          >подтвердить аккаунт.</a>
          Если вы уже сделали это,
          просто <a
            class="news_description__content__link"
            href="#"
          >войдите</a>
          и <a
            class="news_description__content__link"
            href="#"
          >
            купите криптовалюту прямо сейчас!</a>
        </p>
        <div class="news_description__content__text news_description__content__text__bold">
          Правила и условия для получения купона от Travala.com
        </div>
        <ul>
          <li>
            <span>Вознаграждения в виде купона применяются только к
              транзакциям через шлюз "Купить за наличные" на домашней
              странице в приложении Binance или через шлюз "Купить криптовалюту:
              Кредитная / Дебетовая карта / Криптовалютный обмен P2P" в меню сайта Binance.
              Транзакции в книге ордеров не учитываются в данной акции.</span>
          </li>
          <li>
            <span>Уникальный код купона для одноразового использования будет выслан
              по электронной почте в течение 5 рабочих дней после окончания акции.
              Вы можете использовать скидку в размере 20 долларов, создав аккаунт на
              <a
                class="news_description__content__link"
                href="#"
              >Travala.com/Extra</a>
              и введя уникальный код на странице оформления заказа для бронирования
              на сумму, эквивалентную 100 долларам. Используйте код
              <strong>в течение 180 дней после получения кода погашения
                .</strong> Каждый пользователь может получить только один купон.</span>
          </li>
          <li>
            <span>Пользователи, замеченные в мошенничестве,
              будут автоматически дисквалифицированы.</span>
          </li>
          <li>
            <span>Binance оставляет за собой право отмены
              или внесения изменений в конкурс или его правила по своему усмотрению.</span>
          </li>
        </ul>
        <b-text-info text-info="Команда Extra" />
        <div
          @click="isOpenNews = false"
          class="new-list__item__button"
        >
          <button-link
            value="Свернуть"
            custom-class="btn-red"
            class="btn_read"
            icon="up-arrow"
          />
        </div>
      </div>
    </div>
    <div class="new-list__item">
      <b-text-info text-info="Aug 05 2020" />
      <h3 class="new-list__item__title">
        <a href="#">
          Изменения в условиях партнёрской программы Extra
        </a>
      </h3>
      <div class="new-list__item__sub">
        3 мин читать • команда EXTRA
      </div>
      <div class="new-list__item__button">
        <button-link
          value="Читать"
          class="btn_read"
          custom-class="btn-border"
          icon="more"
        />
      </div>
    </div>
    <div class="new-list__item">
      <b-text-info text-info="Aug 05 2020" />
      <h3 class="new-list__item__title">
        <a href="#">
          Как работает эскроу-сервис Extra P2P?
        </a>
      </h3>
      <div class="new-list__item__sub">
        5 мин читать • команда EXTRA
      </div>
      <div class="new-list__item__button">
        <button-link
          value="Читать"
          class="btn_read"
          custom-class="btn-border"
          icon="more"
        />
      </div>
    </div>
    <div class="new-list__item">
      <b-text-info text-info="Aug 05 2020" />
      <h3 class="new-list__item__title">
        <a href="#">
          Полное руководство по ваучерам Extra
        </a>
      </h3>
      <div class="new-list__item__sub">
        5 мин читать • команда EXTRA
      </div>
      <div class="new-list__item__desc">
        Что такое ваучеры Extra?
        Ваучеры Extra – это интерактивный инструмент,
        который мы создали, чтобы поощрять пользователей
        и стимулировать использование новых продуктов.
        В зависимости от вида вашей активности или участия...
      </div>
      <div class="new-list__item__button">
        <button-link
          value="Читать"
          class="btn_read"
          custom-class="btn-border"
          icon="more"
        />
      </div>
    </div>
    <div class="new-list__item">
      <b-text-info text-info="Aug 05 2020" />
      <h3 class="new-list__item__title">
        <a href="#">
          Партнёр Extra —
          VISA. Выпуск карт
        </a>
      </h3>
      <div class="new-list__item__sub">
        5 мин читать • команда EXTRA
      </div>
      <div class="new-list__item__desc">
        Что такое ваучеры Extra?
        Ваучеры Extra – это интерактивный инструмент,
        который мы создали, чтобы поощрять пользователей
        и стимулировать использование новых продуктов.
        В зависимости от вида вашей активности или участия...
      </div>
      <div class="new-list__item__button">
        <button-link
          value="Читать"
          class="btn_read"
          custom-class="btn-border"
          icon="more"
        />
      </div>
    </div>
    <div class="new-list__item">
      <b-text-info text-info="Aug 05 2020" />
      <h3 class="new-list__item__title">
        <a href="#">
          Запуск Extra Research
        </a>
      </h3>
      <div class="new-list__item__sub">
        5 мин читать • команда EXTRA
      </div>
      <div class="new-list__item__image">
        <img
          alt=""
          src="~assets/new-img-1.svg"
        >
      </div>
      <div class="new-list__item__desc">
        Мы запускаем новое подразделение, которое будет
        заниматься аналитикой, — Binance Research. Следите
        за нашими собственными аналитическими обзорами проектов,
        интересных институциональным инвесторам, некоторые
        обзоры уже доступны онлайн!
      </div>
      <div class="new-list__item__button">
        <button-link
          value="Читать"
          custom-class="btn-border"
          class="btn_read"
          icon="more"
        />
      </div>
    </div>
    <div class="new-list__item">
      <b-text-info text-info="Aug 05 2020" />
      <h3 class="new-list__item__title">
        <a href="#">
          Интервью с CEO Extra
        </a>
      </h3>
      <div class="new-list__item__sub">
        5 мин читать • команда incompay
      </div>
      <div class="new-list__item__button">
        <button-link
          value="Читать"
          class="btn_read"
          custom-class="btn-border"
          icon="more"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BTextInfo from 'components/blocks/b-text-info';
import ButtonLink from 'components/form/button-link';

export default {
  name: 'NewsList',
  components: {
    ButtonLink,
    BTextInfo,
  },
  data: () => ({
    isOpenNews: false,
  }),
  methods: {
    openNews() {
      console.log(1111);
      this.isOpenNews = true;
    },
  },
};
</script>

<style lang="sass" scoped>
@import "src/css/app"
.img-opacity
  opacity: 50%
.news-content
  margin-top: 30px
.background-moon
  position: absolute
  left: -361px
  top: 0px
.img-test
  width: 300px
  height: 329px

li
  color: #D8014E
  margin-bottom: 35px
li span
  color: #FFFFFF
.news_description__content__text__bold
  font-family: Montserrat, sans-serif
  font-size: 20px
  font-style: normal
  font-weight: 600
  line-height: 23px
  letter-spacing: 0em
  text-align: left
.news_description__content__link
  color: #27AE60
.news_description__content__text
  margin-top: 35px
.news_description
  width: 100%
  max-width: 700px
  margin: 0 auto 0 auto
.news_description__content
  font-family: Montserrat, sans-serif
  font-size: 16px
  font-style: normal
  font-weight: 500
  line-height: 22px
  letter-spacing: 0em
  text-align: left
.news_description__title
  margin-top: 38px
  width: 400px
  font-size: 16px
  font-style: normal
  font-weight: 400
  line-height: 24px
  letter-spacing: 0em
  text-align: left
  position: relative
  @media only screen and (max-width: $layout-breakpoint-extra-small)
    width: 300px
.btn_read
  &:hover
    background: #D8014E
    border: 0
.new-list
  margin-bottom: 84px
  @media only screen and (max-width: $layout-breakpoint-extra-small)
    margin-top: 50px
    margin-bottom: 70px
  &__item
    position: relative
    border-bottom: 1px solid #666666
    padding: 50px 33px
    @media only screen and (max-width: $layout-breakpoint-extra-small)
      padding: 40px 0
    .b-text-info
      color: #999999
      font-weight: 600
      font-size: 12px
    &__title
      font-weight: 600
      font-size: 24px
      line-height: 113.84%
      margin: 16px 0 13px 0
      padding: 0
      max-width: 600px
      @media only screen and (max-width: $layout-breakpoint-extra-small)
        font-size: 20px
      a
        color: $white
        text-decoration: none
    &__sub
      font-weight: 500
      font-size: 12px
      line-height: 113.84%
      text-transform: uppercase
      color: #999999
    &__image
      margin-top: 50px
      img
        max-width: 100%
    &__desc
      margin-top: 32px
      font-weight: normal
      font-size: 16px
      line-height: 150%
      @media only screen and (max-width: $layout-breakpoint-extra-small)
        font-size: 14px
    &__button
      margin-top: 30px
    &-bg
      min-height: 350px
      display: flex
      flex-direction: column
      border-top: 1px solid #666666
      border-bottom: 1px solid #666666
      justify-content: center
      @media only screen and (max-width: $layout-breakpoint-extra-small)
        min-height: auto
      &:before,
      &:after
        content: ''
        height: 1px
        background: #777777
        position: absolute
        left: 50%
      &:before
        top: 0
      &:after
        bottom: 0
      .new-list__item__title,
      .new-list__item__sub,
      .new-list__item__button
        position: relative
        z-index: 5
        max-width: 60%
        @media only screen and (max-width: $layout-breakpoint-extra-small)
          max-width: none
      .new-list__item__image
        width: 250px !important
        position: absolute
        right: 0
        top: 0 !important
        bottom: 0
        display: flex
        align-items: center
        margin: 0
        overflow: hidden
        @media only screen and (max-width: $layout-breakpoint-extra-small)
          top: auto
          img
            width: 200px
            height: 200px
  .columns
    display: grid
    grid-template-columns: 1fr 1fr
    grid-column-gap: 30px
    border-bottom: 1px solid #666666
    @media only screen and (max-width: $layout-breakpoint-small)
      grid-template-columns: 1fr
      border-bottom: 0
    .new-list__item
      border-bottom: 0
      @media only screen and (max-width: $layout-breakpoint-small)
        border-bottom: 1px solid #666666
</style>
