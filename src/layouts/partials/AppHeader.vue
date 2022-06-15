<template>
  <header class="app-header" horizontal-center>
    <div class="app-header__left">
      <img src="@/assets/img/logo.svg" alt="Logo" />
    </div>
    <div class="app-header__right">
      <button
        class="close-btn circle-btn circle-btn--white"
        @click="closeParoter"
        vertical-center
      >
        <svg
          width="16"
          height="2"
          viewBox="0 0 16 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="16" height="2" fill="#333333" />
        </svg>
      </button>
    </div>
  </header>
</template>
<script lang="js">
import { mapMutations } from 'vuex'
export default {
    name: "AppHeader",
    methods: {
        ...mapMutations({
            setPopupVisible: "setPopupVisible"
        }),
        closeParoter(){
            this.setPopupVisible(false)
        }
    }
}
</script>
<style lang="scss" scoped>
.app-header {
  position: relative;
  z-index: 22;
  justify-content: space-between;
  margin-bottom: 20px;
}
</style>
