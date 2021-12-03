<template>
  <div class="btn text-uppercase font-weight-600">
    {{ label }}
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
      required: true,
    },
    url: {
      type: String,
      default: '#',
    },
  },
  name: 'MobileButton',
};
</script>

<style lang="sass" scoped>
.btn
  line-height: 12px
  font-size: 10px
  text-decoration: underline
  cursor: pointer
  padding: 5px
  &:hover
    color: $positive
</style>
