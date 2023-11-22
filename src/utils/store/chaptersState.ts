import { atom } from "recoil";
import { IChaptersState } from "./chaptersState.types";
import persistAtom from "./persist";

export const chaptersState = atom<IChaptersState>({
    key: 'chaptersState',
    default: {},
    effects_UNSTABLE: [persistAtom]
});