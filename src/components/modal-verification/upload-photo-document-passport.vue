<template>
  <div class="">
    <q-file
      class="upload-file"
      borderless
      v-model="uploadImageFirst"
      label="Главная страница"
      dark
      max-files="1"
    >
      <template v-slot:append>
        <div
          @click.stop
          class="upload-title"
        >
          Загрузить
        </div>
        <img
          @click.stop
          src="~assets/attachment_outlined.svg"
          alt=""
        >
      </template>
    </q-file>
    <div class="line"></div>
    <q-file
      class="upload-file"
      borderless
      v-model="uploadImageSecond"
      label="Страница с пропиской"
      dark
      max-files="1"
    >
      <template v-slot:append>
        <div
          @click.stop
          class="upload-title"
        >
          Загрузить
        </div>
        <img
          @click.stop
          src="~assets/attachment_outlined.svg"
          alt=""
        >
      </template>
    </q-file>
    <div class="line"></div>
    <q-file
      class="upload-file"
      borderless
      v-model="uploadImageThird"
      label="Страница со сведениями о ранее выданных паспортах"
      dark
      max-files="1"
    >
      <template v-slot:append>
        <div
          @click.stop
          class="upload-title"
        >
          Загрузить
        </div>
        <img
          @click.stop
          src="~assets/attachment_outlined.svg"
          alt=""
        >
      </template>
    </q-file>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  name: 'UploadPhotoDocumentPassport',
  data: () => ({
    uploadImageFirst: '',
    uploadImageSecond: '',
    uploadImageThird: '',
  }),
};
</script>

<style scoped lang="sass">
.upload-file
  width: 350px
  @media screen and (max-width: 479px)
    width: 300px
.line
  width: 200px
  height: 4px
  background: #5AC06A
  @media screen and (max-width: 479px)
    width: 170px
.q-field__label
  color: #FFF !important
.upload-title
  margin-right: 13px
  font-family: Montserrat, sans-serif
  font-size: 14px
  font-style: normal
  font-weight: 600
  line-height: 18px
  letter-spacing: 0.03em
  text-align: left
  color: #5AC06A!important

</style>
