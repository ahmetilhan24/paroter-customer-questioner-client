<template>
  <div class="paroter-container" v-if="isParoterVisible">
    <!--Popup content-->
    <transition name="fade">
      <div class="paroter-popup" v-if="popupVisible">
        <default-layout>
          <home-tab v-if="activeTab === HOME_TAB_NAME" />
          <question-tab v-if="activeTab === QUESTION_TAB_NAME" />
        </default-layout>
      </div>
    </transition>
    <!--Show button-->
    <transition name="fade">
      <div class="show-button" v-if="showBtnVisible">
        <button
          class="circle-btn circle-btn--white"
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
import HomeTab from '@/tabs/HomeTab.vue';
import QuestionTab from '@/tabs/question/QuestionTab.vue';
import { mapState, mapMutations } from 'vuex';
import { QUESTION_TAB_NAME, HOME_TAB_NAME } from "@/constants/tab.constants.js";
export default {
  name: "App",
  components: {
    DefaultLayout,
    HomeTab,
    QuestionTab
  },
  data() {
    return {
      showBtnVisible: true,
      popupVisible: true,
      QUESTION_TAB_NAME,
      HOME_TAB_NAME
    }
  },
  computed: {
    ...mapState({
      isParoterVisible: store => store.visibility.isParoterVisible,
      isPopupVisible: store => store.visibility.isPopupVisible,
      activeTab: store => store.tab.activeTab
    }),
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
