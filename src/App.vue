<template>
  <div class="paroter-container" v-if="isParoterVisible">
    <!--Popup content-->
    <transition name="fade">
      <div class="paroter-popup" v-if="popupVisible">
        <default-layout>
          <home-page v-if="isPage === 'home'" />
        </default-layout>
      </div>
    </transition>
    <!--Show button-->
    <transition name="fade">
      <div class="show-button" v-if="showBtnVisible">
        <button
          class="circle-btn circle-btn--gray"
          @click="openParoter"
          vertical-center
        >
          <img src="@/assets/img/logo.svg" alt="" />
        </button>
      </div>
    </transition>
  </div>
</template>

<script lang="js">
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import HomePage from '@/pages/HomePage.vue';
import { mapState, mapMutations } from 'vuex';
export default {
  name: "App",
  data() {
    return {
      showBtnVisible: true,
      popupVisible: false,
    }
  },
  components: {
    DefaultLayout,
    HomePage
  },
  computed: {
    ...mapState({
      isParoterVisible: store => store.visibility.isParoterVisible,
      isPopupVisible: store => store.visibility.isPopupVisible
    }),
    isPage() {
      return 'home'
    }
  },
  watch: {
    isPopupVisible(newVal) {
      if(newVal === true) {
        this.showBtnVisible = false;
        setTimeout(() => {
          this.popupVisible = true;
        }, 500);
      }
      else {
        this.popupVisible = false;
        setTimeout(() => {
          this.showBtnVisible = true
        }, 500);
      }
    }
  },
  methods: {
    ...mapMutations({
      setPopupVisible: "setPopupVisible"
    }),
    openParoter(){
      this.setPopupVisible(true);
    }
  }
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
