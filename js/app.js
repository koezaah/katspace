import Vue from 'vue';
import artwork from '../data/artwork';
import print from '../data/print';
import './../css/style.scss';
import artworkImages from './../img/artwork/*.jpg';
import printImages from './../img/print/*.jpg';


if (window.innerWidth < 800) {
  window.addEventListener('scroll', function (e) {
    const nav = document.getElementsByTagName('nav')[0];
    const sections = [...document.getElementsByTagName('section')];

    const asideHeight = document.getElementsByTagName('aside')[0].clientHeight;
    if (window.scrollY >= asideHeight && window.innerWidth < 800) {
      nav.style.position = 'fixed';
      nav.style.top = 0;
      sections.forEach((element) => (element.style.paddingTop = '80px'));
    } else {
      nav.style.position = 'unset';
      sections.forEach((element) => (element.style.paddingTop = '0'));
    }
  });
}

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
