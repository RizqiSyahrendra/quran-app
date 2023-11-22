import { IAyatData } from "@/components/module/read/Ayat.types";
import { IChapter } from "../api/api.types";

export interface ILatestReadState {
    page: number
    chapter: IChapter
    ayat: IAyatData
}