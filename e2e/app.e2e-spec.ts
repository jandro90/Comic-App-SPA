import { ComicappxxxPage } from './app.po';

describe('comicappxxx App', () => {
  let page: ComicappxxxPage;

  beforeEach(() => {
    page = new ComicappxxxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
