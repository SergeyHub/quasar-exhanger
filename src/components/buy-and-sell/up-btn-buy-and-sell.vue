<template>
  <div class="">
    <div class="up-btn-wallets-transfer row">
      <div
        class="btn-wallets-transfer flex row justify-center items-center"
        v-for="(items, index) in btnWalletsTransfers"
        :key="index"
        :class="{'btn-wallets-transfer__active': items.isActive}"
        @click="activateBtn(items, index)"
      >
        <div class="btn-wallets-transfer__icon items-center flex justify-center">
          <img
            :src="items.icon"
            alt=""
            class="btn-wallets-transfer__img"
          >
        </div>
        <div class="btn-wallets-transfer__title">
          {{ items.title }}
        </div>
      </div>
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
  name: 'UpBtnBuyAndSell',
  props: {
    btnWalletsTransfers: {
      type: Array,
    },
  },
  data: () => ({
    back: iconBack,
  }),
  methods: {
    activateBtn(items, index) {
      this.$emit('methodSending', index);
      this.btnWalletsTransfers.forEach((i) => {
        i.isActive = false;
      });
      items.isActive = true;
    },
  },
};
</script>

<style scoped lang="sass">
.back
  margin: 24px 0 0 22px
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
.btn-wallets-transfer__icon
  margin-right: 10px
  width: 22px
  height: 22px
.btn-wallets-transfer__title
  width: 90px
  font-family: Montserrat, sans-serif
  font-size: 14px
  font-style: normal
  font-weight: 500
  line-height: 17px
  letter-spacing: 0em
  text-align: left
.btn-wallets-transfer
  cursor: pointer
  width: 145px
  margin: 0 36px 0 22px
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
