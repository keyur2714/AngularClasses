import { MeanDemoPage } from './app.po';

describe('mean-demo App', () => {
  let page: MeanDemoPage;

  beforeEach(() => {
    page = new MeanDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
