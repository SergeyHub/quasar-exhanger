<template>
  <div
    class="btn-margin-top"
  >
    <div class="row">
      <router-link
        to="/t"
        v-slot="{ href, isActive }"
        class="font-size-12 font-weight-500 lh-15 link"
      >
        <a
          :href="href"
          :class="{'active-link': isActive}"
        >
          <img
            class="img-button"
            src="~assets/buy-crypto.svg"
            alt=""
          >
          <p class="text-button">
            Купить/Продать
          </p>
        </a>
      </router-link>
      <router-link
        v-slot="{ href, isActive }"
        to="/t"
        class="font-size-12 font-weight-500 lh-15 link"
      >
        <a
          :href="href"
          :class="{'active-link': isActive}"
        >
          <img
            class="img-button"
            src="~assets/replenish.svg"
            alt=""
          >
          <p class="text-button">
            Пополнить
          </p>
        </a>
      </router-link>
    </div>
    <div class="row">
      <router-link
        v-slot="{ href, isActive }"
        to="/wallets/transfer"
        class="font-size-12 font-weight-500 lh-15 link"
      >
        <a
          :href="href"
          :class="{'active-link': isActive}"
        >
          <img
            class="img-button"
            src="~assets/transfer.svg"
            alt=""
          >
          <p class="text-button">
            Перевести
          </p>
        </a>
      </router-link>
      <router-link
        to="/t"
        class="font-size-12 font-weight-500 lh-15 link"
        v-slot="{ href, isActive }"
      >
        <a
          :href="href"
          :class="{'active-link': isActive}"
        >
          <img
            class="img-button"
            src="~assets/exchange.svg"
            alt=""
          >
          <p class="text-button">
            Обменять
          </p>
        </a>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderBtnMobile',
};
</script>

<style scoped lang="sass">
.btn-margin-top
  margin-top: 27px
.active-link
  background: #000000 !important
  border: #FFFFFF 0.5px solid !important
.link
  text-decoration: none
  display: flex
  flex-direction: row
  width: 160px
  box-sizing: border-box
  color: #FFFFFF
  font-family: Montserrat, sans-serif
  font-size: 12px
  font-style: normal
  font-weight: 500
  line-height: 18px
  letter-spacing: 0.03em
  text-align: left
  border: #333333 0.5px solid
  height: 59px
  padding: 5px 8px 5px 8px
  &:hover
    color: $positive
.text-button
  margin: auto
.img-button
  margin-right: 11px
  width: 23px
</style>
