const app = require('../../app/app');

describe('API', () => {
  it('API:', async () => {
    const resp = await app.api.ads.getAds();
    app.expect(resp.status).to.equal(200);
    app.expect(resp.headers['content-type']).to.equal('application/javascript; charset=utf-8');
    app.expect(resp.headers['server']).to.include('nginx');
  });

});
