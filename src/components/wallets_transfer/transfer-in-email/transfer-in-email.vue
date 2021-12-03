<template>
  <div class="transfer-in-wallet-extra">
    <div class="items-center">
      <div class="transfer-in-wallet-extra__title">
        Перевод криптовалюты
      </div>
    </div>
    <div
      v-if="!isConfirmation"
      class=""
    >
      <div class="column items-center">
        <div class="transfer-description">
          Срок исполнения: <span class="transfer-description__green">~ 48 часов.</span>
          Даже если получатель средств не зарегистрирован
          в системе, вы все равно сможете выполнить перевод,
          указав только его email.
          Уже через несколько минут получателю придет ссылка для
          активации кошелька, на который уже будет зачислена сумма
          вашего перевода.
        </div>
        <div class="transfer-in-wallet-extra-select">
          <div class="transfer-in-wallet-extra-select__container">
            <div class="transfer-in-wallet-extra-select__title">
              С моего кошелька
            </div>
            <div class="transfer-in-wallet-extra-select__select">
              <q-btn
                align="end"
                class="transfer-in-wallet-extra-select__btn-wallets
            transfer-in-wallet-extra-select__btn"
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
        </div>
        <div class="transfer-in-wallet-extra-input">
          <div class="line" />
          <div class="transfer-in-wallet-extra-input__container">
            <div class="transfer-in-wallet-extra-input__title">
              E-Mail получателя
            </div>
            <q-input
              borderless
              v-model="email"
              dark
              placeholder="Поиск..."
              class="transfer-in-wallet-extra-input__input"
            >
              <template v-slot:prepend>
                <img
                  class="certificate-icon_img"
                  src="~assets/zoom.svg"
                  alt=""
                >
              </template>
              <template v-slot:append>
                <q-icon
                  name="close"
                  @click="text = ''"
                  class="cursor-pointer"
                />
              </template>
            </q-input>
          </div>
          <div class="transfer-in-wallet-extra-input__container">
            <div class="transfer-in-wallet-extra-input__title">
              Фамилия получателя
            </div>
            <q-input
              borderless
              v-model="lastName"
              dark
              class="transfer-in-wallet-extra-input__input"
            />
          </div>
          <div class="transfer-in-wallet-extra-input__container">
            <div class="transfer-in-wallet-extra-input__title">
              Имя получателя
            </div>
            <q-input
              borderless
              v-model="firstName"
              dark
              class="transfer-in-wallet-extra-input__input"
            />
          </div>
          <div class="transfer-in-wallet-extra-input__container">
            <div class="transfer-in-wallet-extra-input__title">
              Отчество получателя
            </div>
            <q-input
              borderless
              v-model="patronymic"
              dark
              class="transfer-in-wallet-extra-input__input"
            >
              <template v-slot:append>
                <div class="transfer-in-wallet-extra-input__double-title">
                  Если есть
                </div>
              </template>
            </q-input>
          </div>
          <div class="transfer-in-wallet-extra-input__container">
            <div class="transfer-in-wallet-extra-input__title">
              Сумма к зачислению
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
    <transfer-in-email-confirmation v-else />
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
import btcCur from 'assets/btc.png';
import ethCur from 'assets/eth.png';
import clinkCur from 'assets/clink.png';
import TransferInEmailConfirmation
  from 'components/wallets_transfer/transfer-in-email/transfer-in-email-confirmation';

export default {
  name: 'TransferInEmail',
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
      },
      {
        title: 'BTC',
        icon: btcCur,
      },
      {
        title: 'LINK',
        icon: clinkCur,
      },
    ],
    cryptocurrency: {
      title: '',
      icon: '',
    },
    isCryptoWalletExtra: false,
    email: '',
    firstName: '',
    lastName: '',
    patronymic: '',
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
    setCryptocurrency(item) {
      this.cryptocurrency.icon = item.icon;
      this.cryptocurrency.title = item.title;
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
    TransferInEmailConfirmation,
  },
};
</script>

<style scoped lang="sass">

.transfer-in-wallet-extra-select__btn-title
  font-family: Montserrat, sans-serif
  font-size: 16px
  font-style: normal
  font-weight: 600
  line-height: 21px
  letter-spacing: 0.03em
  text-align: left
.transfer-description__green
  color: #27AE60
.transfer-description
  font-family: Montserrat, sans-serif
  font-size: 12px
  font-style: normal
  font-weight: 400
  line-height: 16px
  letter-spacing: 0.03em
  text-align: left
  width: 350px
  word-wrap: break-word
  margin-top: 35px
.line
  width: 100%
  height: 1px
  background: #525252
  margin-top: 35px
.transfer-in-wallet-extra-input__double-title
  font-family: Montserrat, sans-serif
  font-size: 12px
  font-style: normal
  font-weight: 400
  line-height: 16px
  letter-spacing: 0.03em
  text-align: right
  color: #686868
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
.transfer-in-wallet-extra-select__btn-cryptocurrency
  width: 100%
.transfer-in-wallet-extra-input__input
  padding-left: 10px
  border: 0.5px solid #777777
  height: 42px
  border-radius: 10px
  width: 368px
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
  @media screen and (max-width: 480px)
    margin-right: 12px
.transfer-in-wallet-extra-select__btn-wallets
  width: 367px
  @media screen and (max-width: 480px)
    width: 300px
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
