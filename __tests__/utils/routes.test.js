import { routeNames, routeList } from '@/utils/routes';

describe('utils/routes', () => {

    it('routeList is valid object', () => {
        expect(routeList).toMatchObject({
            "root": "/",
            "home": "/home",
            "read": "/read?startPage=:startPage",
            "todays_verse": "/todays-verse",
            "bookmark": "/bookmark"
        });
    });

    it('routeNames', () => {
        const route = routeNames("home");
        expect(route).toEqual("/home");
    });

    it('routeNames with params', () => {
        const route = routeNames("read", {startPage: 1});
        expect(route).toEqual("/read?startPage=1");
    });

    it('routeNames with params but empty', () => {
        const route = routeNames("read");
        expect(route).toEqual("/read?startPage=");
    });

});