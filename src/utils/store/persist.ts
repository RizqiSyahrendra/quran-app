import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
    key: `quran-app-${process.env.NEXT_PUBLIC_STORAGE_KEY}`
});

export default persistAtom;