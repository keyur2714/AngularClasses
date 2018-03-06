import { NgIfThenElseDemoPage } from './app.po';

describe('ng-if-then-else-demo App', () => {
  let page: NgIfThenElseDemoPage;

  beforeEach(() => {
    page = new NgIfThenElseDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app');
  });
});
