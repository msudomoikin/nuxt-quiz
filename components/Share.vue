<template>
  <div class="buttons">
    <ShareNetwork
      class="btn text-light mr-2 mb-2"
      v-for="network in networks"
      :network="network.network"
      :key="network.network"
      :style="{ backgroundColor: network.color }"
      title="Пройди викторину на знание научных фактов."
      :url="url"
    >
      {{ network.name }}
    </ShareNetwork>
  </div>
</template>

<script>
export default {
  props: ["url"],
  data() {
    return {
      btnDisable: false,
      sharing: {
        quote: "",
        hashtags: "квиз, викторина, наука",
      },
      networks: [
        {
          network: "vk",
          name: "Вконтакте",
          color: "#4a76a8",
        },
        {
          network: "whatsapp",
          name: "Whatsapp",
          color: "#25d366",
        },
        {
          network: "telegram",
          name: "Telegram",
          color: "#0088cc",
        },
      ],
    };
  },
  methods: {
    isActive() {
      return false;
    },

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
