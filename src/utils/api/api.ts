import { IChaptersResponse, IQuranPageResponse } from "./api.types";

export const api = {

    async fetchQuranByPage(param: {
        page: number
    }) {
        const {
            page = 1
        } = param;

        const res = await fetch(`https://api.quran.com/api/v4/verses/by_page/${page}?word_fields=text_indopak&words=true`);
        if (res.ok) {
            const resData = await res.json() as IQuranPageResponse;
            return resData;
        } else {
            return null;
        }
    },

    async fetchChapters() {
        const res = await fetch(`https://api.quran.com/api/v4/chapters?language=id`);
        if (res.ok) {
            const resData = await res.json() as IChaptersResponse;
            return resData;
        } else {
            return null;
        }
    }

}