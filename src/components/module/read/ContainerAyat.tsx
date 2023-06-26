"use client";

import { useVersesData } from "@/utils/hooks/data/useVersesData";
import { Button } from "@material-tailwind/react";
import { useEffect } from "react";
import Ayat from "./Ayat";

import { IContainerAyatProps } from "./ContainerAyat.types";

export default function ContainerAyat(props: IContainerAyatProps) {
    const {
        page,
        onPageChanged,
        onDataChanged,
    } = props;

    const { verseWords, verses, isLoadingVerses } = useVersesData(page)

    useEffect(() => {
        onDataChanged?.(verses);
    }, [verses])

    function onPageDecreased() {
        let decrPage = page - 1;
        if (decrPage <= 0) return;
        onPageChanged?.(decrPage);
    }

    function onPageIncreased() {
        let incrPage = page + 1;
        onPageChanged?.(incrPage);
    }

    return (
        <div className="container" dir="rtl">
            <div className="md:w-2/3 md:mx-auto px-1 md:px-4 mt-14 md:mt-4 rounded-lg">
                {verseWords.map((row, rowIdx) => {
                    let isJustifyCenter = row?.[0].type === "start" || page === 1 || page === 2;

                    return (
                        <div key={rowIdx} className={`flex ${isJustifyCenter ? "justify-center space-x-4" : "justify-between"} flex-wrap py-2 ${(rowIdx !== verseWords.length - 1) ? 'border-b-[1px] border-separator' : ''}`}>
                            {row.map((word, wordIdx) => (
                                <Ayat
                                    key={wordIdx}
                                    text={word.text}
                                    type={word.type}
                                />
                            ))}
                        </div>
                    )
                })}
            </div>

            {!isLoadingVerses && (
                <div className="mt-4 flex justify-center">
                    <Button disabled={page === 1} onClick={onPageDecreased} size="sm" className="bg-info mx-1">{`<`}</Button>
                    <Button onClick={onPageIncreased} size="sm" className="bg-info mx-1">{`>`}</Button>
                </div>
            )}
        </div>
    );
}