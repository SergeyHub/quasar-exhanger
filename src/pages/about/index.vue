<template>
  <div>
    <q-page class="items-center column">
      <div class="titleMain">
        <div class="titleMain__image">
          <img
            src="~assets/bg-about-main.svg"
            alt=""
          >
        </div>
        <div class="titleMain__desc">
          <h1>О компании</h1>
          <p>Extra —  опережая будущее</p>
        </div>
      </div>
      <nav-bar :items="navBarItems" />
      <about-info />
      <about-num />
      <about-value />
      <about-mission />
      <about-partner />
      <about-work />
      <get-started />
    </q-page>
    <contacts-block />

    <additional-links style="position: absolute; top: auto" />
  </div>
</template>

<script>
import NavBar from 'components/blocks/nav-bar';
import AboutInfo from 'pages/about/about-info';
import AboutNum from 'pages/about/about-num';
import AboutValue from 'pages/about/about-value';
import AboutMission from 'pages/about/about-mission';
import AboutPartner from 'pages/about/about-partner';
import AboutWork from 'pages/about/about-work';
import ContactsBlock from 'components/contacts/contacts-block';
import AdditionalLinks from 'components/additional-links';
import GetStarted from 'components/blocks/get-started';

export default {
  name: 'News',
  components: {
    GetStarted,
    AdditionalLinks,
    ContactsBlock,
    AboutWork,
    AboutPartner,
    AboutMission,
    AboutValue,
    AboutNum,
    AboutInfo,
    NavBar,

  },
  data() {
    return {
      navBarItems: [
        { value: 'Деятельность', active: true },
        { value: 'Наши ценности' },
        { value: 'Миссия' },
        { value: 'Партнёры и клиенты' },
        { value: 'Работа у нас' },
      ],
    };
  },
};
</script>

<style lang="sass" scoped>
@import "src/css/app"

.b-nav-bar
  @media only screen and (max-width: $laptop)
.bg-black
  background-color: black
.margin-top-60
  margin-top: 60px
.margin-bottom-60
  margin-bottom: 60px
.btn-margins
  margin-top: 110px
  margin-bottom: 110px
  @media only screen and (max-width: $layout-breakpoint-extra-small)
    margin: 70px 0
.titleMain
  position: relative
  width: 100%
  margin-top: 138px
  margin-bottom: 63px
  overflow: hidden
  @media only screen and (max-width: $laptop)
    margin: 21px 0 0 0
    height: 201px
  &__image
    padding: 0
    display: flex
    justify-content: center
    overflow: hidden
    @media only screen and (max-width: $laptop)
      position: absolute
      left: 50%
      top: 0
      transform: translateX(-50%)
    img
      @media only screen and (max-width: $laptop)
        height: 201px
        max-width: none

  &__desc
    position: absolute
    top: 0
    bottom: 0
    left: 0
    right: 0
    text-align: center
    display: flex
    align-items: center
    justify-content: center
    flex-direction: column
    align-items: center
    h1
      font-style: normal
      font-weight: 600
      font-size: 42px
      line-height: 113.84%
      margin: 0 0 20px 0
      padding: 0
      @media only screen and (max-width: $layout-breakpoint-extra-small)
        font-size: 24px
        margin-bottom: 11px
    p
      font-weight: normal
      font-size: 16px
      line-height: 135%
      margin: 0
      padding: 0
      @media only screen and (max-width: $layout-breakpoint-extra-small)
        font-size: 12px
</style>
