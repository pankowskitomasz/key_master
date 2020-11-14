import { AplPage } from './app.po';

describe('apl App', function() {
  let page: AplPage;

  beforeEach(() => {
    page = new AplPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
