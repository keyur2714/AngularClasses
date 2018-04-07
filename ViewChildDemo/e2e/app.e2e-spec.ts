import { ViewChildDemoPage } from './app.po';

describe('view-child-demo App', () => {
  let page: ViewChildDemoPage;

  beforeEach(() => {
    page = new ViewChildDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
