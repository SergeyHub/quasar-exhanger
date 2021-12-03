<template>
  <div>
    <div
      class="verification-account__close-btn flex justify-end"
    >
      <img
        @click="$emit('close')"
        src="~assets/close-modal-activate-account.svg"
        alt=""
      >
    </div>
    <div class="verification-account-content flex items-center justify-center">
      <div class="verification-account__title">
        Верификация аккаунта
      </div>
      <div class="verification-account__text">
        <span class="verification-account__text-bold">Личный</span>
        - это верификация физического лица.
      </div>
      <div class="verification-account__text">
        <span class="verification-account__text-bold">Бизнес</span>
        - это верификация юридического лица.
      </div>
      <div class="verification-account-button flex justify-center">
        <div
          class="verification-account-button__btn flex column justify-between items-center"
          @click="choiceAccount(0)"
        >
          <img
            src="~assets/activate-account-personal.svg"
            alt=""
          >
          <div class="verification-account-button__title">
            Личный
          </div>
        </div>
        <div
          class="verification-account-button__btn flex column justify-between items-center"
          @click="choiceAccount(1)"
        >
          <img
            src="~assets/activate-account-business.svg"
            alt=""
          >
          <div class="verification-account-button__title">
            Бизнес
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChoiceAccount',
  methods: {
    choiceAccount(val) {
      this.$emit('choiceAccount', val);
    },
  },
};
</script>

<style scoped lang="sass">
.verification-account-mob
  width: 100%
  padding: 0 20px !important
.verification-account-button__title
  font-family: Montserrat, sans-serif
  font-size: 16px
  font-style: normal
  font-weight: 600
  line-height: 21px
  letter-spacing: 0.03em
  text-align: center
.verification-account__close-btn
  margin: 18px 24px 0 0
  @media screen and (max-width: 479px)
    position: absolute
    top: 0
    right: 0
.verification-account__text-bold
  font-family: Montserrat, sans-serif
  font-size: 16px
  font-style: normal
  font-weight: 600
  line-height: 21px
  letter-spacing: 0.03em
  text-align: center
.verification-account__text
  font-family: Montserrat, sans-serif
  font-size: 16px
  font-style: normal
  font-weight: 400
  line-height: 21px
  letter-spacing: 0.03em
  text-align: center

.verification-account__title
  font-family: Montserrat, sans-serif
  font-size: 24px
  font-style: normal
  font-weight: 600
  line-height: 31px
  letter-spacing: 0.03em
  text-align: center
  @media screen and (max-width: 479px)
    width: 242px

.verification-account-button__btn
  margin-top: 61px
  padding: 35px 69px
  background: #292929
  border-radius: 12px
  box-sizing: border-box
  border: 0.5px solid #292929
  margin-right: 35px
  color: #999999
  &:last-child
    margin-right: 0
  &:hover
    background: #393939
    border: 0.5px solid #FFFFFF
    color: #FFFFFF
  @media screen and (max-width: 719px)
    margin-right: 0
    padding: 21px 42px
    @media screen and (max-width: 479px)
      margin-right: 20px
.verification-account
  width: 680px
  height: 450px
  max-width: 680px !important
  background: #101010
  @media screen and (max-width: 479px)
    background: #000000
.verification-account-content
  padding: 18px 111px 70px 111px
  @media screen and (max-width: 479px)
    padding: 0 !important
</style>
