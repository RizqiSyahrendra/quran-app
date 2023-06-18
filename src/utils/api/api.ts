import { IQuranPage } from "./api.types";

export const api = {

    async fetchQuranByPage(param: {
        page: number
    }) {
        const {
            page = 1
        } = param;

        const res = await fetch(`https://api.quran.com/api/v4/verses/by_page/${page}?word_fields=text_indopak&words=true`);
        if (res.ok) {
            const resData = await res.json() as IQuranPage;
            return resData;
        } else {
            return null;
        }
    }

}