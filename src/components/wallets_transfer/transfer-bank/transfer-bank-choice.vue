<template>
  <div class="">
    <div
      v-if="!isBank"
      class=""
    >
      <div
        class="transfer-bank-container"
        @click="isChoiceBank"
      >
        <div class="transfer-bank__title-and-line row items-center no-wrap">
          <div class="transfer-bank__title">
            Локальные
          </div>
          <div class="transfer-bank__line" />
        </div>
        <div class="transfer-bank-content row flex no-wrap">
          <img
            src="~assets/personal-transfer.svg"
            alt=""
          >
          <div class="transfer-bank-content__title-and-text">
            <div class="transfer-bank-content__title">
              Локальный перевод
            </div>
            <div class="transfer-bank-content__text">
              Локальный перевод — перевод между банками вашей страны.
            </div>
            <div class="transfer-bank-content__text">
              Срок испольнения: 1-3 рабочих дня.
            </div>
            <div class="transfer-bank-content__text">
              Комиссия: <span class="green">от 0.5% (зависит от суммы отправления)</span>
            </div>
          </div>
        </div>
      </div>
      <div
        class="transfer-bank-container"
        @click="isChoiceBank"
      >
        <div class="transfer-bank__title-and-line row items-center no-wrap">
          <div class="transfer-bank__title">
            Международные
          </div>
          <div class="transfer-bank__line" />
        </div>
        <div class="transfer-bank-content row flex no-wrap">
          <img
            alt=""
            src="~assets/sepa-bank.svg"
          >
          <div class="transfer-bank-content__title-and-text">
            <div class="transfer-bank-content__title">
              SEPA
            </div>
            <div class="transfer-bank-content__text">
              SEPA — перевод на ваш банковский счет в Европе.
            </div>
            <div class="transfer-bank-content__text">
              Срок исполнения: <span class="green">0-3 рабочих дня.</span>
            </div>
            <div class="transfer-bank-content__text">
              <span class="green">Комиссия: 5.00 € + 0.50%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <transfer-bank @isSendReceipt="$emit('isSendReceipt')" v-else/>
  </div>
</template>

<script>
import TransferBank from 'components/wallets_transfer/transfer-bank/transfer-bank';

export default {
  name: 'TransferBankChoice',
  data: () => ({
    isBank: false,
  }),
  methods: {
    isChoiceBank() {
      this.isBank = true;
      this.$emit('isChoiceBank');
    },
  },
  components: {
    TransferBank,
  },
};
</script>

<style scoped lang="sass">
.transfer-bank-content__title-and-text
  margin-left: 24px
.transfer-bank-content__text
  margin-bottom: 2px
  font-family: Montserrat, sans-serif
  font-size: 16px
  font-style: normal
  font-weight: 400
  line-height: 21px
  letter-spacing: 0.03em
  text-align: left
  &:last-child
    margin-bottom: 0
.transfer-bank-content__title
  font-family: Montserrat, sans-serif
  font-size: 20px
  font-style: normal
  font-weight: 500
  line-height: 26px
  letter-spacing: 0.03em
  text-align: left
  color: #27AE60
  margin-bottom: 15px
.green
  color: #27AE60
.transfer-bank__title-and-line
  margin-bottom: 45px
.transfer-bank__title
  font-family: Montserrat, sans-serif
  font-size: 24px
  font-style: normal
  font-weight: 600
  line-height: 31px
  letter-spacing: 0.03em
  text-align: left
  margin-right: 15px
.transfer-bank__line
  width: 100%
  background: #27AE60
  height: 0.5px
.transfer-bank-content__title-and-text
  width: 327px
.transfer-bank-container
  width: 100%
  padding: 50px
  background: #101010
  margin-bottom: 47px
  border-radius: 10px
  &:last-child
    margin-bottom: 0
  @media screen and (max-width: 480px)
    background: #000000
    width: 370px
    padding: 10px
</style>
