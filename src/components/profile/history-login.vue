<template>
  <div class="history-login flex justify-between">
    <div class="">
    <div class="history-login-title">
      История входов и устройств
    </div>
    <div class="device-login flex row items-center">
      <div class="img-device flex items-center justify-center">
        <img
          class="img-device_img"
          src="~assets/computer.svg"
          alt=""
        >
      </div>
      <div class="info-login">
        <div class="device-and-country flex row">
          <div class="device-item">
            Mac OS
          </div>
          <div class="dot-white" />
          <div class="country">
            Калининград, Россия
          </div>
        </div>
        <div class="time-and-browser flex row">
          <div class="time">
            сегодня в 11:27
          </div>
          <div class="dot-grey" />
          <div class="browser">
            Браузер Safari
          </div>
        </div>
      </div>
    </div>
    <div class="device-login flex row items-center">
      <div class="img-device flex items-center justify-center">
        <img
          class="img-device_img"
          src="~assets/phone-login.svg"
          alt=""
        >
      </div>
      <div class="info-login">
        <div class="device-and-country flex row">
          <div class="device-item">
            iPhone
          </div>
          <div class="dot-white" />
          <div class="country">
            Калининград, Россия
          </div>
        </div>
        <div class="time-and-browser flex row">
          <div class="time">
            26 сентября в 11:27
          </div>
          <div class="dot-grey" />
          <div class="browser">
            Приложение Incompay
          </div>
        </div>
      </div>
    </div>
    </div>
    <div
      v-if="!isScreenSizeSM"
      class="stop-session"
    >
      Завершить все сеансы
    </div>
  </div>
</template>

<script>
export default {
  name: 'HistoryLogin',
  computed: {
    isScreenSizeSM() {
      return this.$q.screen.lt.sm;
    },
  },
};
</script>

<style scoped lang="sass">
.history-login
  height: 100%
.stop-session
  margin-top: auto
  font-family: Inter, sans-serif
  text-decoration: underline
  font-size: 14px
  font-style: normal
  font-weight: 600
  line-height: 18px
  letter-spacing: 0.03em
  text-align: left
  color: #4F4F4F
.history-login-title
  font-family: Montserrat, sans-serif
  font-size: 18px
  font-style: normal
  font-weight: 500
  line-height: 23px
  letter-spacing: 0.03em
  text-align: left
  margin-bottom: 37px
.img-device
  width: 44px
  height: 44px
  background: #292929
  border-radius: 90px
  margin-right: 14px
  margin-bottom: 26px
  &:last-child
    margin-bottom: 0
.dot-white
  background: #FFFFFF
  width: 2px
  height: 2px
  border-radius: 90px
  margin: auto 9px auto 9px
.dot-grey
  background: #999999
  width: 2px
  height: 2px
  border-radius: 90px
  margin: auto 9px auto 9px
.device-and-country
  margin-bottom: 1px
  font-family: Inter, sans-serif
  font-size: 16px
  font-style: normal
  font-weight: 500
  line-height: 21px
  letter-spacing: 0.03em
  text-align: left
.time-and-browser
  font-family: Inter, sans-serif
  font-size: 12px
  font-style: normal
  font-weight: 400
  line-height: 16px
  letter-spacing: 0.03em
  text-align: left
  color: #999999
</style>
