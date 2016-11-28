import { FundabitatPage } from './app.po';

describe('fundabitat App', function() {
  let page: FundabitatPage;

  beforeEach(() => {
    page = new FundabitatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
