<template>
  <div class="links-wrapper">
    <a
      class="text-white"
      href="#"
    >AML-программа</a>
    <a
      class="text-white"
      href="#"
    >Соглашение</a>
    <a
      class="text-white"
      href="#"
    >Защита данных</a>
  </div>
</template>

<script>
export default {
  name: 'Agreements',
};
</script>

<style lang="sass" scoped>
@import "../../css/app"

.links-wrapper
  display: flex
  margin-right: 15px
  @media (max-width: $mobile)
    margin-right: 0
  a
    font-weight: 500
    font-size: 12px
    line-height: 15px
    margin: 0 10px
    @media (max-width: $mobile)
      margin: 0 6px
    &:hover
      text-decoration: none

@media (min-width: $layout-breakpoint-extra-small) and (max-width: $layout-breakpoint-small)
  .links-wrapper
    display: flex
    flex-direction: column
    a
      font-weight: 500
      font-size: 12px
      line-height: 15px
  .links-wrapper > *
    margin-left: 0
  .links-wrapper > *:not(:first-child)
    margin-top: 11.5px
</style>
