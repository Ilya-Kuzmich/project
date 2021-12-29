const BasePage = require('./basePage');

class Favorites extends BasePage {
  get favoritesFilms() {
    return this.ph.page.$('.b-content__inline_item-cover');
  }

  get sortFilms() {
    return this.ph.page.$('.b-content__main_filters_item');
  }
  get choice() {
    return this.ph.page.$('label-favorite-32556');
  }
  get delete() {
    return this.ph.page.$('btn btn-attention btn-mini remove-items');
  }
 }

module.exports = Favorites;
