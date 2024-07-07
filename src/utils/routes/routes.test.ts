import { routeNames, routeList } from '@/utils/routes';

describe('utils/routes', () => {

  it('should has routeList as a valid object', () => {
    expect(routeList).toMatchObject({
      "root": "/",
      "home": "/home",
      "read": "/read?startPage=:startPage",
      "todays_verse": "/todays-verse",
      "bookmark": "/bookmark"
    });
  });

  it('should has desired route name string', () => {
    const route = routeNames("home");
    expect(route).toEqual("/home");
  });

  it('should has desired route name string with query parameter', () => {
    const route = routeNames("read", { startPage: 1 });
    expect(route).toEqual("/read?startPage=1");
  });

  it('should be passing route params but empty', () => {
    const route = routeNames("read");
    expect(route).toEqual("/read?startPage=");
  });

});