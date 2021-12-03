<template>
  <div class="flex column items-center">
    <div class="transfer-in-wallet-cryptocurrency flex items-center justify-center">
      <img
        :src="ethIcon"
        alt=""
        class="transfer-in-wallet-cryptocurrency__icon"
      >
      <div class="transfer-in-wallet-cryptocurrency__small-title">
        ETH
      </div>
      <div class="transfer-in-wallet-cryptocurrency__title">
        Ethereum
      </div>
    </div>
    <div class="transfer-in-wallet-information">
      <div class="transfer-in-wallet-information__container">
        <div class="transfer-in-wallet-information__content flex row justify-between">
          <div class="transfer-in-wallet-information__title">
            Откуда:
          </div>
          <div class="transfer-in-wallet-information__info flex row justify-center">
            <img
              :src="curIcon"
              alt=""
            >
            <div class="transfer-in-wallet-information__currency">
              RUB кошелек
            </div>
          </div>
        </div>
      </div>
      <div class="transfer-in-wallet-information__container">
        <div class="transfer-in-wallet-information__content flex row justify-between">
          <div class="transfer-in-wallet-information__title flex items-center">
            Куда:
          </div>
          <div
            class="transfer-in-wallet-information__info
           transfer-in-wallet-information__info-wallet"
            style="width: 150px;"
          >
            113Nm1335wuqNHJedZn8jLjqqBMzqrgbcQ
          </div>
        </div>
      </div>
      <div class="transfer-in-wallet-information__container">
        <div class="transfer-in-wallet-information__content flex row justify-between">
          <div class="transfer-in-wallet-information__title">
            Сумма списания:
          </div>
          <div class="transfer-in-wallet-information__info">
            14 352.71 RUB
          </div>
        </div>
      </div>
      <div class="transfer-in-wallet-information__container">
        <div class="transfer-in-wallet-information__content flex row justify-between">
          <div class="transfer-in-wallet-information__title">
            Комиссия:
          </div>
          <div class="transfer-in-wallet-information__info">
            459.00 RUB
          </div>
        </div>
      </div>
      <div class="transfer-in-wallet-information__container">
        <div class="transfer-in-wallet-information__content flex row justify-between">
          <div class="transfer-in-wallet-information__title">
            Сумма к зачислению:
          </div>
          <div class="transfer-in-wallet-information__info">
            13 720.50 ETH
          </div>
        </div>
      </div>
    </div>
    <div class="transfer-in-wallet-code flex row items-center justify-between">
      <div class="transfer-in-wallet-code__title">
        Введите одноразовый код
      </div>
      <div class="transfer-in-wallet-code__code">
        <security-code
          v-model="code"
          :placeholder="'●'"
          :length="6"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ethCur from 'assets/eth.png';
import currency from 'assets/currency.svg';
import SecurityCode from 'components/wallets_transfer/transfer-in-wallet-extra/security-code-transfer-extra';

export default {
  name: 'TransferInWalletExtraConfirmation',
  data: () => ({
    ethIcon: ethCur,
    curIcon: currency,
    code: '',
  }),
  components: {
    SecurityCode,
  },
};
</script>

<style scoped lang="sass">
.transfer-in-wallet-code__code
  border-radius: 10px
.transfer-in-wallet-code
  padding: 10px 18px
  width: 480px
  @media screen and (max-width: 480px)
    justify-content: center!important
    width: 300px
.transfer-in-wallet-code__title
  font-family: Montserrat, sans-serif
  font-size: 16px
  font-style: normal
  font-weight: 600
  line-height: 21px
  letter-spacing: 0.03em
  text-align: left
.transfer-in-wallet-code
  border: 0.5px #777777 solid
  border-radius: 10px
  margin-bottom: 50px
.transfer-in-wallet-information__info-wallet
  word-wrap: break-word
  font-family: Montserrat, sans-serif
  font-size: 14px
  font-style: normal
  font-weight: 600
  line-height: 18px
  letter-spacing: 0.03em
  text-align: right
  color: #777777
.transfer-in-wallet-information__currency
  font-family: Montserrat, sans-serif
  font-size: 14px
  font-style: normal
  font-weight: 600
  line-height: 18px
  letter-spacing: 0.03em
  text-align: left
.transfer-in-wallet-information__content
  font-family: Montserrat, sans-serif
  font-size: 16px
  font-style: normal
  font-weight: 600
  line-height: 21px
  letter-spacing: 0.03em
  text-align: left
  padding: 30px
.transfer-in-wallet-information__container
  border-bottom: 0.5px solid #444444
  width: 100%
  &:last-child
    border-bottom: 0
.transfer-in-wallet-information
  margin-bottom: 50px
  border: 0.5px solid #444444
  border-radius: 10px
  width: 480px
  @media screen and (max-width: 480px)
    width: 300px
.transfer-in-wallet-cryptocurrency
  margin-top: 39px
  margin-bottom: 28px
  background: #292929
  padding: 15px 20px
  border-radius: 10px
.transfer-in-wallet-cryptocurrency__icon
  margin-right: 8px
.transfer-in-wallet-cryptocurrency__small-title
  margin-right: 8px
  font-family: Montserrat, sans-serif
  font-size: 14px
  font-style: normal
  font-weight: 600
  line-height: 18px
  letter-spacing: 0.03em
  text-align: left
.transfer-in-wallet-cryptocurrency__title
  font-family: Montserrat, sans-serif
  font-size: 16px
  font-style: normal
  font-weight: 600
  line-height: 21px
  letter-spacing: 0.03em
  text-align: left
  color: #777777
</style>
