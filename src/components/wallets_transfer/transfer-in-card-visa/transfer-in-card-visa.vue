<template>
  <div class="transfer-in-wallet-extra">
    <div class="items-center">
      <div class="transfer-in-wallet-extra__title">
        Перевод фиатных средств
      </div>
    </div>
    <div
      v-if="!isConfirmation"
      class=""
    >
      <div class="column items-center flex">
        <div class="transfer-in-wallet-extra-select row">
          <div class="transfer-in-wallet-extra-select__container">
            <div class="transfer-in-wallet-extra-select__title">
              Выберите кошелек списания
            </div>
            <div class="transfer-in-wallet-extra-select__select">
              <q-btn
                align="end"
                class="transfer-in-wallet-extra-select__btn-wallets
            transfer-in-wallet-extra-select__btn "
              >
                <div class="flex row justify-center items-center">
                  <img
                    class="transfer-in-wallet-extra-select__btn-icon"
                    :src="wallet.icon"
                    alt=""
                  >
                  <div
                    class="transfer-in-wallet-extra-select__btn-title"
                  >
                    {{ wallet.balance + ' ' + wallet.currency }}
                  </div>
                </div>
                <q-menu>
                  <q-list class="transfer-in-wallet-extra-select__select__down-panel">
                    <q-item
                      clickable
                      v-close-popup
                      :key="index"
                      v-for="(item, index) in wallets"
                    >
                      <q-item-section @click="setWallet(item)">
                        <div class="flex row">
                          <img
                            :src="item.icon"
                            alt=""
                            class="transfer-in-wallet-extra-select__btn-icon"
                          >
                          <div class="transfer-in-wallet-extra-select__btn-title">
                            {{ item.balance }} {{ item.currency }}
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
          <div class="transfer-in-wallet-extra-input__container">
            <div class="transfer-in-wallet-extra-input__title">
              Введите номер карты
            </div>
            <div class="transfer-in-wallet-extra-input-card__container">
              <div class="row items-center">
                <img
                  src="~assets/card-visa.svg"
                  alt=""
                >
                <div class="transfer-in-wallet-extra-input-card__title">
                  Extra
                </div>
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
          <div class="row">
            <div
              class="transfer-in-wallet-extra-input__container
             transfer-in-wallet-extra-input__container-margin"
            >
              <div class="transfer-in-wallet-extra-input__title">
                Сумма списания
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
            <div
              class="transfer-in-wallet-extra-input__container
             transfer-in-wallet-extra-input__container-margin"
            >
              <div class="transfer-in-wallet-extra-input__title">
                Сумма зачисления
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
                        {{ card }}
                      </div>
                    </div>
                  </q-btn>
                </template>
              </q-input>
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
    </div>
    <transfer-in-card-visa-confirmation v-else />
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
import TransferInCardVisaConfirmation
  from 'components/wallets_transfer/transfer-in-card-visa/transfer-in-card-visa-confirmation';

export default {
  name: 'TransferInCardVisa',
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
    setWallet(item) {
      this.wallet.icon = item.icon;
      this.wallet.currency = item.currency;
      this.wallet.balance = item.balance;
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
    TransferInCardVisaConfirmation,
  },
};
</script>

<style scoped lang="sass">
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
  width: 175px
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
  margin-right: 32px
  &:last-child
    margin-right: 0
  @media screen and (max-width: 480px)
    margin-right: 12px
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
