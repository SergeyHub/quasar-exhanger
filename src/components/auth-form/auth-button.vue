<template>
  <div class="auth-button">
    <p class="auth-button-title">
      Войти
    </p>
    <div v-if="isHiddenButton" class="flex row items-center">
      <div
        class="btn font-weight-600"
        :class="{ 'is-active' : isAuthMobile }"
        @click="$emit('authPhone')"
      >
        Телефон
      </div>
      <div
        class="btn font-weight-600"
        @click="$emit('authMail')"
        :class="{ 'is-active' : !isAuthMobile }"
      >
        Email
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthButton',
  props: {
    isAuthMobile: {
      type: Boolean,
    },
    isHiddenButton: {
      type: Boolean,
    },
  },
};
</script>

<style lang="sass" scoped>
  .auth-button
    margin: 0 0 52px 0
  .auth-button-title
    margin-bottom: 47px
    font-family: Montserrat, sans-serif
    font-size: 24px
    font-style: normal
    font-weight: 600
    line-height: 31px
    letter-spacing: 0em
    text-align: center
  .btn
    font-family: Montserrat, sans-serif
    font-size: 14px
    font-style: normal
    font-weight: 500
    line-height: 18px
    letter-spacing: 0em
    color: #999999
    margin-right: 17px
    text-align: center
    padding: 7px 14px 7px 14px
    border: 1px solid #999999
    border-radius: 50px
    cursor: pointer
  .btn:last-child
    margin-right: 0
  .is-active
    background: #D8004E
    border: 1px solid #D8004E
    color: #FFFFFF
    cursor: pointer
</style>
