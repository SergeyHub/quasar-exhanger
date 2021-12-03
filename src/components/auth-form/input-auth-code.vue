<template>
  <div class="auth-code">
    <div class="input-code">
      <input
        class="input-auth-code"
        type="text"
        :placeholder="placeholder"
      >
    </div>
    <div>
      <p
        v-if="isResend"
        class="resend"
        @click="startTimer"
      >
        Отпрвить снова
      </p>
      <p
        v-else
        class="timer"
      >
        {{ time }}
      </p>
    </div>
    <div class="line" />
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'InputAuthCode',
  props: {
    placeholder: {
      type: String,
    },
  },
  data: () => ({
    timer: null,
    time: null,
    currentTimer: null,
    isResend: false,
    helpModal: false,
    validateCode: false,
  }),
  methods: {
    stopTimer() {
      this.isResend = true;
      this.$emit('isNotSendCode');
      clearTimeout(this.timer);
      this.helpModal = true;
    },
    startTimer() {
      this.currentTimer = 12;
      this.timer = setInterval(() => {
        this.currentTimer -= 1;
        this.time = moment(this.currentTimer * 1000).format('mm:ss');
      }, 1000);
      this.isResend = false;
    },
  },
  watch: {
    currentTimer(time) {
      if (time === 0) {
        this.stopTimer();
      }
    },
  },
  mounted() {
    this.startTimer();
  },
};
</script>

<style lang="sass" scoped>
.resend
  color: #FFFFFF
  width: 110px
  margin-left: auto
  position: relative
  padding: 8px 0 0 0
  font-family: Montserrat
  font-size: 12px
  font-style: normal
  font-weight: 600
  line-height: 16px
  letter-spacing: 0em
  cursor: pointer
  text-align: right
.input-code
  position: absolute
.auth-code
  margin-top: 22px
.line
  margin-top: 15px
  height: 1px
  background: #999999
.timer
  font-family: Montserrat
  z-index: 99999
  font-size: 18px
  font-style: normal
  font-weight: 400
  line-height: 23px
  letter-spacing: 0em
  text-align: right
  color: #999999
  padding: 4px 0 0 0
.input-auth-code
  border: 0
  font-family: Montserrat
  caret-color: #D8004E
  font-size: 18px
  font-style: normal
  font-weight: 400
  line-height: 23px
  letter-spacing: 0em
  width: 178px
  text-align: left
  background: #000000
  color: #FFFFFF
  outline: none
</style>
