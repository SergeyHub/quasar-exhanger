<template>
  <div class="row no-wrap">
    <img
      class="img-phone"
      alt="pyramid"
      src="~assets/phone.svg"
    >
    <div class="number">
      <a href="tel:+79951317777">+7 995 131 77 77</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PhoneBlock',
};
</script>

<style scoped lang="sass">
@import "../../css/app"

.img-phone
  width: 32px !important
.number
  font-family: Montserrat, sans-serif
  font-weight: 500
  font-size: 28px
  line-height: 26px
  letter-spacing: 0
  text-align: left
  padding-left: 12px
  @media (max-width: $laptop)
    font-size: 32px
  @media (max-width: $mobile)
  a
    display: flex
    color: #ffffff
    text-decoration: none
    border-bottom: 1px solid rgba(255,255,255,0)
    transition: all 300ms ease
    &:hover
      border-bottom: 1px solid rgba(255,255,255,1)
</style>
