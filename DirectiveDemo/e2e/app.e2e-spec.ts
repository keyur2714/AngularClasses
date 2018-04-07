import { DirectiveDemoPage } from './app.po';

describe('directive-demo App', () => {
  let page: DirectiveDemoPage;

  beforeEach(() => {
    page = new DirectiveDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
