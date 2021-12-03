<template>
  <div class="about-partner">
    <h2 class="title-1 text-center about-partner__title">
      Партнёры и клиенты
    </h2>
    <div class="about-partner__sub">
      300+ financial institutions across<br>
      40+ countries worldwide
    </div>
    <div class="about-partner__review">
      <q-carousel
        v-model="slide"
        transition-prev="scale"
        transition-next="scale"
        swipeable
        animated
        control-color="white"
        navigation
        height="auto"
        class="bg-primary text-white shadow-1 rounded-borders"
      >
        <q-carousel-slide
          name="style"
          class="column no-wrap flex-center"
        >
          <div class="about-partner__review__item">
            <div class="about-partner__review__image">
              <img
                src="~assets/about/user.png"
                alt=""
              >
            </div>
            <div class="about-partner__review__info">
              <strong>Dr. Arak Sutivong,</strong>
              Директор по стратегии Siam Commercial Bank
            </div>
            <div class="about-partner__review__desc">
              Мы гордимся тем, что являемся первым банком
              в Азии, который использует решение Incompay
              для обеспечения платежей наших клиентов в
              режиме реального времени - для них это
              имеет огромное значение.
            </div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide
          name="tv"
          class="column no-wrap flex-center"
        >
          <div class="about-partner__review__item">
            <div class="about-partner__review__image">
              <img
                src="~assets/about/user.png"
                alt=""
              >
            </div>
            <div class="about-partner__review__info">
              <strong>Dr. Arak Sutivong,</strong>
              Директор по стратегии Siam Commercial Bank
            </div>
            <div class="about-partner__review__desc">
              Мы гордимся тем, что являемся первым банком
              в Азии, который использует решение Incompay
              для обеспечения платежей наших клиентов в
              режиме реального времени - для них это
              имеет огромное значение.
            </div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide
          name="layers"
          class="column no-wrap flex-center"
        >
          <div class="about-partner__review__item">
            <div class="about-partner__review__image">
              <img
                src="~assets/about/user.png"
                alt=""
              >
            </div>
            <div class="about-partner__review__info">
              <strong>Dr. Arak Sutivong,</strong>
              Директор по стратегии Siam Commercial Bank
            </div>
            <div class="about-partner__review__desc">
              Мы гордимся тем, что являемся первым банком
              в Азии, который использует решение Incompay
              для обеспечения платежей наших клиентов в
              режиме реального времени - для них это
              имеет огромное значение.
            </div>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
    <div class="about-partner__icon">
      <div class="about-partner__icon__title">
        Ключевые партнёры
      </div>
      <div class="about-partner__icon__list">
        <div class="about-partner__icon__item">
          <img
            src="~assets/about/visa.svg"
            alt=""
          >
        </div>
        <div class="about-partner__icon__item">
          <img
            src="~assets/about/mir.svg"
            alt=""
          >
        </div>
        <div class="about-partner__icon__item">
          <img
            src="~assets/about/sepa.svg"
            alt=""
          >
        </div>
        <div class="about-partner__icon__item">
          <img
            src="~assets/about/qiwi.svg"
            alt=""
          >
        </div>
        <div class="about-partner__icon__item">
          <img
            src="~assets/about/swft.svg"
            alt=""
          >
        </div>
        <div class="about-partner__icon__item">
          <img
            src="~assets/about/yandex.svg"
            alt=""
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AboutPartner',
  data() {
    return {
      slide: 'style',
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.',
    };
  },
};
</script>

<style lang="sass">
@import "src/css/app"
.about-partner
  margin-top: 133px
  @media only screen and (max-width: $laptop)
    max-width: 657px
    margin-left: auto
    margin-right: auto
    margin-top: 104px
  @media only screen and (max-width: $mobile)
    margin-left: 35px
    margin-right: 35px
  &__title
    margin: 0 0 15px 0
    font-weight: 500
    font-size: 32px
    line-height: 113.84%
  &__sub
    font-weight: 500
    font-size: 20px
    line-height: 135%
    text-align: center
    color: #999999
  &__review
    max-width: 900px
    margin: 0 auto
    margin-top: 62px
    &__item
      display: flex
      @media only screen and (max-width: $mobile)
        display: block
    &__image
      margin-right: 46px
      padding-top: 24px
      @media only screen and (max-width: $mobile)
        position: absolute
        left: 15px
        top: 60px
        margin-right: 0
        padding: 0

    &__info
      margin-top: 28px
      margin-right: 82px
      min-width: 211px
      @media only screen and (max-width: $laptop)
        margin-right: 53px
        min-width: 148px
      @media only screen and (max-width: $mobile)
        padding-left: 135px
        min-width: auto
        margin-right: 0
        margin-bottom: 29px
        font-size: 12px
        color: #999999
      strong
        display: block
        @media only screen and (max-width: $mobile)
          font-size: 14px
          color: white
    &__desc
      flex-grow: 1
      font-weight: 400
      font-size: 14px
      line-height: 18px
      padding-right: 40px
      @media only screen and (max-width: $laptop)
        padding-right: 0
      @media only screen and (max-width: $mobile)
      &:before
        content: '“'
        font-size: 32px
        font-weight: 600
        line-height: 135%
        @media only screen and (max-width: $mobile)
          line-height: 100%
  &__icon
    margin-top: 66px
    @media only screen and (max-width: $laptop)
      margin-top: 50px
    &__title
      font-weight: 600
      font-size: 16px
      line-height: 113.84%
      margin: 0 0 28px 0
    &__list
      border-top: 1px solid #444444
      border-bottom: 1px solid #444444
      display: flex
      align-items: center
      justify-content: space-around
      padding: 29px 0 35px 0
      @media only screen and (max-width: $laptop)
        justify-content: space-between
      @media only screen and (max-width: $mobile)
        display: grid
        grid-template-columns: auto 1fr auto
        grid-row-gap: 20px
    &__item
      @media only screen and (max-width: $mobile)
        display: flex
        justify-content: center

      img
        display: block
  .q-carousel
    padding: 30px 0
  .q-carousel__slide
    padding-left: 0
    padding-right: 0
    padding-top: 50px
  .q-carousel__control
    position: absolute
    left: 110px
    top: 26px
    right: auto
    bottom: auto
    button
      background: #666666
      width: 5px
      height: 5px
      margin: 0 8px 0 0
      border-radius: 50%
      &.q-carousel__navigation-icon--active
        background: #FFFFFF
      &>*
        display: none
  .q-carousel__slide
    padding: 0
  .q-btn--dense.q-btn--round .q-btn__wrapper
    padding: 0
    width: 5px
    height: 5px

</style>
