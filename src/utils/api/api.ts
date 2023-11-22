import { IChaptersResponse, IJuzInfoResponse, IQuranPageResponse } from "./api.types";

const host = process.env.NEXT_PUBLIC_API_HOST;

export const api = {

    async fetchQuranByPage(param: {
        page: number
    }) {
        const {
            page = 1
        } = param;

        const res = await fetch(`${host}/verses/by_page/${page}?word_fields=text_indopak&words=true`);
        if (res.ok) {
            const resData = await res.json() as IQuranPageResponse;
            return resData;
        } else {
            return null;
        }
    },

    async fetchChapters() {
        const res = await fetch(`${host}/chapters?language=id`);
        if (res.ok) {
            const resData = await res.json() as IChaptersResponse;
            return resData;
        } else {
            return null;
        }
    },

    async fetchJuzInfo(param: {
        juz: number
    }) {
        const res = await fetch(`${host}/verses/by_juz/${param.juz}`);
        if (res.ok) {
            const resData = await res.json() as IJuzInfoResponse;
            return resData;
        } else {
            return null;
        }
    }

}