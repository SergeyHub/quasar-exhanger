<template>
  <q-layout class="items-center column justify-center">
    <div
      class="items-center column"
      v-if="isScreenSizeSM && !isActiveModal"
    >
      <q-container class="wallet-info-container">
        <div class="wallet-content">
          <profile-nav-up-panel
            style="margin-top: 12px"
            :is-wallet="true"
            :is-arrow="false"
            @mobilecheck="mobileCheck = !mobileCheck"
          />
          <div class="avatar-wrap">
            <img :src="profileImg">
          </div>
          <span class="profile-name">
            Osinskaia Valerie
          </span>
          <div>
            <div class="course">
              <span class="course-span">
                <cur>&#36;</cur>
                0.86
                <svg
                  class="arrowup"
                  viewBox="0 0 8 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.35355 0.646446C4.15829 0.451184
                  3.84171 0.451184 3.64645 0.646446L0.464466
                  3.82843C0.269204 4.02369 0.269204 4.34027
                  0.464466 4.53553C0.659728 4.7308 0.976311 4.7308 1.17157
                  4.53553L4 1.70711L6.82843 4.53553C7.02369 4.7308 7.34027
                  4.7308 7.53553 4.53553C7.7308 4.34027 7.7308 4.02369
                  7.53553 3.82843L4.35355 0.646446ZM4.5 9L4.5 1L3.5 1L3.5 9L4.5 9Z"
                    fill="#5AC06A"
                  />
                </svg>
              </span>
              <span class="course-span">
                <cur>
                  &euro;
                </cur>
                0.86
                <svg
                  class="arrowup"
                  viewBox="0 0 8 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.35355 0.646446C4.15829 0.451184
                  3.84171 0.451184 3.64645 0.646446L0.464466
                  3.82843C0.269204 4.02369 0.269204 4.34027
                  0.464466 4.53553C0.659728 4.7308 0.976311 4.7308 1.17157
                  4.53553L4 1.70711L6.82843 4.53553C7.02369 4.7308 7.34027
                  4.7308 7.53553 4.53553C7.7308 4.34027 7.7308 4.02369
                  7.53553 3.82843L4.35355 0.646446ZM4.5 9L4.5 1L3.5 1L3.5 9L4.5 9Z"
                    fill="#5AC06A"
                  />
                </svg>
              </span>
              <span class="course-span">
                <svg
                  class="crse-btc"
                  viewBox="0 0 12 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.914 24.548V22H0.522V3.436H2.914V0.809999H4.578V3.436H4.786C5.37533
                  3.436 5.91267 3.462 6.398 3.514V0.809999H8.062V3.774C9.154 4.05133 9.97733
                  4.53667 10.532 5.23C11.104 5.906 11.39 6.842 11.39 8.038C11.39 9.13
                  11.1213 10.04 10.584 10.768C10.064 11.4787 9.30133 11.938 8.296
                  12.146V12.276C8.98933 12.3973 9.60467 12.6227 10.142 12.952C10.6967
                  13.2813 11.13 13.7493 11.442 14.356C11.7713 14.9627 11.936 15.7513 11.936
                  16.722C11.936 18.074 11.5893 19.1833 10.896 20.05C10.22 20.8993 9.27533 21.4713
                  8.062 21.766V24.548H6.398V22C6.27667 22 6.14667 22 6.008
                  22H4.578V24.548H2.914ZM5.254 11.34C6.67533 11.34 7.646 11.0887 8.166
                  10.586C8.70333 10.066 8.972 9.30333 8.972 8.298C8.972 7.27533 8.64267 6.54733
                  7.984 6.114C7.34267 5.66333 6.31133 5.438 4.89 5.438H2.862V11.34H5.254ZM2.862
                  13.29V20.024H5.566C7.00467 20.024 8.01 19.7033 8.582 19.062C9.154 18.4207
                  9.44 17.58 9.44 16.54C9.44 15.5693 9.14533 14.7893 8.556 14.2C7.96667 13.5933
                  6.90933 13.29 5.384 13.29H2.862Z"
                    fill="#999999"
                  />
                </svg>
                0.86
                <svg
                  class="arrowup"
                  viewBox="0 0 8 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.35355 0.646446C4.15829 0.451184
                  3.84171 0.451184 3.64645 0.646446L0.464466
                  3.82843C0.269204 4.02369 0.269204 4.34027
                  0.464466 4.53553C0.659728 4.7308 0.976311 4.7308 1.17157
                  4.53553L4 1.70711L6.82843 4.53553C7.02369 4.7308 7.34027
                  4.7308 7.53553 4.53553C7.7308 4.34027 7.7308 4.02369
                  7.53553 3.82843L4.35355 0.646446ZM4.5 9L4.5 1L3.5 1L3.5 9L4.5 9Z"
                    fill="#5AC06A"
                  />
                </svg>
              </span>
            </div>
            <div class="cur-div">
              <span>
                <img
                  :src="btcCur"
                >
              </span>
              <symb>BTC</symb> Bitcoin
              <div class="cur-div-value">
                <span>0.004752152</span>
                <small>≈ 24987.21 &#8381;</small>
              </div>
            </div>
            <div
              class="btns-from-header flex"
              v-if="!isScreenSizeSM"
            >
              <div class="header-btn btn-1">
                <span class="btn-svg">
                  <svg
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.927246 12.4609C0.927246 18.8337 6.09345 24 12.4663
                    24C18.8391 24 24.0053 18.8337 24.0053 12.4609C24.0053
                    6.08808 18.8391 0.921875 12.4663 0.921875"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <circle
                      cx="0.733362"
                      cy="9.04098"
                      r="0.733362"
                      fill="white"
                    />
                    <circle
                      cx="2.57711"
                      cy="5.3486"
                      r="0.733362"
                      fill="white"
                    />
                    <circle
                      cx="5.34811"
                      cy="2.58004"
                      r="0.733362"
                      fill="white"
                    />
                    <circle
                      cx="9.04098"
                      cy="0.733362"
                      r="0.733362"
                      fill="white"
                    />
                    <path
                      d="M14.5461 12.191C15.117 12.0786 15.6049 11.6883
                      15.7917 10.9912C16.0694 9.95471 15.4111 9.1098 13.9343
                      8.71411L12.0201 8.2012C11.4867 8.05826 10.9383 8.37484
                      10.7954 8.90831L9.59262 13.3971C9.44967 13.9306 9.76626
                      14.4789 10.2997 14.6218L12.3974 15.1839C14.0209 15.6189
                      15.0251 15.2097 15.32 14.109C15.5486 13.256 15.2167 12.587
                      14.5461 12.191ZM13.6527 9.43495C14.5883 9.68563 15.0269
                      10.1767 14.845 10.8555C14.6631 11.5342 14.0377 11.7402
                      13.1022 11.4895L11.7048 11.1151C11.4381 11.0437 11.2798
                      10.7695 11.3512 10.5028L11.6429 9.41408C11.7144 9.14734
                      11.9886 8.98905 12.2553 9.06052L13.6527 9.43495ZM12.5597
                      14.4311L10.9331 13.9952C10.6663 13.9238 10.508 13.6496
                      10.5795 13.3829L10.8933 12.2116C10.9648 11.9449 11.239
                      11.7866 11.5057 11.8581L13.1324 12.294C14.1505 12.5668
                      14.6124 13.0444 14.4133 13.7874C14.2142 14.5303 13.5779
                      14.7039 12.5597 14.4311Z"
                      fill="#D8014E"
                    />
                    <path
                      d="M12.7492 8.33479L13.0176 7.33301"
                      stroke="#D8014E"
                      stroke-width="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14.4962 8.91682L14.7646 7.91504"
                      stroke="#D8014E"
                      stroke-width="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.42 15.9002L10.6885 14.8984"
                      stroke="#D8014E"
                      stroke-width="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.1666 16.4813L12.4351 15.4795"
                      stroke="#D8014E"
                      stroke-width="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                </span>
                <span class="btn-txt">
                  Купить/Продать
                </span>
              </div>
              <div class="header-btn btn-2">
                <span class="btn-svg">
                  <svg
                    viewBox="0 0 23 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3.06445 29.6608V17.0479H19.5806V29.6608H3.06445ZM1.56445 16.2575C1.56445
                      15.8656 1.88219 15.5479 2.27413 15.5479H20.3709C20.7628 15.5479 21.0806
                      15.8656 21.0806 16.2575V30.4511C21.0806 30.843 20.7628 31.1608 20.3709
                      31.1608H2.27413C1.88219 31.1608 1.56445 30.843 1.56445
                      30.4511V16.2575ZM16.8225
                      24.064C17.4104 24.064 17.887 23.5874 17.887 22.9995C17.887 22.4115 17.4104
                      21.9349 16.8225 21.9349C16.2346 21.9349 15.758 22.4115 15.758 22.9995C15.758
                      23.5874 16.2346 24.064 16.8225 24.064Z"
                      fill="white"
                    />
                    <path
                      d="M2.46427 15.5253C2.06016 15.6162 1.80627 16.0175 1.8972 16.4217C1.98812
                      16.8258 2.38943 17.0797 2.79354 16.9887L2.46427 15.5253ZM2.79354
                      16.9887L16.1216
                      13.9899L15.7924 12.5265L2.46427 15.5253L2.79354 16.9887ZM16.0725
                      13.9506V16.6119H17.5725V13.9506H16.0725ZM16.1216 13.9899C16.1179 13.9907
                      16.1107 13.9911 16.1028 13.9892C16.0959 13.9876 16.091 13.9848 16.0876
                      13.9821C16.0842 13.9793 16.0804 13.9752 16.0773 13.9688C16.0737 13.9615
                      16.0725
                      13.9544 16.0725 13.9506H17.5725C17.5725 13.0152 16.705 12.3212 15.7924
                      12.5265L16.1216 13.9899Z"
                      fill="white"
                    />
                    <path
                      d="M12.605 1C12.605 0.585786 12.2692 0.25 11.855
                    0.25C11.4408 0.25 11.105 0.585786
                      11.105 1L12.605 1ZM11.3247 11.4658C11.6175 11.7587 12.0924
                      11.7587 12.3853
                      11.4658L17.1583 6.69284C17.4512 6.39995 17.4512 5.92508
                      17.1583 5.63218C16.8654
                      5.33929 16.3905 5.33929 16.0976 5.63218L11.855 9.87482L7.61234 5.63218C7.31945
                      5.33929 6.84457 5.33929 6.55168 5.63218C6.25879 5.92508
                      6.25879 6.39995 6.55168
                      6.69284L11.3247 11.4658ZM11.105 1L11.105 10.9355L12.605
                      10.9355L12.605 1L11.105 1Z"
                      fill="#D8014E"
                    />
                  </svg>
                </span>
                <span class="btn-txt">
                  Пополнить
                </span>
              </div>
              <div class="header-btn btn-3 header-btn-active">
                <span class="btn-svg">
                  <svg
                    viewBox="0 0 30 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.4859 15.4644L9.88729 18.1445L2.21471 15.3122L21.4229
                      8.57689L14.6876 27.7851L11.8554 20.1125L14.5354 16.5139C14.7578
                      16.2153 14.7275 15.7988 14.4642 15.5356C14.201 15.2724 13.7845
                      15.2421 13.4859 15.4644Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.62793 23.9082L0.888546 29.6476"
                      stroke="#D8014E"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.33008 27.0977L6.05466 28.3731"
                      stroke="#D8014E"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                </span>
                <span class="btn-txt">
                  Перевести
                </span>
              </div>
              <div class="header-btn btn-4">
                <span class="btn-svg">
                  <svg
                    viewBox="0 0 31 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="15.5133"
                      cy="11.5919"
                      r="1.24624"
                      fill="#D8014E"
                    />
                    <path
                      d="M5.04883 11.4075C5.04883 5.6596 9.70843 1 15.4563 1C16.1143 1 16.7581
                    1.06106 17.3822 1.17783M22.3405 3.60188C21.7771 3.10468 21.1596 2.66752
                    20.4978 2.30039"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M1.79306 7.75614L4.93445 12.8849L9.15408 8.59919"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M25.9512 11.8239C25.9512 17.5718 21.2916 22.2314 15.5437 22.2314C14.8857
                    22.2314 14.2419 22.1704 13.6178 22.0536M8.65955 19.6296C9.22287 20.1268
                    9.84042 20.5639 10.5022 20.9311"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M29.2074 15.4753L26.066 10.3465L21.8464 14.6323"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </span>
                <span class="btn-txt">
                  Обменять
                </span>
              </div>
            </div>
          </div>
          <div
            class="hystory-div"
            :class="{'active-menu': cryptoMenu}"
          >
            <div class="hystory-sidebar">
              <span class="hystory-sidebar-title">История</span>
              <!-- Чек1 -->
              <div class="date-div div-wrap">
                <a
                  href="#"
                  class="leftarrow"
                >
                  <svg
                    viewBox="0 0 8 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.98719 1.21408L2.1154 5.10682L7.06829 8.89584"
                      stroke="#434343"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </a>
                <span
                  class="date-txt"
                >
                  Сентябрь
                </span>
                <a
                  class="rightarrow"
                  href="#"
                >
                  <svg
                    viewBox="0 0 8 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.02648 1.21408L5.89828 5.10682L0.945386 8.89584"
                      stroke="#434343"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </a>
              </div>
              <div class="div-wrap">
                <svg
                  class="polygon-down"
                  viewBox="0 0 9 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  @click="cryptoMenu = !cryptoMenu"
                >
                  <path
                    d="M4.5 7L8.39712 0.250001L0.602886 0.250001L4.5 7Z"
                    fill="#535151"
                  />
                </svg>
                <span class="div-wrap-txt">Валюта</span>
                <div
                  class="div-wrap-menu"
                  v-if="cryptoMenu"
                >
                  <span class="div-wrap-txt">Валюта</span>
                  <svg
                    viewBox="0 0 9 7"
                    fill="none"
                    class="polygon-down"
                    xmlns="http://www.w3.org/2000/svg"
                    @click="cryptoMenu = !cryptoMenu"
                  >
                    <path
                      d="M4.5 0L8.39712 6.75L0.602886 6.75L4.5 0Z"
                      fill="#535151"
                    />
                  </svg>
                  <div class="menu-div menu-div-crypto">
                    <span class="menu-div-txt">
                      Криптовалюта
                    </span>
                    <div class="menu-crypto-div">
                      <img
                        class="imgCur"
                        :src="btcCur"
                      >
                      <span class="menu-cur-name">
                        BTC
                      </span>
                    </div>
                    <div class="menu-crypto-div">
                      <img
                        class="imgCur"
                        :src="linkCur"
                      >
                      <span class="menu-cur-name">
                        LINK
                      </span>
                    </div>
                    <div class="menu-crypto-div">
                      <img
                        class="imgCur"
                        :src="adaCur"
                      >
                      <span class="menu-cur-name">
                        ADA
                      </span>
                    </div>
                    <div class="menu-crypto-div">
                      <img
                        class="imgCur"
                        :src="dotCur"
                      >
                      <span class="menu-cur-name">
                        DOT
                      </span>
                    </div>
                    <div class="menu-crypto-div">
                      <img
                        class="imgCur"
                        :src="ethCur"
                      >
                      <span class="menu-cur-name">
                        ETH
                      </span>
                    </div>
                  </div>
                  <div class="menu-div menu-div-crypto">
                    <span class="menu-div-txt">
                      Фиатная валюта
                    </span>
                    <div class="menu-crypto-div">
                      <span class="imgCur imgCur-empty" />
                      <span class="menu-cur-name">
                        Название
                      </span>
                    </div>
                    <div class="menu-crypto-div">
                      <span class="imgCur imgCur-empty" />
                      <span class="menu-cur-name">
                        Название
                      </span>
                    </div>
                    <div class="menu-crypto-div">
                      <span class="imgCur imgCur-empty" />
                      <span class="menu-cur-name">
                        Название
                      </span>
                    </div>
                    <div class="menu-crypto-div">
                      <span class="imgCur imgCur-empty" />
                      <span class="menu-cur-name">
                        Название
                      </span>
                    </div>
                    <div class="menu-crypto-div">
                      <span class="imgCur imgCur-empty" />
                      <span class="menu-cur-name">
                        Название
                      </span>
                    </div>
                  </div>
                  <div class="menu-div menu-div-crypto">
                    <a
                      href="#"
                      class="menu-div-txt"
                    >
                      Все валюты
                    </a>
                  </div>
                </div>
              </div>
              <div class="div-wrap">
                <span class="div-wrap-txt">Действия</span>
                <svg
                  class="polygon-down"
                  viewBox="0 0 9 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  @click="actionsMenu = !actionsMenu"
                >
                  <path
                    d="M4.5 7L8.39712 0.250001L0.602886 0.250001L4.5 7Z"
                    fill="#535151"
                  />
                </svg>
                <div
                  class="div-wrap-menu"
                  v-if="actionsMenu"
                >
                  <span class="div-wrap-txt">Действия</span>
                  <svg
                    viewBox="0 0 9 7"
                    fill="none"
                    class="polygon-down"
                    xmlns="http://www.w3.org/2000/svg"
                    @click="actionsMenu = !actionsMenu"
                  >
                    <path
                      d="M4.5 0L8.39712 6.75L0.602886 6.75L4.5 0Z"
                      fill="#535151"
                    />
                  </svg>
                  <div class="menu-div menu-div-crypto">
                    <span class="actions-txt">Покупка</span>
                    <span class="actions-txt">Продажа</span>
                    <span class="actions-txt">Ввод</span>
                    <span class="actions-txt">Вывод</span>
                    <span class="actions-txt">Обмен</span>
                  </div>
                  <div class="menu-div menu-div-crypto">
                    <a
                      href="#"
                      class="menu-div-txt"
                    >
                      Все действия
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="transaction-list">
              <q-scroll-area
                :thumb-style="thumbStyle"
                :bar-style="barStyle"
                class="trsn-qscrl"
              >
                <div class="transaction-div">
                  <img
                    style="margin-bottom:-2%"
                    :src="btcCur"
                  >
                  <span class="transaction-txt">
                    - 34<punds>.00 BTC</punds>
                  </span>
                  <div class="transaction-info">
                    <span class="transaction-date"><strong>сегодня</strong></span>
                    <span class="transaction-type">перевод</span>
                  </div>
                </div>
                <div class="transaction-div">
                  <img :src="ethCur">
                  <span class="transaction-txt">
                    - 265 760<punds>.00 ETH</punds>
                  </span>
                  <div class="transaction-info">
                    <span class="transaction-date"><strong>19 сент</strong></span>
                    <span class="transaction-type">перевод</span>
                  </div>
                </div>
                <div class="transaction-div">
                  <span class="symbol transaction-symb">&#8381;
                  </span>
                  <span class="transaction-txt">
                    - 24 234<punds>.47 RUB</punds>
                  </span>
                  <div class="transaction-info">
                    <span class="transaction-date"><strong>17 сент</strong></span>
                    <span class="transaction-type">фиатный баланс <svg
                      width="12"
                      height="8"
                      viewBox="0 0 12 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614
                        0.723858 4.5 1 4.5L1 3.5ZM11.3536 4.35355C11.5488 4.15829
                        11.5488 3.84171 11.3536 3.64644L8.17157 0.464465C7.97631
                        0.269203 7.65973 0.269203 7.46447 0.464465C7.2692 0.659727
                        7.2692 0.97631 7.46447 1.17157L10.2929 4L7.46447 6.82843C7.2692
                        7.02369 7.2692 7.34027 7.46447 7.53553C7.65973 7.73079 7.97631
                        7.73079 8.17157 7.53553L11.3536 4.35355ZM1 4.5L11 4.5L11 3.5L1 3.5L1 4.5Z"
                        fill="#777777"
                      />
                    </svg>
                      <svg
                        width="16"
                        height="12"
                        style="margin-bottom:-2%;"
                        viewBox="0 0 16 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.0097 2.09487C14.0592 2.18065 14.0872 2.37602 13.9011
                          2.75809C13.7225 3.12502 13.3867 3.57465 12.8999 4.07776C11.9303
                          5.0799 10.4272 6.2275 8.61883 7.27155C6.81048 8.3156 5.06509
                          9.04353 3.7124 9.38216C3.0333 9.55217 2.47601 9.61818 2.06891
                          9.58943C1.64501 9.5595 1.48979 9.43762 1.44026 9.35183C1.39073
                          9.26605 1.36279 9.07068 1.54882 8.68861C1.72747 8.32168 2.06329
                          7.87205 2.55007 7.36894C3.51968 6.3668 5.02278 5.2192 6.83113
                          4.17515C8.63948 3.1311 10.3849 2.40317 11.7376 2.06454C12.4167
                          1.89453 12.974 1.82852 13.3811 1.85727C13.805 1.8872 13.9602
                          2.00908 14.0097 2.09487Z"
                          stroke="#D8004E"
                          stroke-width="0.8"
                        />
                        <circle
                          cx="7.875"
                          cy="5.43164"
                          r="4"
                          fill="#D8004E"
                          stroke="#222222"
                        />
                        <line
                          x1="10.9862"
                          y1="10.9563"
                          x2="4.92467"
                          y2="0.457381"
                          stroke="#D8004E"
                          stroke-width="0.7"
                        />
                      </svg>

                      карта</span>
                  </div>
                </div>
                <div class="transaction-div">
                  <span class="symbol transaction-symb">&#36;
                  </span>
                  <span class="transaction-txt deposit">
                    + 1 234<punds>.47 USD</punds>
                  </span>
                  <div class="transaction-info">
                    <span class="transaction-date"><strong>17 сент</strong></span>
                    <span class="transaction-type">пополнение</span>
                  </div>
                </div>
                <div class="transaction-div">
                  <img :src="btcCur">
                  <span class="transaction-txt deposit">
                    + 45<punds>.00 BTC</punds>
                  </span>
                  <div class="transaction-info">
                    <span class="transaction-date"><strong>29 авг</strong></span>
                    <span class="transaction-type">покупка</span>
                  </div>
                </div>
                <div class="transaction-div">
                  <span class="symbol transaction-symb">&#8381;
                  </span>
                  <span class="transaction-txt">
                    0.035760065 <punds>BTC</punds>
                    <svg
                      width="14"
                      style="margin-left:1%"
                      height="10"
                      viewBox="0 0 14 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.66553 5C2.66553 2.79086 4.45639 1 6.66553 1C7.67997
                        1 8.60622 1.37764 9.31135 2"
                        stroke="white"
                        stroke-linecap="round"
                      />
                      <path
                        d="M0.653949 3.59425L2.72586 6.18684L4.74216 3.55076"
                        stroke="white"
                        stroke-linecap="round"
                      />
                      <path
                        d="M10.6655 5.1875C10.6655 7.39664 8.87467 9.1875 6.66553
                        9.1875C5.64557 9.1875 4.71478 8.80575 4.00824 8.17734"
                        stroke="white"
                        stroke-linecap="round"
                      />
                      <path
                        d="M12.5791 6.47798L10.5989 4.00007L8.67176 6.51954"
                        stroke="white"
                        stroke-linecap="round"
                      />
                    </svg>
                    24 234<punds>.47 RUB</punds>
                  </span>
                  <div class="transaction-info">
                    <span class="transaction-date"><strong>29 авг</strong></span>
                    <span class="transaction-type">обмен</span>
                  </div>
                </div>
                <div class="transaction-div">
                  <span class="symbol transaction-symb">&#8381;
                  </span>
                  <span class="transaction-txt deposit">
                    + 140 000<punds>.00 RUB</punds>
                  </span>
                  <div class="transaction-info">
                    <span class="transaction-date"><strong>29 авг</strong></span>
                    <span class="transaction-type">пополнение</span>
                  </div>
                </div>
                <div class="transaction-div">
                  <img :src="btcCur">
                  <span class="transaction-txt">
                    24 234<punds>.47 RUB</punds>
                    <svg
                      width="14"
                      style="margin-left:1%"
                      height="10"
                      viewBox="0 0 14 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.66553 5C2.66553 2.79086 4.45639 1 6.66553 1C7.67997
                        1 8.60622 1.37764 9.31135 2"
                        stroke="white"
                        stroke-linecap="round"
                      />
                      <path
                        d="M0.653949 3.59425L2.72586 6.18684L4.74216 3.55076"
                        stroke="white"
                        stroke-linecap="round"
                      />
                      <path
                        d="M10.6655 5.1875C10.6655 7.39664 8.87467 9.1875 6.66553
                        9.1875C5.64557 9.1875 4.71478 8.80575 4.00824 8.17734"
                        stroke="white"
                        stroke-linecap="round"
                      />
                      <path
                        d="M12.5791 6.47798L10.5989 4.00007L8.67176 6.51954"
                        stroke="white"
                        stroke-linecap="round"
                      />
                    </svg>
                    0.035760065 <punds>BTC</punds>
                  </span>
                  <div class="transaction-info">
                    <span class="transaction-date"><strong>08 авг</strong></span>
                    <span class="transaction-type">обмен</span>
                  </div>
                </div>
                <div class="transaction-div">
                  <img :src="btcCur">
                  <span class="transaction-txt">
                    - 34<punds>.00 BTC</punds>
                  </span>
                  <div class="transaction-info">
                    <span class="transaction-date"><strong>сегодня</strong></span>
                    <span class="transaction-type">перевод</span>
                  </div>
                </div>
                <div class="transaction-div">
                  <img :src="ethCur">
                  <span class="transaction-txt">
                    - 265 760<punds>.00 ETH</punds>
                  </span>
                  <div class="transaction-info">
                    <span class="transaction-date"><strong>19 сент</strong></span>
                    <span class="transaction-type">перевод</span>
                  </div>
                </div>
                <div class="transaction-div">
                  <span class="symbol transaction-symb">&#8381;
                  </span>
                  <span class="transaction-txt">
                    - 24 234<punds>.47 RUB</punds>
                  </span>
                  <div class="transaction-info">
                    <span class="transaction-date"><strong>17 сент</strong></span>
                    <span class="transaction-type">фиатный баланс <svg
                      width="12"
                      height="8"
                      viewBox="0 0 12 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614
                        0.723858 4.5 1 4.5L1 3.5ZM11.3536 4.35355C11.5488 4.15829
                        11.5488 3.84171 11.3536 3.64644L8.17157 0.464465C7.97631
                        0.269203 7.65973 0.269203 7.46447 0.464465C7.2692 0.659727
                        7.2692 0.97631 7.46447 1.17157L10.2929 4L7.46447 6.82843C7.2692
                        7.02369 7.2692 7.34027 7.46447 7.53553C7.65973 7.73079 7.97631
                        7.73079 8.17157 7.53553L11.3536 4.35355ZM1 4.5L11 4.5L11 3.5L1 3.5L1 4.5Z"
                        fill="#777777"
                      />
                    </svg>
                      <svg
                        width="16"
                        height="12"
                        style="margin-bottom:-2%;"
                        viewBox="0 0 16 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.0097 2.09487C14.0592 2.18065 14.0872 2.37602 13.9011
                          2.75809C13.7225 3.12502 13.3867 3.57465 12.8999 4.07776C11.9303
                          5.0799 10.4272 6.2275 8.61883 7.27155C6.81048 8.3156 5.06509
                          9.04353 3.7124 9.38216C3.0333 9.55217 2.47601 9.61818 2.06891
                          9.58943C1.64501 9.5595 1.48979 9.43762 1.44026 9.35183C1.39073
                          9.26605 1.36279 9.07068 1.54882 8.68861C1.72747 8.32168 2.06329
                          7.87205 2.55007 7.36894C3.51968 6.3668 5.02278 5.2192 6.83113
                          4.17515C8.63948 3.1311 10.3849 2.40317 11.7376 2.06454C12.4167
                          1.89453 12.974 1.82852 13.3811 1.85727C13.805 1.8872 13.9602
                          2.00908 14.0097 2.09487Z"
                          stroke="#D8004E"
                          stroke-width="0.8"
                        />
                        <circle
                          cx="7.875"
                          cy="5.43164"
                          r="4"
                          fill="#D8004E"
                          stroke="#222222"
                        />
                        <line
                          x1="10.9862"
                          y1="10.9563"
                          x2="4.92467"
                          y2="0.457381"
                          stroke="#D8004E"
                          stroke-width="0.7"
                        />
                      </svg>

                      карта</span>
                  </div>
                </div>
                <div class="transaction-div">
                  <span class="symbol transaction-symb">&#36;
                  </span>
                  <span class="transaction-txt deposit">
                    + 1 234<punds>.47 USD</punds>
                  </span>
                  <div class="transaction-info">
                    <span class="transaction-date"><strong>17 сент</strong></span>
                    <span class="transaction-type">пополнение</span>
                  </div>
                </div>
                <div class="transaction-div">
                  <img :src="btcCur">
                  <span class="transaction-txt deposit">
                    + 45<punds>.00 BTC</punds>
                  </span>
                  <div class="transaction-info">
                    <span class="transaction-date"><strong>29 авг</strong></span>
                    <span class="transaction-type">покупка</span>
                  </div>
                </div>
                <div class="transaction-div">
                  <span class="symbol transaction-symb">&#8381;
                  </span>
                  <span class="transaction-txt">
                    0.035760065 <punds>BTC</punds>
                    <svg
                      width="14"
                      style="margin-left:1%"
                      height="10"
                      viewBox="0 0 14 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.66553 5C2.66553 2.79086 4.45639 1 6.66553 1C7.67997
                        1 8.60622 1.37764 9.31135 2"
                        stroke="white"
                        stroke-linecap="round"
                      />
                      <path
                        d="M0.653949 3.59425L2.72586 6.18684L4.74216 3.55076"
                        stroke="white"
                        stroke-linecap="round"
                      />
                      <path
                        d="M10.6655 5.1875C10.6655 7.39664 8.87467 9.1875 6.66553
                        9.1875C5.64557 9.1875 4.71478 8.80575 4.00824 8.17734"
                        stroke="white"
                        stroke-linecap="round"
                      />
                      <path
                        d="M12.5791 6.47798L10.5989 4.00007L8.67176 6.51954"
                        stroke="white"
                        stroke-linecap="round"
                      />
                    </svg>
                    24 234<punds>.47 RUB</punds>
                  </span>
                  <div class="transaction-info">
                    <span class="transaction-date"><strong>29 авг</strong></span>
                    <span class="transaction-type">обмен</span>
                  </div>
                </div>
                <div class="transaction-div">
                  <span class="symbol transaction-symb">&#8381;
                  </span>
                  <span class="transaction-txt deposit">
                    + 140 000<punds>.00 RUB</punds>
                  </span>
                  <div class="transaction-info">
                    <span class="transaction-date"><strong>29 авг</strong></span>
                    <span class="transaction-type">пополнение</span>
                  </div>
                </div>
                <div class="transaction-div">
                  <img :src="btcCur">
                  <span class="transaction-txt">
                    24 234<punds>.47 RUB</punds>
                    <svg
                      width="14"
                      style="margin-left:1%"
                      height="10"
                      viewBox="0 0 14 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.66553 5C2.66553 2.79086 4.45639 1 6.66553 1C7.67997
                        1 8.60622 1.37764 9.31135 2"
                        stroke="white"
                        stroke-linecap="round"
                      />
                      <path
                        d="M0.653949 3.59425L2.72586 6.18684L4.74216 3.55076"
                        stroke="white"
                        stroke-linecap="round"
                      />
                      <path
                        d="M10.6655 5.1875C10.6655 7.39664 8.87467 9.1875 6.66553
                        9.1875C5.64557 9.1875 4.71478 8.80575 4.00824 8.17734"
                        stroke="white"
                        stroke-linecap="round"
                      />
                      <path
                        d="M12.5791 6.47798L10.5989 4.00007L8.67176 6.51954"
                        stroke="white"
                        stroke-linecap="round"
                      />
                    </svg>
                    0.035760065 <punds>BTC</punds>
                  </span>
                  <div class="transaction-info">
                    <span class="transaction-date"><strong>08 авг</strong></span>
                    <span class="transaction-type">обмен</span>
                  </div>
                </div>
              </q-scroll-area>
            </div>
          </div>
        </div>
      </q-container>
      <VerificationAccount
        class="test"
        :is-active-modal="isActiveModal"
        @close="isActiveModal = false"
      />
      <Header
        class="line-bottom"
        @open="isOpenSideBar = true"
      />
      <side-bar-header
        :is-open-side-bar="isOpenSideBar"
        @close="isOpenSideBar = false"
      />
      <side-bar :mobilecheck="mobileCheck" />
      <contacts-block
        class="cntb cntbheight"
      />
      <additional-links
        class="adl"
        style="position: absolute; top: auto"
      />
    </div>
    <div
      class="items-center column"
      v-else-if="!isScreenSizeSM"
    >
      <q-container class="wallet-info-container">
        <div class="wallet-content">
          <div class="avatar-wrap">
            <img :src="profileImg">
          </div>
          <span class="profile-name">
            Osinskaia Valerie
          </span>
          <div>
            <div class="course">
              <span class="course-span">
                <cur>&#36;</cur>
                0.86
                <svg
                  class="arrowup"
                  viewBox="0 0 8 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.35355 0.646446C4.15829 0.451184
                  3.84171 0.451184 3.64645 0.646446L0.464466
                  3.82843C0.269204 4.02369 0.269204 4.34027
                  0.464466 4.53553C0.659728 4.7308 0.976311 4.7308 1.17157
                  4.53553L4 1.70711L6.82843 4.53553C7.02369 4.7308 7.34027
                  4.7308 7.53553 4.53553C7.7308 4.34027 7.7308 4.02369
                  7.53553 3.82843L4.35355 0.646446ZM4.5 9L4.5 1L3.5 1L3.5 9L4.5 9Z"
                    fill="#5AC06A"
                  />
                </svg>
              </span>
              <span class="course-span">
                <cur>
                  &euro;
                </cur>
                0.86
                <svg
                  class="arrowup"
                  viewBox="0 0 8 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.35355 0.646446C4.15829 0.451184
                  3.84171 0.451184 3.64645 0.646446L0.464466
                  3.82843C0.269204 4.02369 0.269204 4.34027
                  0.464466 4.53553C0.659728 4.7308 0.976311 4.7308 1.17157
                  4.53553L4 1.70711L6.82843 4.53553C7.02369 4.7308 7.34027
                  4.7308 7.53553 4.53553C7.7308 4.34027 7.7308 4.02369
                  7.53553 3.82843L4.35355 0.646446ZM4.5 9L4.5 1L3.5 1L3.5 9L4.5 9Z"
                    fill="#5AC06A"
                  />
                </svg>
              </span>
              <span class="course-span">
                <svg
                  class="crse-btc"
                  viewBox="0 0 12 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.914 24.548V22H0.522V3.436H2.914V0.809999H4.578V3.436H4.786C5.37533
                  3.436 5.91267 3.462 6.398 3.514V0.809999H8.062V3.774C9.154 4.05133 9.97733
                  4.53667 10.532 5.23C11.104 5.906 11.39 6.842 11.39 8.038C11.39 9.13
                  11.1213 10.04 10.584 10.768C10.064 11.4787 9.30133 11.938 8.296
                  12.146V12.276C8.98933 12.3973 9.60467 12.6227 10.142 12.952C10.6967
                  13.2813 11.13 13.7493 11.442 14.356C11.7713 14.9627 11.936 15.7513 11.936
                  16.722C11.936 18.074 11.5893 19.1833 10.896 20.05C10.22 20.8993 9.27533 21.4713
                  8.062 21.766V24.548H6.398V22C6.27667 22 6.14667 22 6.008
                  22H4.578V24.548H2.914ZM5.254 11.34C6.67533 11.34 7.646 11.0887 8.166
                  10.586C8.70333 10.066 8.972 9.30333 8.972 8.298C8.972 7.27533 8.64267 6.54733
                  7.984 6.114C7.34267 5.66333 6.31133 5.438 4.89 5.438H2.862V11.34H5.254ZM2.862
                  13.29V20.024H5.566C7.00467 20.024 8.01 19.7033 8.582 19.062C9.154 18.4207
                  9.44 17.58 9.44 16.54C9.44 15.5693 9.14533 14.7893 8.556 14.2C7.96667 13.5933
                  6.90933 13.29 5.384 13.29H2.862Z"
                    fill="#999999"
                  />
                </svg>
                0.86
                <svg
                  class="arrowup"
                  viewBox="0 0 8 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.35355 0.646446C4.15829 0.451184
                  3.84171 0.451184 3.64645 0.646446L0.464466
                  3.82843C0.269204 4.02369 0.269204 4.34027
                  0.464466 4.53553C0.659728 4.7308 0.976311 4.7308 1.17157
                  4.53553L4 1.70711L6.82843 4.53553C7.02369 4.7308 7.34027
                  4.7308 7.53553 4.53553C7.7308 4.34027 7.7308 4.02369
                  7.53553 3.82843L4.35355 0.646446ZM4.5 9L4.5 1L3.5 1L3.5 9L4.5 9Z"
                    fill="#5AC06A"
                  />
                </svg>
              </span>
            </div>
            <div class="cur-div flex items-center">
              <img
                :src="btcCur"
              >
              <symb style="margin-right: 8px">
                BTC
              </symb> Bitcoin
              <div class="cur-div-value">
                <span>0.004752152</span>
                <small>≈ 24987.21 &#8381;</small>
              </div>
            </div>
            <div
              class="btns-from-header flex"
              v-if="!isScreenSizeSM"
            >
              <div class="header-btn btn-1">
                <span class="btn-svg">
                  <svg
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.927246 12.4609C0.927246 18.8337 6.09345 24 12.4663
                    24C18.8391 24 24.0053 18.8337 24.0053 12.4609C24.0053
                    6.08808 18.8391 0.921875 12.4663 0.921875"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <circle
                      cx="0.733362"
                      cy="9.04098"
                      r="0.733362"
                      fill="white"
                    />
                    <circle
                      cx="2.57711"
                      cy="5.3486"
                      r="0.733362"
                      fill="white"
                    />
                    <circle
                      cx="5.34811"
                      cy="2.58004"
                      r="0.733362"
                      fill="white"
                    />
                    <circle
                      cx="9.04098"
                      cy="0.733362"
                      r="0.733362"
                      fill="white"
                    />
                    <path
                      d="M14.5461 12.191C15.117 12.0786 15.6049 11.6883
                      15.7917 10.9912C16.0694 9.95471 15.4111 9.1098 13.9343
                      8.71411L12.0201 8.2012C11.4867 8.05826 10.9383 8.37484
                      10.7954 8.90831L9.59262 13.3971C9.44967 13.9306 9.76626
                      14.4789 10.2997 14.6218L12.3974 15.1839C14.0209 15.6189
                      15.0251 15.2097 15.32 14.109C15.5486 13.256 15.2167 12.587
                      14.5461 12.191ZM13.6527 9.43495C14.5883 9.68563 15.0269
                      10.1767 14.845 10.8555C14.6631 11.5342 14.0377 11.7402
                      13.1022 11.4895L11.7048 11.1151C11.4381 11.0437 11.2798
                      10.7695 11.3512 10.5028L11.6429 9.41408C11.7144 9.14734
                      11.9886 8.98905 12.2553 9.06052L13.6527 9.43495ZM12.5597
                      14.4311L10.9331 13.9952C10.6663 13.9238 10.508 13.6496
                      10.5795 13.3829L10.8933 12.2116C10.9648 11.9449 11.239
                      11.7866 11.5057 11.8581L13.1324 12.294C14.1505 12.5668
                      14.6124 13.0444 14.4133 13.7874C14.2142 14.5303 13.5779
                      14.7039 12.5597 14.4311Z"
                      fill="#D8014E"
                    />
                    <path
                      d="M12.7492 8.33479L13.0176 7.33301"
                      stroke="#D8014E"
                      stroke-width="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14.4962 8.91682L14.7646 7.91504"
                      stroke="#D8014E"
                      stroke-width="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.42 15.9002L10.6885 14.8984"
                      stroke="#D8014E"
                      stroke-width="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.1666 16.4813L12.4351 15.4795"
                      stroke="#D8014E"
                      stroke-width="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                </span>
                <span class="btn-txt">
                  Купить/Продать
                </span>
              </div>
              <div class="header-btn btn-2">
                <span class="btn-svg">
                  <svg
                    viewBox="0 0 23 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3.06445 29.6608V17.0479H19.5806V29.6608H3.06445ZM1.56445 16.2575C1.56445
                      15.8656 1.88219 15.5479 2.27413 15.5479H20.3709C20.7628 15.5479 21.0806
                      15.8656 21.0806 16.2575V30.4511C21.0806 30.843 20.7628 31.1608 20.3709
                      31.1608H2.27413C1.88219 31.1608 1.56445 30.843 1.56445
                      30.4511V16.2575ZM16.8225
                      24.064C17.4104 24.064 17.887 23.5874 17.887 22.9995C17.887 22.4115 17.4104
                      21.9349 16.8225 21.9349C16.2346 21.9349 15.758 22.4115 15.758 22.9995C15.758
                      23.5874 16.2346 24.064 16.8225 24.064Z"
                      fill="white"
                    />
                    <path
                      d="M2.46427 15.5253C2.06016 15.6162 1.80627 16.0175 1.8972 16.4217C1.98812
                      16.8258 2.38943 17.0797 2.79354 16.9887L2.46427 15.5253ZM2.79354
                      16.9887L16.1216
                      13.9899L15.7924 12.5265L2.46427 15.5253L2.79354 16.9887ZM16.0725
                      13.9506V16.6119H17.5725V13.9506H16.0725ZM16.1216 13.9899C16.1179 13.9907
                      16.1107 13.9911 16.1028 13.9892C16.0959 13.9876 16.091 13.9848 16.0876
                      13.9821C16.0842 13.9793 16.0804 13.9752 16.0773 13.9688C16.0737 13.9615
                      16.0725
                      13.9544 16.0725 13.9506H17.5725C17.5725 13.0152 16.705 12.3212 15.7924
                      12.5265L16.1216 13.9899Z"
                      fill="white"
                    />
                    <path
                      d="M12.605 1C12.605 0.585786 12.2692 0.25 11.855
                    0.25C11.4408 0.25 11.105 0.585786
                      11.105 1L12.605 1ZM11.3247 11.4658C11.6175 11.7587 12.0924
                      11.7587 12.3853
                      11.4658L17.1583 6.69284C17.4512 6.39995 17.4512 5.92508
                      17.1583 5.63218C16.8654
                      5.33929 16.3905 5.33929 16.0976 5.63218L11.855 9.87482L7.61234 5.63218C7.31945
                      5.33929 6.84457 5.33929 6.55168 5.63218C6.25879 5.92508
                      6.25879 6.39995 6.55168
                      6.69284L11.3247 11.4658ZM11.105 1L11.105 10.9355L12.605
                      10.9355L12.605 1L11.105 1Z"
                      fill="#D8014E"
                    />
                  </svg>
                </span>
                <span class="btn-txt">
                  Пополнить
                </span>
              </div>
              <div class="header-btn btn-3 header-btn-active">
                <span class="btn-svg">
                  <svg
                    viewBox="0 0 30 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.4859 15.4644L9.88729 18.1445L2.21471 15.3122L21.4229
                      8.57689L14.6876 27.7851L11.8554 20.1125L14.5354 16.5139C14.7578
                      16.2153 14.7275 15.7988 14.4642 15.5356C14.201 15.2724 13.7845
                      15.2421 13.4859 15.4644Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.62793 23.9082L0.888546 29.6476"
                      stroke="#D8014E"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.33008 27.0977L6.05466 28.3731"
                      stroke="#D8014E"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                </span>
                <span class="btn-txt">
                  Перевести
                </span>
              </div>
              <div class="header-btn btn-4">
                <span class="btn-svg">
                  <svg
                    viewBox="0 0 31 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="15.5133"
                      cy="11.5919"
                      r="1.24624"
                      fill="#D8014E"
                    />
                    <path
                      d="M5.04883 11.4075C5.04883 5.6596 9.70843 1 15.4563 1C16.1143 1 16.7581
                    1.06106 17.3822 1.17783M22.3405 3.60188C21.7771 3.10468 21.1596 2.66752
                    20.4978 2.30039"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M1.79306 7.75614L4.93445 12.8849L9.15408 8.59919"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M25.9512 11.8239C25.9512 17.5718 21.2916 22.2314 15.5437 22.2314C14.8857
                    22.2314 14.2419 22.1704 13.6178 22.0536M8.65955 19.6296C9.22287 20.1268
                    9.84042 20.5639 10.5022 20.9311"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M29.2074 15.4753L26.066 10.3465L21.8464 14.6323"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </span>
                <span class="btn-txt">
                  Обменять
                </span>
              </div>
            </div>
          </div>
          <div
            class="hystory-div"
            :class="{'active-menu': cryptoMenu}"
          >
            <div class="hystory-sidebar">
              <span class="hystory-sidebar-title">История</span>
              <!-- Чек1 -->
              <div class="date-div div-wrap">
                <a
                  href="#"
                  class="leftarrow"
                >
                  <svg
                    viewBox="0 0 8 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.98719 1.21408L2.1154 5.10682L7.06829 8.89584"
                      stroke="#434343"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </a>
                <span
                  class="date-txt"
                >
                  Сентябрь
                </span>
                <a
                  class="rightarrow"
                  href="#"
                >
                  <svg
                    viewBox="0 0 8 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.02648 1.21408L5.89828 5.10682L0.945386 8.89584"
                      stroke="#434343"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </a>
              </div>
              <div class="div-wrap">
                <svg
                  class="polygon-down"
                  viewBox="0 0 9 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  @click="cryptoMenu = !cryptoMenu"
                >
                  <path
                    d="M4.5 7L8.39712 0.250001L0.602886 0.250001L4.5 7Z"
                    fill="#535151"
                  />
                </svg>
                <span class="div-wrap-txt">Валюта</span>
                <div
                  class="div-wrap-menu"
                  v-if="cryptoMenu"
                >
                  <span class="div-wrap-txt">Валюта</span>
                  <svg
                    viewBox="0 0 9 7"
                    fill="none"
                    class="polygon-down"
                    xmlns="http://www.w3.org/2000/svg"
                    @click="cryptoMenu = !cryptoMenu"
                  >
                    <path
                      d="M4.5 0L8.39712 6.75L0.602886 6.75L4.5 0Z"
                      fill="#535151"
                    />
                  </svg>
                  <div class="menu-div menu-div-crypto">
                    <span class="menu-div-txt">
                      Криптовалюта
                    </span>
                    <div class="menu-crypto-div">
                      <img
                        class="imgCur"
                        :src="btcCur"
                      >
                      <span class="menu-cur-name">
                        BTC
                      </span>
                    </div>
                    <div class="menu-crypto-div">
                      <img
                        class="imgCur"
                        :src="linkCur"
                      >
                      <span class="menu-cur-name">
                        LINK
                      </span>
                    </div>
                    <div class="menu-crypto-div">
                      <img
                        class="imgCur"
                        :src="adaCur"
                      >
                      <span class="menu-cur-name">
                        ADA
                      </span>
                    </div>
                    <div class="menu-crypto-div">
                      <img
                        class="imgCur"
                        :src="dotCur"
                      >
                      <span class="menu-cur-name">
                        DOT
                      </span>
                    </div>
                    <div class="menu-crypto-div">
                      <img
                        class="imgCur"
                        :src="ethCur"
                      >
                      <span class="menu-cur-name">
                        ETH
                      </span>
                    </div>
                  </div>
                  <div class="menu-div menu-div-crypto">
                    <span class="menu-div-txt">
                      Фиатная валюта
                    </span>
                    <div class="menu-crypto-div">
                      <span class="imgCur imgCur-empty" />
                      <span class="menu-cur-name">
                        Название
                      </span>
                    </div>
                    <div class="menu-crypto-div">
                      <span class="imgCur imgCur-empty" />
                      <span class="menu-cur-name">
                        Название
                      </span>
                    </div>
                    <div class="menu-crypto-div">
                      <span class="imgCur imgCur-empty" />
                      <span class="menu-cur-name">
                        Название
                      </span>
                    </div>
                    <div class="menu-crypto-div">
                      <span class="imgCur imgCur-empty" />
                      <span class="menu-cur-name">
                        Название
                      </span>
                    </div>
                    <div class="menu-crypto-div">
                      <span class="imgCur imgCur-empty" />
                      <span class="menu-cur-name">
                        Название
                      </span>
                    </div>
                  </div>
                  <div class="menu-div menu-div-crypto">
                    <a
                      href="#"
                      class="menu-div-txt"
                    >
                      Все валюты
                    </a>
                  </div>
                </div>
              </div>
              <div class="div-wrap">
                <span class="div-wrap-txt">Действия</span>
                <svg
                  class="polygon-down"
                  viewBox="0 0 9 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  @click="actionsMenu = !actionsMenu"
                >
                  <path
                    d="M4.5 7L8.39712 0.250001L0.602886 0.250001L4.5 7Z"
                    fill="#535151"
                  />
                </svg>
                <div
                  class="div-wrap-menu"
                  v-if="actionsMenu"
                >
                  <span class="div-wrap-txt">Действия</span>
                  <svg
                    viewBox="0 0 9 7"
                    fill="none"
                    class="polygon-down"
                    xmlns="http://www.w3.org/2000/svg"
                    @click="actionsMenu = !actionsMenu"
                  >
                    <path
                      d="M4.5 0L8.39712 6.75L0.602886 6.75L4.5 0Z"
                      fill="#535151"
                    />
                  </svg>
                  <div class="menu-div menu-div-crypto">
                    <span class="actions-txt">Покупка</span>
                    <span class="actions-txt">Продажа</span>
                    <span class="actions-txt">Ввод</span>
                    <span class="actions-txt">Вывод</span>
                    <span class="actions-txt">Обмен</span>
                  </div>
                  <div class="menu-div menu-div-crypto">
                    <a
                      href="#"
                      class="menu-div-txt"
                    >
                      Все действия
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="transaction-list">
              <q-scroll-area
                :thumb-style="thumbStyle"
                :bar-style="barStyle"
                class="trsn-qscrl"
              >
                <div class="transaction-div">
                  <img
                    style="margin-bottom:-2%"
                    :src="btcCur"
                  >
                  <span class="transaction-txt">
                    - 34<punds>.00 BTC</punds>
                  </span>
                  <div class="transaction-info">
                    <span class="transaction-date"><strong>сегодня</strong></span>
                    <span class="transaction-type">перевод</span>
                  </div>
                </div>
                <div class="transaction-div">
                  <img :src="ethCur">
                  <span class="transaction-txt">
                    - 265 760<punds>.00 ETH</punds>
                  </span>
                  <div class="transaction-info">
                    <span class="transaction-date"><strong>19 сент</strong></span>
                    <span class="transaction-type">перевод</span>
                  </div>
                </div>
                <div class="transaction-div">
                  <span class="symbol transaction-symb">&#8381;
                  </span>
                  <span class="transaction-txt">
                    - 24 234<punds>.47 RUB</punds>
                  </span>
                  <div class="transaction-info">
                    <span class="transaction-date"><strong>17 сент</strong></span>
                    <span class="transaction-type">фиатный баланс <svg
                      width="12"
                      height="8"
                      viewBox="0 0 12 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614
                        0.723858 4.5 1 4.5L1 3.5ZM11.3536 4.35355C11.5488 4.15829
                        11.5488 3.84171 11.3536 3.64644L8.17157 0.464465C7.97631
                        0.269203 7.65973 0.269203 7.46447 0.464465C7.2692 0.659727
                        7.2692 0.97631 7.46447 1.17157L10.2929 4L7.46447 6.82843C7.2692
                        7.02369 7.2692 7.34027 7.46447 7.53553C7.65973 7.73079 7.97631
                        7.73079 8.17157 7.53553L11.3536 4.35355ZM1 4.5L11 4.5L11 3.5L1 3.5L1 4.5Z"
                        fill="#777777"
                      />
                    </svg>
                      <svg
                        width="16"
                        height="12"
                        style="margin-bottom:-2%;"
                        viewBox="0 0 16 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.0097 2.09487C14.0592 2.18065 14.0872 2.37602 13.9011
                          2.75809C13.7225 3.12502 13.3867 3.57465 12.8999 4.07776C11.9303
                          5.0799 10.4272 6.2275 8.61883 7.27155C6.81048 8.3156 5.06509
                          9.04353 3.7124 9.38216C3.0333 9.55217 2.47601 9.61818 2.06891
                          9.58943C1.64501 9.5595 1.48979 9.43762 1.44026 9.35183C1.39073
                          9.26605 1.36279 9.07068 1.54882 8.68861C1.72747 8.32168 2.06329
                          7.87205 2.55007 7.36894C3.51968 6.3668 5.02278 5.2192 6.83113
                          4.17515C8.63948 3.1311 10.3849 2.40317 11.7376 2.06454C12.4167
                          1.89453 12.974 1.82852 13.3811 1.85727C13.805 1.8872 13.9602
                          2.00908 14.0097 2.09487Z"
                          stroke="#D8004E"
                          stroke-width="0.8"
                        />
                        <circle
                          cx="7.875"
                          cy="5.43164"
                          r="4"
                          fill="#D8004E"
                          stroke="#222222"
                        />
                        <line
                          x1="10.9862"
                          y1="10.9563"
                          x2="4.92467"
                          y2="0.457381"
                          stroke="#D8004E"
                          stroke-width="0.7"
                        />
                      </svg>

                      карта</span>
                  </div>
                </div>
                <div class="transaction-div">
                  <span class="symbol transaction-symb">&#36;
                  </span>
                  <span class="transaction-txt deposit">
                    + 1 234<punds>.47 USD</punds>
                  </span>
                  <div class="transaction-info">
                    <span class="transaction-date"><strong>17 сент</strong></span>
                    <span class="transaction-type">пополнение</span>
                  </div>
                </div>
                <div class="transaction-div">
                  <img :src="btcCur">
                  <span class="transaction-txt deposit">
                    + 45<punds>.00 BTC</punds>
                  </span>
                  <div class="transaction-info">
                    <span class="transaction-date"><strong>29 авг</strong></span>
                    <span class="transaction-type">покупка</span>
                  </div>
                </div>
                <div class="transaction-div">
                  <span class="symbol transaction-symb">&#8381;
                  </span>
                  <span class="transaction-txt">
                    0.035760065 <punds>BTC</punds>
                    <svg
                      width="14"
                      style="margin-left:1%"
                      height="10"
                      viewBox="0 0 14 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.66553 5C2.66553 2.79086 4.45639 1 6.66553 1C7.67997
                        1 8.60622 1.37764 9.31135 2"
                        stroke="white"
                        stroke-linecap="round"
                      />
                      <path
                        d="M0.653949 3.59425L2.72586 6.18684L4.74216 3.55076"
                        stroke="white"
                        stroke-linecap="round"
                      />
                      <path
                        d="M10.6655 5.1875C10.6655 7.39664 8.87467 9.1875 6.66553
                        9.1875C5.64557 9.1875 4.71478 8.80575 4.00824 8.17734"
                        stroke="white"
                        stroke-linecap="round"
                      />
                      <path
                        d="M12.5791 6.47798L10.5989 4.00007L8.67176 6.51954"
                        stroke="white"
                        stroke-linecap="round"
                      />
                    </svg>
                    24 234<punds>.47 RUB</punds>
                  </span>
                  <div class="transaction-info">
                    <span class="transaction-date"><strong>29 авг</strong></span>
                    <span class="transaction-type">обмен</span>
                  </div>
                </div>
                <div class="transaction-div">
                  <span class="symbol transaction-symb">&#8381;
                  </span>
                  <span class="transaction-txt deposit">
                    + 140 000<punds>.00 RUB</punds>
                  </span>
                  <div class="transaction-info">
                    <span class="transaction-date"><strong>29 авг</strong></span>
                    <span class="transaction-type">пополнение</span>
                  </div>
                </div>
                <div class="transaction-div">
                  <img :src="btcCur">
                  <span class="transaction-txt">
                    24 234<punds>.47 RUB</punds>
                    <svg
                      width="14"
                      style="margin-left:1%"
                      height="10"
                      viewBox="0 0 14 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.66553 5C2.66553 2.79086 4.45639 1 6.66553 1C7.67997
                        1 8.60622 1.37764 9.31135 2"
                        stroke="white"
                        stroke-linecap="round"
                      />
                      <path
                        d="M0.653949 3.59425L2.72586 6.18684L4.74216 3.55076"
                        stroke="white"
                        stroke-linecap="round"
                      />
                      <path
                        d="M10.6655 5.1875C10.6655 7.39664 8.87467 9.1875 6.66553
                        9.1875C5.64557 9.1875 4.71478 8.80575 4.00824 8.17734"
                        stroke="white"
                        stroke-linecap="round"
                      />
                      <path
                        d="M12.5791 6.47798L10.5989 4.00007L8.67176 6.51954"
                        stroke="white"
                        stroke-linecap="round"
                      />
                    </svg>
                    0.035760065 <punds>BTC</punds>
                  </span>
                  <div class="transaction-info">
                    <span class="transaction-date"><strong>08 авг</strong></span>
                    <span class="transaction-type">обмен</span>
                  </div>
                </div>
                <div class="transaction-div">
                  <img :src="btcCur">
                  <span class="transaction-txt">
                    - 34<punds>.00 BTC</punds>
                  </span>
                  <div class="transaction-info">
                    <span class="transaction-date"><strong>сегодня</strong></span>
                    <span class="transaction-type">перевод</span>
                  </div>
                </div>
                <div class="transaction-div">
                  <img :src="ethCur">
                  <span class="transaction-txt">
                    - 265 760<punds>.00 ETH</punds>
                  </span>
                  <div class="transaction-info">
                    <span class="transaction-date"><strong>19 сент</strong></span>
                    <span class="transaction-type">перевод</span>
                  </div>
                </div>
                <div class="transaction-div">
                  <span class="symbol transaction-symb">&#8381;
                  </span>
                  <span class="transaction-txt">
                    - 24 234<punds>.47 RUB</punds>
                  </span>
                  <div class="transaction-info">
                    <span class="transaction-date"><strong>17 сент</strong></span>
                    <span class="transaction-type">фиатный баланс <svg
                      width="12"
                      height="8"
                      viewBox="0 0 12 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614
                        0.723858 4.5 1 4.5L1 3.5ZM11.3536 4.35355C11.5488 4.15829
                        11.5488 3.84171 11.3536 3.64644L8.17157 0.464465C7.97631
                        0.269203 7.65973 0.269203 7.46447 0.464465C7.2692 0.659727
                        7.2692 0.97631 7.46447 1.17157L10.2929 4L7.46447 6.82843C7.2692
                        7.02369 7.2692 7.34027 7.46447 7.53553C7.65973 7.73079 7.97631
                        7.73079 8.17157 7.53553L11.3536 4.35355ZM1 4.5L11 4.5L11 3.5L1 3.5L1 4.5Z"
                        fill="#777777"
                      />
                    </svg>
                      <svg
                        width="16"
                        height="12"
                        style="margin-bottom:-2%;"
                        viewBox="0 0 16 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.0097 2.09487C14.0592 2.18065 14.0872 2.37602 13.9011
                          2.75809C13.7225 3.12502 13.3867 3.57465 12.8999 4.07776C11.9303
                          5.0799 10.4272 6.2275 8.61883 7.27155C6.81048 8.3156 5.06509
                          9.04353 3.7124 9.38216C3.0333 9.55217 2.47601 9.61818 2.06891
                          9.58943C1.64501 9.5595 1.48979 9.43762 1.44026 9.35183C1.39073
                          9.26605 1.36279 9.07068 1.54882 8.68861C1.72747 8.32168 2.06329
                          7.87205 2.55007 7.36894C3.51968 6.3668 5.02278 5.2192 6.83113
                          4.17515C8.63948 3.1311 10.3849 2.40317 11.7376 2.06454C12.4167
                          1.89453 12.974 1.82852 13.3811 1.85727C13.805 1.8872 13.9602
                          2.00908 14.0097 2.09487Z"
                          stroke="#D8004E"
                          stroke-width="0.8"
                        />
                        <circle
                          cx="7.875"
                          cy="5.43164"
                          r="4"
                          fill="#D8004E"
                          stroke="#222222"
                        />
                        <line
                          x1="10.9862"
                          y1="10.9563"
                          x2="4.92467"
                          y2="0.457381"
                          stroke="#D8004E"
                          stroke-width="0.7"
                        />
                      </svg>

                      карта</span>
                  </div>
                </div>
                <div class="transaction-div">
                  <span class="symbol transaction-symb">&#36;
                  </span>
                  <span class="transaction-txt deposit">
                    + 1 234<punds>.47 USD</punds>
                  </span>
                  <div class="transaction-info">
                    <span class="transaction-date"><strong>17 сент</strong></span>
                    <span class="transaction-type">пополнение</span>
                  </div>
                </div>
                <div class="transaction-div">
                  <img :src="btcCur">
                  <span class="transaction-txt deposit">
                    + 45<punds>.00 BTC</punds>
                  </span>
                  <div class="transaction-info">
                    <span class="transaction-date"><strong>29 авг</strong></span>
                    <span class="transaction-type">покупка</span>
                  </div>
                </div>
                <div class="transaction-div">
                  <span class="symbol transaction-symb">&#8381;
                  </span>
                  <span class="transaction-txt">
                    0.035760065 <punds>BTC</punds>
                    <svg
                      width="14"
                      style="margin-left:1%"
                      height="10"
                      viewBox="0 0 14 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.66553 5C2.66553 2.79086 4.45639 1 6.66553 1C7.67997
                        1 8.60622 1.37764 9.31135 2"
                        stroke="white"
                        stroke-linecap="round"
                      />
                      <path
                        d="M0.653949 3.59425L2.72586 6.18684L4.74216 3.55076"
                        stroke="white"
                        stroke-linecap="round"
                      />
                      <path
                        d="M10.6655 5.1875C10.6655 7.39664 8.87467 9.1875 6.66553
                        9.1875C5.64557 9.1875 4.71478 8.80575 4.00824 8.17734"
                        stroke="white"
                        stroke-linecap="round"
                      />
                      <path
                        d="M12.5791 6.47798L10.5989 4.00007L8.67176 6.51954"
                        stroke="white"
                        stroke-linecap="round"
                      />
                    </svg>
                    24 234<punds>.47 RUB</punds>
                  </span>
                  <div class="transaction-info">
                    <span class="transaction-date"><strong>29 авг</strong></span>
                    <span class="transaction-type">обмен</span>
                  </div>
                </div>
                <div class="transaction-div">
                  <span class="symbol transaction-symb">&#8381;
                  </span>
                  <span class="transaction-txt deposit">
                    + 140 000<punds>.00 RUB</punds>
                  </span>
                  <div class="transaction-info">
                    <span class="transaction-date"><strong>29 авг</strong></span>
                    <span class="transaction-type">пополнение</span>
                  </div>
                </div>
                <div class="transaction-div">
                  <img :src="btcCur">
                  <span class="transaction-txt">
                    24 234<punds>.47 RUB</punds>
                    <svg
                      width="14"
                      style="margin-left:1%"
                      height="10"
                      viewBox="0 0 14 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.66553 5C2.66553 2.79086 4.45639 1 6.66553 1C7.67997
                        1 8.60622 1.37764 9.31135 2"
                        stroke="white"
                        stroke-linecap="round"
                      />
                      <path
                        d="M0.653949 3.59425L2.72586 6.18684L4.74216 3.55076"
                        stroke="white"
                        stroke-linecap="round"
                      />
                      <path
                        d="M10.6655 5.1875C10.6655 7.39664 8.87467 9.1875 6.66553
                        9.1875C5.64557 9.1875 4.71478 8.80575 4.00824 8.17734"
                        stroke="white"
                        stroke-linecap="round"
                      />
                      <path
                        d="M12.5791 6.47798L10.5989 4.00007L8.67176 6.51954"
                        stroke="white"
                        stroke-linecap="round"
                      />
                    </svg>
                    0.035760065 <punds>BTC</punds>
                  </span>
                  <div class="transaction-info">
                    <span class="transaction-date"><strong>08 авг</strong></span>
                    <span class="transaction-type">обмен</span>
                  </div>
                </div>
              </q-scroll-area>
            </div>
          </div>
        </div>
      </q-container>
      <VerificationAccount
        :is-active-modal="isActiveModal"
        @close="isActiveModal = false"
      />
      <Header
        class="line-bottom"
        @open="isOpenSideBar = true"
      />
      <side-bar-header
        :is-open-side-bar="isOpenSideBar"
        @close="isOpenSideBar = false"
      />
      <side-bar :mobilecheck="mobileCheck" />
      <contacts-block
        class="cntb cntbheight"
      />
      <additional-links
        class="adl"
      />
    </div>
    <VerificationAccount
      class="row justify-center items-center test"
      v-else
      :is-active-modal="isActiveModal"
      @close="isActiveModal = false"
    />
  </q-layout>
</template>

<script>
import ProfileNavUpPanel from 'layouts/layout-profile/profile-nav-up-panel';
import ContactsBlock from 'components/contacts/contacts-block';
import VerificationAccount from 'components/modal-verification/verification-account';
import SideBarHeader from 'components/blocks/side-bar';
import AdditionalLinks from 'components/additional-links/index';
import sideBar from 'layouts/sidebar';
import profileImg from 'assets/avatar.png';
import btcCur from 'assets/btc.png';
import ethCur from 'assets/eth.png';
import usdtCur from 'assets/usdt.png';
import linkCur from 'assets/clink.png';
import adaCur from 'assets/cada.png';
import dotCur from 'assets/cdot.png';
import Header from 'layouts/layout-profile/profile-header';

export default {
  data() {
    return {
      btcCur,
      mobileCheck: false,
      linkCur,
      adaCur,
      dotCur,
      ethCur,
      usdtCur,
      profileImg,
      isActiveModal: true,
      cryptoMenu: false,
      actionsMenu: false,
      isOpenSideBar: false,
      thumbStyle: {
        right: '-4%',
        borderRadius: '17px',
        backgroundColor: '#DEDADA',
        width: '3px',
        height: '40px!important',
        opacity: 1,
      },
      barStyle: {
        right: '-4%',
        borderRadius: '17px',
        width: '3px',
        backgroundColor: '#303030',
        marginTop: '5%',
        opacity: 1,
      },
    };
  },
  components: {
    ContactsBlock,
    AdditionalLinks,
    sideBar,
    Header,
    SideBarHeader,
    VerificationAccount,
    ProfileNavUpPanel,
  },
  computed: {
    isScreenSizeSM() {
      return this.$q.screen.lt.sm;
    },
    isScreenSizeMD() {
      return this.$q.screen.lt.md;
    },
  },
};
</script>
<style scoped>
.test {
  width: 100%;
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
  margin-left: 31%;
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
  margin-bottom: 194px;
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
  margin-left: 29%;
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
    top: 3.5%;
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
