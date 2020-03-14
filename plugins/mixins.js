import Vue from 'vue'

Vue.mixin({
  methods: {
    followLink (link) {
      window.open(link)
    }
  }
})
