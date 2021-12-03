<template>
  <div class="share">
    <a
      href="#"
      class="share__item"
    >
      <img
        alt=""
        src="~assets/facebook.svg"
      >
    </a>
    <a
      href="#"
      class="share__item"
    >
      <img
        alt=""
        src="~assets/telegram.svg"
      >
    </a>
    <a
      href="#"
      class="share__item"
    >
      <img
        alt=""
        src="~assets/twiter.svg"
      >
    </a>
  </div>
</template>

<script>
export default {
  name: 'Share',
};
</script>

<style lang="sass" scoped>
.share
  display: flex
  &__item
    width: 38px
    height: 38px
    border: 1px solid $white
    border-radius: 50%
    display: flex
    align-items: center
    justify-content: center
    margin: 0 20px 20px 0
    transition: all 300ms ease
    opacity: 0.5
    &:hover
      opacity: 1
</style>
