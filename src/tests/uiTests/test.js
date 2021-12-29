const app = require('../../app/app');


describe('full test', () => {
  it('full test', async () => {

    await app.ui.mainPage.isVisible('vxod');
    await app.ui.loading.isVisible('vvod');
    await app.ui.mainPage.click('vxod');
    await app.ui.loading.typeInput('213141', 'login');
    await app.ui.loading.typeInput('12344zdd31', 'password');
    await app.ui.loading.click('vvod');

    
    await app.ui.menu.isVisible('search');
    await app.ui.menu.click('search');
    await app.ui.ph.page.waitForNavigation();

    await app.ui.search.searchText('the whitcher', 'searchInput');
    await app.ui.ph.page.waitForNavigation();

    const arr = await app.ui.search.searchContent;
    const textResult = await app.ui.search.getTextFromArr(arr[0]);
    app.expect(textResult).to.include('The Witcher');

    await app.ui.search.clickBy('searchContent', 0);
    await app.ui.ph.page.waitForNavigation();
    app.expect(await app.ui.ph.page.title()).to.include('The Witcher');

    
    await app.ui.product.isVisible('addFavorite');
    await app.ui.product.isVisible('testsTW');
    await app.ui.product.click('addFavorite');
    await app.ui.product.click('testsTW');
   
    await app.ui.ph.navigate('https://rezka.ag/favorites/');
    await app.ui.ph.page.waitForResponse((resp) => resp.url() === 'https://rezka.ag/favorites/' && resp.status() === 200);
    await app.ui.ph.page.waitForNavigation();
    app.expect(await app.ui.ph.page.title()).to.includes('Мои закладки');

    await app.ui.product.isVisible('choice');
    await app.ui.product.isVisible('delete');
    await app.ui.product.click('choice');
    await app.ui.product.click('delete');

  });
});
