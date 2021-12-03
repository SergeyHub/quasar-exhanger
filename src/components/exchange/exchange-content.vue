<template>
  <div class="transfer-in-wallet-extra">
    <div class="items-center">
      <div class="transfer-in-wallet-extra__title">
        Обмен валют
      </div>
    </div>
    <div
      v-if="!isConfirmation"
      class=""
    >
      <div class="column items-center flex">
        <div class="transfer-in-wallet-extra-select items-center justify-between row">
          <div
            class="transfer-in-wallet-extra-select__container
           transfer-in-wallet-extra-select__container-choice-bank"
          >
            <div class="transfer-in-wallet-extra-select__select">
              <q-select
                class="transfer-in-wallet-extra-select__btn-wallets
            transfer-in-wallet-extra-select__btn "
                v-model="left"
                clearable
                borderless
                use-input
                hide-selected
                fill-input
                dark
                input-debounce="0"
                :options="options"
                @filter="filterFn"
                @filter-abort="abortFilterFn"
                style="height: 36px; padding: 10px"
              >
                <template v-slot:option="scope">
                  <q-item
                    v-bind="scope.itemProps"
                    v-on="scope.itemEvents"
                  >
                    <q-item-section side>
                      <img :src="scope.opt.icon">
                    </q-item-section>
                    <q-item-section>
                      <div class="row">
                        <div class="">
                          {{ scope.opt.label }}
                        </div>
                        <div class="crypto-fullname">
                          {{ scope.opt.fullName }}
                        </div>
                      </div>
                    </q-item-section>
                  </q-item>
                </template>

                <template v-slot:no-option>
                  <q-item>
                    <q-item-section class="text-grey">
                      No results
                    </q-item-section>
                  </q-item>
                </template>
                <template v-slot:prepend>
                  <img
                    v-if="left.icon"
                    :src="left.icon"
                    alt=""
                  >
                  <q-icon
                    v-else
                    name="search"
                    @click.stop
                  />
                </template>
              </q-select>
            </div>
          </div>
          <img
            src="~assets/exchange-content.svg"
            alt=""
          >
          <div
            class="transfer-in-wallet-extra-select__container
           transfer-in-wallet-extra-select__container-choice-bank"
          >
            <div class="transfer-in-wallet-extra-select__select">
              <q-select
                class="transfer-in-wallet-extra-select__btn-wallets
            transfer-in-wallet-extra-select__btn "
                v-model="right"
                clearable
                borderless
                use-input
                hide-selected
                fill-input
                dark
                input-debounce="0"
                :options="options"
                @filter="filterFn"
                @filter-abort="abortFilterFn"
                style="height: 36px; padding: 10px"
              >
                <template v-slot:option="scope">
                  <q-item
                    v-bind="scope.itemProps"
                    v-on="scope.itemEvents"
                  >
                    <q-item-section side>
                      <img :src="scope.opt.icon">
                    </q-item-section>
                    <q-item-section>
                      <div class="row">
                        <div class="">
                          {{ scope.opt.label }}
                        </div>
                        <div class="crypto-fullname">
                          {{ scope.opt.fullName }}
                        </div>
                      </div>
                    </q-item-section>
                  </q-item>
                </template>

                <template v-slot:no-option>
                  <q-item>
                    <q-item-section class="text-grey">
                      No results
                    </q-item-section>
                  </q-item>
                </template>
                <template v-slot:prepend>
                  <img
                    v-if="right.icon"
                    :src="right.icon"
                    alt=""
                  >
                  <q-icon
                    v-else
                    name="search"
                    @click.stop
                  />
                </template>
              </q-select>
            </div>
          </div>
        </div>
        <div class="transfer-in-wallet-extra-input transfer-in-wallet-extra-input-exchange">
          <div class="transfer-in-wallet-extra-input__container">
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
                      {{ left.cryptocurrency }}
                    </div>
                  </div>
                </q-btn>
              </template>
            </q-input>
          </div>
          <div class="transfer-in-wallet-extra-input__container">
            <div class="transfer-in-wallet-extra-input__title">
              обменять на:
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
                      {{ right.cryptocurrency }}
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
          7,95% + 10 ₽
        </div>
      </div>
    </div>
    <exchange-confirmation v-else />
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
import iconBtc from 'assets/btc-exchange.svg';
import iconEth from 'assets/eth-exchange.svg';
import iconUSDT from 'assets/usdt-exchange.svg';
import ExchangeConfirmation
  from 'components/exchange/exchange-confirmation';

const stringOptions = [
  {
    label: 'BTC', icon: iconBtc, fullName: 'Bitcoin', cryptocurrency: '₿',
  },
  {
    label: 'ETH', icon: iconEth, fullName: 'Ethereum', cryptocurrency: 'Ξ',
  },
  {
    label: 'USDT', icon: iconUSDT, fullName: 'Tether', cryptocurrency: '₮',
  },
];

export default {
  name: 'ExchangeContent',
  data: () => ({
    left: ({
      label: '',
      value: '',
      icon: '',
      cryptocurrency: '',
    }),
    right: ({
      label: '',
      value: '',
      icon: '',
      cryptocurrency: '',
    }),
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
    requisites: '0',
    sumCard: '',
    isCryptoWalletExtra: false,
    walletRecipient: '',
    writeOffAmount: '',
    amountCredited: '',
    isConfirmation: false,
    options: stringOptions,
    firsName: '',
    lastName: '',
    patronymic: '',
    inn: '',
    kpp: '',
    bik: '',
    accountNumber: '',
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
    filterFn(val, update) {
      // call abort() at any time if you can't retrieve data somehow

      setTimeout(() => {
        update(
          () => {
            if (val === '') {
              this.options = stringOptions;
            } else {
              const needle = val.toLowerCase();
              stringOptions.filter(
                (v) => console.log(v.label.toLowerCase().indexOf(needle) > -1),
              );
              this.options = stringOptions.filter(
                (v) => v.label.toLowerCase().indexOf(needle) > -1,
              );
            }
          },

          // next function is available in Quasar v1.7.4+;
          // "ref" is the Vue reference to the QSelect
          (ref) => {
            if (val !== '' && ref.options.length > 0) {
              ref.setOptionIndex(-1); // reset optionIndex in case there is something selected
              ref.moveOptionSelection(1, true);
            }
          },
        );
      }, 300);
    },

    filterFnAutoselect(val, update) {
      // call abort() at any time if you can't retrieve data somehow

      setTimeout(() => {
        update(
          () => {
            if (val === '') {
              this.options = stringOptions;
            } else {
              const needle = val.toLowerCase();
              this.options = stringOptions.filter(
                (v) => v.label.toLowerCase().indexOf(needle) > -1,
              );
            }
          },

          // next function is available in Quasar v1.7.4+;
          // "ref" is the Vue reference to the QSelect
          (ref) => {
            if (val !== '' && ref.options.length > 0 && ref.optionIndex === -1) {
              ref.moveOptionSelection(1, true);
              ref.toggleOption(ref.options[ref.optionIndex], true); // toggle the focused option
            }
          },
        );
      }, 300);
    },

    abortFilterFn() {
      // console.log('delayed filter aborted')
    },
  },
  components: {
    ExchangeConfirmation,
  },
};
</script>

<style scoped lang="sass">
.transfer-in-wallet-extra-input-exchange
  margin-top: 54px
.crypto-fullname
  color: #525252 !important
  margin-left: 10px
.transfer-in-wallet-extra-input__input
  width: 367px
  padding: 0 !important
  @media screen and (max-width: 480px)
    width: 300px
.transfer-in-wallet-extra-input__input-fio
  margin-bottom: 9px
  &:last-child
    margin-bottom: 0
.transfer-in-wallet-extra-input__patronymic
  margin-top: -35px
  font-family: Montserrat, sans-serif
  font-size: 12px
  font-style: normal
  font-weight: 500
  line-height: 16px
  letter-spacing: 0.03em
  text-align: right
  color: #444444
.transfer-in-bank__requisites
  width: 100%
  font-family: Montserrat, sans-serif
  font-size: 16px
  font-style: normal
  font-weight: 400
  line-height: 21px
  letter-spacing: 0.03em
  text-align: center
  margin-top: 30px
.transfer-in-wallet-extra__btn
  margin-bottom: 8px
  @media screen and (max-width: 480px)
    margin-left: 30px

.line
  margin-top: 32px
  width: 100%
  height: 1px
  background: #525252
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
  margin-top: 17px
  margin-bottom: 17px
.transfer-in-wallet-extra-input__input-sum
  border: 0.5px solid #777777
  height: 42px
  border-radius: 10px
  width: 175px
  @media screen and (max-width: 480px)
    width: 300px
.transfer-in-wallet-extra-input__input-kpp-and-bik
  border: 0.5px solid #777777
  height: 42px
  border-radius: 10px
  width: 175px
  @media screen and (max-width: 480px)
    width: 130px
.transfer-in-wallet-extra-input__input
  padding: 10px
  border: 0.5px solid #777777
  height: 42px!important
  border-radius: 10px
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
  width: 100%
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
//.transfer-in-wallet-extra-select__container
//  margin-right: 32px
//  &:last-child
//    margin-right: 0
//  @media screen and (max-width: 480px)
//    margin-right: 12px
.transfer-in-wallet-extra-select__btn-wallets
  width: 140px
  @media screen and (max-width: 480px)
    width: 130px
.transfer-in-wallet-extra-select__btn-cryptocurrency
  width: 100%
.transfer-in-wallet-extra-select__btn
  background: #393939
  border-radius: 10px
.transfer-in-wallet-extra__title
  margin-bottom: 52px
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
