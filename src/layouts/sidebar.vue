<template class="sidebar-template">
  <q-drawer
    show-if-above
    v-model="left"
    side="left"
    behavior="desktop"
    :class="{hidesidebar:mobilecheck}"
    class="sidebar-drawer"
  >
    <div class="sidebar-container">
      <profile-nav-up-panel
        :is-arrow="false"
        :isWallet="true"
        @mobilecheck="mobilecheck = !mobilecheck"
      />
      <div class="sidebar-content">
        <div>
          <p class="sidebar-titles">
            Фиатные кошельки
          </p>
          <div class="currency">
            <q-scroll-area
              style="height: 200px!important"
              :thumb-style="thumbStyle"
              :bar-style="barStyle"
              class="scroll-area"
            >
              <div
                style="margin-top:3%;"
                class="cur"
              >
                <span class="symbol">&#8381;
                </span> <symb>RUB</symb> Доллар
                <div class="cur-value">
                  <span>200<dots>.00</dots></span>
                  <small>≈ 200.00 &#8381;</small>
                </div>
              </div>
              <div class="cur">
                <span class="symbol">&#36;
                </span> <symb>USD</symb> Доллар
                <div class="cur-value">
                  <span>200<dots>.00</dots></span>
                  <small>≈ 200.00 &#8381;</small>
                </div>
              </div>
              <div class="cur">
                <span class="symbol">&#8376;
                </span> <symb>KZT</symb> Тенге
                <div class="cur-value">
                  <span>240 450<dots>.00</dots></span>
                  <small>≈ 200.00 &#8381;</small>
                </div>
              </div>
              <div class="cur">
                <span class="symbol">&#8381;
                </span> <symb>RUB</symb> Доллар
                <div class="cur-value">
                  <span>200<dots>.00</dots></span>
                  <small>≈ 200.00 &#8381;</small>
                </div>
              </div>
              <div class="cur">
                <span class="symbol">&#36;
                </span> <symb>USD</symb> Доллар
                <div class="cur-value">
                  <span>200<dots>.00</dots></span>
                  <small>≈ 200.00 &#8381;</small>
                </div>
              </div>
              <div class="cur">
                <span class="symbol">&#8376;
                </span> <symb>KZT</symb> Тенге
                <div class="cur-value">
                  <span>240 450<dots>.00</dots></span>
                  <small>≈ 200.00 &#8381;</small>
                </div>
              </div>
            </q-scroll-area>
            <div class="create-wallet">
              <span class="plus-btn">
                <a href="#">+</a>
              </span>
              <a
                class="crt-btn"
                href="#"
              >Создать Кошелек </a>
            </div>
          </div>
        </div>
        <div>
          <p class="sidebar-titles">
            Криптокошельки
          </p>
          <div class="currency">
            <q-scroll-area
              style="height: 200px!important"
              :thumb-style="thumbStyle"
              :bar-style="barStyle"
              class="scroll-area"
            >
              <div class="cur active-cur cryptoCur">
                <span>
                  <img
                    :src="btcCur"
                  >
                </span>
                <symb class="active-cur-txt">
                  BTC
                </symb> Bitcoin
                <div class="cur-value">
                  <span class="active-cur-txt">0.004752152</span>
                  <small class="active-cur-small">≈ 200.00 &#8381;</small>
                </div>
              </div>
              <div class="cur cryptoCur">
                <span>
                  <img
                    :src="ethCur"
                  >
                </span>
                <symb>ETH</symb> Ethereum
                <div class="cur-value">
                  <span>0.0000515</span>
                  <small>≈ 200.00 &#8381;</small>
                </div>
              </div>
              <div class="cur cryptoCur">
                <span>
                  <img
                    :src="usdtCur"
                  >
                </span>
                <symb>USDT</symb> Tether
                <div class="cur-value">
                  <span>0.001141414144</span>
                  <small>≈ 200.00 &#8381;</small>
                </div>
              </div>
              <div class="cur cryptoCur">
                <span>
                  <img
                    :src="btcCur"
                  >
                </span>
                <symb>BTC</symb> Bitcoin
                <div class="cur-value">
                  <span>0.004752152</span>
                  <small>≈ 200.00 &#8381;</small>
                </div>
              </div>
              <div class="cur cryptoCur">
                <span>
                  <img
                    :src="ethCur"
                  >
                </span>
                <symb>ETH</symb> Ethereum
                <div class="cur-value">
                  <span>0.0000515</span>
                  <small>≈ 200.00 &#8381;</small>
                </div>
              </div>
              <div class="cur cryptoCur">
                <span>
                  <img
                    :src="usdtCur"
                  >
                </span>
                <symb>USDT</symb> Tether
                <div class="cur-value">
                  <span>0.001141414144</span>
                  <small>≈ 200.00 &#8381;</small>
                </div>
              </div>
            </q-scroll-area>
            <div class="create-wallet">
              <span class="plus-btn">
                <a href="#">+</a>
              </span>
              <a
                class="crt-btn"
                href="#"
              >Создать Криптоошелек </a>
            </div>
          </div>
        </div>
        <div>
          <p class="sidebar-titles">
            Карты
          </p>
          <div class="currency">
            <q-scroll-area
              style="height: 200px!important"
              :thumb-style="thumbStyle"
              :bar-style="barStyle"
              class="scroll-area"
            >
              <div class="cur curCards">
                <span>
                  <svg
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26 8.27734V6.90625C26 5.33569 24.7268 4.0625 23.1562
                          4.0625H2.84375C1.27319 4.0625 0 5.33569 0 6.90625V8.27734C0
                          8.41755 0.113699 8.53125 0.253906 8.53125H25.7461C25.8863
                          8.53125 26 8.41755 26 8.27734Z"
                      fill="white"
                    />
                    <path
                      d="M0 10.4102V19.0938C0 20.6643 1.27319 21.9375
                          2.84375 21.9375H23.1562C24.7268 21.9375 26 20.6643
                          26 19.0938V10.4102C26 10.2699 25.8863 10.1562 25.7461
                          10.1562H0.253906C0.113699 10.1562 0 10.2699 0 10.4102ZM6.5
                          17.0625C6.5 17.5112 6.1362 17.875 5.6875 17.875H4.875C4.4263
                          17.875 4.0625 17.5112 4.0625 17.0625V16.25C4.0625 15.8013
                          4.4263 15.4375 4.875 15.4375H5.6875C6.1362 15.4375 6.5
                          15.8013 6.5 16.25V17.0625Z"
                      fill="white"
                    />
                  </svg>

                </span>
                <txt>
                  Доллары
                </txt>
                <span class="cardNumber">
                  5533 **** **** 3301
                </span>
                <div class="cur-value card-cur-value">
                  <span>0<dots>.00</dots></span>
                  <small>$</small>
                </div>
              </div>
              <div class="cur curCards">
                <span>
                  <svg
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26 8.27734V6.90625C26 5.33569 24.7268 4.0625 23.1562
                          4.0625H2.84375C1.27319 4.0625 0 5.33569 0 6.90625V8.27734C0
                          8.41755 0.113699 8.53125 0.253906 8.53125H25.7461C25.8863
                          8.53125 26 8.41755 26 8.27734Z"
                      fill="white"
                    />
                    <path
                      d="M0 10.4102V19.0938C0 20.6643 1.27319 21.9375
                          2.84375 21.9375H23.1562C24.7268 21.9375 26 20.6643
                          26 19.0938V10.4102C26 10.2699 25.8863 10.1562 25.7461
                          10.1562H0.253906C0.113699 10.1562 0 10.2699 0 10.4102ZM6.5
                          17.0625C6.5 17.5112 6.1362 17.875 5.6875 17.875H4.875C4.4263
                          17.875 4.0625 17.5112 4.0625 17.0625V16.25C4.0625 15.8013
                          4.4263 15.4375 4.875 15.4375H5.6875C6.1362 15.4375 6.5
                          15.8013 6.5 16.25V17.0625Z"
                      fill="white"
                    />
                  </svg>

                </span>
                <txt>
                  Рубли
                </txt>
                <span class="cardNumber">
                  5533 **** **** 3301
                </span>
                <div class="cur-value card-cur-value">
                  <span>0<dots>.00</dots></span>
                  <small>&#8381;</small>
                </div>
              </div>
              <div class="cur curCards">
                <span>
                  <svg
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26 8.27734V6.90625C26 5.33569 24.7268 4.0625 23.1562
                          4.0625H2.84375C1.27319 4.0625 0 5.33569 0 6.90625V8.27734C0
                          8.41755 0.113699 8.53125 0.253906 8.53125H25.7461C25.8863
                          8.53125 26 8.41755 26 8.27734Z"
                      fill="white"
                    />
                    <path
                      d="M0 10.4102V19.0938C0 20.6643 1.27319 21.9375
                          2.84375 21.9375H23.1562C24.7268 21.9375 26 20.6643
                          26 19.0938V10.4102C26 10.2699 25.8863 10.1562 25.7461
                          10.1562H0.253906C0.113699 10.1562 0 10.2699 0 10.4102ZM6.5
                          17.0625C6.5 17.5112 6.1362 17.875 5.6875 17.875H4.875C4.4263
                          17.875 4.0625 17.5112 4.0625 17.0625V16.25C4.0625 15.8013
                          4.4263 15.4375 4.875 15.4375H5.6875C6.1362 15.4375 6.5
                          15.8013 6.5 16.25V17.0625Z"
                      fill="white"
                    />
                  </svg>

                </span>
                <txt>
                  Евро
                </txt>
                <span class="cardNumber">
                  5533 **** **** 3301
                </span>
                <div class="cur-value card-cur-value">
                  <span>0<dots>.00</dots></span>
                  <small>&euro;</small>
                </div>
              </div>
              <div class="cur curCards">
                <span>
                  <svg
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26 8.27734V6.90625C26 5.33569 24.7268 4.0625 23.1562
                          4.0625H2.84375C1.27319 4.0625 0 5.33569 0 6.90625V8.27734C0
                          8.41755 0.113699 8.53125 0.253906 8.53125H25.7461C25.8863
                          8.53125 26 8.41755 26 8.27734Z"
                      fill="white"
                    />
                    <path
                      d="M0 10.4102V19.0938C0 20.6643 1.27319 21.9375
                          2.84375 21.9375H23.1562C24.7268 21.9375 26 20.6643
                          26 19.0938V10.4102C26 10.2699 25.8863 10.1562 25.7461
                          10.1562H0.253906C0.113699 10.1562 0 10.2699 0 10.4102ZM6.5
                          17.0625C6.5 17.5112 6.1362 17.875 5.6875 17.875H4.875C4.4263
                          17.875 4.0625 17.5112 4.0625 17.0625V16.25C4.0625 15.8013
                          4.4263 15.4375 4.875 15.4375H5.6875C6.1362 15.4375 6.5
                          15.8013 6.5 16.25V17.0625Z"
                      fill="white"
                    />
                  </svg>

                </span>
                <txt>
                  Доллары
                </txt>
                <span class="cardNumber">
                  5533 **** **** 3301
                </span>
                <div class="cur-value card-cur-value">
                  <span>0<dots>.00</dots></span>
                  <small>$</small>
                </div>
              </div>
              <div class="cur curCards">
                <span>
                  <svg
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26 8.27734V6.90625C26 5.33569 24.7268 4.0625 23.1562
                          4.0625H2.84375C1.27319 4.0625 0 5.33569 0 6.90625V8.27734C0
                          8.41755 0.113699 8.53125 0.253906 8.53125H25.7461C25.8863
                          8.53125 26 8.41755 26 8.27734Z"
                      fill="white"
                    />
                    <path
                      d="M0 10.4102V19.0938C0 20.6643 1.27319 21.9375
                          2.84375 21.9375H23.1562C24.7268 21.9375 26 20.6643
                          26 19.0938V10.4102C26 10.2699 25.8863 10.1562 25.7461
                          10.1562H0.253906C0.113699 10.1562 0 10.2699 0 10.4102ZM6.5
                          17.0625C6.5 17.5112 6.1362 17.875 5.6875 17.875H4.875C4.4263
                          17.875 4.0625 17.5112 4.0625 17.0625V16.25C4.0625 15.8013
                          4.4263 15.4375 4.875 15.4375H5.6875C6.1362 15.4375 6.5
                          15.8013 6.5 16.25V17.0625Z"
                      fill="white"
                    />
                  </svg>

                </span>
                <txt>
                  Рубли
                </txt>
                <span class="cardNumber">
                  5533 **** **** 3301
                </span>
                <div class="cur-value card-cur-value">
                  <span>0<dots>.00</dots></span>
                  <small>&#8381;</small>
                </div>
              </div>
              <div class="cur curCards">
                <span>
                  <svg
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26 8.27734V6.90625C26 5.33569 24.7268 4.0625 23.1562
                          4.0625H2.84375C1.27319 4.0625 0 5.33569 0 6.90625V8.27734C0
                          8.41755 0.113699 8.53125 0.253906 8.53125H25.7461C25.8863
                          8.53125 26 8.41755 26 8.27734Z"
                      fill="white"
                    />
                    <path
                      d="M0 10.4102V19.0938C0 20.6643 1.27319 21.9375
                          2.84375 21.9375H23.1562C24.7268 21.9375 26 20.6643
                          26 19.0938V10.4102C26 10.2699 25.8863 10.1562 25.7461
                          10.1562H0.253906C0.113699 10.1562 0 10.2699 0 10.4102ZM6.5
                          17.0625C6.5 17.5112 6.1362 17.875 5.6875 17.875H4.875C4.4263
                          17.875 4.0625 17.5112 4.0625 17.0625V16.25C4.0625 15.8013
                          4.4263 15.4375 4.875 15.4375H5.6875C6.1362 15.4375 6.5
                          15.8013 6.5 16.25V17.0625Z"
                      fill="white"
                    />
                  </svg>

                </span>
                <txt>
                  Евро
                </txt>
                <span class="cardNumber">
                  5533 **** **** 3301
                </span>
                <div class="cur-value card-cur-value">
                  <span>0<dots>.00</dots></span>
                  <small>&euro;</small>
                </div>
              </div>
            </q-scroll-area>
            <div class="create-wallet">
              <span class="plus-btn">
                <a href="#">+</a>
              </span>
              <a
                class="crt-btn"
                href="#"
              >Выпустить карту </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-drawer>
</template>

<script>
import btcCur from 'assets/btc.png';
import ethCur from 'assets/eth.png';
import usdtCur from 'assets/usdt.png';
import ProfileNavUpPanel from 'layouts/layout-profile/profile-nav-up-panel';

export default {
  data() {
    return {
      left: false,
      btcCur,
      ethCur,
      usdtCur,
      thumbStyle: {
        right: '3px',
        marginTop: '5%',
        borderRadius: '17px',
        backgroundColor: '#DEDADA',
        width: '3px',
        height: '40px!important',
        opacity: 1,
      },
      barStyle: {
        right: '3px',
        borderRadius: '17px',
        width: '3px',
        backgroundColor: '#303030',
        marginTop: '5%',
        opacity: 1,
        height: '16vh',
      },
    };
  },
  props: {
    mobilecheck: Boolean,
  },
  components: {
    ProfileNavUpPanel,
  },
  name: 'SideBarWallet',
};
</script>

<style>
.hidesidebar{
  display:none;
}
.sidebar-drawer aside{
  z-index:1;

  width:20.6%!important;
}
.active{
  opacity:1!important;
  border-bottom: 1px solid #FFF;
  background:#1d1d1d;
}
.sidebar-height{
  height:100vh;
  overflow:hidden;
}
.sidebar-container {
  border-right: 0.5px solid #5C5C5C;
  width: 100%;
  height:100%;
  float: left;
  background:#000;
  margin-bottom: 100px;
}
.sidebar-titles{
  font-size:0.7vw;
  margin-left:2%;
  margin-top:13%;
}
.sidebar-nav{
  border-bottom:0.5px solid #5C5C5C;
  display:flex;
}
.sidebar-icons-div{
  opacity:0.6;
  padding:3% 5%;
  width:20%;
}
.sidebar-content{
  padding: 0 5%;
}
.currency{
  border:1px solid grey;
  border-radius:10px;
  border-bottom-width:0;
}
.cur{
  font-size: 0.9vw;
  color: grey;
  list-style: none;
  padding: 3% 5% 3% 4%;
  margin-left: 3%;
  width: 94%;
  position: relative;
  margin-top: 2%;
}
.active-cur{
  background:#fff;
  color:#000;
}
.active-cur-txt{
  color:#000!important;
}
.active-cur-small{
  color:#565656;
}
.cur-value{
  display:contents;
  position:relative;
}
.cur-value span,small{
  position:absolute;
  right:7%;
  color:#fff;
}
.cur-value span {
  top:7%;
  font-size:0.9vw;
}
dots{
  color:#5C5C5C;
}
.mobile_hide{
  display:none;
}
.cur-value small {
  top:50%;
  font-size:0.6vw;
}
symb{
  color:#fff;
  margin-left:5%;
}
.symbol{
  font-size:1vw;
  background:#1D1D1D;
  border-radius:50%;
  color:#D8014E;
  padding: 2% 2% 2% 4%;
}
.create-wallet{
  border:1px solid #191919;
  background: #191919;
  border-radius: 0px 0px 9px 9px;
  position: relative;
  padding: 4% 4%;
  width: 101.6%;
  left: -1%;
}
.create-wallet a{
  text-decoration: none;
  color:#777;
  font-size:0.8vw;
}
.plus-btn{
  border-radius:50%;
  background:#333;
  padding:2% 3%;
  font-size:0.9vw;
  font-weight:450;
  line-height:1;
  display:inline-block;
}
.crt-btn{
  margin-left:5%;
}
.scroll-area{
  height:16vh;
}
.cryptoCur img{
  margin-bottom: -3%;
}
.curCards txt{
  margin-left:4%;
  position:absolute;
  top:10%;
  font-size:0.9vw;
}
.cardNumber{
  font-size:0.6vw;
  color:#fff;
  margin-left:3%;
}
.sidebar-icons{
  width:100%;
}
.curCards svg{
    width:10%
  }
.cryptoCur img {
    width:10%;
  }
@media (min-width:768px) and (max-width:1023px){
  .sidebar-drawer aside{
    width:24.6%!important;
  }
  .sidebar-titles{
    font-size:1.3vw;
  }
  .cur{
    font-size:1.5vw;
    margin-top:6%;
    margin-left:3%;
    width: 93%;
    padding: 3% 5% 10% 4%;
  }
  .cur:first-child{
    margin-top:1%;
  }
  .symbol{
    font-size:1.6vw;
    padding: 1% 1% 1% 3%;
  }
  .cur-value small{
    top:63%;
    left:1%;
    font-size:1.3vw;
  }
  .cur-value span{
    top:54%;
    right:2%;
    font-size:1.6vw;
  }
  .q-scrollarea__thumb{
    height:81px!important;
  }
  .q-scrollare__bar{
    height:26vh!important;
  }
  .scroll-area{
    height: 29vh;
  }
  .plus-btn{
    padding:2% 3%;
  }
  .create-wallet a{
    font-size:1.7vw;
  }
  .card-cur-value span{
    top:5%!important;
  }
  .card-cur-value small{
    top:51%!important;
    left:88%!important;
  }
  .curCards txt{
    font-size:1.7vw;
  }
  .cardNumber{
    font-size:1.1vw;
  }
  .curCards svg{
    width:12%;
  }
  .curCards txt {
    font-size:1.6vw;
    top:-2%;
  }
  .cryptoCur img{
    width:11%;
  }
}
@media (max-width: 767px){
  .mobile_hide{
    display:block;
    width:10%;
    position:absolute;
    right: 3%;
    top: 11%;
  }
  .sidebar-nav{
    position:relative
  }
  .sidebar-drawer aside{
    width:100%!important;
  }
  .sidebar-icons-div{
    width:17%;
  }
  .sidebar-titles{
    font-size:5.3vw;
    margin-top:8%;
  }
  .cur{
    font-size:4.5vw;
  }
  .symbol{
    font-size:5.8vw;
  }
  .cur-value span{
    top: 18%;
    font-size: 4.6vw;
  }
  .cur-value small{
    top: 66%;
    left: 73%;
    font-size: 3.3vw;
  }
  .scroll-area{
    height:23vh;
  }
  .create-wallet a{
    font-size: 5.7vw;
  }
  .curCards txt{
    font-size:4.7vw;
  }
  .cardNumber{
    font-size:3vw;
  }
  .card-cur-value small{
    left:89%;
  }
  .q-scrollarea__thumb{
    height:71px!important;
  }
  .q-scrollare__bar{
    height:20vh!important;
  }
}
@media(min-width: 1921px){
  .symbol {
    font-size: 1.1vw;
    padding:2% 2% 2% 4%;
  }
  .cryptoCur img {
    width:10%;
  }
  .curCards svg{
    width:10%
  }
}
</style>
