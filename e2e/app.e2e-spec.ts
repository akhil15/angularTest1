import { TestApp1Page } from './app.po';

describe('test-app1 App', () => {
  let page: TestApp1Page;

  beforeEach(() => {
    page = new TestApp1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
