import Vue from "vue";

if (!Vue.__get_img_mixin__) {
  Vue.__get_img_mixin__ = true;
  Vue.mixin({
    methods: {
      getImgUrl(pic) {
        return require("../assets/" + pic + ".jpg");
      },
    },
  });
}
