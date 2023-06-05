<template>
  <div>
    {{ meta }}
  </div>
</template>

<script>
export default {
  name: "SocialSnippet",
  data() {
    return {
      rating: this.$route.query.rating,
      ratings: [
        { id: 'jun', name: 'Младший научный сотрудник', description: 'Младший научный сотрудник. Впереди вас ждет еще много открытий!'},
        { id: 'mid', name: 'Старший научный сотрудник', description: 'Старший научный сотрудник. Неплохо! Но есть куда стремиться.'},
        { id: 'sen', name: 'Профессор', description: 'Профессор. Отличный результат! Наверное перед сном вы читаете энциклопедии.'},
      ]
    }
  },
  computed: {
    meta() {
      return this.ratings.find(rating => rating.id === this.rating)
    }
  },
  methods: {
    getImgUrl(pic) {
      return require("../assets/" + pic + ".jpg");
    },
  },
  head() {
    return {
      title: this.$route.query.rating,
      meta: [
        { hid: 'og:title', property: 'og:title', content: this.meta.name },
        { hid: 'og:description', property: 'og:description', content: this.meta.description },
        { hid: 'og:image', property: 'og:image', content: this.getImgUrl(this.rating) },
        { hid: 'og:url', property: 'og:url', content: `https://matveymatvey.com/quiz/soc-snip?rating=${this.rating}` },
      ]
    }
  }
};
</script>
