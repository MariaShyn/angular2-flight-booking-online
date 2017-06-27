import { Angular2FlightBookingOnlinePage } from './app.po';

describe('angular2-flight-booking-online App', function() {
  let page: Angular2FlightBookingOnlinePage;

  beforeEach(() => {
    page = new Angular2FlightBookingOnlinePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
