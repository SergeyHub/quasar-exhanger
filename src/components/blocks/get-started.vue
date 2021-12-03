<template>
  <div class="getStarted">
    <a
      href="#"
      class="btn btn-red"
    >Начать работу</a>
  </div>
</template>

<script>
export default {
  name: 'GetStarted',
};
</script>

<style lang="sass" scoped>
@import "src/css/app"
.getStarted
  text-align: center
  padding: 95px 0
  @media only screen and (max-width: $mobile)
    padding: 70px 0
</style>
