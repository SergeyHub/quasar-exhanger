<template>
  <div>
    <div
      class="b-nav-bar__list flex justify-center"
    >
      <q-scroll-area
        horizontal
        borderless
        style="height: 40px; width: 400px; max-width: 350px"
      >
        <div class="row no-wrap">
          <div
            style="z-index: 3000; position: relative"
            class="b-nav-bar__item flex row items-center justify-center"
            v-for="(item, index) in items"
            @click="activateBtn(item, index)"
            :key="index"
            :class="{'btn-wallets-transfer__active': item.isActive}"
          >
            <img
              :src="item.icon"
              alt=""
              class="icon-scroll-btn"
            >
            <div class="btn-wallets-transfer__title">
              {{ item.title }}
            </div>
          </div>
        </div>
      </q-scroll-area>
    </div>
    <div class="back row">
      <img
        :src="back"
        alt=""
      >
      <div class="back-title">
        Вернуться назад
      </div>
    </div>
  </div>
</template>

<script>
import iconBack from 'assets/arrow_back.svg';

export default {
  name: 'ScrollBtnMobile',
  data: () => ({
    back: iconBack,
  }),
  props: {
    items: {
      type: Array,
    },
  },
  methods: {
    activateBtn(items, index) {
      this.$emit('methodSending', index);
      this.items.forEach((i) => {
        i.isActive = false;
      });
      items.isActive = true;
    },
  },
};
</script>

<style scoped lang="sass">
.back
  margin-top: 24px
  padding: 0 10px
.back-title
  font-family: Montserrat, sans-serif
  font-size: 14px
  font-style: normal
  font-weight: 400
  line-height: 20px
  letter-spacing: 0em
  text-align: left
  color: #27AE60
  margin-left: 8px
.icon-scroll-btn
  margin-right: 5px !important
.btn-wallets-transfer__icon
  margin-right: 10px
.b-nav-bar__list
  padding: 0 10px
  margin-top: 21px
.b-nav-bar__item
  background: #101010
  margin-right: 10px
  border-radius: 10px
  color: #464646
  width: 130px
  padding: 5px 5px
  &:last-child
    margin-right: 0
.btn-wallets-transfer__title
  width: 80px
  font-family: Montserrat, sans-serif
  font-size: 12px
  font-style: normal
  font-weight: 500
  line-height: 15px
  letter-spacing: 0em
  text-align: left
.btn-wallets-transfer
  width: 100px
  margin-left: auto
  margin-right: auto
  max-width: 135px
  padding: 5px
  background: #101010
  color: #464646
  border-radius: 15px
  border: 0.5px #333333 solid
  @media screen and (max-width: 880px)
    border-radius: 0
.btn-wallets-transfer__active
  background: #FFFFFF !important
  color: #090909
  border: 0.5px #FFFFFF solid
.up-btn-wallets-transfer
  margin: 70px auto 0 auto
</style>
