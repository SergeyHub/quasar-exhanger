<template>
  <div class="wallets-transfer-content__padding">
    <div
      class="wallets-transfer-content flex items-center justify-center"
      :class="{'wallets-transfer-content__cash': checkIsCash,
               'wallets-transfer-content__transfer-bank': checkIsTransferBank}"
    >
      <wallets-transfer-send-check v-if="isSendReceipt" />
      <exchange-content
        @isSendReceipt="isSendReceipt = true"
        v-else
      />
    </div>
  </div>
</template>

<script>
import WalletsTransferSendCheck from 'components/wallets_transfer/wallets-transfer-send-check';
import ExchangeContent from 'components/exchange/exchange-content';

export default {
  name: 'ExchangeComponent',
  data: () => ({
    isSendReceipt: false,
    isChoiceBank: false,
  }),
  components: {
    WalletsTransferSendCheck,
    ExchangeContent,
  },
  computed: {
    checkIsCash() {
      return this.methodSending === 7;
    },
    checkIsTransferBank() {
      return this.methodSending === 4 && !this.isChoiceBank;
    },
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
