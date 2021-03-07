<template>
  <div style="border: 1px solid gray; padding: 10px">
    <h4>Componente Hijo</h4>Checkbox componente hijo
    <input v-model="sheetHijo" type="checkbox">
    <p>
      Valor de sheet en hijo:
      <strong>{{sheetHijo}}</strong>
    </p>
  </div>
</template>

<script>
export default {
  props: ["value"],
  name: "Hijo",
  computed: {
    sheetHijo: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      }
    }
  }
};
</script>
