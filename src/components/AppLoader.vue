<template>
  <div v-if="isLoaderVisible" class="container" vertical-center>
    <div class="lds-ring" vertical-center>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>
<script lang="js">
import { mapState } from 'vuex';
export default {
  name: "AppPreloder",
  computed:  {
    ...mapState({
      isLoaderVisible: store => store.modals.isLoaderVisible
    })
  },
}
</script>
<style lang="scss" scoped>
.container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 12;
  backdrop-filter: blur(4px);
  border-radius: $radius-one;
  .lds-ring {
    div {
      box-sizing: border-box;
      display: block;
      position: absolute;
      width: 32px;
      height: 32px;
      margin: 8px;
      border: 3px solid $blue-one;
      border-radius: 50%;
      animation: ldsRing 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      border-color: $blue-one transparent transparent transparent;
    }
    div:nth-child(1) {
      animation-delay: -0.45s;
    }
    div:nth-child(2) {
      animation-delay: -0.3s;
    }
    div:nth-child(3) {
      animation-delay: -0.15s;
    }
  }
}
</style>
