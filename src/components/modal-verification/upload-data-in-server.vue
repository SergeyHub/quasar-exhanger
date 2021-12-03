<template>
  <div class="flex justify-center items-center">
    <div class="upload-photo-container flex column items-center justify-center">
      <div class="upload-data-img">
        <img src="~assets/arrow-activate-account.svg" alt="">
      </div>
      <div class="upload-data-title">
        Спасибо за запрос!
      </div>
      <div class="upload-data-text">
        Ваши данные были отправлены на верификацию.
        Это может занять до 24 часа. Мы сообщим
        Вам через e-mail как только аккаунт будет верифицирован.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UploadDataInServer',
};
</script>

<style scoped lang="sass">
.upload-data-img
  margin-bottom: 60px
  @media screen and (max-width: 479px)
    margin-bottom: 32px
.upload-data-title
  margin-bottom: 30px
  font-family: Montserrat, sans-serif
  font-size: 16px
  font-style: normal
  font-weight: 600
  line-height: 21px
  letter-spacing: 0.03em
  text-align: left
.upload-data-text
  width: 470px
  max-width: 470px
  font-family: Montserrat, sans-serif
  font-size: 14px
  font-style: normal
  font-weight: 500
  line-height: 18px
  letter-spacing: 0.03em
  text-align: center
  color: #999999
  @media screen and (max-width: 479px)
    width: 250px
.upload-photo-container
  width: 100%
  margin-right: 20px
  padding: 100px 21px
  border-radius: 12px
  background: #191919
  &:last-child
    margin-right: 0
  @media screen and (max-width: 1172px)
    padding: 56px 51px
    margin-right: 0
    @media screen and (max-width: 479px)
      padding: 0
      background: #000000
      width: 300px
</style>
