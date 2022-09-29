<template>
  <my-counter />
  <second-counter />
  <button @click="addOne">Increment(delay)</button>
  <button @click="addWithoutDelay">Increment</button>
  <button @click="subOne">Decrement</button>
</template>

<script>
import MyCounter from "./components/MyCounter.vue";
import SecondCounter from "./components/SecondCounter.vue";

export default {
  name: "App",
  components: {
    MyCounter,
    SecondCounter,
  },
  methods: {
    addOne() {
      //calling function in mutations using commit
      // this.$store.commit("increment");

      //to pass some payload
      // this.$store.commit("increase", { value: 20 }); //20 we can give for payload but it is a object we can use more key value pair

      //calling action function we use dispatch
      this.$store.dispatch({ type: "increase", value: 20 }); //or this.$store.dispatch( "increase", {value: 20 });
    },
    subOne() {
      // this.$store.commit("decrement");

      //to pass some payload
      this.$store.commit("decrease", { value: 30 }); //20 we can give for payload but it is a object we can use more key value pair
    },

    addWithoutDelay() {
      this.$store.dispatch("increment");
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
