import { MyGithubsearchPage } from './app.po';

describe('my-githubsearch App', () => {
  let page: MyGithubsearchPage;

  beforeEach(() => {
    page = new MyGithubsearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
