const BaseObject = require('../baseObject');

class Product extends BaseObject {
  
  get addFavorite() {
    return this.ph.page.$('.btn add-favorite btn-primary');
  }
 
  get testsTW() {
    return this.ph.page.$('.hd-label-row');
  }
}

module.exports = Product;
