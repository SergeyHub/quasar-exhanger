<template>
  <div class="page-bar">
    <ul class="page-bar__list">
      <li class="page-bar__item">
        <a
          href="#"
          class="page-bar__link"
        >
          <img
            alt=""
            src="~assets/arw-prev.svg"
          >
        </a>
      </li>
      <li class="page-bar__item">
        <a
          href="#"
          class="page-bar__link is-active"
        >1</a>
      </li>
      <li class="page-bar__item">
        <span>...</span>
      </li>
      <li class="page-bar__item">
        <a
          href="#"
          class="page-bar__link"
        >11</a>
      </li>
      <li class="page-bar__item">
        <a
          href="#"
          class="page-bar__link"
        >12</a>
      </li>
      <li class="page-bar__item">
        <a
          href="#"
          class="page-bar__link"
        >13</a>
      </li>
      <li class="page-bar__item">
        <a
          href="#"
          class="page-bar__link"
        >14</a>
      </li>
      <li class="page-bar__item">
        <a
          href="#"
          class="page-bar__link"
        >15</a>
      </li>
      <li class="page-bar__item">
        <span>...</span>
      </li>
      <li class="page-bar__item">
        <a
          href="#"
          class="page-bar__link"
        >21</a>
      </li>
      <li class="page-bar__item">
        <a
          href="#"
          class="page-bar__link"
        >
          <img
            alt=""
            src="~assets/arw-next.svg"
          >
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PageBar',
};
</script>

<style lang="sass" scoped>
@import "src/css/app"

.page-bar
  display: flex
  justify-content: center
  &__list
    display: flex
    align-items: center
    margin: 0
    padding: 0
  &__item
    list-style: none
    margin: 0 3px
    padding: 0
    @media only screen and (max-width: $layout-breakpoint-extra-small)
      margin: 0
    span
      color: #666666
      font-weight: 600
      font-size: 16px
      line-height: 113.84%
  &__link
    color: $white
    text-decoration: none
    min-width: 30px
    height: 30px
    display: flex
    align-items: center
    justify-content: center
    border: 1px solid inherit
    &.is-active
      border: 1px solid $white
</style>
