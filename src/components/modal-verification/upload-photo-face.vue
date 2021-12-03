<template>
  <div class="row justify-center">
    <div class="upload-photo-container justify-center">
      <q-file
        class="upload-file"
        borderless
        v-model="uploadImageFirst"
        dark
        max-files="1"
      >
        <template v-slot:append>
          <img
            @click.stop
            src="~assets/upload-cloud.svg"
            alt=""
            class="img-upload"
          >
          <div
            @click.stop
            class="upload-title"
          >
            Загрузить файл
          </div>
        </template>
        <template v-slot:prepend>
          <div class="line" />
          <div
            style="width: 200px"
            @click.stop
            class="upload-text"
          >
            или перетащите файл в эту область
          </div>
        </template>
      </q-file>
    </div>
    <div
      class="upload-photo-container"
      v-if="!isScreenSizeMD"
    />
  </div>
</template>

<script>
export default {
  computed: {
    isScreenSizeMD() {
      return this.$q.screen.lt.md;
    },
  },
  name: 'UploadPhotoFace',
  data: () => ({
    uploadImageFirst: '',
  }),
};
</script>

<style scoped lang="sass">
.line
  background: #5AC06A
  width: 115px
  height: 4px
  position: absolute
  margin-left: auto
  margin-right: auto
  left: 0
  right: 0
.img-upload
  position: absolute
  margin-left: auto
  margin-right: auto
  left: 0
  right: 0
  top: -50%
.upload-title
  position: absolute
  margin-left: auto
  margin-right: auto
  left: 0
  right: 0
  font-family: Montserrat, sans-serif
  font-size: 14px
  font-style: normal
  font-weight: 600
  line-height: 18px
  letter-spacing: 0.03em
  text-align: center
  top: 100%
  color: #5AC06A
.upload-text
  position: absolute
  margin-left: auto
  margin-right: auto
  left: 0
  right: 0
  font-family: Montserrat, sans-serif
  font-size: 14px
  font-style: normal
  font-weight: 500
  line-height: 18px
  letter-spacing: 0.03em
  text-align: center
  color: #999999
  top: 200%
.upload-file
  width: 449px!important
  height: 200px !important
  @media screen and (max-width: 479px)
    width: 300px !important
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
