<template>
  <q-header class="header-wallets">
    <q-toolbar class="flex row justify-between q-pa-xs">
      <div class="flex column">
        <div class="flex no-wrap row full-width items-center">
          <div class="flex no-wrap items-center">
            <img
              alt="Incompay logo"
              src="~assets/incompay-logo.svg"
            >
          </div>
          <div
            v-if="!isScreenSizeSM"
            class="font-weight-600 font-size-18"
          >
            Extra
          </div>
        </div>
        <div
          v-if="!isScreenSizeSM"
          class="font-weight-500 text-italic font-size-8 title-wrap"
        >
          — Опережая будущее
        </div>
      </div>

      <div
        class="row no-wrap header-btn-div"
        v-if="!isScreenSizeSM"
      >
        <div class="header-btn flex">
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
        <div class="header-btn flex">
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
                31.1608H2.27413C1.88219 31.1608 1.56445 30.843 1.56445 30.4511V16.2575ZM16.8225
                24.064C17.4104 24.064 17.887 23.5874 17.887 22.9995C17.887 22.4115 17.4104
                21.9349 16.8225 21.9349C16.2346 21.9349 15.758 22.4115 15.758 22.9995C15.758
                23.5874 16.2346 24.064 16.8225 24.064Z"
                fill="white"
              />
              <path
                d="M2.46427 15.5253C2.06016 15.6162 1.80627 16.0175 1.8972 16.4217C1.98812
                16.8258 2.38943 17.0797 2.79354 16.9887L2.46427 15.5253ZM2.79354 16.9887L16.1216
                13.9899L15.7924 12.5265L2.46427 15.5253L2.79354 16.9887ZM16.0725
                13.9506V16.6119H17.5725V13.9506H16.0725ZM16.1216 13.9899C16.1179 13.9907
                16.1107 13.9911 16.1028 13.9892C16.0959 13.9876 16.091 13.9848 16.0876
                13.9821C16.0842 13.9793 16.0804 13.9752 16.0773 13.9688C16.0737 13.9615 16.0725
                13.9544 16.0725 13.9506H17.5725C17.5725 13.0152 16.705 12.3212 15.7924
                12.5265L16.1216 13.9899Z"
                fill="white"
              />
              <path
                d="M12.605 1C12.605 0.585786 12.2692 0.25 11.855 0.25C11.4408 0.25 11.105 0.585786
                11.105 1L12.605 1ZM11.3247 11.4658C11.6175 11.7587 12.0924 11.7587 12.3853
                11.4658L17.1583 6.69284C17.4512 6.39995 17.4512 5.92508 17.1583 5.63218C16.8654
                5.33929 16.3905 5.33929 16.0976 5.63218L11.855 9.87482L7.61234 5.63218C7.31945
                5.33929 6.84457 5.33929 6.55168 5.63218C6.25879 5.92508 6.25879 6.39995 6.55168
                6.69284L11.3247 11.4658ZM11.105 1L11.105 10.9355L12.605 10.9355L12.605 1L11.105 1Z"
                fill="#D8014E"
              />
            </svg>
          </span>
          <span class="btn-txt">
            Пополнить
          </span>
        </div>
        <div class="header-btn flex header-btn-active">
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
        <div class="header-btn flex">
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

      <div>
        <div class="flex row items-center">
          <mobile-button
            v-if="isScreenSizeSM"
            label="Войти"
          />
          <div
            v-else
            class="sign-in-btn text-uppercase font-weight-600 mobile-hide"
          >
            Войти
          </div>
          <img
            src="~assets/half-moon.svg"
            class="q-ml-sm"
          >
          <div class="font-weight-600 lang-wrapper">
            ENG
          </div>
          <img
            src="~assets/arrow_drop_down.svg"
            class="q-ml-xs"
          >
          <img
            alt="Incompay logo"
            src="~assets/ellipse-with-dot.svg"
            class="q-ml-md"
          >
        </div>
      </div>
    </q-toolbar>
  </q-header>
</template>

<script>
import MobileButton from 'components/mobile-button';

export default {
  name: 'PageHeader',
  components: { MobileButton },
  computed: {
    isScreenSizeSM() {
      return this.$q.screen.lt.sm;
    },
  },
};
</script>

<style lang="sass" scoped>
.header-btn-div
    width:75%
    justify-content: center
.header-wallets
    border-bottom: 0.5px solid #777
.header-btn
    border:0.5px solid #333
    font-size: 0.8vw
    border-radius: 10px
    background: #101010
    width: 14.4%
    padding: 0.4% 1%
.header-btn-active
    border: 0.5px solid #fff
.header-btn:not(:first-child)
    margin-left:2%
.btn-svg
    width:14%
    display: block
    svg
        width:100%
        margin-bottom: -45%
.btn-svg:nth-child(2n)
    svg
        margin-bottom:0!important
.btn-txt
    display: block
    margin-top:3%
    margin-left: 10%
.title-wrap
  white-space: nowrap

.lang-wrapper
  margin-left: 11px
  font-size: 10px
  line-height: 12px

.lh-15
  line-height: 15px

.link
  text-decoration: none
  padding: 0 16px
  &:hover
    color: $positive

.sign-in-btn
  font-size: 10px
  line-height: 12px
  border: 1px solid #C9C9C9
  padding: 6px 13px
  cursor: pointer
  margin-right: 16px

@media (min-width:769px) and (max-width: 1025px)
    .header-btn-div
        width:69%
    .header-btn
        width:15.4%
        padding:0.7% 1%
    .btn-svg
        width:13%
        svg
            margin-bottom:-43%
    .btn-txt
        margin-top:3%
@media (max-width:767px)
    .mobile-hide
        display:none
@media (min-width:1921px)
    .q-pa-xs
        padding:16px 16px
    .header-btn
        border-radius: 18px
</style>
