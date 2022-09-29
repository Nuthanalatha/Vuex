import { createApp } from "vue";
import App from "./App.vue";
import { createStore } from "vuex";

let store = createStore({
  state() {
    return {
      counter: 10,
    };
  },
  mutations: {
    //we should not write async code in mutations
    increment(state) {
      console.log("increment mutation executed");
      state.counter += 1;
    },

    // decrement(state) {
    //   console.log("decrement mutation", state);
    //   state.counter -= 1;
    // },

    //here we are giving value dynamically not hardcoded
    increase(state, payload) {
      console.log("state", state);
      console.log("payload", payload);
      state.counter += payload.value; //or payload
    },
    decrease(state, payload) {
      console.log("state", state);
      console.log("payload", payload);
      state.counter -= payload.value; //or payload
    },
  },

  getters: {
    //used to compute data and do some calulation and used for hug calulation that time we use this in different components for many times

    counterThreeTimes(state) {
      return state.counter * 3;
    },

    //we can write one getter inside other getter
    limitCounter(state, getters) {
      //instead of rewriting the logic,we can use the above getters
      //   let counterThreeTimes = state.counter * 3;
      let counterThreeTimes = getters.counterThreeTimes;
      if (counterThreeTimes < 0) {
        return 0;
      }
      if (counterThreeTimes > 100) {
        return 100;
      }
      return counterThreeTimes;
    },
  },
  //if we want do sideeffects
  actions: {
    //it is recommended use function name as it is in mutation fun name
    //we  can write async code
    //action will come in between components and mutations
    //actions method will get context object as an argument by default
    //so for value we need to pass payload as second argument because we used
    increase(context, payload) {
      console.log("increase action executed");
      console.log("context", context);

      setTimeout(() => {
        //here we are calling mutation func
        context.commit("increase", payload);
      }, 2000);
    },

    //without using aysnc behavior
    increment(context) {
      console.log("increment action");
      //calling mutation function
      context.commit("increment");
    },
  },
});
let app = createApp(App);
app.use(store);
app.mount("#app");
