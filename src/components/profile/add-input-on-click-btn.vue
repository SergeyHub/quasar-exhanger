<template>
  <div
    class="add-input"
    :class="{'row': isScreenSizeSM}"
  >
    <div
      class=""
      :class="{'small-margin': isScreenSizeSM}"
      v-for="(i, k) in items"
      :key="k"
    >
      <q-input
        dark
        borderless
        v-model="i.value"
        class="add-input__input"
        style="width: 135px; height: 38px;"
      >
        <template v-slot:append>
          <q-icon
            name="close"
            @click="deleteInput(k)"
            class="cursor-pointer"
            style="color: #444444; font-size: 10px; margin-right: 10px"
          />
        </template>
      </q-input>
    </div>
    <div
      class="add-input__btn flex row items-center"
      @click="addInput"
    >
      <div class="add-input__btn__img__border flex justify-center items-center">
        <img
          src="~assets/plus-add-input.svg"
          class="add-input__btn__img"
        >
      </div>
      Добавить
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddInputOnClickBtn',
  props: {
    items: {
      type: Array,
    },
  },
  computed: {
    isScreenSizeSM() {
      return this.$q.screen.lt.sm;
    },
  },
  methods: {
    addInput() {
      this.items.push(
        {
          value: '',
        },
      );
    },
    deleteInput(index) {
      this.items.splice(index, 1);
    },
  },
};
</script>

<style scoped lang="sass">
.small-margin
  margin-right: 15px
  &:last-child
    margin-right: 0
.add-input__input
  padding-left: 20px
  margin-bottom: 19px
  border: 1px solid #444444
  border-radius: 10px
.add-input__btn
  cursor: pointer
  background: #292929
  width: 135px
  height: 38px
  padding: 7px 13px
  border-radius: 10px
.add-input__btn__img__border
  width: 24px
  height: 24px
  background: #444444
  border-radius: 90px
  margin-right: 12px
</style>
