<template>
  <router-link
    :to="urlLink"
    v-slot="{ href, isActive }"
  >
    <a
      :href="href"
      class="button-profile__btn line-bottom flex row"
      :class="{'is-mob-margin': isScreenSizeSM}"
    >
      <div
        class="icon"
        :class="{'icon-btn-profile-active': isActive}"
      >
        <img
          v-if="isActive"
          class="icon-btn-profile"
          :src="require('../../assets/' + imgActive)"
          alt=""
        >
        <img
          v-else
          class="icon-btn-profile"
          :src="require('../../assets/' + imgNotActive)"
          alt=""
        >
      </div>
      <div class="text-btn-profile">
        {{ title }}
      </div>
      <template v-if="!isScreenSizeSM">
        <img
          v-if="isActive"
          class="arrow-profile"
          src="~assets/arrow-right-green.svg"
          alt=""
        >
        <img
          v-else
          class="arrow-profile"
          src="~assets/arrow-right-grey.svg"
          alt=""
        >
      </template>
    </a>
  </router-link>
</template>

<script>
export default {
  name: 'ProfileRouterBtn',
  computed: {
    isScreenSizeSM() {
      return this.$q.screen.lt.sm;
    },
  },
  props: {
    title: {
      type: String,
    },
    urlLink: {
      type: String,
    },
    imgNotActive: {
      type: String,
    },
    imgActive: {
      type: String,
    },
  },
};
</script>

<style scoped lang="sass">
.is-mob-margin
  margin-bottom: 27px
.icon
  width: 30px
  height: 30px
  margin-right: 12px
  background: #3A3A3A
  display: flex
  justify-content: center
  align-content: center
  border-radius: 90px
.icon-btn-profile
  width: 15px
.button-profile__btn
  display: flex
  justify-content: left!important
  align-items: center
  color: #FFFFFF
  text-decoration: none
  padding: 15px 23px 15px 23px
  background: #090909
.icon-btn-profile-active
  background: #FFFFFF !important
  width: 30px
  height: 30px
  margin-right: 12px
  display: flex
  justify-content: center
  align-content: center
  border-radius: 90px
.button-profile-text
  margin: 19px 0 8px 16px
  font-family: Inter, sans-serif
  font-size: 14px
  font-style: normal
  font-weight: 600
  line-height: 17px
  letter-spacing: -0.15000000596046448px
  text-align: left
  color: #FFFFFF
  opacity: 35%
.text-btn-profile
  font-family: Inter, sans-serif
  font-size: 17px
  font-style: normal
  font-weight: 400
  line-height: 21px
  letter-spacing: -0.4099999964237213px
  text-align: center
.arrow-profile
  margin-left: auto
</style>
