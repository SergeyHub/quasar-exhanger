<template>
  <div class="auth-via-reset">
    <div class="title-reset">
      Восстановить пароль
    </div>
    <div v-if="!isEmail">
      <div class="reset-text">
        Для восстановления пароля
        введите адрес электронной почты,
        который вы указали при регистрации.
      </div>
      <div>
        <div class="input-reset">
          <input
            type="email"
            v-model="email"
            class="input-reset"
          >
          <div class="line" />
        </div>
      </div>
      <div
        class="next-btn"
        @click="checkEmail(email)"
      >
        <p class="next-btn-title">
          Далее
        </p>
      </div>
    </div>
    <div v-else>
      <div class="text-next-step">
        Чтобы сбросить пароль, перейдите по ссылке, которая придёт на Вашу электронную почту:
      </div>
      <div class="email-user-reset">
        {{ email }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthResetPassword',
  data: () => ({
    email: '',
    isEmail: false,
  }),
  methods: {
    checkEmail(email) {
      const re = /\S+@\S+\.\S+/;
      if (re.test(email)) {
        this.isEmail = true;
      }
    },
  },
};
</script>

<style lang="sass" scoped>
@import "src/css/app"
.email-user-reset
  margin: 35px auto 0 auto
  font-family: Montserrat
  font-size: 18px
  font-style: normal
  font-weight: 600
  line-height: 22px
  letter-spacing: 0em
  text-align: left
  text-align: center
.reset-text
  font-family: Montserrat, sans-serif
  margin-bottom: 52px
  width: 283px
  max-width: 283px
  font-size: 14px
  font-style: normal
  font-weight: 400
  line-height: 18px
  letter-spacing: 0em
  text-align: center
  color: #999999
.list_link
  margin: 0 auto 0 auto
.double_auth
  font-family: Montserrat, sans-serif
  font-size: 18px
  font-style: normal
  font-weight: 500
  line-height: 23px
  letter-spacing: 0em
  text-align: center
  margin-top: 27px
.text_double_auth
  text-align: center
  font-family: Montserrat, sans-serif
  color: #999999
  width: 431px
  max-width: 431px
  margin-top: 15px
  margin-bottom: 25px
  font-size: 14px
  font-style: normal
  font-weight: 400
  line-height: 18px
  letter-spacing: 0em
  text-align: center
.text-next-step
  font-family: Montserrat, sans-serif
  width: 310px
  max-width: 310px
  text-align: center
  margin: 0 auto 0 auto
  font-size: 16px
  font-style: normal
  font-weight: 400
  line-height: 21px
  letter-spacing: 0em
  text-align: center
.lock_img
  display: flex
  margin: 30px auto 30px auto
.title-reset
  font-family: Montserrat, sans-serif
  font-size: 24px
  font-style: normal
  font-weight: 600
  line-height: 31px
  letter-spacing: 0em
  text-align: center
  margin-bottom: 27px
.circle
  width: 6px
  height: 6px
  background: #999999
  border-radius: 90px
  margin-right: 9px
  &:last-child
    margin-right: 0
.step-reset
  margin-top: 30px
.is-active
  background: #FFFFFF
.open-help-model
  font-family: Montserrat, sans-serif
  font-size: 12px
  font-style: normal
  font-weight: 400
  line-height: 16px
  letter-spacing: 0em
  text-align: center
  color: #999999
  text-decoration: underline
  cursor: pointer
.next-btn-title
  margin: auto
.line
  margin-top: 15px
  height: 1px
  background: #5E5E5E
.chose-format-reset
  margin-right: 26px
.line-chose-format-reset
  margin-top: 21px
  height: 1px
  background: #FFFFFF
.input-reset
  font-family: Montserrat
  caret-color: #D8004E
  font-size: 18px
  font-style: normal
  font-weight: 400
  line-height: 23px
  letter-spacing: 0em
  text-align: left
  background: #000000
  color: #FFFFFF
  outline: none
  @media only screen and (max-width: $layout-breakpoint-extra-small)
    width: 278px
.next-btn
  width: 100px
  height: 33px
  display: flex
  margin: 74px auto 0 auto
  border: 2px solid #FFFFFF
  text-align: center
  cursor: pointer
  margin-bottom: 56px
.input-reset
  margin: 0 auto 0 auto
  border: 0
.link_help
  color: #999999
.list_link
  text-align: center
  text-decoration: underline
</style>
