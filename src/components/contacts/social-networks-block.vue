<template>
  <div class="row no-wrap">
    <a href="#">
      <img
        alt="pyramid"
        :src="iconInstagram"
        @mouseover="iconInstagram = iconHoverInstagram"
        @mouseleave="iconInstagram = iconNotHoverInstagram"
      >
    </a>
    <a href="#">
      <img
        alt="pyramid"
        :src="iconFacebook"
        @mouseover="iconFacebook = iconHoverFacebook"
        @mouseleave="iconFacebook = iconNotHoverFacebook"
      >
    </a>
    <a href="#">
      <img
        alt="pyramid"
        :src="iconYoutube"
        @mouseover="iconYoutube = iconHoverYoutube"
        @mouseleave="iconYoutube = iconNotHoverYoutube"
      >
    </a>
    <a href="#">
      <img
        alt="pyramid"
        :src="iconTelegram"
        @mouseover="iconTelegram = iconHoverTelegram"
        @mouseleave="iconTelegram = iconNotHoverTelegram"
      >
    </a>
  </div>
</template>

<script>
import telegram from 'assets/telegram.svg';
import telegramHover from 'assets/Telegram-hover.svg';
import instagram from 'assets/instagram.svg';
import instagramHover from 'assets/Instagram-hover.svg';
import youtube from 'assets/youtube.svg';
import youtubeHover from 'assets/YouTube-hover.svg';
import facebook from 'assets/facebook.svg';
import facebookHover from 'assets/Facebook-hover.svg';

export default {
  name: 'SocialNetworksBlock',
  data: () => ({
    iconInstagram: instagram,
    iconNotHoverInstagram: instagram,
    iconHoverInstagram: instagramHover,
    iconTelegram: telegram,
    iconNotHoverTelegram: telegram,
    iconHoverTelegram: telegramHover,
    iconFacebook: facebook,
    iconNotHoverFacebook: facebook,
    iconHoverFacebook: facebookHover,
    iconYoutube: youtube,
    iconNotHoverYoutube: youtube,
    iconHoverYoutube: youtubeHover,
  }),
};
</script>

<style lang="sass" scoped>
@import "../../css/app"

a
  margin-left: 20px
  display: flex
  text-decoration: none

  @media (max-width: $laptop)
    margin-left: 15px
  @media (max-width: $mobile)
    margin-left: 20px
  &:first-child
    margin-left: 0
  img
    width: 20px
    max-height: 20px
</style>
