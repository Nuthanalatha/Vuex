<template>
  <h2>Counter:{{ counter }}</h2>
  <!-- //counter() -->
  <!-- <button @click="addOne">Increment</button>
  <button @click="subOne">Decrement</button> -->
</template>

<script>
export default {
  //   data() {
  //     return {
  //       counter: 0,
  //     };
  //   },
  computed: {
    //here we can also use menthods ,but computed is recommended because of optimization
    counter() {
      //to access the store and get the data
      return this.$store.state.counter;
    },
  },
  //   methods: {
  //     addOne() {
  //       this.$store.commit("increment");
  //     },
  //     subOne() {
  //       this.$store.commit("decrement");
  //     },
  //   },
};
</script>

<style></style>
