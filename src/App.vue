<template>
  <Header />
  <div class="wrapper">
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  components: {Header}
};
</script>
