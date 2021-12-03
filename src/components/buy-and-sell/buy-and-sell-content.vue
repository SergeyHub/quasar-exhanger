<template>
  <div class="wallets-transfer-content__padding">
    <div
      class="buy-and-sell-up-title"
      v-if="methodSending === 1"
    >
      <div class="buy-and-sell-up-title-dead-line row justify-between">
        <div class="buy-and-sell-up-title-dead-line__title">
          Срок исполнения:
        </div>
        <div class="buy-and-sell-up-title-dead-line-text row">
          <img
            :src="iconCheckMark"
            alt=""
          >
          <div class="buy-and-sell-up-title-dead-line-text__text">
            Моментально
          </div>
        </div>
        <div class="buy-and-sell-up-title-dead-line-text row">
          <img
            :src="iconCheckMark"
            alt=""
          >
          <div class="buy-and-sell-up-title-dead-line-text__text">
            По кусру системы
          </div>
        </div>
      </div>
      <div class="buy-and-sell-up-title__text">
        Моментальный обмен Extra на основные
        популярные электронные валюты.
        Максимум <span
          class="buy-and-sell-up-title__text-bold"
        >30 000.00 USD</span> за одну транзакцию.
      </div>
    </div>
    <div
      class="buy-and-sell-up-title"
      v-if="methodSending === 3"
    >
      <div class="buy-and-sell-in-bank-card-btn row">
        <div
          class="buy-and-sell-in-bank-card-btn__btn"
          @click="isVisa = true"
        >
          <div class="buy-and-sell-in-bank-card-btn__title">
            Visa
          </div>
          <div
            v-if="isVisa"
            class="buy-and-sell-in-bank-card-btn__line"
          />
        </div>
        <div
          class="buy-and-sell-in-bank-card-btn__btn"
          @click="isVisa = false"
        >
          <div class="buy-and-sell-in-bank-card-btn__title">
            MasterCard
          </div>
          <div
            v-if="!isVisa"
            class="buy-and-sell-in-bank-card-btn__line"
          />
        </div>
        <div class="buy-and-sell-up-title__text">
          Здесь вы можете купить криптовалюту с вашей банковской карты.
          Сумма будет сразу сконвертирована
          в криптовалюту и отправлена на адрес вашего криптокошелька.
          Мы не берем комиссию при оплате картой, вы платите только комиссию сети.
        </div>
      </div>
    </div>
    <div
      class="wallets-transfer-content flex items-center justify-center"
      :class="{'buy-and-transfer__start-screen': checkIsStartScreen,
               'buy-and-transfer__exchange-extra': checkIsExchangeExtra}"
    >
      <buy-and-sell-start-screen
        v-if="methodSending === 99"
      />
      <buy-in-exchange-extra
        v-if="!isSendReceipt && methodSending === 0"
      />
      <buy-and-sell-in-extra-card
        v-if="!isSendReceipt && methodSending === 1"
        @isSendReceipt="isSendReceipt = true"
      />
      <buy-and-sell-in-card-extra
        v-if="!isSendReceipt && methodSending === 2"
        @isSendReceipt="isSendReceipt = true"
      />
      <buy-and-sell-in-card-visa
        v-if="!isSendReceipt && methodSending === 3 && isVisa"
        @isSendReceipt="isSendReceipt = true"
      />
      <buy-and-sell-in-card-mastercard
        v-if="!isSendReceipt && methodSending === 3 && !isVisa"
        @isSendReceipt="isSendReceipt = true"
      />
      <wallets-transfer-send-check v-if="isSendReceipt" />
    </div>
  </div>
</template>

<script>
import BuyAndSellInCardVisa from 'components/buy-and-sell/buy-and-sell-in-card-visa/buy-and-sell-in-card-visa';
import BuyAndSellInCardExtra from 'components/buy-and-sell/buy-and-sell-in-card-extra/buy-and-sell-in-card-extra';
import BuyAndSellInCardMastercard
  from 'components/buy-and-sell/buy-and-sell-in-card-mastercard/buy-and-sell-in-card-mastercard';
import BuyAndSellStartScreen from 'components/buy-and-sell/buy-and-sell-start-screen';
import BuyAndSellInExtraCard from 'components/buy-and-sell/buy-and-sell-in-extra-card/buy-and-sell-in-extra-card';
import BuyInExchangeExtra from 'components/buy-and-sell/buy-in-exchange-extra/buy-in-exchange-extra';
import WalletsTransferSendCheck from 'components/wallets_transfer/wallets-transfer-send-check';
import imgCheckMark from 'assets/check-mark.svg';

export default {
  name: 'BuyAndSellContent',
  data: () => ({
    isSendReceipt: false,
    startScreen: false,
    iconCheckMark: imgCheckMark,
    isVisa: true,
  }),
  computed: {
    checkIsStartScreen() {
      return this.methodSending === 99;
    },
    checkIsExchangeExtra() {
      return this.methodSending === 0;
    },
    checkIsTransferBank() {
      return this.methodSending === 4 && !this.isChoiceBank;
    },
  },
  components: {
    BuyAndSellInCardVisa,
    BuyAndSellInExtraCard,
    BuyInExchangeExtra,
    BuyAndSellStartScreen,
    WalletsTransferSendCheck,
    BuyAndSellInCardMastercard,
    BuyAndSellInCardExtra,
  },
  props: {
    methodSending: {
      type: Number,
    },
  },
};
</script>

<style scoped lang="sass">
.buy-and-sell-in-bank-card-btn
  @media screen and (max-width: 480px)
    width: 300px
.buy-and-sell-in-bank-card-btn__title
  font-family: Montserrat, sans-serif
  font-size: 24px
  font-style: normal
  font-weight: 600
  line-height: 31px
  letter-spacing: 0.03em
  text-align: right
.buy-and-sell-in-bank-card-btn__btn
  margin-right: 20px
  &:last-child
    margin-right: 0
.buy-and-sell-in-bank-card-btn__line
  height: 7px
  width: 100%
  background: #D8004E
.buy-and-sell-up-title
  width: 560px
  margin: 0 auto 38px auto
  @media screen and (max-width: 480px)
    display: flex
    flex-direction: column
    align-items: center
    width: 100%
.buy-and-sell-up-title__text-bold
  color: #FFFFFF
  font-family: Montserrat, sans-serif
  font-size: 16px
  font-style: normal
  font-weight: 600
  line-height: 21px
  letter-spacing: 0.03em
  text-align: left
.buy-and-sell-up-title-dead-line__title
  font-family: Montserrat, sans-serif
  font-size: 16px
  font-style: normal
  font-weight: 400
  line-height: 21px
  letter-spacing: 0.03em
  text-align: left
  color: #969696
.buy-and-sell-up-title__text
  margin-top: 38px
  font-family: Montserrat, sans-serif
  font-size: 16px
  font-style: normal
  font-weight: 400
  line-height: 21px
  letter-spacing: 0.03em
  text-align: left
  color: #969696
  @media screen and (max-width: 480px)
    width: 300px
    margin-top: 8px
.buy-and-sell-up-title-dead-line
  @media screen and (max-width: 480px)
    flex-direction: column !important
    width: 300px
.buy-and-sell-up-title-dead-line-text__text
  margin-left: 8px
  font-family: Montserrat, sans-serif
  font-size: 16px
  font-style: normal
  font-weight: 600
  line-height: 21px
  letter-spacing: 0.03em
  text-align: left
.wallets-transfer-content__transfer-bank
  background: #000000 !important
.buy-and-transfer__exchange-extra, .buy-and-transfer__start-screen
  width: 100%!important
  max-width: 100% !important
  padding: 40px !important
  background: #000000 !important
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
