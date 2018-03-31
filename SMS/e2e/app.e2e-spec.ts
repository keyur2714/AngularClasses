import { SMSPage } from './app.po';

describe('sms App', () => {
  let page: SMSPage;

  beforeEach(() => {
    page = new SMSPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
