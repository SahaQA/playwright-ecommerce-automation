// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({

  // Look for test files in the "tests" directory, relative to this configuration file.
  testDir: './tests',

  timeout: 30 * 1000,

  // Reporter to use
  reporter: 'html',
  
  expect: {
    // Maximum time expect() should wait for the condition to be met.
    timeout: 5000,
    },

  use: {

    browserName: "chromium", //chromium, firefox, webkit
    headless: false
    
  },

});

