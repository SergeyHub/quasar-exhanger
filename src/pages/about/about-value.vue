<template>
  <div class="about-value">
    <h2 class="title-1 text-center about-value__title">
      Наши ценности
    </h2>
    <about-val-item />
  </div>
</template>

<script>

import AboutValItem from 'pages/about/about-value-item';

export default {
  name: 'AboutValue',
  components: { AboutValItem },
};
</script>

<style lang="sass">
@import "src/css/app"
.about-value
  margin-top: 184px
  @media only screen and (max-width: $layout-breakpoint-small)
    margin-top: 60px
  &__title
    margin: 0 0 123px 0
    font-weight: 500
    font-size: 32px
    line-height: 113.84%
    @media only screen and (max-width: $mobile)
      margin-bottom: 84px
  &__list
    width: 428px
    height: 428px
    border-radius: 50%
    border: 1px solid #ffffff
    display: block
    position: relative
    margin: 0 auto
    @media only screen and (max-width: $mobile)
      width: 280px
      height: 280px
    &__item
      width: 68px
      height: 68px
      background: #000000
      border-radius: 50%
      position: absolute
      z-index: 5
      display: flex
      align-items: center
      justify-content: center
      cursor: pointer
      @media only screen and (max-width: $mobile)
        width: 60px
        height: 60px
      &:after
        content: ''
        width: 3px
        height: 3px
        background: #D8014E
        position: absolute
        border-radius: 50%
      img
        position: relative
        z-index: 5
      &.is-active
        &:before
          content: ''
          width: 96px
          height: 96px
          background: #000000
          border-radius: 50%
          position: absolute
          left: 50%
          top: 50%
          margin-top: -48px
          margin-left: -48px
          border: 3px solid rgba(216,0,78,1)
          @media only screen and (max-width: $mobile)
            width: 70px
            height: 70px
            margin-top: -35px
            margin-left: -35px
        &:after
          content: ''
          background: white
          width: 9px
          height: 9px
          position: absolute
          right: auto !important
          bottom: auto !important
          left: 2px !important
          top: -7px !important
          border-radius: 50%
  &__desc
    position: absolute
    left: 0
    right: 0
    top: 0
    bottom: 0
    display: flex
    align-items: center
    justify-content: center
    flex-direction: column
    text-align: center
    &:before,
    &:after
      content: ''
      position: absolute
      left: -110px
      top: 20px
      width: 8px
      height: 8px
      background: #D8014E
      border-radius: 50%
      @media only screen and (max-width: $mobile)
        display: none
    &:after
      left: auto
      top: auto
      right: -126px
      bottom: 102px
    h3
      font-weight: 500
      font-size: 24px
      line-height: 113.84%
      margin: 15px 0 15px 0
      @media only screen and (max-width: $mobile)
        margin-top: 0
        font-size: 18px
    p
      font-weight: 500
      font-size: 14px
      line-height: 17px
      max-width: 240px
      margin: 0 auto
      margin-bottom: 30px
      @media only screen and (max-width: $mobile)
        max-width: 145px
        font-size: 10px
        line-height: 10px
        margin-bottom: 23px
      &:last-child
        margin-bottom: 0
      a
        color: white

</style>
