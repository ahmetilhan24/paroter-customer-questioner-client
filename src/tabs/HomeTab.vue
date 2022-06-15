<template>
  <div class="home-tab">
    <h2 class="home-tab__title">Get support now!</h2>
    <p class="home-tab__paragraph">Hi! How can we help you?</p>
    <div class="home-tab__buttons" vertical-center>
      <button
        class="big-btn big-btn--blue"
        @click="switchTab(QUESTION_TAB_NAME)"
      >
        Ask Question
      </button>
      <button
        class="big-btn big-btn--gray"
        @click="switchTab(FEEDBACK_TAB_NAME)"
      >
        Send Feedback
      </button>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import {
  QUESTION_TAB_NAME,
  HOME_TAB_NAME,
  FEEDBACK_TAB_NAME,
} from "@/constants/tab.constants.js";
export default {
  name: "HomeTab",
  data() {
    return {
      QUESTION_TAB_NAME,
      HOME_TAB_NAME,
      FEEDBACK_TAB_NAME,
    };
  },
  methods: {
    ...mapMutations({
      setActiveTab: "setActiveTab",
    }),
    switchTab(tab) {
      this.setActiveTab(tab);
    },
  },
};
</script>
<style lang="scss" scoped>
.home-tab {
  width: 100%;
  &__title {
    font-size: 20px;
    font-weight: bold;
  }
  &__description {
    font-size: 16px;
    font-weight: 400;
  }
  &__buttons {
    width: 100%;
    button {
      width: 100%;
      &:nth-child(1) {
        margin-bottom: 21px;
      }
    }
  }
}
</style>
