<template>
  <div class="">
    <div
      class="photo-and-name flex row"
      :class="{'justify-center': isScreenSizeSM}"
    >
      <div class="photo">
        <img
          class="photo-user"
          src="~assets/user-photo.svg"
          alt=""
        >
      </div>
      <div class="name-and-date-birthday">
        <p class="profile-name">
          Осинская Валерия Сергеевна
        </p>
        <div
          class="date-birthday flex row items-center"
          :class="{'justify-center': isScreenSizeSM}"
        >
          <p class="date_birthday-title">
            Дата рождения:
          </p>
          <p class="date-birthday-number">
            09.09.1996
          </p>
        </div>
      </div>
    </div>
    <div class="info-registration">
      <div class="layout-info flex row items-center">
        <div class="title-info">
          Страна
        </div>
        <div class="flex row info-content items-center">
          <div class="flag">
            <img
              class="flag_icon"
              src="~assets/flag_ru.svg"
              alt=""
            >
          </div>
          <div class="info-content-text">
            Российская Федерация
          </div>
        </div>
      </div>
      <div class="line" />
      <div class="layout-info flex row items-center">
        <div class="title-info">
          Индекс
        </div>
        <div class="flex row info-content items-center">
          <div class="info-content-text">
            433010
          </div>
        </div>
      </div>
      <div class="line" />
      <div class="layout-info flex row items-center">
        <div class="title-info">
          Город
        </div>
        <div class="flex row info-content items-center">
          <div class="info-content-text">
            Самара
          </div>
        </div>
      </div>
      <div class="line" />
      <div class="layout-info flex row items-center">
        <div class="title-info">
          Адрес проживания
        </div>
        <div class="flex row info-content items-center">
          <div class="info-content-text">
            Молодогвардейская, 117
          </div>
        </div>
      </div>
      <div class="line" />
    </div>
    <div class="certificate">
      <div class="certificate-layout flex row items-center">
        <img
          class="certificate-icon_img"
          src="~assets/id-card.svg"
          alt=""
        >
        <div class="certificate-title">
          ID - карта:
        </div>
        <div class="certificate-block flex row">
          <div class="block" />
          <div class="block" />
        </div>
      </div>
      <div class="certificate-layout flex row items-center">
        <img
          class="certificate-icon_img"
          src="~assets/passport.svg"
          alt=""
        >
        <div class="certificate-title">
          Водительское удостоверение:
        </div>
        <div class="certificate-block flex row">
          <div class="block" />
          <div class="block" />
          <div class="block" />
        </div>
      </div>
      <div class="certificate-layout flex row items-center">
        <img
          class="certificate-icon_img"
          src="~assets/drivers.svg"
          alt=""
        >
        <div class="certificate-title">
          ID - карта:
        </div>
        <div class="certificate-block flex row">
          <div class="block" />
          <div class="block" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileData',
  computed: {
    isScreenSizeSM() {
      return this.$q.screen.lt.sm;
    },
  },
};
</script>

<style scoped lang="sass">
.name-and-date-birthday
  margin-top: 12px
.certificate-title
  font-family: Inter, sans-serif
  font-size: 14px
  font-style: normal
  font-weight: 400
  line-height: 18px
  letter-spacing: 0.03em
  text-align: left
  color: #777777
.certificate-block
  margin-left: auto
.block
  width: 26px
  height: 26px
  background: #C4C4C4
  margin-left: 8px
.certificate-icon_img
  margin-right: 6px
.title-info
  font-family: Montserrat, sans-serif
  font-size: 12px
  font-style: normal
  font-weight: 500
  line-height: 16px
  letter-spacing: 0.03em
  text-align: left
  color: #777777
  width: 89px
.certificate-layout
  margin-bottom: 14px
  &:last-child
    margin-bottom: 0
.info-content-text
  font-family: Montserrat, sans-serif
  font-size: 16px
  font-style: normal
  font-weight: 500
  line-height: 21px
  letter-spacing: 0.03em
  text-align: left
.layout-info
  margin-bottom: 14px
.info-content
  margin-left: auto
.flag_icon
  width: 16px
  height: 16px
.flag
  width: 16px
  height: 16px
  border-radius: 90px
  margin-right: 13px
.photo-user
  width: 81px
  height: 81px
.photo
  width: 81px
  height: 81px
  border-radius: 90px
  margin-right: 15px
.photo-and-name
  margin-bottom: 17px
.profile-name
  font-family: Montserrat, sans-serif
  font-size: 18px
  font-style: normal
  font-weight: 500
  line-height: 23px
  letter-spacing: 0.03em
  text-align: left
  margin-bottom: 10px
.date_birthday-title
  font-family: Inter, sans-serif
  font-size: 14px
  font-style: normal
  font-weight: 400
  line-height: 18px
  letter-spacing: 0.03em
  text-align: left
  color: #777777
.date-birthday-number
  font-family: Inter, sans-serif
  font-size: 18px
  font-style: normal
  font-weight: 400
  line-height: 23px
  letter-spacing: 0.03em
  text-align: left
.line
  width: 100%
  height: 2px
  background: #777777
  margin-bottom: 13px
</style>
