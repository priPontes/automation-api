/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
// You can change the location of this file or turn off loading
// the plugins file with the "pluginsFile" configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project"s config changing)

/**
 * @type {Cypress.PluginConfig}
 */
let tempVariables = {};
module.exports = (on, config) => {
  on("task", {
    log(message) {
      console.log(message);
      return null;
    },
    setTempVariable: ({ name, value }) => {
      tempVariables[name] = value;
      return null;
    },
    getTempVariable: () => {
      return tempVariables;
    },
    clearTempVariables: () => {
      tempVariables = {};
      return null;
    },
  });
  on('task', {
    failed: require('cypress-failed-log/src/failed')(),
  })
};
