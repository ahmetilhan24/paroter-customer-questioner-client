<template>
  <section class="question-tab">
    <div class="ask-form">
      <div class="form-control">
        <p>Full name</p>
        <input placeholder="John doe" type="text" />
      </div>
      <div class="form-control">
        <p>E-mail</p>
        <input placeholder="john@example.com" type="text" />
      </div>
      <div class="form-control">
        <p>Ask</p>
        <textarea placeholder="Lorem ipsum dolar sit ament..."></textarea>
      </div>
      <button class="big-btn big-btn--blue">Send</button>
    </div>
  </section>
</template>

<script lang="js">
export default {
  name: "QuestionTab"
};
</script>
<style lang="scss" scoped>
.question-tab {
  .ask-form {
    button {
      width: 100%;
      margin-top: 10px;
      border-radius: $radius-four;
    }
  }
}
</style>
