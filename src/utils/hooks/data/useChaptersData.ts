"use client";

import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { chaptersState } from "@/utils/store/chaptersState";
import { api } from "@/utils/api/api";

export function useChaptersData() {
    const [chapters, setChapters] = useRecoilState(chaptersState)
    const [isLoadingChapters, setLoadingChapters] = useState(false)

    useEffect(() => {
        if (Object.keys(chapters).length <= 0) {
            _fetchChapters()
        }
    }, [])

    async function _fetchChapters() {
        setLoadingChapters(true);
        const data = await api.fetchChapters();
        setLoadingChapters(false);

        if (!!data) {
            const tempChapters: typeof chapters = {};
            for (const chapter of data.chapters) {
                tempChapters[chapter.id] = chapter;
            }

            setChapters(tempChapters);
        }
    }

    return {
        chapters,
        isLoadingChapters,
    }
}