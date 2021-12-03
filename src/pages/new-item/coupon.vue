<template>
  <div class="coupon">
    <div class="coupon__image">
      <img
        class=""
        alt=""
        src="~assets/coupon-bg.svg"
      >
    </div>
    <div class="coupon__head">
      <img
        src="~assets/logo.svg"
        alt=""
      >
      <span>
        <img
          src="~assets/travala.svg"
          alt=""
        >
      </span>
    </div>
    <div class="coupon__desc">
      <h2>
        Купон на 20$ для бронирования
      </h2>
      <p>За покупку криптовалюты</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Coupon',
};
</script>

<style lang="sass" scoped>
@import "src/css/app"

.coupon
  position: relative
  max-width: 755px
  &__image
    img
      max-width: 100%
  &__head
    position: absolute
    left: 58px
    top: 23px
    display: flex
    align-items: center
    @media only screen and (max-width: $layout-breakpoint-small)
      left: 25px
    &>img
      @media only screen and (max-width: $layout-breakpoint-extra-small)
        width: 70px
        height: auto
    span
      position: relative
      padding-left: 40px
      margin-left: 40px
      @media only screen and (max-width: $layout-breakpoint-extra-small)
        padding-left: 20px
        margin-left: 20px
      img
        display: block
        @media only screen and (max-width: $layout-breakpoint-extra-small)
          width: 70px
          height: auto
      &:before
        content: ''
        width: 2px
        height: 24px
        background: $white
        position: absolute
        left: 0
        top: 50%
        margin-top: -12px
        @media only screen and (max-width: $layout-breakpoint-extra-small)
          height: 16px
          margin-top: -8px
          width: 1px
  &__desc
    position: absolute
    left: 62px
    top: 0
    bottom: 0
    display: flex
    flex-direction: column
    justify-content: center
    max-width: 332px
    @media only screen and (max-width: $layout-breakpoint-small)
      left: 25px
    @media only screen and (max-width: $layout-breakpoint-extra-small)
      width: 50%
      top: 30px
    h2
      font-weight: 600
      font-size: 28px
      line-height: 113.84%
      margin: 0 0 14px 0
      @media only screen and (max-width: $layout-breakpoint-extra-small)
        font-size: 16px
        margin-bottom: 10px
    p
      font-size: 20px
      line-height: 24px
      color: #999999
      @media only screen and (max-width: $layout-breakpoint-extra-small)
        font-size: 12px
        line-height: 1.2
</style>
