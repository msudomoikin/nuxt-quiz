<template>
  <div>
    <div class="question card">
      <div class="p-3">
        <h3 class="mb-3" v-html="question.text"></h3>
        <button
          class="btn btn-outline-primary btn-lg mr-3 mb-3"
          v-html="question.var1"
          v-bind:value="question.var1"
          :disabled="!!btnDisable"
          @click.prevent="click(question.var1, $event)"
        ></button>

        <button
          class="btn btn-outline-primary btn-lg mr-3 mb-3"
          v-html="question.var2"
          v-bind:value="question.var1"
          :disabled="!!btnDisable"
          @click.prevent="click(question.var2, $event)"
        ></button>

        <button
          class="btn btn-outline-primary btn-lg mb-3"
          v-html="question.var3"
          v-bind:value="question.var1"
          :disabled="!!btnDisable"
          @click.prevent="click(question.var3, $event)"
        ></button>
      </div>
      <img v-bind:src="this.getImgUrl(question.photo)" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["question"],
  data() {
    return {
      btnDisable: false,
    };
  },
  methods: {
    click(answer, e) {
      if (answer == this.question.correct) {
        console.log("answer " + answer + " is correct");
        this.btnDisable = true;
        e.target.classList.remove("btn-outline-primary");
        e.target.classList.add("btn-success");
        let data = { question: this.question.photo, isCorrect: true };
        this.$emit("clicked", data);
      } else {
        console.log("answer " + answer + " isn't correct");
        this.btnDisable = true;
        e.target.classList.remove("btn-outline-primary");
        e.target.classList.add("btn-danger");
        let data = { question: this.question.photo, isCorrect: false };
        this.$emit("clicked", data);
      }
    },

    getImgUrl(pic) {
      return require("../assets/" + pic + ".jpg");
    },
  },
};
</script>
