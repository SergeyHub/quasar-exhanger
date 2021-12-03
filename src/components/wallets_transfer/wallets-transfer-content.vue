<template>
  <div class="wallets-transfer-content__padding">
    <div
      class="wallets-transfer-content flex items-center justify-center"
      :class="{'wallets-transfer-content__cash': checkIsCash,
               'wallets-transfer-content__transfer-bank': checkIsTransferBank}"
    >
      <transfer-in-wallet-extra
        v-if="!isSendReceipt && methodSending === 0"
        @isSendReceipt="isSendReceipt = true"
      />
      <transfer-in-email
        v-if="!isSendReceipt && methodSending === 6"
        @isSendReceipt="isSendReceipt = true"
      />
      <transfer-in-cash v-if="!isSendReceipt && methodSending === 7" />
      <!--      <transfer-in-fiat-->
      <!--        v-if="!isSendReceipt && methodSending === 3"-->
      <!--        @isSendReceipt="isSendReceipt = true"-->
      <!--      />-->
      <transfer-in-card-extra
        v-if="!isSendReceipt && methodSending === 1"
        @isSendReceipt="isSendReceipt = true"
      />
      <transfer-in-card-visa
        v-if="!isSendReceipt && methodSending === 2"
        @isSendReceipt="isSendReceipt = true"
      />
      <transfer-payment-system
        v-if="!isSendReceipt && methodSending === 3"
        @isSendReceipt="isSendReceipt = true"
      />
      <transfer-bank-choice
        v-if="!isSendReceipt && methodSending === 4"
        @isChoiceBank="isChoiceBank = true"
        @isSendReceipt="isSendReceipt = true"
      />
      <transfer-mobile-account
        v-if="!isSendReceipt && methodSending === 5"
        @isSendReceipt="isSendReceipt = true"
      />
      <wallets-transfer-send-check v-if="isSendReceipt" />
    </div>
  </div>
</template>

<script>
import TransferInWalletExtra from 'components/wallets_transfer/transfer-in-wallet-extra/transfer-in-wallet-extra';
import TransferInEmail from 'components/wallets_transfer/transfer-in-email/transfer-in-email';
import WalletsTransferSendCheck from 'components/wallets_transfer/wallets-transfer-send-check';
import TransferInCash from 'components/wallets_transfer/transfer-in-cash/transfer-in-cash';
// import TransferInFiat from 'components/wallets_transfer/transfer-in-fiat/transfer-in-fiat';
import TransferInCardExtra from 'components/wallets_transfer/transfer-in-card-extra/transfer-in-card-extra';
import TransferInCardVisa from 'components/wallets_transfer/transfer-in-card-visa/transfer-in-card-visa';
import TransferBankChoice from 'components/wallets_transfer/transfer-bank/transfer-bank-choice';
import TransferPaymentSystem from 'components/wallets_transfer/transfer-payment-system/transfer-payment-system';
import TransferMobileAccount from 'components/wallets_transfer/transfer-mobile-account/transfer-mobile-account';

export default {
  name: 'WalletsTransferContent',
  data: () => ({
    isSendReceipt: false,
    isChoiceBank: false,
  }),
  computed: {
    checkIsCash() {
      return this.methodSending === 7;
    },
    checkIsTransferBank() {
      return this.methodSending === 4 && !this.isChoiceBank;
    },
  },
  components: {
    TransferInWalletExtra,
    TransferInCardExtra,
    WalletsTransferSendCheck,
    TransferInEmail,
    TransferInCash,
    // TransferInFiat,
    TransferInCardVisa,
    TransferBankChoice,
    TransferPaymentSystem,
    TransferMobileAccount,
  },
  props: {
    methodSending: {
      type: Number,
    },
  },
};
</script>

<style scoped lang="sass">
.wallets-transfer-content__transfer-bank
  background: #000000 !important
.wallets-transfer-content__cash
  width: 1000px!important
  max-width: 1000px !important
  padding: 40px !important
  @media screen and (max-width: 880px)
    width: 575px !important
    max-width: 575px
    @media screen and (max-width: 480px)
      width: 330px !important
      max-width: 330px
      padding: 0 !important
.wallets-transfer-content__padding
  padding: 100px 0 100px 0
.wallets-transfer-content
  padding: 100px 100px 100px 100px
  background: #101010
  width: 560px
  border-radius: 10px
  height: 100%
  margin-left: auto
  margin-right: auto
  @media screen and (max-width: 480px)
    padding: 0
    background: #000000
    width: 100%
</style>
