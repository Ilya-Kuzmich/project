const BaseApi = require('./baseApi');
const Ads = require('./endpoints/adsss/ads');
const schema = require('../api/schemas/schema');

class Api extends BaseApi {
  schema = schema;

  get ads() {
    return  this.createGetter(Ads);
  }
}

module.exports = Api;
