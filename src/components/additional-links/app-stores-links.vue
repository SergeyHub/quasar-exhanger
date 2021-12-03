<template>
  <div class="appStore">
    <a
      class="appStore__link"
      href="#"
    >
      <img
        alt="pyramid"
        :src="iconGoogle"
        @mouseover="iconGoogle = iconGoogleHover"
        @mouseleave="iconGoogle = iconGoogleNotHover"
      >
    </a>
    <a
      class="appStore__link"
      href="#"
    >
      <img
        alt="pyramid"
        :src="iconApple"
        @mouseover="iconApple = iconAppleHover"
        @mouseleave="iconApple = iconAppleNotHover"
      >
    </a>
  </div>
</template>

<script>
import googleHover from 'assets/Google-Play-hover.svg';
import googleNotHover from 'assets/app-google.svg';
import appleHover from 'assets/App-Store-hover.svg';
import appleNotHover from 'assets/app-store.svg';

export default {
  name: 'AppStoresLinks',
  data: () => ({
    iconGoogle: googleNotHover,
    iconGoogleHover: googleHover,
    iconGoogleNotHover: googleNotHover,
    iconApple: appleNotHover,
    iconAppleHover: appleHover,
    iconAppleNotHover: appleNotHover,
  }),
};
</script>

<style lang="sass" scoped>
@import "../../css/app"

.appStore
  display: flex
  &__link
    margin-right: 17px
    width: 113px
    height: 33px
    display: flex
    align-items: center
    justify-content: center
    border: 1px solid #A6A6A6
    border-radius: 5px
    @media (max-width: $mobile)
      margin: 0 6px
    svg
      fill: #ffffff
</style>
