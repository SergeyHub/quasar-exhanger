<template>
  <div class="">
    <btn-pro-and-easy-exchange :is-activate-easy="true" />
    <div class="buy-in-exchange-extra items-center row">
      <div
        v-if="!isScreenSizeSM"
        class="buy-in-exchange-extra-title row justify-between"
      >
        <div
          class="buy-in-exchange-extra-title__content"
          :class="{'buy-in-exchange-extra-title-active': isBuy}"
          @click="isBuy = true"
        >
          Быстрая покупка криптовалюты
        </div>
        <div
          class="buy-in-exchange-extra-title__content"
          :class="{'buy-in-exchange-extra-title-active': !isBuy}"
          @click="isBuy = false"
        >
          Быстрая продажа криптовалюты
        </div>
      </div>
      <div
        v-else
        class=""
      >
        <q-item
          tag="label"
          v-ripple
        >
          <q-item-section avatar>
            <q-radio
              v-model="radioBtn"
              val="0"
              color="green"
            />
          </q-item-section>
          <q-item-section>
            <q-item-label
              class="buy-in-exchange-extra-radio-btn"
              :class="{'buy-in-exchange-extra-radio-btn-active': checkBuyOrSell}"
            >
              Быстрая покупка криптовалюты
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          tag="label"
          v-ripple
        >
          <q-item-section avatar>
            <q-radio
              v-model="radioBtn"
              val="1"
              color="green"
            />
          </q-item-section>
          <q-item-section>
            <q-item-label
              class="buy-in-exchange-extra-radio-btn"
              :class="{'buy-in-exchange-extra-radio-btn-active': !checkBuyOrSell}"
            >
              Быстрая продажа криптовалюты
            </q-item-label>
          </q-item-section>
        </q-item>
      </div>
      <div class="buy-in-exchange-table">
        <table class="buy-in-exchange-table__table">
          <tr>
            <th class="buy-in-exchange-table__table-name">
              Название
            </th>
            <th style="text-align: end; padding-bottom: 23px">
              Последняя цена
            </th>
            <th v-if="!isScreenSizeSM" />
          </tr>
          <template v-if="isWatchAllCryptocurrency">
            <tr
              v-for="(item, key) in cryptocurrency"
              :key="key"
              class="justify-between buy-in-exchange-table__line"
              :class="{'buy-in-exchange-table__line-active': item.isActive}"
              @click="activateLineTable(key)"
            >
              <td class="buy-in-exchange-table__name buy-in-exchange-table__padding">
                <div class="row">
                  <img
                    :src="item.icon"
                    alt=""
                    class="buy-in-exchange-table__icon"
                  >
                  <div class="buy-in-exchange-table__short-title">
                    {{ item.shortTitle }}
                  </div>
                  <div
                    class="buy-in-exchange-table__title"
                    :class="{'buy-in-exchange-table__title-active': item.isActive}"
                  >
                    {{ item.title }}
                  </div>
                </div>
              </td>
              <td class="buy-in-exchange-table__padding">
                <div class="row items-center justify-end">
                  <div class="buy-in-exchange-table__currency">
                    {{ item.currency }}
                  </div>
                  <div class="buy-in-exchange-table__price">
                    {{ item.price }}
                  </div>
                </div>
                <div
                  v-if="isScreenSizeSM"
                  class=""
                >
                  <div
                    v-if="checkBuyOrSell"
                    class="buy-in-exchange-table__btn"
                    :class="{'buy-in-exchange-table__btn-active': item.isActive}"
                  >
                    Купить
                  </div>
                  <div
                    v-else
                    :class="{'buy-in-exchange-table__btn-active': item.isActive}"
                    class="buy-in-exchange-table__btn"
                  >
                    Продать
                  </div>
                </div>
              </td>
              <td
                v-if="!isScreenSizeSM"
                class="buy-in-exchange-table__padding"
                style="width: 125px;"
              >
                <div
                  v-if="isBuy"
                  class="buy-in-exchange-table__btn"
                  :class="{'buy-in-exchange-table__btn-active': item.isActive}"
                >
                  Купить
                </div>
                <div
                  v-else
                  :class="{'buy-in-exchange-table__btn-active': item.isActive}"
                  class="buy-in-exchange-table__btn"
                >
                  Продать
                </div>
              </td>
            </tr>
          </template>
          <template v-else>
            <tr
              v-for="(item, key) in cryptocurrencyLimited"
              :key="key"
              class="justify-between buy-in-exchange-table__line"
              :class="{'buy-in-exchange-table__line-active': item.isActive}"
              @click="activateLineTable(key)"
            >
              <td class="buy-in-exchange-table__name buy-in-exchange-table__padding">
                <div class="row">
                  <img
                    :src="item.icon"
                    alt=""
                    class="buy-in-exchange-table__icon"
                  >
                  <div class="buy-in-exchange-table__short-title">
                    {{ item.shortTitle }}
                  </div>
                  <div
                    class="buy-in-exchange-table__title"
                    :class="{'buy-in-exchange-table__title-active': item.isActive}"
                  >
                    {{ item.title }}
                  </div>
                </div>
              </td>
              <td class="buy-in-exchange-table__padding">
                <div class="row items-center justify-end">
                  <div class="buy-in-exchange-table__currency">
                    {{ item.currency }}
                  </div>
                  <div class="buy-in-exchange-table__price">
                    {{ item.price }}
                  </div>
                </div>
                <div
                  v-if="isScreenSizeSM"
                  class=""
                >
                  <div
                    v-if="checkBuyOrSell"
                    class="buy-in-exchange-table__btn"
                    :class="{'buy-in-exchange-table__btn-active': item.isActive}"
                  >
                    Купить
                  </div>
                  <div
                    v-else
                    :class="{'buy-in-exchange-table__btn-active': item.isActive}"
                    class="buy-in-exchange-table__btn"
                  >
                    Продать
                  </div>
                </div>
              </td>
              <td
                v-if="!isScreenSizeSM"
                class="buy-in-exchange-table__padding"
                style="width: 125px;"
              >
                <div
                  v-if="isBuy"
                  class="buy-in-exchange-table__btn"
                  :class="{'buy-in-exchange-table__btn-active': item.isActive}"
                >
                  Купить
                </div>
                <div
                  v-else
                  :class="{'buy-in-exchange-table__btn-active': item.isActive}"
                  class="buy-in-exchange-table__btn"
                >
                  Продать
                </div>
              </td>
            </tr>
          </template>
        </table>
      </div>
      <div
        class="buy-in-exchange-btn-all-cryptocurrency row items-center"
        @click="checkOutput"
      >
        <div class="buy-in-exchange-btn-all-cryptocurrency__title">
          {{ titleBtnWatchAllCryptocurrency }}
        </div>
        <img
          :src="iconDownArrow"
          alt=""
          :class="{'buy-in-exchange-btn-all-cryptocurrency__arrow': isWatchAllCryptocurrency}"
        >
      </div>
    </div>
  </div>
</template>

<script>
import BtnProAndEasyExchange from 'components/buy-and-sell/btn-pro-and-easy-exchange';
import imgDownArrow from 'assets/green-down-arrow.svg';

export default {
  name: 'BuyInExchangeExtra',
  data: () => ({
    reviewData: {
      options: [
        {
          // label: 'Быстрая покупка криптовалюты',
          value: '0',
        },
        {
          // label: 'Быстрая покупка криптовалюты',
          value: '1',
        },
      ],
      selected: '0',
    },
    iconDownArrow: imgDownArrow,
    cryptocurrency: [
      {
        id: 1,
        icon: '',
        shortTitle: 'BTC',
        title: 'Bitcoin',
        price: '48 603.06',
        currency: '$',
        isActive: false,
      },
      {
        id: 2,
        icon: '',
        shortTitle: 'USDT',
        title: 'Tether',
        price: '1.0069',
        currency: '$',
        isActive: false,
      },
      {
        id: 3,
        icon: '',
        shortTitle: 'BNB',
        title: 'Binance Coin',
        price: '479.0482',
        currency: '$',
        isActive: false,
      },
      {
        id: 4,
        icon: '',
        shortTitle: 'ETH',
        title: 'Ethereum',
        price: '2 194.33',
        currency: '$',
        isActive: false,
      },
      {
        id: 5,
        icon: '',
        shortTitle: 'TRX',
        title: 'TRON',
        price: '1.05694',
        isActive: false,
        currency: '$',
      },
      {
        id: 6,
        icon: '',
        shortTitle: 'XRP',
        title: 'Ripple',
        price: '1.05694',
        currency: '$',
        isActive: false,
      },
      {
        id: 7,
        icon: '',
        shortTitle: 'LTC',
        title: 'Litecoin',
        price: '231.36',
        currency: '$',
        isActive: false,
      },
      {
        id: 8,
        icon: '',
        shortTitle: 'BTC',
        title: 'Bitcoin',
        price: '48 603.06',
        currency: '$',
        isActive: false,
      },
      {
        id: 9,
        icon: '',
        shortTitle: 'USDT',
        title: 'Tether',
        price: '1.0069',
        currency: '$',
        isActive: false,
      },
      {
        id: 10,
        icon: '',
        shortTitle: 'BNB',
        title: 'Binance Coin',
        price: '479.0482',
        currency: '$',
        isActive: false,
      },
      {
        id: 11,
        icon: '',
        shortTitle: 'ETH',
        title: 'Ethereum',
        price: '2 194.33',
        currency: '$',
        isActive: false,
      },
      {
        id: 12,
        icon: '',
        shortTitle: 'TRX',
        title: 'TRON',
        price: '1.05694',
        currency: '$',
        isActive: false,
      },
      {
        id: 13,
        icon: '',
        shortTitle: 'XRP',
        title: 'Ripple',
        price: '1.05694',
        currency: '$',
        isActive: false,
      },
      {
        id: 14,
        icon: '',
        shortTitle: 'LTC',
        title: 'Litecoin',
        price: '231.36',
        currency: '$',
        isActive: false,
      },
    ],
    cryptocurrencyLimited: [],
    isWatchAllCryptocurrency: false,
    isBuy: true,
    radioBtn: '0',
    titleBtnWatchAllCryptocurrency: 'Посмотреть больше',
  }),
  components: {
    BtnProAndEasyExchange,
  },
  methods: {
    checkOutput() {
      if (this.isWatchAllCryptocurrency === false) {
        this.isWatchAllCryptocurrency = true;
        this.titleBtnWatchAllCryptocurrency = 'Свернуть';
      } else {
        this.isWatchAllCryptocurrency = false;
        this.titleBtnWatchAllCryptocurrency = 'Посмотреть больше';
      }
    },
    activateLineTable(id) {
      this.cryptocurrency.forEach((item, i) => {
        if (i !== id) {
          item.isActive = false;
        } else {
          item.isActive = true;
        }
      });
    },
    cryptocurrencyLimitedCreate() {
      this.cryptocurrency.forEach((item, i) => {
        if (i <= 7) {
          this.cryptocurrencyLimited.push(item);
        }
      });
    },
  },
  mounted() {
    this.cryptocurrencyLimitedCreate();
  },
  computed: {
    checkBuyOrSell() {
      if (this.radioBtn === '0') {
        return true;
      }
      return false;
    },
    isScreenSizeSM() {
      return this.$q.screen.lt.sm;
    },
  },
};
</script>

<style scoped lang="sass">
.buy-in-exchange-extra-radio-btn-active
  color: #27AE60 !important
.buy-in-exchange-extra-radio-btn
  font-family: Montserrat, sans-serif
  font-size: 16px
  font-style: normal
  font-weight: 600
  line-height: 21px
  letter-spacing: 0.03em
  text-align: left
  color: #878787
.buy-in-exchange-btn-all-cryptocurrency
  margin-top: 48px
  color: #27AE60
  font-family: Montserrat, sans-serif
  font-size: 18px
  font-style: normal
  font-weight: 500
  line-height: 22px
  letter-spacing: 0em
  text-align: left
.buy-in-exchange-btn-all-cryptocurrency__title
  margin-right: 8px
.buy-in-exchange-btn-all-cryptocurrency__arrow
  transform: rotate(180deg)
.buy-in-exchange-table__table-name
  padding-bottom: 23px
  text-align: left
.buy-in-exchange-table__title-active
  color: #FFFFFF !important
.buy-in-exchange-table__btn-active
  background: #27AE60 !important
.buy-in-exchange-table__line-active
  background: #202020
.buy-in-exchange-table__padding
  padding: 7px 5px
.buy-in-exchange-table__line
  border: 0.5px solid #444444
.buy-in-exchange-table__table
  width: 100%
  border-collapse: collapse
.buy-in-exchange-table
  margin-top: 48px
  width: 100%
.buy-in-exchange-table__currency
  font-family: Montserrat, sans-serif
  font-size: 16px
  font-style: normal
  font-weight: 600
  line-height: 21px
  letter-spacing: 0.03em
  text-align: right
  color: #777777
  margin-right: 8px
.buy-in-exchange-table__price
  font-family: Montserrat, sans-serif
  font-size: 16px
  font-style: normal
  font-weight: 600
  line-height: 21px
  letter-spacing: 0.03em
  text-align: right
.buy-in-exchange-table__btn
  margin-left: 70px
  padding: 8px 17px
  background: #7FA48E
  border-radius: 7px
  font-family: Montserrat, sans-serif
  font-size: 16px
  font-style: normal
  font-weight: 600
  line-height: 21px
  letter-spacing: 0.03em
  text-align: center
  @media screen and (max-width: 880px)
    margin-left: 30px
    @media screen and (max-width: 480px)
      margin-left: 0
      margin-top: 8px
.buy-in-exchange-table__icon
  margin-right: 20px
.buy-in-exchange-table__short-title
  font-family: Montserrat, sans-serif
  font-size: 16px
  font-style: normal
  font-weight: 400
  line-height: 21px
  letter-spacing: 0.03em
  text-align: left
  margin-right: 10px
.buy-in-exchange-table__title
  font-family: Roboto, sans-serif
  font-size: 16px
  font-style: normal
  font-weight: 400
  line-height: 21px
  letter-spacing: 0.03em
  text-align: left
  color: #777777
.buy-in-exchange-extra-title
  font-family: Montserrat, sans-serif
  font-size: 24px
  font-style: normal
  font-weight: 600
  line-height: 31px
  letter-spacing: 0.03em
  text-align: left
  width: 100%
  color: #878787
.buy-in-exchange-extra-title__content
  @media screen and (max-width: 1389px)
    width: 50%
.buy-in-exchange-extra-title-active
  color: #27AE60 !important
.buy-in-exchange-extra
  margin-top: 75px
  background: #101010
  padding: 100px 30px
  border-radius: 10px
  @media screen and (max-width: 880px)
    padding: 100px 10px
</style>
