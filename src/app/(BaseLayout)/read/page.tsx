"use client";

import ContainerAyat from "@/components/module/read/ContainerAyat";
import { IContainerAyatProps } from "@/components/module/read/ContainerAyat.types";
import HeaderContainerAyat from "@/components/module/read/HeaderContainerAyat";
import { useChaptersData } from "@/utils/hooks/data/useChaptersData";
import { Fragment, useState } from "react";

export default function Read({
    searchParams
}: {
    searchParams: { surat: string, juz: string }
}) {
    const [page, setPage] = useState(1)
    const { chapters, isLoadingChapters } = useChaptersData()
    const [chapterNum, setChapterNum] = useState<number>(0)
    const [juzNum, setJuzNum] = useState<number>(0)

    console.log(searchParams);

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
                surat={chapters?.[chapterNum]?.name_simple ?? ''}
            />
            <ContainerAyat
                page={page}
                onPageChanged={(p) => setPage(p)}
                onDataChanged={onVersesDataChanged}
            />
        </Fragment>
    );
}