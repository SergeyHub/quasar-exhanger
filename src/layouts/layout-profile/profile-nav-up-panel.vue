<template>
  <div class="profile-navigate-button flex row line-bottom">
    <router-link
      to="/profile"
      class="nav-btn"
      v-slot="{ href, isActive }"
    >
      <a :href="href">
        <img
          v-if="isActive"
          class="img-nav-btn"
          :class="{'icon-btn-profile-active': isActive}"
          src="~assets/profile-active.svg"
          alt=""
        >
        <img
          v-else
          class="img-nav-btn"
          :class="{'icon-btn-profile-active': isActive}"
          src="~assets/profile.svg"
          alt=""
        >
      </a>
    </router-link>
    <router-link
      to="/wallets"
      class="nav-btn"
      v-slot="{ href, isActive }"
    >
      <a :href="href">
        <img
          v-if="isActive"
          class="img-nav-btn"
          :class="{'icon-btn-profile-active': isActive}"
          src="~assets/wallet-active.svg"
          alt=""
        >
        <img
          v-else
          class="img-nav-btn"
          :class="{'icon-btn-profile-active': isActive}"
          src="~assets/wallet.svg"
          alt=""
        >
      </a>
    </router-link>
    <router-link
      to="/buy-and-sell"
      class="nav-btn"
      v-slot="{ href, isActive }"
    >
      <a :href="href">
        <img
          v-if="isActive"
          class="img-nav-btn"
          :class="{'icon-btn-profile-active': isActive}"
          src="~assets/exchange-adv-active.svg"
          alt=""
        >
        <img
          v-else
          class="img-nav-btn"
          :class="{'icon-btn-profile-active': isActive}"
          src="~assets/exchange-adv.svg"
          alt=""
        >
      </a>
    </router-link>
    <router-link
      to="/t"
      class="nav-btn"
      v-slot="{ href, isActive }"
    >
      <a :href="href">
        <img
          v-if="isActive"
          class="img-nav-btn"
          :class="{'icon-btn-profile-active': isActive}"
          src="~assets/messenger-profile.svg"
          alt=""
        >
        <img
          v-else
          class="img-nav-btn"
          :class="{'icon-btn-profile-active': isActive}"
          src="~assets/messenger-profile.svg"
          alt=""
        >
      </a>
    </router-link>
    <div
      v-if="isWallet"
      class="link-back-profile"
    >
      <img
        v-if="isScreenSizeSM"
        @click="$emit('mobilecheck')"
        src="~assets/chevron_left.svg"
        alt=""
      >
    </div>
    <router-link
      v-else-if="isWalletTransfer"
      to="/wallets"
      class="link-back-profile"
    >
      <img
        v-if="isScreenSizeSM"
        class="link-back-profile"
        src="~assets/chevron_left.svg"
        alt=""
      >
    </router-link>
    <router-link
      v-else-if="isArrow"
      to="/profile"
      class="link-back-profile"
    >
      <img
        v-if="isScreenSizeSM"
        class="link-back-profile"
        src="~assets/chevron_left.svg"
        alt=""
      >
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'ProfileNavUpPanel',
  computed: {
    isScreenSizeSM() {
      return this.$q.screen.lt.sm;
    },
  },
  props: {
    isArrow: {
      type: Boolean,
      default: true,
    },
    isWallet: {
      type: Boolean,
      default: false,
    },
    isWalletTransfer: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped lang="sass">
.icon-btn-profile-active
  border-bottom: 3px #FFFFFF solid
  background: #1D1D1D
.link-back-profile
  margin: auto 16px auto auto
.nav-btn
  width: 49px !important
  height: 49px !important
.img-nav-btn
  padding: 11px
  width: 49px !important
  height: 49px !important
.line-bottom
  border-bottom: #777777 0.5px solid
.mobile_hide
  display: none
  @media (max-width: 767px)
    display: block
    width: 10%
    position: absolute
    right: 3%
    top: 11%
</style>
