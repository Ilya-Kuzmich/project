const BasePage = require('./basePage');

class Loading extends BasePage {
  get login() {
    return this.ph.page.$('#login_name');
  }
  get password() {
    return this.ph.page.$('#login_password');
  }

  get vvod() {
    return this.ph.page.$('login_button btn btn-action');
  }
}

module.exports = Loading;
