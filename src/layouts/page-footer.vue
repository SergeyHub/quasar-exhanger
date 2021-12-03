<template>
  <q-footer class="text-white footer q-pa-md">
    <div class="flex row justify-center items-center fit text-gray q-gutter-md">
      <div>
        We use cookies to collect analytics about interactions
        with our website to improve the user experience.
        Learn more about how we use cookies
      </div>

      <button
        class="cookies-buttons agree-cookies"
      >
        Got it
      </button>

      <button
        class="cookies-buttons decline-cookies text-gray"
      >
        No, thanks
      </button>
    </div>
  </q-footer>
</template>

<script>
export default {
  name: 'PageFooter',
};
</script>

<style lang="sass" scoped>
.footer
  border-top: 0.5px solid #5A5A5A

.cookies-buttons
  width: 75px
  height: 25px
  background-color: black
  font-size: 10px

.agree-cookies
  border: 1px solid #FFFFFF
  margin-left: 40px
  color: white

.decline-cookies
  border: 1px solid #666666
  margin-left: 16px
</style>
