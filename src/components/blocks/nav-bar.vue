<template>
  <div class="b-nav-bar">
    <div
      v-if="!isScreenSizeSM"
      class="b-nav-bar__list"
    >
      <div
        class="b-nav-bar__item"
        v-for="(item, index) in items"
        :key="index"
      >
        <a
          href="#"
          class="b-nav-bar__link"
          :class="{ 'is-active' : item.active }"
          v-text="item.value"
        />
      </div>
    </div>
    <div
      v-else
      class="b-nav-bar__list"
    >
      <q-scroll-area
        horizontal
        style="height: 26px; width: 400px; max-width: 350px"
        class="bg-grey-1 rounded-borders"
      >
        <div class="row no-wrap">
          <div
            class="b-nav-bar__item"
            v-for="(item, index) in items"
            :key="index"
          >
            <a
              href="#"
              class="b-nav-bar__link"
              :class="{ 'is-active' : item.active }"
              v-text="item.value"
            />
          </div>
        </div>
      </q-scroll-area>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  computed: {
    isScreenSizeSM() {
      return this.$q.screen.lt.sm;
    },
  },
  props: {
    items: {
      type: Array,
      default: () => [
        { value: 'Криптобиржа', active: true },
        { value: 'Платежная система' },
        { value: 'Месседжер' },
        { value: 'Все новости' },
      ],
    },
  },
};
</script>

<style lang="sass" scoped>
@import "src/css/app"
.b-nav-bar
  display: flex
  justify-content: center
  margin-top: 68px
  margin-bottom: 74px
  .b-nav-bar__list
    display: flex
    border-bottom: 1px solid #666666
  .b-nav-bar__item
    font-weight: 400
    font-size: 14px
    line-height: 113.84%
    margin: 0 27px
    padding: 0 0 11px 0
    position: relative
    white-space: nowrap
    @media only screen and (max-width: $laptop)
      margin: 0 5px
  .b-nav-bar__link
    color: #999999
    text-decoration: none
    &:hover
      color: $white
    &:after
      content: ''
      height: 2px
      background: $white
      position: absolute
      left: 0
      right: 0
      bottom: 0
      opacity: 0
    &.is-active
      color: $white
      &:after
        opacity: 1
</style>
