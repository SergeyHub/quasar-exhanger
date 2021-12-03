<template>
  <div class="text-gray font-size-12 text">
    © 2021 Extra
  </div>
</template>

<script>
export default {
  name: 'ExtraLogo',
};
</script>

<style lang="sass" scoped>
@import "../../css/app"

.text
  line-height: 113.84%
  font-weight: 500
  font-size: 14px
  color: #999999
  padding-right: 6px
  letter-spacing: 0.8px
  @media (max-width: $laptop)
    padding-right: 0
    letter-spacing: 0
</style>
