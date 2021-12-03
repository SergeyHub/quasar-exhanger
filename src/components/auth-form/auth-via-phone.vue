<template>
  <div class="auth-via-phone">
    <div
      class="flex row items-center"
    >
      <div
        v-if="!isAuthCode"
        class="chose-format-phone-number"
      >
        <div class="flex row items-center">
          <div class="font-weight-600 lang-wrapper">
            RUS
          </div>
          <img
            src="~assets/arrow-down-auth.svg"
            class="q-ml-xs"
          >
        </div>
        <div class="line-chose-format-phone-number" />
      </div>
      <div
        class="input-phone"
        :class="{'width-mobile-input-phone': isAuthCode}"
      >
        <the-mask
          class="input-phone-number"
          v-model="phoneNumber"
          :mask="'+7 (###) ### - ## - ##'"
        />
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
      @click="checkPhoneNumber(phoneNumber)"
      :class="{'disable-btn-border': !isValidCode}"
    >
      <p
        :class="{'disable-btn': !isValidCode}"
        class="next-btn-title"
      >
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
  name: 'AuthViaPhone',
  components: {
    InputAuthCode,
    HelpModal,
  },
  data: () => ({
    phoneNumber: '',
    isAuthCode: false,
    isValidCode: true,
    helpModal: false,
    isNotSendCode: false,
    placeholder: 'sms-код',
  }),
  methods: {
    checkPhoneNumber(phoneNumber) {
      if (phoneNumber.length === 10) {
        this.isAuthCode = true;
        this.isValidCode = false;
        this.$emit('hiddenButton');
      }
    },
    helpModalFunc() {
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
  .disable-btn
    color: #999999
  .disable-btn-border
    border: 2px solid #999999!important
  .width-mobile-input-phone
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
  .chose-format-phone-number
    margin-right: 26px
  .line-chose-format-phone-number
    margin-top: 21px
    height: 1px
    background: #FFFFFF
  .input-phone-number
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
      width: 207px
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
