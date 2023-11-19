import { RecursiveKeyOf, RouteObject, RouteParams } from "./index.types";

const routeList = {
    "root": "/",
    "home": "/home",
    "read": "/read?startPage=:startPage",
    "todays_verse": "/todays-verse",
    "bookmark": "/bookmark"
};

export type RoutesKeyPath = RecursiveKeyOf<typeof routeList>

const routeNames = (name: RoutesKeyPath, uriParam: RouteParams = null): string => {
    try {
        //get url
        let url: RouteObject = { ...routeList };
        let resultUrl: string = "/";

        for (const routeName of name.split(".")) {
            let tempUrl = url[routeName];
            if (typeof tempUrl === "string") {
                resultUrl = tempUrl;
            }
            else {
                url = tempUrl;
            }
        }

        //replace uri param
        const pathUrl = resultUrl.split("?")?.[0] ?? resultUrl;
        const splittedUrl = resultUrl.split("?")?.[1] ?? "";
        const searchParams = new URLSearchParams(splittedUrl);
        const searchParamsArr = Array.from(searchParams);
        const searchParamsLength = searchParamsArr.length;
        for (const [key, value] of searchParamsArr) {
            searchParams.set(key, uriParam?.[key] ?? "");
        }
        resultUrl = searchParamsLength > 0 ? `${pathUrl}?${searchParams}` : pathUrl;

        return resultUrl;
    } catch (error) {
        if (process.env.NODE_ENV === "development") {
            console.error(`invalid route name : ${name}`);
        }

        return "/";
    }
}

export {
    routeList,
    routeNames,
};