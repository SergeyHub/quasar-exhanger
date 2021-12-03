<template>
  <div class="tech-support-wrapper">
    <div class="font-weight-500 font-size-12">
      Служба поддержки
    </div>
    <div class="font-size-12 text-gray schedule">
      пн-пт 09:00-18:00 мск
    </div>
  </div>
</template>

<script>
export default {
  name: 'TechSupport',
};
</script>

<style lang="sass" scoped>
@import "../../css/app"
.tech-support-wrapper
  display: flex
  flex-direction: column

@media (max-width: $laptop)
  .tech-support-wrapper
    flex-direction: row

  .schedule
    padding-left: 14px
</style>
