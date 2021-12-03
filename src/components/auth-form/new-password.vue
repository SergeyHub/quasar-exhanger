<template>
  <div class="auth-via-login items-center">
    <div class="title-login">
      Сброс пароля
    </div>
    <div class="text_double_auth">
      Введите одноразовый код из приложения аутинтификатора для входа в Extra
    </div>
    <div>
      <div>
        <div class="input-login">
          <input
            type="password"
            v-model="password"
            class="input-login"
            placeholder="Придумайте пароль"
          >
          <div class="line" />
        </div>
      </div>
      <div>
        <div class="input-login">
          <input
            type="password"
            v-model="passwordToo"
            placeholder="Повторите пароль"
            class="input-login"
          >
          <div class="line" />
        </div>
      </div>
      <div
        class="next-btn"
        @click="checkPassword"
      >
        <p class="next-btn-title">
          Далее
        </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SetNewPassword',
  data: () => ({
    password: '',
    passwordToo: '',
  }),
  methods: {
    checkPassword() {
      if (this.password === this.passwordToo) {
        console.log('nice');
      }
    },
  },
};
</script>

<style lang="sass" scoped>
@import "src/css/app"
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
  margin: 15px auto 25px auto
  font-family: Montserrat, sans-serif
  color: #999999
  width: 200px
  font-size: 14px
  font-style: normal
  font-weight: 400
  line-height: 18px
  letter-spacing: 0em
  text-align: center

.lock_img
  display: flex
  margin: 30px auto 30px auto
.title-login
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
.step-login
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
.chose-format-login
  margin-right: 26px
.line-chose-format-login
  margin-top: 21px
  height: 1px
  background: #FFFFFF
.input-login
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
.input-login
  margin: 0 auto 0 auto
  border: 0
.link_help
  color: #999999
.list_link
  text-align: center
  text-decoration: underline
</style>
