<template>
  <q-header class="header-max-width">
    <q-toolbar class="container flex row justify-between q-pa-xs">
      <div class="logo">
        <router-link
          class="logo__link"
          to="/"
        >
          <span class="logo__title">
            <img
              src="~assets/logo-img.svg"
              alt=""
            >
            <span>Extra</span>
          </span>
          <span class="logo__desc">— Опережая будущее</span>
        </router-link>
      </div>
      <div class="menu-btn">
        Направления
        <img
          src="~assets/arw.svg"
          alt=""
        >
      </div>
      <div
        class="menu"
      >
        <div class="menu__item">
          <a
            href="page1"
          >
            Платежи
          </a>
        </div>
        <div class="menu__item">
          <a
            href="page1"
          >
            Криптобиржа
          </a>
        </div>
        <div class="menu__item">
          <a
            href="page1"
          >
            Мессенджер
          </a>
        </div>
      </div>

      <div class="group-rt">
        <div class="flex row items-center">
          <router-link
            class="sign-in-btn btn-white"
            to="/authorization"
          >
            Войти
          </router-link>
          <div class="btn-lightTheme">
            <img
              src="~assets/half-moon.svg"
              alt=""
            >
          </div>
          <div class="lang">
            <div
              class="lang__current"
              @mousemove="iconArrow = iconArrowActive"
              @mouseleave="iconArrow = iconArrowNotActive"
            >
              <span>ENG</span>
              <img
                :src="iconArrow"
                class="q-ml-xs"
              >
            </div>
          </div>
          <div
            class="btn-nav"
            @click="$emit('open')"
          />
        </div>
      </div>
    </q-toolbar>
  </q-header>
</template>

<script>
import arrowActive from 'assets/arrow-down-heade-active.svg';
import arrowNotActive from 'assets/arrow-down-heade-not-active.svg';

export default {
  name: 'PageHeader',
  data: () => ({
    iconArrowActive: arrowActive,
    iconArrowNotActive: arrowNotActive,
    iconArrow: arrowNotActive,
  }),
  computed: {
    isScreenSizeSM() {
      return this.$q.screen.lt.sm;
    },
  },
};
</script>

<style lang="sass" scoped>
@import "src/css/app"
.lang__current
  cursor: pointer
.page-width
  width: 100% !important
.title-wrap
  white-space: nowrap

.lang-wrapper
  margin-left: 11px
  font-size: 10px
  line-height: 12px

.lh-15
  line-height: 15px

.link
  text-decoration: none
  padding: 0 16px
  &:hover
    color: $positive

.sign-in-btn
  font-weight: 600
  font-size: 10px
  line-height: 23px
  border: 1px solid #C9C9C9
  padding: 0 12px
  cursor: pointer
  margin-right: 16px
  height: 25px
  align-items: center
  display: inline-flex
  text-transform: uppercase
  text-decoration: none
  @media (max-width: $mobile)
    border: 0
    margin: 0 7px 0 0
    height: auto
    background: none !important
    padding: 0
    color: #ffffff !important
    line-height: 1
    border-bottom: 1px solid rgba(255,255,255,0.7)
.header-max-width
  width: 100% !important
  max-width: 100%
  @media (max-width: $mobile)
    border-bottom: 1px solid rgba(116, 116, 116, 0.5)
.container
  margin: 0
  padding: 0 20px
  @media (max-width: $mobile)
    padding: 0 15px
.group-rt
  padding: 18px 0
  @media (max-width: $mobile)
    padding: 11px 0
    flex-grow: 1
    display: flex
    justify-content: flex-end
  .q-ml-md
    margin-left: 25px
.lang
  margin-left: 21px
  @media (max-width: $mobile)
    margin-left: 9px
  &__current
    font-weight: 600
    font-size: 10px
    line-height: 12px
    display: flex
    align-items: center
.logo
  padding-right: 10px
  @media (max-width: $mobile)
    padding-right: 8px
  &__link
    display: block
    text-decoration: none
    @media (max-width: $mobile)
      &:before
        content: ''
        width: 54px
        height: 41px
        display: block
        background: url(~assets/logo-mobile.svg) no-repeat
        background-size: contain

  &__title
    display: flex
    align-items: center
    @media (max-width: $mobile)
      display: none
    img
      width: 35px
      height: 26px
    span
      font-style: normal
      font-weight: 600
      font-size: 18px
      line-height: 22px
      letter-spacing: 0.145em
      color: #FFFFFF
      margin-left: 4px
      padding-top: 1px
      @media (max-width: $mobile)
        display: none
  &__image
    display: flex
    img
      display: block
  &__desc
    display: flex
    font-style: italic
    font-weight: 500
    font-size: 8px
    line-height: 10px
    color: #FFFFFF
    @media (max-width: $mobile)
      display: none
.menu-btn
  display: none
  font-weight: 500
  font-size: 12px
  line-height: 15px
  align-items: center
  color: #999999
  img
    width: 12px
    height: 7px
    margin-left: 4px
  @media (max-width: $mobile)
    display: flex

.menu
  display: flex
  align-items: center
  @media (max-width: $mobile)
    display: none
  &__item
    font-weight: 500
    font-size: 12px
    line-height: 15px
    margin: 0 38px
    @media (max-width: $laptop)
      margin: 0 16px
    a
      color: #999999
      text-decoration: none
      transition: all 300ms ease
      border-bottom: 1px solid rgba(255,255,255,0)
      &:hover
        color: #ffffff
        border-bottom: 1px solid rgba(255,255,255,0.7)
.btn-nav
  width: 38px
  height: 38px
  border: 1px solid #FFFFFF
  border-radius: 50%
  display: flex
  align-items: center
  justify-content: center
  margin-left: 25px
  cursor: pointer
  @media (max-width: $laptop)
    margin-left: 20px
  @media (max-width: $mobile)
    margin-left: 16px
  &:before
    content: ''
    width: 6px
    height: 6px
    border-radius: 50%
    background: #FFFFFF
    transition: all 300ms ease
  &:hover
    &:before
      width: 14px
      height: 14px
.btn-lightTheme
  display: flex
  justify-content: flex-end
  width: 11px
  height: 11px
  position: relative
  &:before
    width: 11px
    height: 11px
    border-radius: 50%
    content: ''
    background: none
    border: 1px solid rgba(255,255,255,0)
    transition: all 300ms ease
    position: absolute
    left: -2px
    top: 0
  img
    width: 7px
    height: 11px
  &:hover
    &:before
      border: 1px solid rgba(255,255,255,1)

</style>
