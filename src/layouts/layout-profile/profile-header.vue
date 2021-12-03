<template>
  <q-header class="header-max-width">
    <q-toolbar class="test flex row justify-between q-pa-xs">
      <div class="flex column">
        <router-link
          style="text-decoration: none; color: #FFFFFF"
          to="/"
        >
          <div class="flex no-wrap row full-width items-center">
            <div class="flex no-wrap items-center">
              <img
                alt="Incompay logo"
                src="~assets/incompay-logo.svg"
              >
<!--              <div-->
<!--                v-if="isScreenSizeSM"-->
<!--                class="text-gray font-size-12 font-weight-500 lh-15 q-ml-sm"-->
<!--              >-->
<!--                Направления-->
<!--              </div>-->
<!--              <img-->
<!--                v-if="isScreenSizeSM"-->
<!--                alt="Incompay logo"-->
<!--                src="~assets/arrow-down.svg"-->
<!--                class="q-ml-xs"-->
<!--              >-->
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

      <div
        v-if="!isScreenSizeSM"
        class="row no-wrap"
      >
        <router-link
          to="/buy-and-sell"
          v-slot="{ href, isActive }"
          class="font-size-12 font-weight-500 lh-15 link"
        >
          <a
            :href="href"
            :class="{'active-link': isActive}"
          >
            <img
              class="img-button"
              src="~assets/buy-crypto.svg"
              alt=""
            >
            <p class="text-button">
              Купить/Продать
            </p>
          </a>
        </router-link>
        <router-link
          v-slot="{ href, isActive }"
          to="/t"
          class="font-size-12 font-weight-500 lh-15 link"
        >
          <a
            :href="href"
            :class="{'active-link': isActive}"
          >
            <img
              class="img-button"
              src="~assets/replenish.svg"
              alt=""
            >
            <p class="text-button">
              Пополнить
            </p>
          </a>
        </router-link>
        <router-link
          v-slot="{ href, isActive }"
          to="/wallets/transfer"
          class="font-size-12 font-weight-500 lh-15 link"
        >
          <a
            :href="href"
            :class="{'active-link': isActive}"
          >
            <img
              class="img-button"
              src="~assets/transfer.svg"
              alt=""
            >
            <p class="text-button">
              Перевести
            </p>
          </a>
        </router-link>
        <router-link
          to="/exchange"
          class="font-size-12 font-weight-500 lh-15 link"
          v-slot="{ href, isActive }"
        >
          <a
            :href="href"
            :class="{'active-link': isActive}"
          >
            <img
              class="img-button"
              src="~assets/exchange.svg"
              alt=""
            >
            <p class="text-button">
              Обменять
            </p>
          </a>
        </router-link>
      </div>

      <div>
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
          <div class="font-weight-600 lang-wrapper">
            ENG
          </div>
          <img
            src="~assets/arrow_drop_down.svg"
            class="q-ml-xs"
          >
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

export default {
  name: 'PageHeader',
  computed: {
    isScreenSizeSM() {
      return this.$q.screen.lt.md;
    },
  },
};
</script>

<style lang="sass" scoped>
@import "src/css/app"
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
    border: 0!important
    margin: 0 7px 0 0!important
    height: auto
    background: none !important
    padding: 0!important
    color: #ffffff !important
    line-height: 1
    border-bottom: 1px solid rgba(255,255,255,0.7) !important
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
.active-link
  background: #000000 !important
  border: #FFFFFF 0.5px solid
.text-button
  margin: auto
.header-max-width
  width: 100% !important
  max-width: 100%
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
  display: flex
  flex-direction: row
  margin-right: 10px
  border-radius: 15px
  box-sizing: border-box
  color: #FFFFFF
  font-family: Montserrat, sans-serif
  font-size: 12px
  font-style: normal
  font-weight: 500
  line-height: 18px
  letter-spacing: 0.03em
  text-align: left
  background: #101010
  padding: 5px 8px 5px 8px
  &:hover
    border: 0.5px #FFFFFF solid
  @media screen and (max-width: 880px)
    flex-direction: column
    align-items: center
.img-button
  margin-right: 11px
  width: 23px
  @media screen and (max-width: 880px)
    margin-right: 0
.sign-in-btn
  font-size: 10px
  line-height: 12px
  border: 1px solid #C9C9C9
  padding: 6px 13px
  cursor: pointer
  margin-right: 16px
</style>
