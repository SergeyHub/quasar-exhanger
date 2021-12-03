<template>
  <q-layout class="column">
    <div class="test">
      <profile-nav-up-panel
        v-if="isScreenSizeSM"
        :is-wallet-transfer="true"
        style="margin-top: 50px"
      />
      <header-btn-mobile
        v-if="isScreenSizeSM"
        class="flex justify-center"
      />
      <up-btn-buy-and-sell
        v-if="!isScreenSizeSM"
        @methodSending="checkMethodSending($event)"
        :btn-wallets-transfers="btnWalletsTransfers"
      />
      <scroll-btn-mobile
        v-if="isScreenSizeSM"
        :items="btnWalletsTransfers"
        @methodSending="checkMethodSending($event)"
        class="flex"
      />
      <buy-and-sell-content :method-sending="methodSending" />
    </div>
    <Header
      class="line-bottom"
      @open="isOpenSideBar = true"
    />
    <side-bar-header
      :is-open-side-bar="isOpenSideBar"
      @close="isOpenSideBar = false"
    />
    <side-bar
      v-if="!isScreenSizeSM"
      :mobilecheck="mobileCheck"
    />
    <contacts-block
      class="cntb cntbheight"
    />
    <additional-links class="adl" />
  </q-layout>
</template>

<script>
import ContactsBlock from 'components/contacts/contacts-block';
import UpBtnBuyAndSell from 'components/buy-and-sell/up-btn-buy-and-sell';
import HeaderBtnMobile from 'components/wallets_transfer/header-btn-mobile';
import AdditionalLinks from 'components/additional-links';
import sideBar from 'layouts/sidebar';
import Header from 'layouts/layout-profile/profile-header';
import SideBarHeader from 'components/blocks/side-bar';
import BuyAndSellContent from 'components/buy-and-sell/buy-and-sell-content';
import ScrollBtnMobile from 'components/wallets_transfer/scroll-btn-mobile';
import ProfileNavUpPanel from 'layouts/layout-profile/profile-nav-up-panel';
import walletBtn from 'assets/walletExtra.svg';
import visaBtn from 'assets/cardVisa.svg';
import cardExtraBtn from 'assets/cardExtra.svg';
import extraExchange from 'assets/extra-exchange.svg';

export default {
  name: 'BuyAndSellCrypto',
  components: {
    BuyAndSellContent,
    ContactsBlock,
    AdditionalLinks,
    sideBar,
    Header,
    SideBarHeader,
    UpBtnBuyAndSell,
    ProfileNavUpPanel,
    HeaderBtnMobile,
    ScrollBtnMobile,
  },
  data: () => ({
    methodSending: 99,
    btnWalletsTransfers: [
      {
        isActive: false,
        title: 'Через биржу Extra',
        icon: extraExchange,
      },
      {
        isActive: false,
        title: 'На Extra-кошелек',
        icon: walletBtn,
      },
      {
        isActive: false,
        title: 'На Extra-карту',
        icon: cardExtraBtn,
      },
      {
        isActive: false,
        title: 'На карту Visa/MC',
        icon: visaBtn,
      },
    ],
  }),
  computed: {
    isScreenSizeSM() {
      return this.$q.screen.lt.sm;
    },
  },
  methods: {
    checkMethodSending(index) {
      this.methodSending = index;
    },
  },
};
</script>

<style scoped>
.test{
  margin-left: 20.6%;
}
@media screen and (max-width: 879px){
  .test{
    margin-left: 25% !important;
  }
}
@media screen and (max-width: 479px){
  .test{
    margin-left: 0 !important;
  }
}
.line-bottom{
  border-bottom: #777777 0.5px solid;
}
.header-wallets{
  position: absolute;
  z-index:1;
  top:0;
}
.cntb, .adl{
  z-index:2;
}
.avatar-wrap {
  margin-top: 3%;
  width: 14%;
  margin-left: 50%;
  transform:translateX(-50%);
  padding-bottom:3%;
}
.avatar-wrap img {
  border-radius: 50%;
  width:100%;
}
.profile-name {
  margin-top: 5%;
  margin-left: 43%;
  font-size: 0.9vw;
}
.course {
  margin-top: 7%;
  margin-left: 28%;
}
.course-span{
  font-size: 1.5vw;
  margin-left: 3%;
  color:#5AC06A;
}
.course-span:first-child{
  margin-left:0;
}
cur{
  font-size:1.5vw;
  color:#999;
}
.wallet-info-container{
  width: 53%;
  margin-left: 27%;
  margin-top:10%;
}
.crse-btc{
  margin-bottom:-1%;
}
.arrowup{
  width:3%;
}
.cur-div{
  font-size:0.9vw;
  color:grey;
  list-style:none;
  padding: 2% 0% 2% 4%;
  position:relative;
  margin-top:2%;
  border: 1px solid #fff;
  width: 43%;
  margin-left: 26%;
  border-radius: 16px;
  background:#191919;
}
.cur-div-value{
  display:contents;
  position:relative;
}
.cur-div-value span,small{
  position:absolute;
  right:7%;
  color:#fff;
}
.cur-div-value small{
  top:53%;
  color:#D4D2D2;
}
.cur-div-value span {
  top: 20%;
  font-size:0.9vw;
}
.cur-div img{
  margin-bottom:-1%;
}
.hystory-div{
  display:flex;
  border:0.5px solid #333;
  margin-top:9%;
  margin-bottom:10%;
}
.hystory-sidebar-title{
  font-size: 0.9vw;
  margin-left: 4%;
}
.hystory-sidebar{
  padding:3% 3%;
  border-right:0.5px solid #444;
  width:33%;
}
.div-wrap{
  border-radius:10px;
  padding:4% 9%;
  border:0.5px solid #444;
  margin-top:15%;
  position:relative;
}
.btns-from-header{
  display:none;
}
/* Чек2 */
.div-wrap-menu{
  border-radius:10px;
  padding:5% 0%;
  border: 0.5px solid #444;
  position:absolute;
  z-index:1;
  left: -1%;
  width: 102%;
  top: -4%;
  background:#000;
}
.txt-menu{
  border-bottom:0.5px solid #444;
}
.menu-div{
  font-size:0.8vw;
  border-top: 0.5px solid #444;
  padding:10% 16%;
  margin-top:6%;
}
.menu-div-txt{
  color:#777;
}
.active-menu{
  margin-bottom:32%;
}
.imgCur{
  width: 16%;
  margin-bottom: -3%;
  margin-left: 4%;
}
.menu-crypto-div{
  margin-top:10%;
}
.imgCur-empty{
  padding: 1% 8%;
  background: #828282;
  border-radius: 50%;
}
.menu-cur-name{
  margin-left: 7%;
  vertical-align: text-bottom;
}
.actions-txt:not(:first-child){
  margin-top:10%;
}
.actions-txt{
  display:block;
  cursor:pointer;
}
.date-div{
  background:#191919;
  border:none;
  margin-top:24%!important;
}
.date-txt{
  margin-left:18%;
  font-size:0.8vw;
  vertical-align:middle;
}
.rightarrow{
  float:right;
}
.div-wrap-txt{
  vertical-align:middle;
  margin-left:5%;
  font-size:0.8vw;
}
.polygon-down{
  float:right;
  margin-right:5%;
  margin-top:4%;
  width:7%;
  cursor:pointer;
}
.transaction-div{
  border-bottom:0.5px solid #333;
  padding-bottom:2%;
  display:block;
}
.transaction-div img{
  width:5%;
  margin-bottom:-1%;
}
.transaction-list{
  width:100%;
  padding:3% 5%;
}
.transaction-txt{
  margin-left:3%;
  font-size:0.9vw;
}
punds{
  color:#777;
}
.transaction-info{
  display:grid;
  float:right;
  margin-top:-1%;
}
.transaction-info span{
  font-size:0.7vw;
}
.transaction-type{
  color:#777;
}
.transaction-date{
  text-align:end;
}
.transaction-div:not(:first-child){
  margin-top:4%;
}
.transaction-symb{
  font-size: 0.8vw;
  padding: 1% 1% 1% 2%;
}
.deposit{
  color:#27AE60;
}
.deposit punds{
  color:#155932;
}
.trsn-qscrl{
  height:35vh;
}
.crse-btc{
  width:2%;
}
.rightarrow{
  width:6%;
}
.leftarrow svg{
  width:6%;
}
.div-wrap-menu .div-wrap-txt{
  margin-left: 16%;
}
.div-wrap-menu .polygon-down{
  margin-right: 13%;
}
.sidebar-nav-index{
  display:none;
}
/* Media Query */

@media (min-width:769px) and (max-width: 1025px){
  .wallet-info-container {
    width: 60%;
    margin-left: 27%;
  }
  .div-wrap-menu{
    padding:2% 0%;
  }
  .menu-div{
    margin-top:2%;
  }
  .div-wrap-menu .div-wrap-txt{
    margin-left: 16%;
  }
  .div-wrap-menu .polygon-down{
    margin-right: 13%;
    margin-top: 8%;
  }
  .cur-div{
    padding: 1% 0% 2% 3%;
  }
  .cur-div img{
    margin-bottom: -3%;
  }
  .date-txt{
    margin-left:21%;
  }
  .div-wrap{
    padding:2% 9%;
  }
  .div-wrap-txt{
    margin-left:9%;
  }
  .polygon-down{
    margin-top:10%;
  }
}
@media (min-width:768px) and (max-width:1023px) {
  .header-btn-div{
    display:none;
  }
  .wallet-info-container{
    width:71%;
    margin-left:24%;
  }
  .profile-name{
    margin-left:41%;
    font-size:1.5vw;
  }
  cur{
    font-size:2vw;
  }
  .course-span{
    font-size:2vw;
  }
  .cur-div{
    display:none;
  }
  .hystory-sidebar{
    width:100%;
    display:flex;
  }
  .hystory-div{
    display:block;
  }
  .hystory-sidebar-title{
    font-size:1.7vw;
    margin-left:0;
    margin-top:1%;
  }
  .date-div{
    margin-top:0!important;
  }
  .div-wrap{
    padding:0.5% 2%;
    margin-top:0;
    width:27%;
    margin-left:2%;
  }
  .date-txt{
    margin-left:13%;
    font-size:1.6vw;
  }
  .div-wrap-txt{
    margin-left:13%;
    font-size:1.7vw;
  }
  .polygon-down{
    margin-top:7%;
  }
  .menu-div{
    font-size:1.4vw;
  }
  .transaction-info span{
    font-size:1vw;
  }
  .transaction-div{
    margin-top:1%;
  }
  .transaction-txt{
    font-size:1.5vw;
  }
  .transaction-symb{
    padding:1% 1% 1% 2%;
    font-size:1.6vw;
  }
  .btns-from-header{
    display:flex;
    margin-top:5%;
  }
  .header-btn{
    margin-left:3%;
    width:20%;
    padding:1% 2%;
    border:0.5px solid #333;
    border-radius:20px;
    display:grid;
  }
  .btn-txt{
    margin-top:3%;
    font-size:1.3vw;
  }
  .btn-1 svg, .btn-3 svg{
    width: 39%;
    margin-left: 50%;
    transform: translateX(-50%);
  }
  .btn-2 svg{
    width:30%;
    margin-left: 50%;
    transform: translateX(-50%);
  }
  .btn-2 .btn-txt{
    margin-left:16%;
    margin-top:-5%;
  }
  .btn-3 .btn-txt{
    margin-left:15%;
  }
  .btn-4 svg{
    width: 52%;
    margin-left: 50%;
    transform: translateX(-50%);
  }
  .btn-4 .btn-txt{
    margin-left:20%;
  }
  .trsn-qscrl {
    height: 63vh!important;
  }
  .trsn-qscrl .q-scrollarea__thumb{
    height:165px!important
  }
  .trsn-qscrl .q-scrollare__bar{
    margin-top:0!important;
  }
}
@media(max-width:767px){
  .sidebar-nav-index{
    position: absolute;
    width: 100%;
    left: 0;
    display:flex;
    top:4%;
  }
  .wallet-info-container{
    width:96%;
    margin-left:0;
  }
  .avatar-wrap{
    width:23%;
    padding-top: 25%;
  }
  .profile-name{
    margin-left: 34%;
    font-size: 3.7vw;
  }
  .course{
    margin-top: 7%;
    margin-left: 10%;
  }
  .cntb{
    height:32vh;
  }
  .course-span{
    font-size: 6.5vw;
  }
  cur{
    font-size:5.5vw;
  }
  .arrowup{
    width: 5%;
  }
  .crse-btn{
    width: 4%;
  }
  .cur-div{
    font-size: 4.9vw;
    padding:3% 0% 3% 4%;
    width:82%;
    margin-left:11%;
  }
  .cur-div img{
    margin-bottom:-2%;
  }
  .cur-div-value span{
    font-size:3.9vw;
  }
  .cur-div-value small{
    font-size:3vw;
  }
  .hystory-sidebar{
    display:flex;
    flex-wrap:wrap;
    border:none;
    width:100%;
  }
  .hystory-sidebar-title{
    font-size: 3.9vw;
    margin-left: 4%;
  }
  .date-div{
    width:57%!important;
    margin-left:10%;
    margin-top:0!important;
  }
  .date-txt{
    margin-left: 26%;
    font-size: 2.7vw;
  }
  .leftarrow svg{
    width:4%;
  }
  .rightarrow{
    width:4%;
  }
  .rightarrow svg{
    margin-bottom:-10%;
  }
  .div-wrap{
    margin-top:2%;
    margin-left:5%;
    width:40%;
    padding: 1% 5%;
  }
  .polygon-down{
    margin-top:6%;
  }
  .div-wrap-txt{
    margin-left: 10%;
    font-size: 3vw;
  }
  .menu-div{
    font-size: 2.8vw;
  }
  .transaction-div img{
    margin-bottom:-1%;
  }
  .hystory-div{
    border:none;
    display:block
  }
  .transaction-list{
    padding: 3% 0%;
    border: 0.5px solid #333;
    border-radius: 10px;
  }
  .transaction-div{
    padding: 0% 4% 2% 4%;
  }
  .transaction-txt{
    font-size:2.9vw;
  }
  .transaction-info{
    margin-top:0;
  }
  .transaction-info span {
    font-size: 1.7vw;
  }
  .transaction-symb {
    font-size: 2.2vw;
  }
  .crse-btc{
    width:3%;
  }
}
@media(min-width: 1921px) {
  .cur-div img{
    margin-bottom:-3%;
    width:9%;
  }
  .cur-div{
    border-radius: 26px;
  }
}
</style>
