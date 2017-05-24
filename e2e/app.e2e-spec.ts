import { SmartStocksPage } from './app.po';

describe('smart-stocks App', () => {
  let page: SmartStocksPage;

  beforeEach(() => {
    page = new SmartStocksPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
