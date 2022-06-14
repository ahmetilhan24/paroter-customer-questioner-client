<template>
  <div class="paroter-container">
    <!--Popup content-->
    <div class="paroter-popup">
      <default-layout> </default-layout>
    </div>
    <!--Show button-->
    <div class="show-button" v-if="false">
      <button>Show Popup</button>
    </div>
  </div>
</template>

<script lang="js">
import DefaultLayout from '@/layouts/DefaultLayout.vue';
export default {
  name: "App",
  components: {
    DefaultLayout
  },
};
</script>
<style lang="scss">
@import "./assets/sass/_style.scss";
.paroter-container {
  position: fixed;
  right: 30px;
  bottom: 30px;
  .paroter-popup {
    width: 100%;
  }
}
</style>
