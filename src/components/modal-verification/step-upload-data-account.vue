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
    <div class="step-account">
      <div class="step-account-indication flex row justify-center">
        <div class="step-account-indication__step flex row">
          <div
            class="step-account-indication__step-number flex justify-center items-center"
            :class="{
              'step-account-indication__step-number-activate': isFirstStep,
              'step-account-indication__step-number-validate': isValidateFirstStep,
            }"
          >
            Шаг 1
          </div>
          <div
            class="step-account-indication__step-title"
            :class="{
              'step-account-indication__step-title-activate': isFirstStep,
              'step-account-indication__step-title-validate': isValidateFirstStep,
            }"
          >
            Личные данные
          </div>
        </div>
        <div class="step-account-indication__step flex row">
          <div
            class="step-account-indication__step-number flex justify-center items-center"
            :class="{
              'step-account-indication__step-number-activate': isSecondStep,
              'step-account-indication__step-number-validate': isValidateSecondStep,
            }"
          >
            Шаг 2
          </div>
          <div
            class="step-account-indication__step-title"
            :class="{
              'step-account-indication__step-title-activate': isSecondStep,
              'step-account-indication__step-title-validate': isValidateSecondStep,
            }"
          >
            Фото документа
          </div>
        </div>
        <div class="step-account-indication__step flex row">
          <div
            class="step-account-indication__step-number flex justify-center items-center"
            :class="{
              'step-account-indication__step-number-activate': isThirdStep,
              'step-account-indication__step-number-validate': isValidateThirdStep,
            }"
          >
            Шаг 3
          </div>
          <div
            class="step-account-indication__step-title"
            :class="{
              'step-account-indication__step-title-activate': isThirdStep,
              'step-account-indication__step-title-validate': isValidateThirdStep,
            }"
          >
            Фото лица
          </div>
        </div>
      </div>
      <personal-data-account v-if="isFirstStep" />
      <upload-photo-document v-else-if="isSecondStep" />
      <upload-photo-face v-else-if="isThirdStep" />
      <upload-data-in-server v-else />
      <div
        @click="nextStep"
        class="step-account-btn flex justify-center items-center"
      >
        <div
          class="step-account-btn__btn justify-center items-center flex"
          v-if="isActiveBtnNext"
        >
          Далее
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PersonalDataAccount from 'components/modal-verification/personal-data-account';
import UploadPhotoDocument from 'components/modal-verification/upload-photo-document';
import UploadPhotoFace from 'components/modal-verification/upload-photo-face';
import UploadDataInServer from 'components/modal-verification/upload-data-in-server';

export default {
  name: 'StepUploadDataAccount',
  components: {
    PersonalDataAccount,
    UploadPhotoDocument,
    UploadPhotoFace,
    UploadDataInServer,
  },
  data: () => ({
    isFirstStep: true,
    isValidateFirstStep: false,
    isSecondStep: false,
    isValidateSecondStep: false,
    isThirdStep: false,
    isValidateThirdStep: false,
    isActiveBtnNext: true,
  }),
  methods: {
    nextStep() {
      if (this.isFirstStep) {
        this.isValidateFirstStep = true;
        this.isFirstStep = false;
        this.isSecondStep = true;
      } else if (this.isSecondStep) {
        this.isValidateSecondStep = true;
        this.isSecondStep = false;
        this.isThirdStep = true;
      } else {
        this.isValidateThirdStep = true;
        this.isThirdStep = false;
        this.isActiveBtnNext = false;
      }
    },
  },
};
</script>

<style scoped lang="sass">
.verification-account__close-btn
  margin: 18px 18px 0 0
.step-account-indication__step-title-validate
  color: #FFFFFF !important
.step-account-indication__step-number-validate
  background: #27AE60 !important
  color: #FFFFFF !important
.step-account-indication
  margin-bottom: 50px
  @media screen and (max-width: 479px)
    display: flex
    flex-direction: column
    justify-content: right
.step-account-btn
  margin-top: 50px
.step-account-indication__step
  margin-right: 15%
  &:last-child
    margin-right: 0
  @media screen and (max-width: 879px)
    margin-right: 5%
    @media screen and (max-width: 479px)
      margin-bottom: 16px
.step-account-indication__step-title-activate
  color: #FFFFFF !important
.step-account-indication__step-title
  font-family: Montserrat, sans-serif
  font-size: 16px
  font-style: normal
  font-weight: 600
  line-height: 21px
  letter-spacing: 0.03em
  text-align: left
  color: #999999
.step-account-indication__step-number-activate
  background: #FFFFFF !important
  color: #5AC06A !important
.step-account-indication__step-number
  margin-right: 12px
  width: 50px
  height: 24px
  background: #555555
  color: #999999
  font-family: Montserrat, sans-serif
  font-size: 12px
  font-style: normal
  font-weight: 600
  line-height: 16px
  letter-spacing: 0.03em
  text-align: center
  border-radius: 20px
.step-account-btn__btn
  cursor: pointer
  width: 364px
  height: 42px
  background: #5AC06A
  border-radius: 10px
  font-family: Montserrat, sans-serif
  font-size: 16px
  font-style: normal
  font-weight: 600
  line-height: 21px
  letter-spacing: 0.03em
  text-align: left
  @media screen and (max-width: 479px)
    width: 178px
.step-account
  padding: 70px 89px 55px 89px
  @media screen and (max-width: 879px)
    padding: 20px
    @media screen and (max-width: 479px)
      padding: 30px
</style>
