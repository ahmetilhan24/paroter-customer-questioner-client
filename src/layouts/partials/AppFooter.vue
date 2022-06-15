<template>
  <footer class="app-footer" vertical-center>
    <p class="app-footer__back-text" @click="goBack">Back</p>
  </footer>
</template>
<script lang="js">
import { mapMutations } from 'vuex';
import { HOME_TAB_NAME } from '@/constants/tab.constants';
export default {
    name: "AppFooter",
    methods: {
        ...mapMutations({
            setActiveTab: 'setActiveTab'
        }),
        goBack(){
            this.setActiveTab(HOME_TAB_NAME);
        }
    }
}
</script>
<style lang="scss" scoped>
.app-footer {
  &__back-text {
    margin: 0;
    font-size: 14px;
    padding: 5px;
    cursor: pointer;
    transition: 0.2s;
    border-radius: $radius-four;
    &:hover {
      background-color: $gray-one;
    }
  }
}
</style>
