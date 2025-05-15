const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true, // Ativa gravação de vídeo dos testes
  e2e: {
    setupNodeEvents(on, config) {
      // Aqui você pode adicionar plugins, se necessário
    },
  },
});
