const BasePage = require('./basePage');

class MainPage extends BasePage {
  get intro() {
    return this.ph.page.$$('.b-content__description p');
  }

  get filmImages() {
    return this.ph.page.$$('.b-content img');
  }

  get collections() {
    return this.ph.page.$$('.b-collections__newest_inner a');
  }

  get vxod() {
    return this.ph.page.$$('.b-tophead__login');
  }
}

module.exports = MainPage;
