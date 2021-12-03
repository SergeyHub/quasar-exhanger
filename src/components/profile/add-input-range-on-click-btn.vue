<template>
  <div
    class="add-input"
  >
    <div
      class="add-input__margin flex row"
      v-for="(i, k) in items"
      :key="k"
    >
      <q-input
        dark
        borderless
        v-model="i.initialIp"
        class="add-input__input"
        style="width: 135px; height: 38px;"
      />
      <div class="hyphen flex items-center">-</div>
      <q-input
        dark
        borderless
        v-model="i.endIp"
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
  name: 'AddInputRangeOnClickBtn',
  props: {
    items: {
      type: Array,
    },
  },
  methods: {
    addInput() {
      this.items.push(
        {
          initialIp: '1',
          endIp: '',
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
.hyphen
  margin: 0 5px
.add-input__margin
  margin-bottom: 19px
.add-input__input
  padding-left: 20px
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
