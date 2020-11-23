import Vue from 'vue';
import artwork from '../data/artwork';
import print from '../data/print';
import './../css/style.scss';
import artworkImages from './../img/artwork/*.jpg';
import printImages from './../img/print/*.jpg';

const app = new Vue({
  el: '#app',
  data: {
    print: null,
    artwork: null,
    currentVisibleContent: 'print',
    printImages: printImages,
    artworkImages: artworkImages
  },
  created: function () {
    this.print = print;
    this.artwork = artwork;
  },
  methods: {
    switchContent: function (contentId) {
      this.currentVisibleContent = contentId;
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    },
  },
});
