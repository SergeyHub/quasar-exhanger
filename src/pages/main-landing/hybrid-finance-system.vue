<template>
  <div
    class="flex column full-width items-center page-width"
  >
    <div class="font-size-24 margin-top-80">
      Гибридная финансовая система
    </div>
    <div class="margin-top-80 flex column full-width no-wrap items-center">
      <div class="line-block-wrapper justify-center">
        <div class="flex block-wrapper col">
          <img
            class="self-start icon-style"
            alt="pyramid"
            src="~assets/wallet.svg"
          >
          <div class="margin-text">
            Создание фиатных и криптокошельков
          </div>
        </div>

        <div class="flex block-wrapper col margin-block-info">
          <img
            class="self-start icon-style"
            alt="pyramid"
            src="~assets/circle-two-side-arrow.svg"
          >
          <div class="margin-text">
            Быстрый ввод и вывод фиатных средств
          </div>
        </div>

        <div class="flex block-wrapper col margin-block-info">
          <img
            class="self-start icon-style"
            alt="pyramid"
            src="~assets/circle-arrows.svg"
          >
          <div class="margin-text">
            Множество шлюзов для ввода/вывода криптовалют
          </div>
        </div>
      </div>

      <div class="line-block-wrapper justify-center margin-top-80">
        <div class="flex block-wrapper col">
          <img
            class="self-start icon-style"
            alt="pyramid"
            src="~assets/wallet-2.svg"
          >
          <div class="margin-text">
            Выпуск виртуальных и пластиковых карт
          </div>
        </div>

        <div class="flex block-wrapper col margin-block-info">
          <img
            class="self-start icon-style"
            alt="pyramid"
            src="~assets/ellipsed-arrow.svg"
          >
          <div class="margin-text">
            Обмен валют между своими счетами
          </div>
        </div>

        <div class="flex block-wrapper col margin-block-info">
          <img
            class="self-start icon-style"
            alt="pyramid"
            src="~assets/ball-arrow.svg"
          >
          <div class="margin-text">
            Мгновенные переводы внутри системы
          </div>
        </div>
      </div>

      <div class="flex items-center justify-center">
        <button class="start-work-button margin-bottom-top-button">
          Начать работу
        </button>
      </div>

      <div
        class="flex row justify-between info-block-wrapper full-width"
      >
        <img
          class="responsive-image image-max-width"
          alt="pyramid"
          src="~assets/chart.svg"
        >
        <div class="flex column align-items-center">
          <div class="font-size-24 font-weight-500 title-wrapper">
            Удобная торговая площадка
          </div>
          <div class="margin-top-40 font-size-16">
            <div>— Операции с криптовалютами</div>
            <div>— Торги без комиссий</div>
            <div>— Мгновенный обмен</div>
            <div>— Операции с фиатными валютами</div>
          </div>

          <button class="start-work-button margin-top-40">
            Начать торги
          </button>
        </div>
      </div>

      <div class="flex row justify-between padding-top-180 info-block-wrapper full-width">
        <img
          class="responsive-image image-max-width"
          alt="pyramid"
          src="~assets/messenger.svg"
        >
        <div class="flex column align-items-center">
          <div class="font-size-24 font-weight-500 title-wrapper">
            Встроенный безопасный чат
          </div>
          <div class="margin-top-40 font-size-16">
            <div>— Транзакции в диалогах</div>
            <div>— Групповые чаты</div>
            <div>— Звонки и конференции</div>
            <div>— Сквозное шифрование</div>
          </div>

          <button class="start-work-button margin-top-40">
            Начать диалог
          </button>
        </div>
      </div>

      <div class="items-center flex justify-center">
        <start-work-button class="btn-margins" />
      </div>
    </div>
  </div>
</template>

<script>
import StartWorkButton from 'components/start-work-button';

export default {
  name: 'HybridFinanceSystem',
  components: { StartWorkButton },
};
</script>

<style lang="sass" scoped>
@import "src/css/app"

.margin-top-80
  margin-top: 80px

.block-width
  max-width: 150px

.icon-style
  margin-bottom: 25px
  max-width: 30px

.margin-block-info
  margin-left: 20px

.margin-top-40
  margin-top: 40px

.start-work-button
  width: 160px
  height: 35px
  border: 1px solid #FFFFFF
  background-color: black
  color: white

.margin-bottom-top-button
  margin: 90px 0 140px 0

.padding-top-180
  padding-top: 180px

.btn-margins
  margin-bottom: 100px
  margin-top: 40px

.image-max-width
  max-width: 300px
  max-height: 380px

.line-block-wrapper
  display: flex
  max-width: 535px

.block-wrapper
  flex-direction: column

.title-wrapper
  text-align: center

@media only screen and (max-width: $layout-breakpoint-extra-small)
  .line-block-wrapper
    display: flex
    flex-direction: column

  .block-wrapper
    flex-direction: row
    flex-wrap: nowrap

  .margin-block-info
    margin: 0

  .margin-text
    margin-left: 20px

  .align-items-center
    align-items: center

  .info-block-wrapper
    justify-content: center
</style>
