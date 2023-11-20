"use client";

import ContainerAyat from "@/components/module/read/ContainerAyat";
import { IContainerAyatProps } from "@/components/module/read/ContainerAyat.types";
import HeaderContainerAyat from "@/components/module/read/HeaderContainerAyat";
import { parseChapterNumber } from "@/utils/helper";
import { useChaptersData } from "@/utils/hooks/data/useChaptersData";
import { routeNames } from "@/utils/routes";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";

export default function Read({
    searchParams
}: {
    searchParams: { startPage: number }
}) {
    const router = useRouter()
    const page = parseChapterNumber(searchParams?.startPage)
    const { chapters, isLoadingChapters } = useChaptersData()
    const [chapterNum, setChapterNum] = useState<number>(0)
    const [juzNum, setJuzNum] = useState<number>(0)
    const currentChapter = chapters?.[chapterNum];

    const goToPage = (p: number) => {
        router.push(routeNames("read", { startPage: p }));
    }

    const onVersesDataChanged: IContainerAyatProps["onDataChanged"] = (verses) => {
        if (verses?.length > 0) {
            let latestVerse = verses[verses.length - 1];
            const chapterNumber = parseInt(latestVerse.verse_key.split(":")[0]);
            setChapterNum(chapterNumber);
            setJuzNum(latestVerse.juz_number);
        }
    }

    if (isLoadingChapters) return <Fragment></Fragment>;

    return (
        <Fragment>
            <HeaderContainerAyat
                halaman={`${page}`}
                juz={`${juzNum > 0 ? juzNum : ''}`}
                surat={currentChapter?.name_simple ?? ''}
            />
            <ContainerAyat
                page={page}
                chapter={currentChapter}
                onPageChanged={(p) => goToPage(p)}
                onDataChanged={onVersesDataChanged}
            />
        </Fragment>
    );
}