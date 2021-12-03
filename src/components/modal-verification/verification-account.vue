<template>
  <div>
    <q-dialog
      v-model="isActiveModal"
      v-if="!isScreenSizeSM"
    >
      <q-card
        class="verification-account"
        :class="{'verification-account-upload-data-account': !isChoiceAccount}"
      >
        <choice-account
          @close="$emit('close')"
          @choiceAccount="choiceAccount"
          v-if="isChoiceAccount"
        />
        <step-upload-data-account
          @close="$emit('close')"
          v-else
        />
      </q-card>
    </q-dialog>
    <div
      class="verification-account-mob"
      v-if="isActiveModal && isScreenSizeSM"
    >
      <choice-account
        class="choice-account"
        @close="$emit('close')"
        @choiceAccount="choiceAccount"
        v-if="isChoiceAccount"
      />
      <step-upload-data-account v-else />
    </div>
  </div>
</template>

<script>
import ChoiceAccount from 'components/modal-verification/choice-account';
import StepUploadDataAccount from 'components/modal-verification/step-upload-data-account';

export default {
  name: 'VerificationAccount',
  components: {
    ChoiceAccount,
    StepUploadDataAccount,
  },
  props: {
    isActiveModal: {
      type: Boolean,
    },
  },
  data: () => ({
    isChoiceAccount: true,
    choiceAccountValue: '',
  }),
  methods: {
    choiceAccount(val) {
      this.choiceAccountValue = val;
      this.isChoiceAccount = false;
    },
  },
  computed: {
    isScreenSizeSM() {
      return this.$q.screen.lt.sm;
    },
  },
};
</script>

<style scoped lang="sass">
.choice-account
  padding: 0 20px
.verification-account-mob
  width: 100%
  //padding: 0 20px !important
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
.verification-account-upload-data-account
  max-width: 1200px !important
.verification-account
  width: 100%
  max-width: 680px
  background: #101010
  @media screen and (max-width: 479px)
    background: #000000
.verification-account-content
  padding: 18px 111px 70px 111px
  @media screen and (max-width: 479px)
    padding: 0 !important
</style>
