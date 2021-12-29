const BaseObject = require('../baseObject');

class Search extends BaseObject {

  get searchContent() {
    return this.ph.page.$$('.b-content__inline_items');
  }

  get searchInput() {
    return this.ph.page.$('input[type*="text"]');
  }

  get searchButton() {
    return this.ph.page.$('.b-search__submit');
  }
}

module.exports = Search;
