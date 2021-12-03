<template>
  <div class="transfer-in-cash">
    <div class="transfer-in-cash-country flex row">
      <div
        class="transfer-in-cash-country__country"
        :class="{'transfer-in-cash-country__active': item.isActive}"
        v-for="(item, index) in countries"
        @click="activateBtn(item)"
        :key="index"
      >
        {{ item.country }}
      </div>
    </div>
    <div class="transfer-in-cash-warn row flex items-center">
      <img
        src="~assets/danger.svg"
        alt=""
      >
      <div class="transfer-in-cash-warn__title">
        Все операции с наличностью осуществляются сторонним сервисом,
        за работу которого мы не несем ответственности.
      </div>
    </div>
    <div class="transfer-in-cash-description flex row justify-between">
      <div class="transfer-in-cash-description-container-left">
        <div class="row">
          <div class="transfer-in-cash-description__title">
            Направление:
          </div>
          <div class="transfer-in-cash-description__text">
            Extra в USD, EUR, RUB
          </div>
        </div>
        <div class="row">
          <div class="transfer-in-cash-description__title">
            Срок исполнения:
          </div>
          <div class="transfer-in-cash-description__text">
            15 мин. - 24 часа
          </div>
        </div>
        <div class="row">
          <div class="transfer-in-cash-description__title">
            Тип обмена:
          </div>
          <div class="transfer-in-cash-description__text">
            РУЧНОЙ
          </div>
        </div>
      </div>
      <div class="transfer-in-cash-description-container-right">
        <div class="transfer-in-cash-description__title">
          Комиссия:
        </div>
        <div class="transfer-in-cash-description__text">
          Extra USD в RUB: по согласованию (минимум 3000 USD)
        </div>
        <div class="transfer-in-cash-description__text">
          Extra USD в USD: по согласованию (минимум 3000 USD)
        </div>
        <div class="transfer-in-cash-description__text">
          Extra EUR в EUR: по согласованию (минимум 3000 EUR)
        </div>
      </div>
    </div>
    <div class="transfer-in-cash-contact-text">
      Благодаря нашему сотрудничеству с одним из крупнейших
      обменных сервисов на территории России и Украины, у вас появилась
      возможность выводить средства с Extra-кошелька
      в наличные в рублях, долларах и евро на территории практически всей Российской Федерации.
    </div>
    <div class="transfer-in-cash-contact-text">
      Свяжитесь с контакт-центром для получения инструкций и проведения транзакций:
    </div>
    <div class="transfer-in-cash-contacts row">
      <div class="transfer-in-cash-contacts-phone">
        <div class="transfer-in-cash-contacts-phone__title">
          Телефон:
        </div>
        <div class="transfer-in-cash-contacts-phone__number">
          +7 (995) 131-77-77
        </div>
      </div>
      <div class="transfer-in-cash-contacts-messenger-and-timer row">
        <div class="transfer-in-cash-contacts-messenger">
          <div class="transfer-in-cash-contacts-messenger__title">
            Мессенджеры:
          </div>
          <div class="row">
            <div class="transfer-in-cash-contacts-messenger__title">
              Telegram:
            </div>
            <div class="transfer-in-cash-contacts-messenger__text">
              Написать
            </div>
          </div>
          <div class="row">
            <div class="transfer-in-cash-contacts-messenger__title">
              Jabber:
            </div>
            <div class="transfer-in-cash-contacts-messenger__text">
              Написать
            </div>
          </div>
        </div>
        <div class="transfer-in-cash-contacts-time">
          <div class="transfer-in-cash-contacts-time__title">
            Время работы:
          </div>
          <div class="transfer-in-cash-contacts-time__text">
            10:00 - 20:00 (время работы по Москве UTC/GMT +3)
          </div>
        </div>
      </div>
    </div>
    <div class="transfer-in-cash-warn row flex items-center">
      <img
        src="~assets/danger.svg"
        alt=""
      >
      <div class="transfer-in-cash-warn__title">
        Внимание: переходите в мессенджеры
        только по указанным здесь ссылкам. Не ищите контакты вручную.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TransferInCash',
  data: () => ({
    countries: [
      {
        country: 'РОССИЯ',
        isActive: true,
      },
      {
        country: 'УКРАНИНА',
        isActive: false,
      },
      {
        country: 'КАЗАХСТАН',
        isActive: false,
      },
      {
        country: 'ТУРЦИЯ',
        isActive: false,
      },
      {
        country: 'ОАЭ',
        isActive: false,
      },
      {
        country: 'МОЛДОВА',
        isActive: false,
      },
      {
        country: 'АЗЕРБАЙДЖАН',
        isActive: false,
      },
      {
        country: 'ГРУЗИЯ',
        isActive: false,
      },
      {
        country: 'ВЕЛИКОБРИТАНИЯ',
        isActive: false,
      },
      {
        country: 'КИТАЙ',
        isActive: false,
      },
      {
        country: 'УЗБЕКИСТАН',
        isActive: false,
      },
      {
        country: 'НИДЕРЛАНДЫ',
        isActive: false,
      },
      {
        country: 'ДРУГИЕ СТРАНЫ',
        isActive: false,
      },
    ],
  }),
  methods: {
    activateBtn(items) {
      this.countries.forEach((i) => {
        i.isActive = false;
      });
      items.isActive = true;
    },
  },
};
</script>

<style scoped lang="sass">
.transfer-in-cash-description-container-right
  @media screen and (max-width: 880px)
    margin-top: 30px
.transfer-in-cash-contacts-messenger-and-timer
  @media screen and (max-width: 880px)
    width: 100%
    margin-top: 22px
    flex-direction: row
    display: flex
    justify-content: space-between
    @media screen and (max-width: 480px)
      display: block
.transfer-in-cash-contacts-phone
  width: 200px
.transfer-in-cash-contacts-messenger
  width: 200px
.transfer-in-cash-contacts-time
  width: 200px
  @media screen and (max-width: 480px)
    margin-top: 19px
.transfer-in-cash-contacts-messenger__text
  margin-left: 8px
  color: #27AE60
.transfer-in-cash-contacts-phone__number
  font-family: Montserrat, sans-serif
  font-size: 18px
  font-style: normal
  font-weight: 500
  line-height: 23px
  letter-spacing: 0.03em
  text-align: left
.transfer-in-cash-contacts
  margin-top: 30px
  font-family: Montserrat, sans-serif
  font-size: 14px
  font-style: normal
  font-weight: 500
  line-height: 18px
  letter-spacing: 0.03em
  text-align: left
.transfer-in-cash-contact-text
  font-family: Montserrat, sans-serif
  font-size: 14px
  font-style: normal
  font-weight: 500
  line-height: 18px
  letter-spacing: 0.03em
  text-align: left
  margin-top: 32px
.transfer-in-cash-description__title
  margin-right: 8px
.transfer-in-cash-description__text
  color: #27AE60
.transfer-in-cash-description
  margin-top: 50px
  background: #161616
  padding: 28px 32px
  border-radius: 15px
  font-family: Montserrat, sans-serif
  font-size: 14px
  font-style: normal
  font-weight: 500
  line-height: 24px
  letter-spacing: 0.03em
  text-align: left
  @media screen and (max-width: 480px)
    padding: 20px 20px
  @media screen and (max-width: 880px)
    flex-direction: column
.transfer-in-cash-warn
  margin-top: 60px
.transfer-in-cash-warn__title
  width: 600px
  max-width: 600px
  font-family: Montserrat, sans-serif
  font-size: 14px
  font-style: normal
  font-weight: 500
  line-height: 18px
  letter-spacing: 0.03em
  text-align: left
  color: #D8004E
  @media screen and (max-width: 880px)
    width: 400px
    max-width: 400px
    @media screen and (max-width: 480px)
      width: 230px
      max-width: 230px
.transfer-in-cash-country__active
  background: #27AE60 !important
.transfer-in-cash-country__country
  padding: 6px 17px
  border-radius: 10px
  background: #1E1F1E
  font-family: Montserrat, sans-serif
  font-size: 14px
  font-style: normal
  font-weight: 500
  line-height: 18px
  letter-spacing: 0.03em
  text-align: center
  cursor: pointer
  margin-right: 19px
  margin-bottom: 10px
  &:last-child
    margin-right: 0
</style>
