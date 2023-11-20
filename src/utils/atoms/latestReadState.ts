import { atom } from "recoil";
import { ILatestReadState } from "./latestReadState.types";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const latestReadState = atom<ILatestReadState | null>({
    key: 'latestReadState',
    default: null,
    effects_UNSTABLE: [persistAtom],
});