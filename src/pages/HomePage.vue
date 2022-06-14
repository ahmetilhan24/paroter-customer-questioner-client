<template>
  <div class="home-page">
    <h2 class="home-page__title">Get support now!</h2>
    <p class="home-page__paragraph">Hi! How can we help you?</p>
    <div class="home-page__buttons" vertical-center>
      <button class="big-btn big-btn--blue">Continue Question</button>
      <button class="big-btn big-btn--gray">Continue Message</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomePage",
};
</script>
<style lang="scss" scoped>
.home-page {
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
