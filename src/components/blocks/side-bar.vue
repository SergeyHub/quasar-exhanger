<template>
  <transition name="side-panel">
    <div
      v-if="isOpenSideBar"
      class="side-panel"
    >
      <q-toolbar class="flex no-padding row justify-between items-center side-panel-navigation">
        <div class="flex row">
          <img
            src="~assets/half-moon.svg"
            class="half-moon q-ml-sm"
          >
          <div class="font-weight-600 lang-wrapper">
            ENGLISH
          </div>
          <img
            src="~assets/arrow_drop_down.svg"
            class="q-ml-xs"
          >
        </div>
        <img
          alt="Incompay logo"
          src="~assets/ellipse-with-cross.svg"
          class="btn-close-side-bar"
          @click="$emit('close')"
        >
      </q-toolbar>
      <div class="flex row">
        <div
          v-if="isScreenSizeMD && !isScreenSizeSM"
          class="header-image flex column"
        >
          <router-link
            style="text-decoration: none; color: #FFFFFF"
            to="/"
          >
            <div class="flex no-wrap row items-center">
              <div class="flex no-wrap items-center">
                <img
                  alt="Incompay logo"
                  src="~assets/incompay-logo.svg"
                >
                <div
                  v-if="isScreenSizeSM"
                  class="text-gray font-size-12 font-weight-500 lh-15 q-ml-sm"
                >
                  Направления
                </div>
                <img
                  v-if="isScreenSizeSM"
                  alt="Incompay logo"
                  src="~assets/arrow-down.svg"
                  class="q-ml-xs"
                >
              </div>

              <div
                v-if="!isScreenSizeSM"
                class="font-weight-600 font-size-18"
              >
                Extra
              </div>
            </div>
          </router-link>
          <div
            v-if="!isScreenSizeSM"
            class="font-weight-500 text-italic font-size-8 title-wrap"
          >
            — Опережая будущее
          </div>
        </div>
        <div class="flex column block-link justify-center">
          <div
            class="b-side-bar__item"
            v-for="(item, index) in items"
            :key="index"
            @click="$emit('close')"
          >
            <router-link
              :to="item.url"
              class="b-side-bar__link"
              v-text="item.value"
            />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'SideBar',
  props: {
    items: {
      type: Array,
      default: () => [
        { value: 'О компании', url: '/about' },
        { value: 'Обменять', url: '/test' },
        { value: 'Ввод/Вывод', url: '/test' },
        { value: 'Купить/Продать криптовалюту', url: '/tariffs' },
        { value: 'Безопасность', url: '/test' },
        { value: 'Мессенджер', url: '/test' },
        { value: 'Документы', url: '/test' },
        { value: 'Контакты', url: '/contacts' },
        { value: 'Новости', url: '/news' },
      ],
    },
    isOpenSideBar: {
      type: Boolean,
    },
  },
  computed: {
    isScreenSizeSM() {
      return this.$q.screen.lt.sm;
    },
    isScreenSizeMD() {
      return this.$q.screen.lt.md;
    },
  },
};
</script>

<style lang="sass" scoped>
  @import "src/css/app"
  .block-link
    margin: auto
  .router-link-active
    @media only screen and (max-width: $layout-breakpoint-small)
      text-decoration: underline 2px !important
  .header-image
    width: 194px
    max-width: 194px
    position: relative
    top: -119px
  .side-panel-enter-active
    transition: all 280ms ease-in-out
  .side-panel-leave-active
    transition: all 280ms ease-in-out
  .side-panel-enter, .side-panel-leave-to
    transform: translateX(640px)
    opacity: 0

  .btn-close-side-bar
    margin-right: 100px
    @media only screen and (max-width: $layout-breakpoint-small)
      margin-left: 30px
      margin-right: 23px
      @media only screen and (max-width: $layout-breakpoint-extra-small)
        margin-left: 0
        margin-right: 15px

  .side-panel-navigation
    margin-bottom: 70px
    @media only screen and (max-width: $layout-breakpoint-small)
      display: flex
      justify-content: flex-end !important
      @media only screen and (max-width: $layout-breakpoint-extra-small)
        display: flex
        justify-content: space-between !important
  .half-moon
    padding: 0
    margin-left: 0
    margin-right: 36px

  .side-panel
    border-left: 1px #FFFFFF solid
    width: 50%
    padding-left: 117px
    position: fixed
    z-index: 999999
    top: 0
    right: 0
    background: #000000
    height: 100vh
    color: #FFF
    @media only screen and (max-width: $layout-breakpoint-small)
      width: 100%
      padding-left: 0
      @media only screen and (max-width: $layout-breakpoint-extra-small)
        padding-left: 39px
        width: 100%

  .b-side-bar__link
    font-family: Montserrat
    font-size: 24px
    font-style: normal
    font-weight: 500
    line-height: 27px
    letter-spacing: 0em
    text-align: left
    text-decoration: none
    color: #FFFFFF
    margin-bottom: 34px
    display: flex
    &:hover
      text-decoration: underline 2px
    @media only screen and (max-width: $layout-breakpoint-small)
      &:hover
        text-decoration: none

</style>
