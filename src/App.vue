<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
// import LoginForm from "./components/LoginForm";
import { mapGetters } from "vuex";
export default {
  name: "App",
  components: {
    // LoginForm,
  },
  mounted() {
    console.log(this.getJoke);
  },

  computed: {
    ...mapGetters(["getJoke"]),
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
