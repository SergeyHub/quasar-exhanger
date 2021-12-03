<template>
  <div class="start-screen-btn row items-center justify-center">
    <div
      class="start-screen-btn__content row items-center justify-center"
      :class="{'start-screen-btn__content-activate': isActivateEasy}"
    >
      <img
        :src="iconBtnEasy"
        class="start-screen-btn__img"
        alt=""
      >
      <div
        class="start-screen-btn__title"
        :class="{'start-screen-logo__title-active': isActivateEasy}"
      >
        Простая
        версия биржи
      </div>
    </div>
    <div class="start-screen-btn__content row items-center justify-center">
      <img
        :src="iconBtnPro"
        alt=""
        class="start-screen-btn__img"
      >
      <div class="start-screen-btn__title">
        Продвинутая
        версия биржи
      </div>
    </div>
  </div>
</template>

<script>
import imgBtnProNotActive from 'assets/start-screen-btn-exchange-pro.svg';
import imgBtnEasyNotActive from 'assets/start-screen-btn-exchange-easy.svg';
import imgBtnEasyActive from 'assets/start-screen-btn-exchange-easy-activate.svg';

export default {
  name: 'BtnProAndEasyExchange',
  data: () => ({
    iconBtnPro: imgBtnProNotActive,
  }),
  props: {
    isActivateEasy: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    iconBtnEasy() {
      if (this.isActivateEasy === true) {
        return imgBtnEasyActive;
      }
      return imgBtnEasyNotActive;
    },
  },
};
</script>

<style scoped lang="sass">
.start-screen-btn__img
  @media screen and (max-width: 480px)
    width: 28px
.start-screen-logo__title-active
  color: #FFFFFF !important
.start-screen-btn__content-activate
  background: #000000!important
  border: 0.5px solid #FFFFFF !important
.start-screen-btn__title
  width: 120px
  color: #777777
  margin-left: 10px
  @media screen and (max-width: 480px)
    width: 100px
.start-screen-btn__content
  width: 232px
  background: #202020
  border-radius: 20px
  padding: 19px 30px
  margin-right: 31px
  &:last-child
    margin-right: 0
  @media screen and (max-width: 480px)
    margin-right: 0
    width: 150px
    padding: 13px 3px 13px 8px
    border-radius: 20px 0px 0px 20px
    border-right: 0.5px solid #777777
    &:last-child
      padding: 13px 8px 13px 3px
      border-radius: 0px 20px 20px 0px
      border-left: 0.5px solid #777777
</style>
