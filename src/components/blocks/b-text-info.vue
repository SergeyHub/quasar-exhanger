<template>
  <div
    class="b-text-info font-size-12"
    :class="classCustom"
  >
    {{ textInfo }}
  </div>
</template>

<script>
export default {
  name: 'BTextInfo',
  props: {
    textInfo: {
      type: String,
      default: '',
    },
    classCustom: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="sass" scoped>
.b-text-info
  display: flex
  align-items: center
  &:before
    content: ''
    width: 45px
    height: 1.5px
    background: $white
    margin-right: 15px
</style>
