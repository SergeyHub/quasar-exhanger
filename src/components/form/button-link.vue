<template>
  <p
    class="btn"
    :class="customClass"
  >{{ value }}
    <img
      v-if="icon === 'more'"
      class="icon-more"
      alt=""
      src="~assets/arw-right.svg"
    >
    <img
      v-else-if="icon === 'up-arrow'"
      class="icon-more"
      alt=""
      src="~assets/link_up_arrow.svg"
    >
  </p>
</template>

<script>
export default {
  name: 'ButtonLink',
  props: {
    value: {
      type: String,
      default: '',
    },
    customClass: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="sass" scoped>
.btn
  cursor: pointer
  display: inline-flex
  align-items: center
  height: 33px
  padding: 0 37px
  color: $white
  text-decoration: none
  font-weight: 500
  font-size: 14px
  &-red
    background: #D8014E
  &-border
    background: none
    border: 1px solid #FFFFFF
  .icon
    &-more
      margin-left: 8px
</style>
