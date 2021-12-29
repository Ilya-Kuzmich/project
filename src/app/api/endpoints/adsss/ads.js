const BaseApi = require('../../baseApi');

class Ads extends BaseApi {
  async getAds() {
    return await this.get('/templates/hdrezka/js/ads.js');
  }
}

module.exports = Ads;
