<template>
  <div class="about-mission">
    <h2 class="title-1 text-center about-mission__title">
      Миссия
    </h2>
    <p>
      Наше видение заключается в том, чтобы увеличить
      свободу денег во всем мире. Мы верим, что,
      распространяя эту свободу, мы можем значительно
      улучшить жизнь по всему миру
    </p>
  </div>
</template>

<script>

export default {
  name: 'AboutMission',
  components: {

  },
};
</script>

<style lang="sass" scoped>
@import "src/css/app"
.about-mission
  background: #D8014E
  width: 100%
  margin-top: 218px
  text-align: center
  padding: 92px 0 113px 0
  position: relative

  @media only screen and (max-width: $layout-breakpoint-small)
    margin-top: 127px

  &:before,
  &:after
    width: 2px
    height: 33px
    content: ''
    background: white
    position: absolute
    left: 50%
    margin-left: -1px
  &:before
    top: 0
  &:after
    bottom: 0
  h2
    margin: 0 0 24px 0
  p
    font-weight: 500
    font-size: 16px
    line-height: 135%
    max-width: 460px
    display: block
    margin: 0 auto
    @media only screen and (max-width: $layout-breakpoint-extra-small)
      max-width: none
    @media only screen and (max-width: $mobile)
      font-size: 14px
      line-height: 19px
      padding: 0 50px
    &:last-child
      margin-bottom: 0
  &__title
</style>
