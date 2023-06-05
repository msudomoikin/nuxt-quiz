<template>
  <main class="container mb-5">
    <header class="mb-4">
      <h1>Викторина на знание научных фактов</h1>
    </header>
    <h5 v-if="!showResult">
        Вопрос {{ index + 1 }}/{{ questions.length }}
    </h5>
    <!-- questions div -->
    <div v-if="!showResult" class="questions">
      <div v-for="question in questions" v-bind:key="question.photo">
        <Question
          @clicked="onClickChild($event)"
          class="animate__animated animate__fadeIn"
          v-bind:question="question"
          v-if="question.photo == index + 1"
        />
      </div>
    </div>

    <div v-if="showResult" class="result">
      <h2>Спасибо за участие!</h2>
      <p>
        Правильных ответов {{ correctAnswers.length }} из {{ questions.length }}
      </p>

      <div v-if="correctAnswers.length <= 2">
        <img
          class="mb-4"
          src="../assets/jun.jpg"
          alt="Младший научный сотрудник. Впереди вас ждет еще много открытий!"
        />
        <h2>Поделитесь результатом</h2>
        <Share url="https://matveymatvey.com/quiz/soc-snip?rating=jun" />
      </div>

      <div v-if="correctAnswers.length >= 3 && correctAnswers.length <= 4">
        <img
          class="mb-4"
          src="../assets/mid.jpg"
          alt="Старший научный сотрудник. Неплохо! Но есть куда стремиться."
        />
        <p>Поделитесь результатом</p>
        <Share url="https://matveymatvey.com/quiz/soc-snip?rating=mid" />
      </div>

      <div v-if="correctAnswers.length == 5">
        <img
          class="mb-4"
          src="../assets/sen.jpg"
          alt="Профессор. Отличный результат! Наверное перед сном вы читаете энциклопедии."
        />
        <h3>Поделитесь результатом</h3>
        <Share url="https://matveymatvey.com/quiz/soc-snip?rating=sen" />
      </div>
    </div>
  </main>
</template>

<script>
import questionsList from "../static/questions.json";
import Question from "./Question.vue";
import Share from "./Share.vue";

export default {
  name: "Quiz",
  components: {
    Question,
    Share,
  },
  data() {
    return {
      loading: false,
      index: 0,
      questions: questionsList,
      answers: [],
      showResult: false,
      Result: "",
    };
  },
  methods: {
    onClickChild(value) {
      this.answers.push(value);

      if (this.index + 1 === this.questions.length) {
        setTimeout(
          function () {
            this.showResult = true;
          }.bind(this),
          1250
        );
      }
      if (this.index < this.questions.length - 1) {
        setTimeout(
          function () {
            this.index += 1;
          }.bind(this),
          1250
        );
      }
    },
  },
  computed: {
    currentQuestion() {
      if (this.questions !== []) {
        return this.questions[this.index];
      }
      return null;
    },
    correctAnswers() {
      let correct = this.answers.filter(
        (element) => element.isCorrect === true
      );
      return correct;
    },
  },
};
</script>
