<template>
  <div class="about-work">
    <div class="about-work__container">
      <h2 class="title-1 text-center about-work__title">
        Работа у нас
      </h2>
      <div class="sub text-center about-work__sub">
        Открытые вакансии
      </div>
      <div class="about-work__frame">
        <div class="about-work__list">
          <p>Вакансия номер 1</p>
          <p>Вакансия номер 2</p>
          <p>Вакансия номер 3</p>
        </div>
        <div class="about-work__resume">
          <div class="about-work__resume__file">
            <q-file
              color="grey-3"
              outlined
              label-color="white"
              v-model="model"
              label="Прикрепить резюме"
            >
              <template v-slot:append>
                <q-icon
                  name="attachment"
                  color="red"
                />
              </template>
            </q-file>
          </div>
          <button class="btn btn-border">
            Отправить
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AboutWork',
  data() {
    return {
      model: null,
    };
  },
};
</script>

<style lang="sass">
@import "src/css/app"
.about-work
  width: 100%
  max-width: 900px
  margin: 0 auto
  margin-top: 133px
  @media only screen and (max-width: $laptop)
    max-width: 657px
    margin-right: auto
    margin-left: auto
  @media only screen and (max-width: $mobile)
    margin-top: 92px
  &__container
    border-bottom: 1px solid #444444
    padding-bottom: 91px
    @media only screen and (max-width: $mobile)
      margin-left: 35px
      margin-right: 35px
  &__title
    margin: 0 0 16px 0
    font-weight: 500
    font-size: 32px
    line-height: 113.84%
  &__sub
    font-weight: 500
    font-size: 20px
    line-height: 135%
    color: #999999
  &__frame
    margin-top: 63px
    position: relative
    display: flex
    justify-content: center
    @media only screen and (max-width: $mobile)
      display: grid
      grid-template-columns: 1fr
    &:before
      content: ''
      height: 89px
      width: 1px
      background: #444444
      position: absolute
      left: 50%
      top: 0
      @media only screen and (max-width: $mobile)
        display: none
  &__list
    font-weight: 600
    font-size: 14px
    line-height: 203%
    width: 50%
    display: flex
    justify-content: flex-end
    flex-direction: column
    align-items: flex-end
    padding-right: 51px
    @media only screen and (max-width: $mobile)
      width: auto
      padding: 0
      justify-content: flex-start
      align-items: flex-start
    p
      margin: 0
      min-width: 211px
  &__resume
    width: 50%
    padding-left: 103px

    @media only screen and (max-width: $mobile)
      padding-left: 0
      width: auto
    &__file
      max-width: 230px
      margin-left: -13px
      margin-bottom: 5px
      @media only screen and (max-width: $mobile)
        margin-bottom: 15px
        margin-top: 20px
.q-field__label
  text-decoration: underline !important
  font-weight: normal
  font-size: 14px
  line-height: 135%
.q-field__native
  color: white !important
.btn-border
  border: 1px solid #ffffff
  background: #000000
  color: #ffffff
  font-weight: 400
  font-size: 14px
  line-height: 113.84%
  padding: 0 35px
</style>
