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
        AppFooter
    }
}
</script>

<style lang="scss" scoped>
.default-layout {
  width: 383px;
  border-radius: $radius-one;
  background-color: $white;
  border: 2px solid $gray-one;
  padding: $space-one;
  &__content {
    padding: 21px 0;
  }
}
</style>
