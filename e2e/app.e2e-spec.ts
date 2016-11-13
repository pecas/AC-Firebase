import { ACFirebasePage } from './app.po';

describe('ac-firebase App', function() {
  let page: ACFirebasePage;

  beforeEach(() => {
    page = new ACFirebasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
