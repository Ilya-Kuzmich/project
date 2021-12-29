const BaseObject = require('../baseObject');

class Menu extends BaseObject {
  
  get menuItems() {
    return this.ph.page.$$('.b-topnav__item-link');
  }
  get search() {
    return this.ph.page.$$('.b-search__submit');
  }
}

module.exports = Menu;
