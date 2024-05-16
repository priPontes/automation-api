const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    configFile: "reporter-config.json"
  },
  e2e: {
    baseUrl: "https://serverest.dev",
    experimentalRunAllSpecs: true,
    setupNodeEvents(on, config) {
      require("cypress-localstorage-commands/plugin")(on, config);
      return config;
    }
  },
  env: {
    options: {
      "Content-Type": "application/json",
      "accept": "application/json"
    }
  }
});
