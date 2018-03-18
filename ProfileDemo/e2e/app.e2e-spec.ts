import { ProfileDemoPage } from './app.po';

describe('profile-demo App', () => {
  let page: ProfileDemoPage;

  beforeEach(() => {
    page = new ProfileDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
