<template>
  <div class="flex row justify-center">
    <div class="personal-data data-account-container">
      <div class="personal-data__title">
        Общая информация
      </div>
      <div class="personal-data__input">
        <div
          class="input-label"
          v-if="lastName"
        >
          Фамилия
        </div>
        <q-input
          dark
          style="padding: 0"
          borderless
          type="text"
          v-model="lastName"
          placeholder="Фамилия"
          class="input-login"
        />
        <div class="line" />
      </div>
      <div class="personal-data__input">
        <div
          class="input-label"
          v-if="firstName"
        >
          Имя
        </div>
        <q-input
          dark
          style="padding: 0"
          borderless
          type="text"
          v-model="firstName"
          placeholder="Имя"
          class="input-login"
        />
        <div class="line" />
      </div>
      <div class="personal-data__input">
        <div
          class="input-label"
          v-if="patronymic"
        >
          Отчество
        </div>
        <q-input
          dark
          style="padding: 0"
          borderless
          type="text"
          v-model="patronymic"
          placeholder="Отчество"
          class="input-login"
        />
        <div class="line" />
      </div>
      <div class="personal-data__input">
        <div
          class="input-label"
          v-if="date"
        >
          Дата рождения
        </div>
        <q-input
          dark
          placeholder="Дата рождения"
          style="padding: 0"
          v-model="date"
          mask="date"
          :rules="['date']"
          borderless
          class="input-login"
        >
          <template v-slot:append>
            <q-icon
              name="event"
              class="cursor-pointer"
            >
              <q-popup-proxy
                ref="qDateProxy"
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date
                  dark
                  v-model="date"
                >
                  <div class="row items-center justify-end">
                    <q-btn
                      v-close-popup
                      label="Close"
                      color="primary"
                      flat
                    />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
        <div class="line" />
      </div>
    </div>
    <div class="address data-account-container">
      <div class="address__title">
        Адрес
      </div>
      <div
        class="input-label"
        v-if="countryValue"
      >
        Страна
      </div>
      <div class="personal-data__input">
        <q-select
          dark
          borderless
          v-model="countryValue"
          :options="countries"
          class="input-login"
        >
          <template v-slot:prepend>
            <img
              src="~assets/flag_ru.svg"
              alt=""
            >
          </template>
        </q-select>
        <div class="line" />
      </div>
      <div class="personal-data__input">
        <div
          class="input-label"
          v-if="indexCountry"
        >
          Индекс
        </div>
        <q-input
          dark
          style="padding: 0"
          borderless
          type="text"
          v-model="indexCountry"
          placeholder="Индекс"
          class="input-login"
        />
        <div class="line" />
      </div>
      <div class="personal-data__input">
        <div
          class="input-label"
          v-if="city"
        >
          Город
        </div>
        <q-input
          dark
          style="padding: 0"
          borderless
          type="text"
          v-model="city"
          placeholder="Город"
          class="input-login"
        />
        <div class="line" />
      </div>
      <div class="personal-data__input">
        <div
          class="input-label"
          v-if="address"
        >
          Адрес проживания
        </div>
        <q-input
          dark
          style="padding: 0"
          borderless
          type="text"
          v-model="address"
          placeholder="Адрес проживания"
          class="input-login"
        />
        <div class="line" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonalDateAccount',
  data: () => ({
    firstName: '',
    lastName: '',
    patronymic: '',
    date: '',
    countries: ['Российская Федерация', 'Украина', 'США'],
    indexCountry: '',
    city: '',
    address: '',
    countryValue: '',
  }),
};
</script>

<style scoped lang="sass">
.address__title
  font-family: Montserrat, sans-serif
  font-size: 16px
  font-style: normal
  font-weight: 600
  line-height: 21px
  letter-spacing: 0.03em
  text-align: left
.input-label
  font-family: Montserrat, sans-serif
  font-size: 12px
  font-style: normal
  font-weight: 500
  line-height: 16px
  letter-spacing: 0.03em
  text-align: left
  color: #777777
.personal-data__title
  font-family: Montserrat, sans-serif
  font-size: 16px
  font-style: normal
  font-weight: 600
  line-height: 21px
  letter-spacing: 0.03em
  text-align: left
  margin-bottom: 10px
.data-account-container
  margin-right: 20px
  padding: 29px 60px 60px 60px
  border-radius: 12px
  background: #191919
  &:last-child
    margin-right: 0
  @media screen and (max-width: 879px)
    padding: 29px 20px
    @media screen and (max-width: 775px)
      margin-right: 0
      margin-bottom: 50px
      &:last-child
        margin-bottom: 0
      @media screen and (max-width: 479px)
        background: #000000
.cursor-pointer
  color: #999999
.q-field__bottom
  display: none !important
.line
  margin-top: 15px
  height: 2px
  background: #777777
  margin-bottom: 5px!important
  &:last-child
    margin-bottom: 0
.input-login
  font-family: Montserrat, sans-serif
  width: 350px
  height: 30px !important
  border: 0
  font-size: 18px
  font-style: normal
  font-weight: 400
  line-height: 23px
  letter-spacing: 0em
  text-align: left
  background: #191919
  color: #fff
  outline: none
  @media screen and (max-width: 879px)
    width: 300px
    @media screen and (max-width: 479px)
      background: #000000
      width: 250px
</style>
