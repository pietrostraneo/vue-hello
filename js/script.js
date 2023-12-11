const { createApp } = Vue

  createApp({
    data() {
      return {
        text: 'Primo esercizio VUE',
        imgName: `logo.jpg`
      }
    }
  }).mount('#app')