import { atom } from "recoil";
import { ILatestReadState } from "./latestReadState.types";
import persistAtom from "./persist";

export const latestReadState = atom<ILatestReadState | null>({
    key: 'latestReadState',
    default: null,
    effects_UNSTABLE: [persistAtom],
});