const printer = require('../config/support/logger');
const app = require('../app/app');

exports.mochaHooks = {

  beforeAll: async function(){
    await app.ui.ph.launch();
  },

  beforeEach: async function () {
    await app.ui.ph.create();
    await app.ui.ph.navigate();
  },

  afterEach: async function() {
    await app.ui.ph.close();
  },

  afterAll: async function() {
    await app.ui.ph.finish();
  }
};
