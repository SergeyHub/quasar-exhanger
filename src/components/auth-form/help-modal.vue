<template>
  <div
    class="help-modal"
  >
    <div
      class="img-close"
      @click="$emit('close')"
    >
      <img
        class="img-close__img"
        src="~assets/exit-help-modal.svg"
        alt=""
      >
    </div>
    <p class="title">
      Возможные причины:
    </p>
    <p class="text">
      1. Номер телефона введён неверно
    </p>
    <p class="text">
      2. Вы не изменили в личном кабинете номер мобильного телефона на новый,
      и мы отправили код на старый. Обратитесь в службу поддержки через электронную
      почту support@extrafintech.com или позвоните по номеру +7 995 131 77 77
    </p>
    <p class="text">
      3. Проблемы могут быть со стороны вашего сотового оператора. Обратитесь в их службу поддержки
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelpModal',
};
</script>

<style lang="sass" scoped>
@import "src/css/app"
.img-close__img
  width: 20px
.img-close
  position: absolute
  right: 10px
  top: 5px
.help-modal
  position: relative
  width: 360px
  height: 300px
  z-index: 100
  bottom: 0
  left: 40%
  display: flex
  flex-wrap: wrap
  box-sizing: border-box
  padding: 27px 32px
  border: 0.5px #777777 solid
  background: #0B0B0B
  @media only screen and (max-width: $layout-breakpoint-extra-small)
    position: initial
    width: 360px
    height: 300px
.title
  font-family: Montserrat, sans-serif
  font-size: 14px
  font-style: normal
  font-weight: 600
  line-height: 18px
  letter-spacing: 0em
  text-align: left
.text
  font-family: Montserrat, sans-serif
  font-size: 10px
  font-style: normal
  font-weight: 600
  line-height: 18px
  letter-spacing: 0em
  text-align: left
</style>
