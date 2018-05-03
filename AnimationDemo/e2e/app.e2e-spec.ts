import { AnimationDemoPage } from './app.po';

describe('animation-demo App', () => {
  let page: AnimationDemoPage;

  beforeEach(() => {
    page = new AnimationDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
