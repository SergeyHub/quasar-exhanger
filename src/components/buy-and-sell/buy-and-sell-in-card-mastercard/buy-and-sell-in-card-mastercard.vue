<template>
  <div class="transfer-in-wallet-extra">
    <div class="items-center">
      <div class="transfer-in-wallet-extra__title">
        Покупка криптовалюты
      </div>
    </div>
    <div
      v-if="!isConfirmation"
      class=""
    >
      <div class="column items-center flex">
        <div class="transfer-in-wallet-extra-input">
          <div class="transfer-in-wallet-extra-input__container">
            <div class="transfer-in-wallet-extra-input__title">
              Введите номер карты
            </div>
            <div class="transfer-in-wallet-extra-input-card__container">
              <div class="row items-center">
                <img
                  src="~assets/mc_symbol.svg"
                  alt=""
                  class="img-card"
                >
                <q-btn
                  align="end"
                  class="transfer-in-wallet-extra-select__btn-cryptocurrency
            transfer-in-wallet-extra-select__btn transfer-in-wallet-extra-input-card__currency"
                >
                  <div class="flex row justify-center items-center">
                    <div
                      class="transfer-in-wallet-extra-select__btn-title"
                    >
                      {{ card }}
                    </div>
                  </div>
                  <q-menu>
                    <q-list class="transfer-in-wallet-extra-select__select__down-panel">
                      <q-item
                        clickable
                        v-close-popup
                        :key="index"
                        v-for="(item, index) in currencies"
                      >
                        <q-item-section @click="setCurrencyCard(item)">
                          <div class="row flex">
                            <div class="transfer-in-wallet-extra-select__btn-title">
                              {{ item }}
                            </div>
                          </div>
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </q-menu>
                </q-btn>
              </div>
              <q-input
                borderless
                v-model="walletRecipient"
                dark
                class="transfer-in-wallet-extra-input-card__input"
              />
              <div class="line-card" />
            </div>
          </div>
          <div class="transfer-in-wallet-extra-select">
            <div class="transfer-in-wallet-extra-select__container">
              <div class="transfer-in-wallet-extra-select__title">
                Выбрать криптовалюту для покупки
              </div>
              <div class="transfer-in-wallet-extra-select__select">
                <q-btn
                  no-caps
                  align="end"
                  class="transfer-in-wallet-extra-select__btn-cryptocurrency
            transfer-in-wallet-extra-select__btn"
                >
                  <div class="flex row justify-center items-center">
                    <img
                      class="transfer-in-wallet-extra-select__btn-icon"
                      :src="cryptocurrency.icon"
                      alt=""
                    >
                    <div
                      class="transfer-in-wallet-extra-select__btn-title"
                    >
                      {{ cryptocurrency.title }}
                    </div>
                    <div
                      class="transfer-in-wallet-extra-select__btn-text"
                    >
                      {{ cryptocurrency.text }}
                    </div>
                  </div>
                  <q-menu>
                    <q-list class="transfer-in-wallet-extra-select__select__down-panel">
                      <q-item
                        clickable
                        v-close-popup
                        :key="index"
                        v-for="(item, index) in cryptocurrencies"
                      >
                        <q-item-section @click="setCryptocurrency(item)">
                          <div class="row flex">
                            <img
                              :src="item.icon"
                              alt=""
                              class="transfer-in-wallet-extra-select__btn-icon"
                            >
                            <div class="transfer-in-wallet-extra-select__btn-title">
                              {{ item.title }}
                            </div>
                            <div class="transfer-in-wallet-extra-select__btn-text">
                              {{ item.text }}
                            </div>
                          </div>
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </q-menu>
                </q-btn>
              </div>
            </div>
          </div>
          <div class="transfer-in-wallet-extra-input">
            <div class="line" />
            <div class="transfer-in-wallet-extra-input__container">
              <div class="transfer-in-wallet-extra-input__title">
                Сумма отправления
              </div>
              <q-input
                borderless
                v-model="writeOffAmount"
                dark
                class="transfer-in-wallet-extra-input__input"
              >
                <template v-slot:append>
                  <q-btn
                    align="end"
                    class="transfer-in-wallet-extra-select__btn-cryptocurrency
            transfer-in-wallet-extra-select__btn"
                  >
                    <div class="flex row justify-center items-center">
                      <div
                        class="transfer-in-wallet-extra-select__btn-title"
                      >
                        ₽
                      </div>
                    </div>
                  </q-btn>
                </template>
              </q-input>
            </div>
            <div class="transfer-in-wallet-extra-input__container">
              <div class="transfer-in-wallet-extra-input__title">
                Сумма к зачислению
              </div>
              <q-input
                borderless
                v-model="amountCredited"
                dark
                class="transfer-in-wallet-extra-input__input"
              >
                <template v-slot:append>
                  <q-btn
                    align="end"
                    class="transfer-in-wallet-extra-select__btn-cryptocurrency
            transfer-in-wallet-extra-select__btn"
                  >
                    <div class="flex row justify-center items-center">
                      <div
                        class="transfer-in-wallet-extra-select__btn-title"
                      >
                        ₿
                      </div>
                    </div>
                  </q-btn>
                </template>
              </q-input>
            </div>
            <div class="transfer-in-wallet-extra-select__container crypto-address">
              <div class="transfer-in-wallet-extra-select__title">
                BITCOIN адрес для зачисления
              </div>
              <div class="transfer-in-wallet-extra-select__select">
                <q-btn
                  no-caps
                  align="end"
                  class="transfer-in-wallet-extra-select__btn-cryptocurrency
            transfer-in-wallet-extra-select__btn"
                >
                  <div class="flex row justify-center items-center">
                    <div
                      class="crypto-address-title"
                    >
                      {{ cryptoAddress }}
                    </div>
                  </div>
                  <q-menu>
                    <q-list class="transfer-in-wallet-extra-select__select__down-panel">
                      <q-item
                        clickable
                        v-close-popup
                        :key="index"
                        v-for="(item, index) in cryptoAddresses"
                      >
                        <q-item-section @click="setCryptoAddress(item)">
                          <div class="row flex">
                            <div class="crypto-address-title">
                              {{ item }}
                            </div>
                          </div>
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </q-menu>
                </q-btn>
              </div>
            </div>
            <div class="transfer-in-wallet-extra-input__container">
              <div class="transfer-in-wallet-extra-input__title">
                Введите адрес кошелька
              </div>
              <q-input
                borderless
                v-model="inputCryptoAddress"
                dark
                class="transfer-in-wallet-extra-input__input"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="transfer-in-wallet-extra-commission flex row justify-start">
        <div class="transfer-in-wallet-extra-commission__title">
          Комиссия составит:
        </div>
        <div class="transfer-in-wallet-extra-commission__amount">
          0.00069331 BTC (490 RUB)
        </div>
      </div>
      <div class="buy-and-sell-check-box row items-center">
        <q-checkbox
          size="28px"
          dark
          v-model="isSaveRequisites"
          color="grey"
        />
        <div class="buy-and-sell-check-box__title">
          Сохранить реквизиты получателя
        </div>
      </div>
    </div>
    <buy-and-sell-in-card-mastercard-confirmation v-else />
    <div
      @click="checkStep"
      class="transfer-in-wallet-extra-btn-next flex items-center justify-center"
    >
      Продолжить
    </div>
  </div>
</template>

<script>
import iconCurrency from 'assets/currency.svg';
import BuyAndSellInCardMastercardConfirmation
  from 'components/buy-and-sell/buy-and-sell-in-card-mastercard/buy-and-sell-in-card-mastercard-confirmation';
import ethCur from 'assets/eth.png';
import btcCur from 'assets/btc.png';
import clinkCur from 'assets/clink.png';

export default {
  name: 'BuyAndSellInCardMastercard',
  data: () => ({
    wallets: [
      {
        icon: iconCurrency,
        balance: '1000',
        currency: 'RUB',
      },
      {
        icon: '',
        balance: '',
        currency: '',
      },
      {
        icon: '',
        balance: '',
        currency: '',
      },
      {
        icon: '',
        balance: '',
        currency: '',
      },
      {
        icon: '',
        balance: '',
        currency: '',
      },
    ],
    wallet: {
      icon: '',
      balance: '',
      currency: '',
    },
    cryptocurrencies: [
      {
        title: 'ETH',
        icon: ethCur,
        text: 'Ethereum',
      },
      {
        title: 'BTC',
        icon: btcCur,
        text: 'Bitcoin',
      },
      {
        title: 'LINK',
        icon: clinkCur,
        text: 'Chainlink',
      },
    ],
    cryptocurrency: {
      title: '',
      icon: '',
      text: '',
    },
    isSaveRequisites: false,
    cryptoAddresses: [
      'На свой кошелек Extra',
      'На другой кошелек',
    ],
    cryptoAddress: '',
    currencies: [
      '$', '₽',
    ],
    card: '',
    sumCard: '',
    isCryptoWalletExtra: false,
    walletRecipient: '',
    writeOffAmount: '',
    amountCredited: '',
    isConfirmation: false,
  }),
  methods: {
    setCryptoAddress(item) {
      this.cryptoAddress = item;
    },
    setWallet(item) {
      this.wallet.icon = item.icon;
      this.wallet.currency = item.currency;
      this.wallet.balance = item.balance;
    },
    setCryptocurrency(item) {
      this.cryptocurrency.icon = item.icon;
      this.cryptocurrency.title = item.title;
      this.cryptocurrency.text = item.text;
    },
    setCurrencyCard(item) {
      this.card = item;
    },
    setCurrencySumCard(item) {
      this.sumCard = item;
    },
    checkStep() {
      if (!this.isConfirmation) {
        this.isConfirmation = true;
      } else {
        this.$emit('isSendReceipt');
      }
    },
  },
  components: {
    BuyAndSellInCardMastercardConfirmation,
  },
};
</script>

<style scoped lang="sass">
.img-card
  width: 54px
  height: 36px
.buy-and-sell-check-box
  margin-bottom: 42px
.buy-and-sell-check-box__title
  font-family: Montserrat, sans-serif
  font-size: 12px
  font-style: normal
  font-weight: 400
  line-height: 16px
  letter-spacing: 0.03em
  text-align: left
  color: #777777
.line
  width: 100%
  height: 1px
  background: #525252
  margin-top: 35px
.crypto-address-title
  font-family: Montserrat, sans-serif
  font-size: 12px
  font-style: normal
  font-weight: 400
  line-height: 16px
  letter-spacing: 0.03em
  text-align: left
.crypto-address
  margin-top: 28px
.transfer-in-wallet-extra-select__btn-text
  margin: auto 0 auto 8px
  font-family: Montserrat, sans-serif
  font-size: 12px
  font-style: normal
  font-weight: 400
  line-height: 16px
  letter-spacing: 0.03em
  text-align: left
  color: #969696
.transfer-in-wallet-extra-input
  @media screen and (max-width: 480px)
    width: 300px
.transfer-in-wallet-extra-input__container-margin
  margin-right: 14px
  &:last-child
    margin-right: 0
.transfer-in-wallet-extra-input-card__input
  margin-top: 37px
.line-card
  height: 2px
  width: 100%
  background: #FFFFFF
  margin-bottom: 60px
.transfer-in-wallet-extra-input-card__title
  margin-left: 8px
.transfer-in-wallet-extra-input-card__currency
  width: 50px !important
  margin-left: auto
.transfer-in-wallet-extra-input-card__container
  padding: 13px
  border: 1px #FFFFFF solid
  border-radius: 10px
  width: 270px
  background: #090909
.transfer-in-wallet-extra-btn-next
  background: #5AC06A
  padding: 10px
  border-radius: 10px
  font-family: Montserrat, sans-serif
  font-size: 16px
  font-style: normal
  font-weight: 600
  line-height: 21px
  letter-spacing: 0.03em
  text-align: left
.transfer-in-wallet-extra-commission
  margin-top: 8px
  margin-bottom: 41px
.transfer-in-wallet-extra-commission__title
  font-family: Montserrat, sans-serif
  font-size: 12px
  font-style: normal
  font-weight: 400
  line-height: 16px
  letter-spacing: 0.03em
  text-align: left
  color: #777777
  margin-right: 5px
.transfer-in-wallet-extra-commission__amount
  color: #5AC06A
  font-family: Roboto, sans-serif
  font-size: 12px
  font-style: normal
  font-weight: 400
  line-height: 16px
  letter-spacing: 0.03em
  text-align: left
.transfer-in-wallet-extra-input__currency
  font-family: Montserrat, sans-serif
  font-size: 14px
  font-style: normal
  font-weight: 600
  line-height: 18px
  letter-spacing: 0.03em
  text-align: left
.transfer-in-wallet-extra-input__title
  font-family: Montserrat, sans-serif
  font-size: 12px
  font-style: normal
  font-weight: 600
  line-height: 16px
  letter-spacing: 0.03em
  text-align: left
  margin-top: 23px
  margin-bottom: 8px
.transfer-in-wallet-extra-input__input
  border: 0.5px solid #777777
  height: 42px
  border-radius: 10px
  width: 367px
  @media screen and (max-width: 480px)
    width: 300px
.transfer-in-wallet-extra-chose
  margin-top: 32px
.transfer-in-wallet-extra-chose__btn
  cursor: pointer
  padding: 9px 14px
  border-top-left-radius: 10px
  border-bottom-left-radius: 10px
  font-family: Montserrat, sans-serif
  font-size: 12px
  font-style: normal
  font-weight: 500
  line-height: 16px
  letter-spacing: 0.03em
  color: #666666
  text-align: left
  border: 0.5px solid #444444
  &:first-child
    border-right-style: none
  &:last-child
    border-radius: 0 10px 10px 0
    border-left-style: none
  @media screen and (max-width: 480px)
    padding: 9px 4px
.transfer-in-wallet-extra-chose__btn-active
  border: 1px solid #191919
  background: #191919
  color: #FFFFFF
  border-left-style: none
.transfer-in-wallet-extra-select__title
  margin-bottom: 8px
.transfer-in-wallet-extra-select
  margin-top: 57px
.transfer-in-wallet-extra-select__btn-title
  font-family: Montserrat, sans-serif
  font-size: 16px
  font-style: normal
  font-weight: 600
  line-height: 21px
  letter-spacing: 0.03em
  text-align: left
.transfer-in-wallet-extra-select__btn-icon
  margin-right: 10px
.transfer-in-wallet-extra-select__container
  width: 100%
  margin-right: 32px
  &:last-child
    margin-right: 0
  @media screen and (max-width: 480px)
    margin-right: 12px
    width: 300px
.transfer-in-wallet-extra-select__btn-wallets
  width: 367px
  @media screen and (max-width: 480px)
    width: 300px
.transfer-in-wallet-extra-select__btn-cryptocurrency
  width: 100%
.transfer-in-wallet-extra-select__btn
  background: #393939
  border-radius: 10px
.transfer-in-wallet-extra__title
  font-family: Montserrat, sans-serif
  font-size: 24px
  font-style: normal
  font-weight: 600
  line-height: 31px
  letter-spacing: 0.03em
  text-align: center
.transfer-in-wallet-extra-select__title
  font-family: Montserrat, sans-serif
  font-size: 12px
  font-style: normal
  font-weight: 400
  line-height: 16px
  letter-spacing: 0.03em
  text-align: left
.transfer-in-wallet-extra-select__select__down-panel
  background: #292929
</style>
