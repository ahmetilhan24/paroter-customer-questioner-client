<template>
  <section class="question-tab">
    <div class="ask-form" v-if="!isSubmited">
      <div class="form-control">
        <p>Full name</p>
        <input v-model="askData.full_name" placeholder="John doe" type="text" />
      </div>
      <div class="form-control">
        <p>E-mail</p>
        <input
          v-model="askData.email"
          placeholder="john@example.com"
          type="text"
        />
      </div>
      <div class="form-control">
        <p>Ask</p>
        <textarea
          v-model="askData.message"
          placeholder="Lorem ipsum dolar sit ament..."
        ></textarea>
      </div>
      <button class="big-btn big-btn--blue" @click="send">Send</button>
    </div>
    <div class="ask-response" v-if="isSubmited">
      <img
        src="@/assets/icons/envelope-circle-check-solid.svg"
        alt="Mail sended"
      />
      <p>We will get back to you as soon as possible, thank you.</p>
    </div>
  </section>
</template>

<script lang="js">
import { sendAsk } from '@/services/ask.service';
export default {
  name: "QuestionTab",
  data(){
    return{
      askData: {
        full_name: "",
        email: "",
        message: ""
      },
      isSubmited: false
    }
  },
  methods: {
    async send(){
      const res = await sendAsk(this.askData);
      if(res.status === 201) {
        this.isSubmited = true;
      }
    }
  }
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
  .ask-response {
    text-align: center;
    img {
      width: 80px;
      fill: $blue-one;
    }
  }
}
</style>
