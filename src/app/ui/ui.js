const BaseObject = require('./objects/baseObject');
const Menu = require('./objects/controls/menu');
const Header = require('./objects/controls/header');
const Search = require('./objects/controls/search');
const Product = require('./objects/controls/product');
const Loading = require('./objects/pages/loading');
const Favorites = require('./objects/pages/favoriesPage');
const MainPage = require('./objects/pages/mainPage');

class Ui extends BaseObject {

  get menu() {
    return this.createGetter(Menu);
  }

  get header() {
    return this.createGetter(Header);
  }
  get favorites() {
    return this.createGetter(Favorites);
  }
  get search() {
    return this.createGetter(Search);
  }

  get loading() {
    return this.createGetter(Loading);
  }

  get mainPage() {
    return this.createGetter(MainPage);
  }

  get product() {
    return this.createGetter(Product);
  }

}

module.exports = Ui;
