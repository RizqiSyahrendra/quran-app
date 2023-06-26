import { atom } from "recoil";
import { IChaptersState } from "./chaptersState.types";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const chaptersState = atom<IChaptersState>({
    key: 'chaptersState',
    default: {},
    effects_UNSTABLE: [persistAtom]
});