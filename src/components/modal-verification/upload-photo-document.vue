<template>
  <div class="row justify-center">
    <div class="upload-photo-container flex column items-center">
      <div class="upload-photo-btn">
        <div class="upload-photo-btn__center-mob flex row justify-between">
          <div
            @click="uploadPhotoIdCard"
            class="upload-photo-btn__btn row flex items-center"
            :class="{'upload-photo-btn__btn-activate': isIdCard}"
          >
            <img
              class="upload-photo-btn__btn-img"
              src="~assets/id-card.svg"
              alt=""
            >
            <div class="upload-photo-btn__btn-title">
              ID-карта
            </div>
          </div>
          <div
            @click="uploadPhotoPassport"
            :class="{'upload-photo-btn__btn-activate': isPassport}"
            class="upload-photo-btn__btn row flex items-center"
          >
            <img
              class="upload-photo-btn__btn-img"
              src="~assets/passport.svg"
              alt=""
            >
            <div class="upload-photo-btn__btn-title">
              Паспорт
            </div>
          </div>
          <div
            @click="uploadPhotoDrivers"
            :class="{'upload-photo-btn__btn-activate': isDrivers}"
            class="upload-photo-btn__btn row flex items-center"
          >
            <img
              class="upload-photo-btn__btn-img"
              src="~assets/drivers.svg"
              alt=""
            >
            <div
              class="upload-photo-btn__btn-title driver"
              style="width: 120px;"
            >
              Водительское удостоверение
            </div>
          </div>
        </div>
      </div>
      <div class="upload-photo-component ">
        <upload-photo-document-id-card v-if="isIdCard" />
        <upload-photo-document-passport v-else-if="isPassport" />
        <upload-photo-document-drivers v-else-if="isDrivers" />
      </div>
    </div>
    <div class="instruction-container upload-photo-container">
      <div class="instruction-title">
        Инструкция
      </div>
      <div class="instruction-text">
        Сканируйте или фотографируйте только оригинал документа
      </div>
      <div class="instruction-text">
        Все 4 угла документа должны быть видны, края не должны быть обрезаны
      </div>
      <div class="instruction-text">
        Скан-копии / фотографии документа
        не должны содержать каких-либо дополнительных
        объектов (например, пальцев, скрепок, карандашей и т. д.)
      </div>
    </div>
  </div>
</template>

<script>
import UploadPhotoDocumentIdCard from 'components/modal-verification/upload-photo-document-id-card';
import UploadPhotoDocumentPassport from 'components/modal-verification/upload-photo-document-passport';
import UploadPhotoDocumentDrivers from 'components/modal-verification/upload-photo-document-drivers';

export default {
  name: 'UploadPhotoDocument',
  components: {
    UploadPhotoDocumentIdCard,
    UploadPhotoDocumentPassport,
    UploadPhotoDocumentDrivers,
  },
  data: () => ({
    isIdCard: false,
    isPassport: true,
    isDrivers: false,
  }),
  methods: {
    uploadPhotoIdCard() {
      this.isIdCard = true;
      this.isPassport = false;
      this.isDrivers = false;
    },
    uploadPhotoPassport() {
      this.isIdCard = false;
      this.isPassport = true;
      this.isDrivers = false;
    },
    uploadPhotoDrivers() {
      this.isIdCard = false;
      this.isPassport = false;
      this.isDrivers = true;
    },
  },
};
</script>

<style scoped lang="sass">
.upload-photo-btn__center-mob
  @media screen and (max-width: 479px)
    display: flex
    justify-content: center
.driver
  @media screen and (max-width: 479px)
    width: 250px !important
.instruction-title
  margin-bottom: 20px
  font-family: Montserrat, sans-serif
  font-size: 16px
  font-style: normal
  font-weight: 600
  line-height: 21px
  letter-spacing: 0.03em
  text-align: left
.instruction-text
  margin-bottom: 14px
  font-family: Montserrat, sans-serif
  font-size: 14px
  font-style: normal
  font-weight: 400
  line-height: 18px
  letter-spacing: 0.03em
  text-align: left
  color: #D2D2D2
  &:last-child
    margin-bottom: 0
.upload-photo-component
  margin-top: 47px
.upload-photo-btn__btn-activate
  background: #393939
.upload-photo-btn__btn
  cursor: pointer
  padding: 8px
  border-radius: 10px
.upload-photo-btn__btn-img
  margin-right: 12px
.upload-photo-btn__btn-title
  font-family: Montserrat, sans-serif
  font-size: 14px
  font-style: normal
  font-weight: 600
  line-height: 18px
  letter-spacing: 0.03em
  text-align: left
.instruction-container
  padding: 39px 50px !important
  @media screen and (max-width: 479px)
    padding: 0 !important
.upload-photo-container
  width: 470px
  height: 359px
  margin-right: 20px
  padding: 39px 21px
  border-radius: 12px
  background: #191919
  &:last-child
    margin-right: 0
  @media screen and (max-width: 1172px)
    padding: 29px 20px
    width: 500px
    margin-right: 0
    margin-bottom: 50px
    &:last-child
      margin-bottom: 0
    @media screen and (max-width: 479px)
      display: block
      padding: 0
      background: #000000
      width: 300px
</style>
