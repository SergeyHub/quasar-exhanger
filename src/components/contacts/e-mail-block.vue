<template>
  <div class="row no-wrap">
    <img
      alt="pyramid"
      src="~assets/pencil2.svg"
    >
    <div class="text">
      <a href="mailto:support@extrafintech.com">support@extrafintech.com</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EMailBlock',
};
</script>

<style lang="sass" scoped>
@import "../../css/app"

.text
  font-weight: 600
  font-size: 20px
  line-height: 26px
  padding-left: 12px
  @media (max-width: $laptop)
    font-size: 17px
    line-height: 20px
    padding-left: 26px

  a
    display: flex
    color: #ffffff
    text-decoration: none
    border-bottom: 1px solid rgba(255,255,255,0)
    transition: all 300ms ease
    &:hover
      border-bottom: 1px solid rgba(255,255,255,1)
</style>
