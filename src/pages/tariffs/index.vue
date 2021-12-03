<template>
  <div>
    <q-page class="b-container">
      <div class="page-tariff">
        <div class="font-size-32 font-weight-600 row justify-center">
          Тарифы и лимиты
        </div>

        <div class="fit row justify-between tariff-frame">
          <q-btn
            class="tab-btn btn-border prevent-uppercase"
            :class="[isActive('anonymous') ? 'active-btn-border' : 'btn-border']"
            color="primary"
            text-color="white"
            @click="setTab('anonymous')"
          >
            <div
              class="tab-btn__title"
            >
              Анонимный
            </div>
            <div
              class="font-size-12 description-block text-align-left tab-btn__desc"
            >
              Кошельки и карты в разных валютах, бесплатные внутренние переводы,
              криптовалюты, переводы на банковские карты.
            </div>
          </q-btn>

          <q-btn
            class="tab-btn btn-border prevent-uppercase"
            :class="[isActive('personal') ? 'active-btn-border' : 'btn-border']"
            color="primary"
            text-color="white"
            @click="setTab('personal')"
          >
            <div
              class="tab-btn__title"
            >
              Персональный
            </div>
            <div
              class="font-size-12 description-block text-align-left tab-btn__desc"
            >
              Кошельки и карты в разных валютах, бесплатные внутренние переводы,
              криптовалюты, переводы на банковские карты.
            </div>
            <div class="tab-btn__info">
              <div>Создание аккаунта</div>
              <div><strong>Бесплатно</strong></div>
              <div>Обслуживание в месяц</div>
              <div><strong>Бесплатно</strong></div>
            </div>
          </q-btn>

          <q-btn
            class="tab-btn btn-border prevent-uppercase"
            :class="[isActive('business') ? 'active-btn-border' : 'btn-border']"
            color="primary"
            text-color="white"
            @click="setTab('business')"
          >
            <div
              class="tab-btn__title"
            >
              Бизнес
            </div>
            <div
              class="font-size-12 description-block text-align-left tab-btn__desc"
            >
              Приём платежей от клиентов по всему миру, криптоэквайринг,
              массовые выплаты, решения для криптопроектов.
            </div>
          </q-btn>
        </div>

        <q-tab-panels
          v-model="tab"
          class="bg-black"
          animated
        >
          <q-tab-panel
            class="q-pa-none"
            name="anonymous"
          >
            <div class="text-h6">
              Mails
            </div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel
            class="q-pa-none"
            name="personal"
          >
            <personal-tariff />
          </q-tab-panel>

          <q-tab-panel
            class="q-pa-none"
            name="business"
          >
            <div class="text-h6">
              Movies
            </div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </q-page>

    <contacts-block />

    <additional-links style="position: absolute; top: auto" />
  </div>
</template>

<script>
import PersonalTariff from 'pages/tariffs/personal-tariff';
import ContactsBlock from 'components/contacts/contacts-block';
import AdditionalLinks from 'components/additional-links/index';

export default {
  name: 'TariffsAndLimits',
  components: { AdditionalLinks, ContactsBlock, PersonalTariff },
  data() {
    return {
      tab: 'personal',
    };
  },
  methods: {
    setTab(tab) {
      this.tab = tab;
    },
    isActive(tab) {
      return tab === this.tab;
    },
  },
};
</script>

<style lang="sass" scoped>
@import "src/css/app"

.font-size-32
  font-weight: 600
  font-size: 24px
  line-height: 113.84%
.page-tariff
  margin-top: 40px
  padding: 0 40px
.tariff-frame
  margin-top: 46px
  margin-bottom: 46px
  display: grid
  grid-template-columns: 1fr 1fr 1fr
  grid-column-gap: 19px
  @media only screen and (max-width: $laptop)
    grid-column-gap: 15px
  @media only screen and (max-width: $mobile)
    grid-template-columns: 1fr
.bg-black
  background-color: black
.margin-top-60
  margin-top: 60px

.margin-bottom-60
  margin-bottom: 60px
.tab-btn
  height: 150px
  border-radius: 0
  padding: 1px 3px
  @media only screen and (max-width: $laptop)
    width: auto
.q-btn__wrapper
  padding: 0
.tab-btn__title
  font-weight: 600
  font-size: 24px
  line-height: 113.84%
  padding: 0
  margin: 0
  width: 100%
  text-align: left
  @media only screen and (max-width: $mobile)
    font-weight: 600
    font-size: 20px
    line-height: 113.84%
    color: #999999
    text-align: center
    padding: 12px 0
.btn-border
  border: 0.5px solid #FFFFFF
  @media only screen and (max-width: $mobile)
    height: auto
    .tab-btn__desc
      display: none
.active-btn-border
  border: 2px solid #27AE60
  @media only screen and (max-width: $mobile)
    padding-bottom: 20px
    .tab-btn__title
      color: #FFFFFF
    .tab-btn__desc
      display: block
    .tab-btn__info
      display: grid !important
.text-align-left
  text-align: left

.description-block
  line-height: 14px
.tab-btn__info
  display: none
  @media only screen and (max-width: $mobile)
    grid-template-columns: auto 1fr
    font-weight: normal
    font-size: 12px
    line-height: 113.84%
    color: #999999
    text-align: left
    padding: 0
    grid-column-gap: 16px
    grid-row-gap: 10px
    width: 100%
    margin-top: 20px

    strong
      font-weight: 600
      font-size: 12px
      line-height: 113.84%
      color: #ffffff
.tariff-frame
  @media only screen and (max-width: $mobile)
    &>button
      &:nth-child(1)
        margin: 0 44px
      &:nth-child(2)
        margin: 0 22px
@media (min-width: $layout-breakpoint-extra-small) and (max-width: $layout-breakpoint-small)
  .wrapper
    width: 657px
</style>
