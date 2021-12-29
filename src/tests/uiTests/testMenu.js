const app = require('../../app/app');

describe('Menu', () => {
  it('UI: Menu ', async () => {
    await app.ui.menu.clickBy('menuItems', 1);
    await app.ui.ph.page.waitForResponse((resp) => resp.url() === 'https://rezka.ag/series/' && resp.status() === 200);
    await app.ui.ph.page.waitForNavigation();
    app.expect(await app.ui.ph.page.title()).to.includes('Смотреть сериалы в HD онлайн');
  });

  it('UI: Menu', async () => {
    await app.ui.menu.clickBy('menuItems', 'Мультфильмы');
    await app.ui.ph.page.waitForResponse((resp) => resp.url() === 'https://rezka.ag/cartoons/' && resp.status() === 200);
    await app.ui.ph.page.waitForNavigation();
    app.expect(await app.ui.ph.page.title()).to.includes('Смотреть мультфильмы в HD онлайн');
  });

});
