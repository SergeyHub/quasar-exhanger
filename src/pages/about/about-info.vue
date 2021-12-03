<template>
  <div class="about-info">
    <p>
      Мы создали инструмент для работы с финансами,
      который даёт людям возможность обмениваться
      ценностями так же легко, как это можно делать
      сегодня с информацией.
    </p>
  </div>
</template>

<script>

export default {
  name: 'AboutInfo',
  components: {

  },
};
</script>

<style lang="sass" scoped>
@import "src/css/app"
.about-info
  max-width: 472px
  margin: 0 auto
  margin-top: 16px
  text-align: center
  font-weight: normal
  font-size: 16px
  line-height: 135%
  @media only screen and (max-width: $layout-breakpoint-extra-small)
    max-width: 260px
    font-size: 14px
  p
    margin-bottom: 20px
    &:last-child
      margin-bottom: 0
</style>
