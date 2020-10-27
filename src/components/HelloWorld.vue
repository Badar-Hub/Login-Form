<template>
  <h2>Hello World</h2>
</template>

<script>
export default {
  mounted() {
    const params = this.$route.params;
    console.log(params);
  },
};
</script>

<style>
</style>