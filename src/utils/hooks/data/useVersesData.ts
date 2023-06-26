"use client";

import { useEffect, useState } from "react";
import { IAyatProps } from "@/components/module/read/Ayat.types";
import { api } from "@/utils/api/api";
import { IQuranVerse } from "@/utils/api/api.types";

export function useVersesData(page: number) {
    const [rowsData, setRowsData] = useState<Record<number, Array<IAyatProps>>>({})
    const [verses, setVerses] = useState<IQuranVerse[]>([])
    const [isLoadingVerses, setLoadingVerses] = useState(true)
    const verseWords = Object.values(rowsData)

    useEffect(() => {
        _fetchData()
    }, [page])

    async function _fetchData() {
        setLoadingVerses(true);
        const dataQuran = await api.fetchQuranByPage({ page });
        setLoadingVerses(false);

        if (!!dataQuran) {
            setVerses(dataQuran.verses);

            const rows: typeof rowsData = {};
            for (const verse of dataQuran.verses) {
                //insert Bismillah
                if (verse.verse_number === 1 && verse.ruku_number !== 1) {
                    let lineBismillah = (verse.words[0]?.line_number ?? 0) - 1;
                    rows[lineBismillah] = BismillahWordsData.map(word => ({
                        text: word.text_indopak,
                        type: "start"
                    }));
                }

                //insert verse words
                for (const word of verse.words) {
                    const ayat: IAyatProps = { text: word.text_indopak, type: word.char_type_name };
                    rows[word.line_number]?.push(ayat) ?? (rows[word.line_number] = [ayat]);
                }
            }

            setRowsData(rows);
        }
    }

    return {
        verses,
        verseWords,
        isLoadingVerses,
    }
}

const BismillahWordsData = [
    {
        "id": 1,
        "position": 1,
        "audio_url": "wbw/001_001_001.mp3",
        "char_type_name": "word",
        "text_indopak": "بِسۡمِ",
        "page_number": 1,
        "line_number": 2,
        "text": "بِسۡمِ",
        "translation": {
            "text": "In (the) name",
            "language_name": "english"
        },
        "transliteration": {
            "text": "bis'mi",
            "language_name": "english"
        }
    },
    {
        "id": 2,
        "position": 2,
        "audio_url": "wbw/001_001_002.mp3",
        "char_type_name": "word",
        "text_indopak": "اللهِ",
        "page_number": 1,
        "line_number": 2,
        "text": "اللهِ",
        "translation": {
            "text": "(of) Allah",
            "language_name": "english"
        },
        "transliteration": {
            "text": "l-lahi",
            "language_name": "english"
        }
    },
    {
        "id": 3,
        "position": 3,
        "audio_url": "wbw/001_001_003.mp3",
        "char_type_name": "word",
        "text_indopak": "الرَّحۡمٰنِ",
        "page_number": 1,
        "line_number": 2,
        "text": "الرَّحۡمٰنِ",
        "translation": {
            "text": "the Most Gracious",
            "language_name": "english"
        },
        "transliteration": {
            "text": "l-raḥmāni",
            "language_name": "english"
        }
    },
    {
        "id": 4,
        "position": 4,
        "audio_url": "wbw/001_001_004.mp3",
        "char_type_name": "word",
        "text_indopak": "الرَّحِيۡمِ",
        "page_number": 1,
        "line_number": 2,
        "text": "الرَّحِيۡمِ",
        "translation": {
            "text": "the Most Merciful",
            "language_name": "english"
        },
        "transliteration": {
            "text": "l-raḥīmi",
            "language_name": "english"
        }
    }
];