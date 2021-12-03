<template>
  <div class="about-value__list">
    <div
      v-for="item in values"
      :key="item.id"
      :data-item="item.id"
      class="about-value__list__item"
      :class="{ 'is-active' : item.active }"
      @click="show(item.id)"
      @mouseenter="show(item.id)"
    >
      <img
        :src="'img/about/' + item.icon"
        alt=""
      >
    </div>
    <div class="about-value__desc">
      <div>
        <h3 v-text="valueTitle" />
        <div v-html="valueDesc" />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AboutValItem',
  data() {
    return {
      isActive: false,
      valueTitle: '',
      valueDesc: '',
      image: '',
      values: [
        {
          id: 1,
          icon: 'value-icon-1.svg',
          active: true,
          desc: {
            title: 'Текст 1',
            desc: '<p>Сложные финансовые процессы должны стать элементарными</p>'
              + '<p><a href="#">Начать работу</a></p>',
          },
        },
        {
          id: 2,
          icon: 'value-icon-2.svg',
          active: false,
          desc: {
            title: 'Текст 2',
            desc: '<p>Сложные финансовые процессы должны стать элементарными</p>'
              + '<p><a href="#">Начать работу</a></p>',
          },
        },
        {
          id: 3,
          icon: 'value-icon-3.svg',
          active: false,
          desc: {
            title: 'Текст 3',
            desc: '<p>Сложные финансовые процессы должны стать элементарными</p>'
              + '<p><a href="#">Начать работу</a></p>',
          },
        },
        {
          id: 4,
          icon: 'value-icon-4.svg',
          active: false,
          desc: {
            title: 'Текст 4',
            desc: '<p>Сложные финансовые процессы должны стать элементарными</p>'
              + '<p><a href="#">Начать работу</a></p>',
          },
        },
        {
          id: 5,
          icon: 'value-icon-5.svg',
          active: false,
          desc: {
            title: 'Текст 5',
            desc: '<p>Сложные финансовые процессы должны стать элементарными</p>'
              + '<p><a href="#">Начать работу</a></p>',
          },
        },
        {
          id: 6,
          icon: 'value-icon-6.svg',
          active: false,
          desc: {
            title: 'Текст 6',
            desc: '<p>Сложные финансовые процессы должны стать элементарными</p>'
              + '<p><a href="#">Начать работу</a></p>',
          },
        },
        {
          id: 7,
          icon: 'value-icon-7.svg',
          active: false,
          desc: {
            title: 'Текст 7',
            desc: '<p>Сложные финансовые процессы должны стать элементарными</p>'
              + '<p><a href="#">Начать работу</a></p>',
          },
        },
        {
          id: 8,
          icon: 'value-icon-8.svg',
          active: false,
          desc: {
            title: 'Текст 8',
            desc: '<p>Сложные финансовые процессы должны стать элементарными</p>'
              + '<p><a href="#">Начать работу</a></p>',
          },
        },
      ],
    };
  },
  created() {
    this.desc();
  },
  methods: {
    show(id) {
      const oldAct = this.values.filter((item) => item.active);
      const oldActId = oldAct[0].id - 1;
      const newAct = id - 1;
      this.values[oldActId].active = false;
      this.values[newAct].active = true;
      this.desc();
    },
    desc() {
      const act = this.values.filter((item) => item.active);
      const { title, desc } = act[0].desc;
      this.valueTitle = title;
      this.valueDesc = desc;
    },
  },
};
</script>

<style lang="sass" scoped>
@import "src/css/app"

.about-value__list__item
  img
    position: relative
    z-index: 5
    @media only screen and (max-width: $mobile)
      max-width: 80%
  &[data-item="1"]
    left: 50%
    top: -34px
    margin-left: -34px
    @media only screen and (max-width: $mobile)
      top: -30px
      margin-left: -30px
    &:after
      right: -3px
      top: 3px
  &[data-item="2"]
    right: 35px
    top: 25px
    @media only screen and (max-width: $mobile)
      right: 19px
      top: 13px
    &:after
      right: 28px
      top: 9px
  &[data-item="3"]
    right: -38px
    top: 180px
    @media only screen and (max-width: $mobile)
      top: 110px
      right: -30px
    &:after
      right: 28px
      top: 9px
  &[data-item="4"]
    right: 30px
    top: 334px
    @media only screen and (max-width: $mobile)
      right: 19px
      top: auto
      bottom: 12px
    &:after
      right: 15px
      bottom: 18px
  &[data-item="5"]
    left: 50%
    bottom: -34px
    margin-left: -34px
    @media only screen and (max-width: $mobile)
      bottom: -30px
      margin-left: -30px
  &[data-item="6"]
    left: 33px
    bottom: 20px
    @media only screen and (max-width: $mobile)
      left: 16px
      bottom: 8px
    &:after
      right: 2px
      bottom: 36px
  &[data-item="7"]
    left: -34px
    top: 180px
    @media only screen and (max-width: $mobile)
      top: 87px
      left: -23px
    &:after
      left: 39px
      bottom: 18px
  &[data-item="8"]
    left: 20px
    top: 30px
    @media only screen and (max-width: $mobile)
      top: 14px
      left: 10px
    &:after
      top: 7px
      left: 20px
</style>
