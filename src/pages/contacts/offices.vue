<template>
  <div class="content justify-between offices-wrapper">
    <div class="font-weight-600 font-size-16 text-header">
      Офисы и филиалы
    </div>

    <div class="lane-wrapper">
      <div class="column block-width-280">
        <div class="row">
          <img
            alt="phone"
            src="~assets/point.svg"
          >
          <div class="column">
            <div class="font-size-16 font-weight-600">
              Европейский офис
            </div>
            <div class="font-size-14 info-color address-width">
              Viru Valjak 2, Tallinn, Estonia
            </div>
          </div>
        </div>
      </div>

      <div class="column block-width-280 margin-top-xs-screen">
        <div class="row">
          <img
            alt="phone"
            src="~assets/point.svg"
          >
          <div class="column">
            <div class="font-size-16 font-weight-600">
              Тихоокеанский офис
            </div>
            <div class="font-size-14 info-color address-width">
              Tana Russet Plaza, Office T19, Port Vila, Vanuatu
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Offices',
};
</script>

<style lang="sass" scoped>
@import "src/css/app"

.offices-wrapper
  border-top: 1px solid #444444
  margin-top: 50px
  padding-top: 50px
.address-width
  max-width: 175px

img
  margin-right: 20px

.block-width-280
  width: 280px

.content
  display: flex

.lane-wrapper
  display: flex
  justify-content: space-between
  width: 560px

@media (min-width: $layout-breakpoint-extra-small) and (max-width: $layout-breakpoint-small)
  .content
    flex-direction: column
    max-width: 552px
    margin: 0 auto

  .text-header
    text-align: center

  .lane-wrapper
    display: flex
    justify-content: space-between
    margin-top: 44px
    width: 100%

@media screen and (max-width: $layout-breakpoint-extra-small)
  .text-header
    margin-top: 31px
    text-align: center

  .content
    flex-direction: column
    margin: 0 auto

  .lane-wrapper
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    margin-top: 44px
    width: auto

  .margin-top-xs-screen
    margin-top: 10px
</style>
