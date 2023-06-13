<template>
  <div class="counter">
    <h1>This is a counter page</h1>
    <h2>Counter: {{ counter }}</h2>
    <button @click="increase">+1</button>
    <button @click="decrease">-1</button>
  </div>
</template>

<script>
import useCounter from "@/composable/useCounter";
export default {
  name: "counter",
  props: {},
  emits: [],
  setup() {
    const { counter, increase, decrease } = useCounter();

    return { counter, increase, decrease };
  },
};
</script>

<style></style>
