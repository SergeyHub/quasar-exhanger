<template>
  <div class="b-map">
    <span style="background-image: url(/img/map.svg)"></span>
  </div>
</template>

<script>
export default {
  name: 'MapContact',
};
</script>

<style lang="sass" scoped>
@import "src/css/app"
.b-map
  height: 450px
  position: relative
  @media (max-width: $laptop)
    height: 401px
  @media (max-width: $mobile)
    height: 239px
  span
    position: absolute
    left: 0
    right: 0
    top: 0
    bottom: 0
    background-repeat: no-repeat
    background-size: cover
    background-position: center
</style>
