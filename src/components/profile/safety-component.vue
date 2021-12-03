<template>
  <div class="safety-component">
    <div class="safety-component-title">
      Настройки безопасности
    </div>
    <div class="line" />
    <div class="safety-setting flex row items-center">
      <div class="safety-setting-title-and-text">
        <div class="safety-setting-title">
          Автоматический выход из системы
        </div>
        <div
          class="safety-setting-text"
          style="margin-bottom: 25px"
        >
          Для удобства работы в системе, Вы можете настроить,
          через какой период времени будет происходить
          автоматический выход (logout) из личного кабинета.
        </div>
      </div>
      <div
        class="safety-setting-select-and-btn flex items-center"
        :class="{
          'row': !isScreenSizeMD || isScreenSizeSM,
          'column': isScreenSizeMD && !isScreenSizeSM
        }"
      >
        <div
          class="safety-setting-select"
          :class="{'flex order-last': isScreenSizeMD && !isScreenSizeSM}"
        >
          <q-select
            class="safety-setting-select__select"
            borderless
            dark
            bg-color="none"
            v-model="valueAutoLogout"
            :options="autoLogout"
            color="white"
            style="width: 110px !important; height: 32px !important;"
          />
        </div>
        <div class="safety-setting-btn">
          <input
            type="checkbox"
            v-model="isAutoLogout"
            class="toggle-button"
          >
        </div>
      </div>
    </div>
    <div class="line" />
    <div class="safety-setting flex row items-center">
      <div class="safety-setting-title-and-text">
        <div class="safety-setting-title">
          Привязка к IP адресам
        </div>
        <div class="safety-setting-text">
          Вы можете ограничить доступ к своему аккаунту,
          указав определённые IP адреса или диапазоны IP адресов. Обратите
          внимание, что после активации данной настройки,
          доступ к аккаунту будет возможен только с указанных IP адресов!
        </div>
        <p class="safety-setting-low-text flex row">
          <span><span class="highlight">Внимание!</span> Как только вы активируете данную функцию,
            войти в аккаунт станет</span> возможно только с указанных IP адресов!
        </p>
      </div>
      <div
        class="safety-setting-select-and-btn flex items-center"
        :class="{
          'row': !isScreenSizeMD || isScreenSizeSM,
          'column': isScreenSizeMD && !isScreenSizeSM
        }"
      >
        <div
          class="safety-setting-select"
          :class="{'flex order-last': isScreenSizeMD && !isScreenSizeSM}"
        >
          <q-select
            class="safety-setting-select__select"
            borderless
            dark
            bg-color="none"
            v-model="valueIp"
            :options="ipList"
            color="white"
            style="width: 110px !important; height: 32px !important;"
          />
        </div>
        <div class="safety-setting-btn">
          <input
            type="checkbox"
            v-model="isBindingIp"
            class="toggle-button"
          >
        </div>
      </div>
      <div class="safety-settings-ip row flex justify-between">
        <div class="safety-settings-input">
          <div class="safety-settings-input-title">
            IP адреса
          </div>
          <add-input-on-click-btn :items="ipAddress" />
        </div>
        <div class="safety-settings-input">
          <div class="safety-settings-input-title">
            Диапазон IP адресов
          </div>
          <add-input-range-on-click-btn :items="ipRange" />
        </div>
        <div class="safety-settings-input">
          <div class="safety-settings-input-title">
            Диапазон IP адресов по странам
          </div>
          <add-input-on-click-btn :items="ipRangeCountry" />
        </div>
      </div>
    </div>
    <div class="line" />
    <div class="safety-setting flex row items-center">
      <div class="safety-setting-title-and-text">
        <div class="safety-setting-title">
          Интеллектуальная идентификация
        </div>
        <div class="safety-setting-text">
          При входе в систему Ваше устройство будет автоматически проверяться
          по ряду параметров, и в случае если какой-то из параметров окажется подозрительным,
          для входа Вам потребуется ввести дополнительный код,
          который будет отправлен выбранным Вами способом.
        </div>
        <div class="safety-setting-low-text row flex">
          <p class="flex row">
            Стоимость каждого SMS-сообщения <span class="highlight-green">$ 0,1</span>
          </p>
          <p class="safety-setting-low-text__margin flex row">
            Доступно только для верифицированных пользователей
          </p>
        </div>
      </div>
      <div
        class="safety-setting-select-and-btn flex items-center"
        :class="{
          'row': !isScreenSizeMD || isScreenSizeSM,
          'column': isScreenSizeMD && !isScreenSizeSM
        }"
      >
        <div
          class="safety-setting-select"
          :class="{'flex order-last': isScreenSizeMD && !isScreenSizeSM}"
        >
          <q-select
            class="safety-setting-select__select"
            borderless
            dark
            bg-color="none"
            v-model="valueIdentification"
            :options="identifications"
            color="white"
            style="width: 110px !important; height: 32px !important;"
          />
        </div>
        <div class="safety-setting-btn">
          <input
            type="checkbox"
            v-model="isIdentifications"
            class="toggle-button"
          >
        </div>
      </div>
    </div>
    <div class="line" />
    <div class="safety-setting flex row items-center">
      <div class="safety-setting-title-and-text">
        <div class="safety-setting-title">
          Двухфакторная аутентификация (2FA)
        </div>
        <div class="safety-setting-text">
          После активации данной настройки, Ваш аккаунт
          и транзакции будут защищены одноразовым паролем,
          который меняется каждые 30 секунд. Пароль может
          генерироваться в приложении или чат-ботом.
        </div>
      </div>
      <div
        class="safety-setting-select-and-btn flex items-center"
        :class="{
          'row': !isScreenSizeMD || isScreenSizeSM,
          'column': isScreenSizeMD && !isScreenSizeSM
        }"
      >
        <div class="safety-setting-btn">
          <input
            type="checkbox"
            v-model="isTFAuth"
            class="toggle-button"
          >
        </div>
      </div>
    </div>
    <div class="line" />
    <div class="safety-setting flex row items-center">
      <div class="safety-setting-title-and-text">
        <div class="safety-setting-title">
          Платежный пароль
        </div>
        <div class="safety-setting-text">
          При совершении транзакции у Вас будет запрашиваться платёжный пароль.
        </div>
      </div>
      <div
        class="safety-setting-select-and-btn flex items-center"
        :class="{
          'row': !isScreenSizeMD || isScreenSizeSM,
          'column': isScreenSizeMD && !isScreenSizeSM
        }"
      >
        <div class="safety-setting-btn">
          <input
            type="checkbox"
            v-model="isPayPassword"
            class="toggle-button"
          >
        </div>
      </div>
      <div class="safety-setting-input-pay-pass flex column justify-center">
        <q-input
          dark
          type="password"
          borderless
          :readonly="!isPayPassword"
          :disable="!isPayPassword"
          placeholder="Платёжный пароль"
          v-model="valuePayPassword"
          class="password-input__input"
          style="width: 300px; height: 42px;"
        />
        <q-input
          dark
          borderless
          type="password"
          :readonly="!isPayPassword"
          :disable="!isPayPassword"
          placeholder="Введите пароль повторно"
          v-model="valuePayPasswordTo"
          class="password-input__input"
          style="width: 300px; height: 42px;"
        />
        <div
          class="password-input__btn flex items-center justify-center"
          :class="{'password-input__btn__active': isPayPassword}"
        >
          Установить платёжный пароль
        </div>
      </div>
    </div>
    <div class="line" />
    <div class="safety-setting flex row items-center">
      <div class="safety-setting-title-and-text">
        <div class="safety-setting-title">
          Смена пароля для входа в аккаунт
        </div>
        <div class="safety-setting-text">
          Для большей безопасности вашего аккаунта
          рекомендуем менять пароль не реже 1 раза в 3 месяца
        </div>
      </div>
      <div
        class="safety-setting-select-and-btn flex items-center"
        :class="{
          'row': !isScreenSizeMD || isScreenSizeSM,
          'column': isScreenSizeMD && !isScreenSizeSM
        }"
      >
        <div class="safety-setting-btn">
          <input
            type="checkbox"
            v-model="isResetPassword"
            class="toggle-button"
          >
        </div>
      </div>
      <div class="safety-setting-input-pay-pass flex justify-center column">
        <q-input
          type="password"
          dark
          borderless
          :readonly="!isResetPassword"
          :disable="!isResetPassword"
          placeholder="Старый пароль"
          v-model="valueResetPasswordOld"
          class="password-input__input"
          style="width: 300px; height: 42px;"
        />
        <q-input
          type="password"
          dark
          borderless
          :readonly="!isResetPassword"
          :disable="!isResetPassword"
          placeholder="Новый пароль"
          v-model="valueResetPasswordNew"
          class="password-input__input"
          style="width: 300px; height: 42px;"
        />
        <q-input
          type="password"
          dark
          borderless
          :readonly="!isResetPassword"
          :disable="!isResetPassword"
          placeholder="Введите новый пароль"
          v-model="valueResetPasswordNewTo"
          class="password-input__input"
          style="width: 300px; height: 42px;"
        />
        <div
          class="password-input__btn flex items-center justify-center"
          :class="{'password-input__btn__active': isResetPassword}"
        >
          Сменить пароль
        </div>
      </div>
    </div>
    <div class="line" />
    <div class="safety-setting flex row items-center">
      <div class="safety-setting-title-and-text">
        <div class="safety-setting-title">
          Автоматическая смена пароля
        </div>
        <div class="safety-setting-text">
          Рекомендуем включить данную функцию, для того,
          чтобы система могла вам напомнить о плановой смене пароля
        </div>
      </div>
      <div
        class="safety-setting-select-and-btn flex items-center"
        :class="{
          'row': !isScreenSizeMD || isScreenSizeSM,
          'column': isScreenSizeMD && !isScreenSizeSM
        }"
      >
        <div
          class="safety-setting-select"
          :class="{'flex order-last': isScreenSizeMD && !isScreenSizeSM}"
        >
          <q-select
            class="safety-setting-select__select"
            borderless
            dark
            bg-color="none"
            v-model="valueGeneratePassword"
            :options="autoGeneratePasswords"
            color="white"
            style="min-width: 110px !important; height: 32px !important;"
          />
        </div>
        <div class="safety-setting-btn">
          <input
            type="checkbox"
            v-model="isAutoResetPassword"
            class="toggle-button"
          >
        </div>
      </div>
    </div>
    <div class="line" />
    <div class="safety-setting flex row items-center">
      <div class="safety-setting-title-and-text">
        <div class="safety-setting-title">
          SMS-идентификация
        </div>
        <div class="safety-setting-text">
          После активации данной настройки, для входа в аккаунт Вам необходимо
          будет ввести одноразовый код, который будет отправлен сообщением Вам на телефон.
        </div>
        <div class="safety-setting-low-text row flex">
          <p class="flex row">
            Стоимость каждого SMS-сообщения <span class="highlight-green">$ 0,1</span>
          </p>
          <p class="safety-setting-low-text__margin flex row">
            Доступно только для верифицированных пользователей
          </p>
        </div>
      </div>
      <div
        class="safety-setting-select-and-btn flex items-center"
        :class="{
          'row': !isScreenSizeMD || isScreenSizeSM,
          'column': isScreenSizeMD && !isScreenSizeSM
        }"
      >
        <div
          class="safety-setting-select"
          :class="{'flex order-last': isScreenSizeMD && !isScreenSizeSM}"
        >
          <q-select
            class="safety-setting-select__select"
            borderless
            dark
            bg-color="none"
            v-model="valueWallet"
            :options="wallets"
            color="white"
            style="min-width: 110px !important; height: 32px !important;"
          />
        </div>
        <div class="safety-setting-btn">
          <input
            type="checkbox"
            v-model="isSms"
            class="toggle-button"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AddInputOnClickBtn from 'components/profile/add-input-on-click-btn';
import AddInputRangeOnClickBtn from 'components/profile/add-input-range-on-click-btn';

export default {
  name: 'SafetyComponent',
  components: {
    AddInputOnClickBtn,
    AddInputRangeOnClickBtn,
  },
  data: () => ({
    // password input value
    valuePayPassword: '',
    valuePayPasswordTo: '',
    valueResetPasswordOld: '',
    valueResetPasswordNew: '',
    valueResetPasswordNewTo: '',
    // input
    readonly: false,
    disable: false,
    // toggle
    isAutoLogout: false,
    isBindingIp: false,
    isIdentifications: false,
    isTFAuth: false,
    isPayPassword: false,
    isResetPassword: false,
    isAutoResetPassword: false,
    isSms: false,
    // input value
    valueAutoLogout: null,
    valueIp: null,
    valueIdentification: null,
    valueGeneratePassword: null,
    valueWallet: null,
    // list input
    autoLogout: [
      '5 минут',
      '10 минут',
      '15 минут',
      '20 минут',
      '25 минут',
      '30 минут',
      '35 минут',
      '40 минут',
      '45 минут',
      '50 минут',
      '55 минут',
      '60 минут',
    ],
    ipList: [
      'IP',
    ],
    identifications: [
      'SMS',
      'E-mail',
    ],
    autoGeneratePasswords: [
      'раз в месяц',
    ],
    wallets: [
      '14 352.71 RUB',
    ],
    ipAddress: [
      {
        value: '',
      },
      {
        value: '',
      },
    ],
    ipRange: [
      {
        initialIp: '',
        endIp: '',
      },
    ],
    ipRangeCountry: [
      {
        value: 'Россия',
      },
      {
        value: 'Украина',
      },
    ],
  }),
  computed: {
    isScreenSizeMD() {
      return this.$q.screen.lt.md;
    },
    isScreenSizeSM() {
      return this.$q.screen.lt.sm;
    },
  },
};
</script>

<style scoped lang="sass">
.safety-setting-input-pay-pass
  width: 100%
.safety-setting-btn
  margin-left: auto
.password-input__btn__active
  background: #5AC06A !important
  cursor: pointer
.password-input__btn
  width: 300px
  cursor: not-allowed
  font-family: Montserrat, sans-serif
  font-size: 16px
  font-style: normal
  font-weight: 600
  line-height: 21px
  letter-spacing: 0.03em
  text-align: left
  background: #7FA48E
  border-radius: 10px
  height: 40px
  margin-top: 22px
.password-input__input
  margin-top: 22px
  padding-left: 10px
  border: 1px solid #444444
  border-radius: 10px
.safety-settings-input-title
  margin-top: 37px
  font-family: Montserrat, sans-serif
  font-size: 14px
  font-style: normal
  font-weight: 600
  line-height: 17px
  letter-spacing: 0em
  text-align: left
  margin-bottom: 24px
.safety-settings-ip
  width: 100%
.safety-setting-low-text
  margin-top: 6px
  margin-right: 20px
  font-family: Montserrat, sans-serif
  font-size: 12px
  font-style: normal
  font-weight: 400
  line-height: 16px
  letter-spacing: 0.03em
  text-align: left
  color: #999999
.highlight
  color: #D8004E
.highlight-green
  color: #5AC06A
  margin-left: 3px
.safety-component-title
  font-family: Montserrat, sans-serif
  font-size: 20px
  font-style: normal
  font-weight: 600
  line-height: 26px
  letter-spacing: 0.03em
  text-align: left

.safety-setting-title
  margin-bottom: 15px
  font-family: Montserrat, sans-serif
  font-size: 16px
  font-style: normal
  font-weight: 600
  line-height: 21px
  letter-spacing: 0.03em
  text-align: left
.safety-setting-text
  font-family: Montserrat, sans-serif
  font-size: 14px
  font-style: normal
  font-weight: 400
  line-height: 18px
  letter-spacing: 0.03em
  text-align: left
  color: #999999
.safety-setting-select
  margin-right: 35px
  padding-left: 10px
  box-sizing: border-box
  background: #393939
  border-radius: 10px
  text-align: center
  @media screen and (max-width: 780px)
    margin-top: 20px
    margin-right: 0
    @media screen and (max-width: 481px)
      margin-top: 0
      margin-right: 35px
.safety-setting-select-and-btn
  margin-left: auto
.safety-setting-title-and-text
  width: 55%
  @media screen and (max-width: 780px)
    width: 40%
    @media screen and (max-width: 481px)
      width: 100%
.safety-component
  padding: 31px 40px
  box-sizing: border-box
  background: #191919
  border-radius: 30px
  width: 80%
  @media screen and (max-width: 481px)
    padding: 0
    background: none
    padding-bottom: 38px
.line
  width: 100%
  height: 0.5px
  background: #444444
  margin: 42px 0
.toggle-button
  margin-left: auto
  position: relative
  display: inline-block
  width: 37px
  height: 25px
  vertical-align: top
  background: #555555
  border-radius: 30px
  outline: none
  cursor: pointer
  -webkit-appearance: none
  -moz-appearance: none
  appearance: none
  &::after
    content: ""

    display: inline-block
    position: absolute
    left: 0.5px
    top: 2.5px

    width: 19px
    height: 19px
    background-color: #FFFFFF
    border-radius: 50%

    transform: translateX(0)
  &:checked:after
    transform: translateX(calc(100% - 1.5px))
    background-color: #fff
  &:checked
    background-color: #D8004E
</style>
