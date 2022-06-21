<template>
  <main class="default-layout">
    <app-header />
    <div class="default-layout__content">
      <slot />
    </div>
    <app-footer />
  </main>
</template>
<script lang="js">
import AppHeader from '@/layouts/partials/AppHeader.vue'
import AppFooter from './partials/AppFooter.vue'
export default {
    name: "DefaultLayout",
    components: {
        AppHeader,
        AppFooter,
    }
}
</script>

<style lang="scss" scoped>
.default-layout {
  position: relative;
  width: 383px;
  border-radius: $radius-one;
  background-color: $white;
  border: 2px solid $blue-one;
  padding: $space-one;
  &::before {
    content: "";
    display: block;
    width: 100%;
    position: absolute;
    height: 88px;
    border-radius: 10px 10px 0 0;
    left: 0;
    top: 0;
    background-color: $blue-one;
  }
  &__content {
    padding: 30px 0;
  }
}
</style>
