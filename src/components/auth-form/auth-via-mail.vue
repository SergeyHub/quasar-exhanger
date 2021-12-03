<template>
  <div class="auth-via-email">
    <div>
      <div class="input-email">
        <input
          type="email"
          v-model="email"
          class="input-email"
        >
        <div class="line" />
      </div>
    </div>
    <div class="auth-code-absolut">
      <input-auth-code
        class="auth-code-absolut__width"
        :placeholder="placeholder"
        @validCode="isValidCode = true"
        @isNotSendCode="isNotSendCode=true"
        v-if="isAuthCode"
      />
    </div>
    <help-modal
      @close="helpModal = false"
      v-show="helpModal"
    />
    <div
      class="next-btn"
      @click="checkEmail(email)"
    >
      <p class="next-btn-title">
        Далее
      </p>
    </div>
    <p
      v-if="isNotSendCode"
      @click="helpModalFunc"
      class="open-help-model"
    >
      Не приходит код?
    </p>
  </div>
</template>

<script>
import InputAuthCode from 'components/auth-form/input-auth-code';
import HelpModal from 'components/auth-form/help-modal';

export default {
  name: 'AuthViaEmail',
  components: {
    InputAuthCode,
    HelpModal,
  },
  data: () => ({
    email: '',
    isAuthCode: false,
    isValidCode: true,
    helpModal: false,
    isNotSendCode: false,
    placeholder: 'Код с почты',
  }),
  methods: {
    checkEmail(email) {
      const re = /\S+@\S+\.\S+/;
      if (re.test(email)) {
        this.isAuthCode = true;
        this.isValidCode = false;
        this.$emit('hiddenButton');
      }
    },
    helpModalFunc() {
      console.log(this.isScreenSizeSM);
      if (this.isScreenSizeSM) {
        this.$emit('helpModelMob');
      } else {
        this.helpModal = true;
      }
    },
  },
  computed: {
    isScreenSizeSM() {
      return this.$q.screen.lt.sm;
    },
  },
};
</script>

<style lang="sass" scoped>
@import "src/css/app"
.auth-code-absolut
  position: absolute
.auth-code-absolut__width
  width: 257px
  @media only screen and (max-width: $layout-breakpoint-extra-small)
    width: 278px
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
  background: #FFFFFF
.chose-format-email
  margin-right: 26px
.line-chose-format-email
  margin-top: 21px
  height: 1px
  background: #FFFFFF
.input-email
  border: 0
  font-family: Montserrat, sans-serif
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
</style>
