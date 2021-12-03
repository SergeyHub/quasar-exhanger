<template>
  <div class="about-num">
    <div class="about-num__item">
      <div class="about-num__item__value">
        <div class="about-num__item__icon">
          <img
            src="~assets/about/icon-1.svg"
            alt=""
          >
        </div>
        <div class="about-num__item__number">
          300+
        </div>
      </div>
      <div class="about-num__item__desc">
        Сотрудников, работающих<br> в офисах и удалённо
      </div>
    </div>
    <div class="about-num__item">
      <div class="about-num__item__value">
        <div class="about-num__item__icon">
          <img
            src="~assets/about/icon-2.svg"
            alt=""
          >
        </div>
        <div class="about-num__item__number">
          54
        </div>
      </div>
      <div class="about-num__item__desc">
        Офисов и штабов<br> по всему миру
      </div>
    </div>
    <div class="about-num__item">
      <div class="about-num__item__value">
        <div class="about-num__item__icon">
          <img
            src="~assets/about/icon-3.svg"
            alt=""
          >
        </div>
        <div class="about-num__item__number">
          250+
        </div>
      </div>
      <div class="about-num__item__desc">
        Стратегических<br> партнёров
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AboutNum',
  components: {

  },
};
</script>

<style lang="sass" scoped>
@import "src/css/app"
.about-num
  display: flex
  margin-top: 115px
  @media only screen and (max-width: $layout-breakpoint-small)
    display: grid
    grid-template-columns: 1fr
    grid-row-gap: 45px
  @media only screen and (max-width: $layout-breakpoint-small)
    margin-top: 56px
  &__item
    margin: 0 58px
    &__value
      display: flex
      align-items: flex-end
      margin-bottom: 25px
      justify-content: center
    &__desc
      font-weight: normal
      font-size: 14px
      line-height: 135%
      text-align: center
      color: #999999
      @media only screen and (max-width: $layout-breakpoint-small)
        font-size: 12px
    &__icon
      margin-right: 21px
      margin-bottom: 9px
      position: relative
      img
        display: block
        @media only screen and (max-width: $layout-breakpoint-small)
          max-width: 80%
      &:before,
      &:after
        content: ''
        width: 8px
        height: 8px
        border-radius: 50%
        background: #ffffff
        position: absolute
      &:after
        width: 3px
        height: 3px
    &__number
      font-weight: normal
      font-size: 56px
      line-height: 113.84%
      color: #FFFFFF
      @media only screen and (max-width: $layout-breakpoint-small)
        font-size: 40px
    &:nth-child(1)
      .about-num__item__icon
        &:before
          bottom: 18px
          left: 7px
        &:after
          top: -22px
          right: 0
    &:nth-child(2)
      .about-num__item__icon
        &:before
          bottom: 18px
          left: 10px
        &:after
          top: -16px
          right: -13px
    &:nth-child(3)
      .about-num__item__icon
        &:before
          bottom: -3px
          left: 16px
        &:after
          top: 0
          left: -16px
</style>
