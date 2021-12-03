<template>
  <div class="profile-navigate">
    <profile-nav-up-panel
      :isArrow="false"
    />
    <div class="profile-navigate-content">
      <div class="information-user flex column items-center">
        <img
          class="user-photo"
          src="~assets/user-photo.svg"
          alt=""
        >
        <p class="user-name">
          Osinskaya Valerie
        </p>
        <p class="last-online">
          в сети 08.08.20 в 12:34
        </p>
      </div>
      <div
        v-if="isActive"
        class="status-account flex column items-center"
      >
        <p class="status-account-title">
          Анонимный аккаунт
        </p>
        <p class="status-account-text">
          Чтобы получить доступ к  переводам и торгам, Вам необходимо пройти
          онлайн-верификацию
        </p>
        <a
          href="#"
          class="is-not-activate"
        >Пройти верификацию</a>
      </div>
      <div
        v-else
        class="status-account flex column items-center"
      >
        <p class="status-account-title">
          Личный аккаунт
        </p>
        <p class="status-account-text">
          Вы можете пройти верификацию повторно, если
          Ваши данные изменились или Вы обновили документ
        </p>
        <a
          class="is-activate"
          @click="isActiveModal = true"
        >Верификация пройдена</a>
      </div>
      <div class="button-profile">
        <p class="button-profile-text">
          Личные данные
        </p>
        <div class="button-profile__btn line-bottom flex row">
          <div class="is-online"
               :class="{'is-not-online': !isOnline}">
            <img
              class="icon-btn-profile"
              src="~assets/is-online.svg"
              alt=""
            >
          </div>
          <div class="text-btn-profile">
            Статус в сети
          </div>
          <input
            type="checkbox"
            v-model="isOnline"
            class="toggle-button"
          >
        </div>
        <profile-router-btn
          :img-active="'user-data-grey.svg'"
          :img-not-active="'user-data.svg'"
          :title="'Личные данные'"
          :url-link="'/profile/personal-data'"
        />
      </div>
      <div class="button-profile">
        <p class="button-profile-text">
          Настройки
        </p>
        <profile-router-btn
          :img-active="'notifications-grey.svg'"
          :img-not-active="'notifications.svg'"
          :title="'Уведомления'"
          :url-link="'/profile/notifications'"
        />
        <profile-router-btn
          :img-active="'Subtract-grey.svg'"
          :img-not-active="'Subtract.svg'"
          :title="'Безопасность'"
          :url-link="'/profile/safety'"
        />
      </div>
    </div>
    <VerificationAccount
      class="row justify-center items-center test"
      :is-active-modal="isActiveModal"
      @close="isActiveModal = false"
    />
  </div>
</template>

<script>
import ProfileRouterBtn from 'layouts/layout-profile/profile-router-btn';
import ProfileNavUpPanel from 'layouts/layout-profile/profile-nav-up-panel';
import VerificationAccount from 'components/modal-verification/verification-account';

export default {
  name: 'ProfileNavigate',
  data: () => ({
    isOnline: true,
    isActive: false,
    isActiveModal: false,
  }),
  components: {
    ProfileRouterBtn,
    ProfileNavUpPanel,
    VerificationAccount,
  },
};
</script>

<style scoped lang="sass">
.test
  width: 100%
.button-profile-text
  font-family: Inter, sans-serif
  font-size: 14px
  font-style: normal
  font-weight: 600
  line-height: 17px
  letter-spacing: -0.15000000596046448px
  text-align: left
  color: #FFFFFF
  opacity: 35%
  margin-top: 20px
.profile-navigate-content
  @media screen and (max-width: 479px)
    padding: 40px 38px
.is-online
  background: #D8004E
  width: 30px
  height: 30px
  margin-right: 12px
  display: flex
  justify-content: center
  align-content: center
  border-radius: 90px
.is-not-online
  background: #3A3A3A !important
.icon
  width: 30px
  height: 30px
  margin-right: 12px
  background: #3A3A3A
  display: flex
  justify-content: center
  align-content: center
  border-radius: 90px
.icon-btn-profile
  width: 15px !important
.button-profile__btn
  display: flex
  justify-content: center
  align-items: center
  padding: 15px 23px 15px 23px
  background: #090909
.toggle-button
  margin-left: auto
  position: relative
  display: inline-block
  width: 45px
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

    width: 20px
    height: 20px
    background-color: #FFFFFF
    border-radius: 50%

    transform: translateX(0)
  &:checked:after
    transform: translateX(calc(100% + 3px))
    background-color: #fff
  &:checked
    background-color: #D8004E
.line-bottom
  border-bottom: #777777 0.5px solid
.profile-navigate
  width: 100%
  height: 780px
  background: #000000 !important
.user-name
  margin-top: 30px
  font-family: Montserrat, sans-serif
  font-size: 24px
  font-style: normal
  font-weight: 700
  line-height: 29px
  letter-spacing: 0.33000001311302185px
  text-align: center
.last-online
  font-family: Inter, sans-serif
  font-size: 12px
  font-style: normal
  font-weight: 400
  line-height: 16px
  letter-spacing: 0.03em
  text-align: center
  color: #999999
.user-photo
  margin-top: 22px
  width: 116px
  height: 116px
  max-width: 116px
  max-height: 116px
  border-radius: 90px
.status-account
  padding: 25px
  background: #191919
  margin: 0 15px
  border-radius: 10px
.is-not-activate
  color: #D8014E
  font-family: Montserrat, sans-serif
  font-size: 14px
  font-style: normal
  font-weight: 600
  line-height: 17px
  letter-spacing: 0em
  text-align: center
.is-activate
  color: #27AE60
  font-family: Montserrat, sans-serif
  font-size: 14px
  font-style: normal
  font-weight: 600
  line-height: 17px
  letter-spacing: 0em
  text-align: center

.status-account-text
  font-family: Inter, sans-serif
  font-size: 11px
  font-style: normal
  font-weight: 500
  line-height: 13px
  letter-spacing: 0em
  text-align: center
  color: #777777
.status-account-title
  font-family: Montserrat, sans-serif
  font-size: 14px
  font-style: normal
  font-weight: 500
  line-height: 17px
  letter-spacing: 0em
  text-align: center
</style>
