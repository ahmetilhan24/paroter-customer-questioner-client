<template>
  <main class="default-layout">
    <app-header />
    <div class="default-layout__content">
      <slot />
    </div>
  </main>
</template>
<script lang="js">
import AppHeader from '@/layouts/partials/AppHeader.vue'
export default {
    name: "DefaultLayout",
    components: {
        AppHeader
    }
}
</script>

<style lang="scss" scoped>
.default-layout {
  width: 383px;
  height: 341px;
  border-radius: $radius-one;
  background-color: $white;
  border: 2px solid $gray-one;
  padding: $space-one;
  &__content {
    padding: 21px 0;
  }
}
</style>
