const BaseObject = require('../baseObject');

class Header extends BaseObject {

  get headerElement() {
    return this.ph.page.$('b-tophead__logo');
  }

  get favorites() {
    return this.ph.page.$('.b-tophead-dropdown');
  }
  get tumbler() {
    return this.ph.page.$('.tumbler');
  }
}

module.exports = Header;
