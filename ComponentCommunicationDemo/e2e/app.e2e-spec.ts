import { ComponentCommunicationDemoPage } from './app.po';

describe('component-communication-demo App', () => {
  let page: ComponentCommunicationDemoPage;

  beforeEach(() => {
    page = new ComponentCommunicationDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
