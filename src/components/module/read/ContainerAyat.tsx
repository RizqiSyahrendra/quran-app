"use client";

import { useVersesData } from "@/utils/hooks/data/useVersesData";
import { Button } from "@/components/material";
import { Fragment, useEffect, useState } from "react";
import Ayat from "./Ayat";
import { IContainerAyatProps } from "./ContainerAyat.types";
import Loader from "@/components/Loader";
import { useToggleClickRef } from "@/utils/hooks/useToggleClickRef";
import { IAyatData, IAyatProps } from "./Ayat.types";
import ContextMenuBar from "@/components/ContextMenuBar";
import { IContextMenuBarProps } from "@/components/ContextMenuBar.types";
import { useRecoilState } from "recoil";
import { latestReadState } from "@/utils/atoms/latestReadState";

export default function ContainerAyat(props: IContainerAyatProps) {
    const {
        page,
        chapter,
        onPageChanged,
        onDataChanged,
    } = props;

    const [latestRead, setLatestRead] = useRecoilState(latestReadState)
    const { verseWords, verses, isLoadingVerses } = useVersesData(page)
    const [menuDivRef, isMenuVisible, setMenuVisible] = useToggleClickRef<HTMLDivElement>(false)
    const [menuActiveData, setMenuActiveData] = useState<{
        positionX: number,
        positionY: number
        ayat: IAyatData | null
    } | null>(null)

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

    function onPressAyat(position: Parameters<Required<IAyatProps>["onPress"]>[0], ayat: IAyatData) {
        setMenuVisible(true);
        setMenuActiveData({
            positionX: position.positionX,
            positionY: position.positionY,
            ayat: ayat,
        });
    }

    async function saveLatestRead() {
        if (!menuActiveData?.ayat || !chapter) return;

        setLatestRead({
            page,
            chapter,
            ayat: menuActiveData.ayat,
        });
    }

    const onPressContextMenu: IContextMenuBarProps["onPress"] = (item) => {
        if (item.value === "mark_latest") {
            saveLatestRead();
            setMenuVisible(false);
            setMenuActiveData(null);
        }
    }

    if (isLoadingVerses) {
        return (
            <Loader
                className="h-10 w-10 mt-20"
                useContainer={true}
                isVisible={true}
            />
        )
    }

    return (
        <Fragment>
            <div className="container" dir="rtl">
                <div className="md:w-2/3 md:mx-auto mt-2 md:mt-4 rounded-lg">
                    {verseWords.map((row, rowIdx) => {
                        let isJustifyCenter = row?.[0].type === "start" || page === 1 || page === 2;

                        return (
                            <div key={rowIdx} className={`flex ${isJustifyCenter ? "justify-center space-x-1" : "justify-between"} flex-wrap py-2 ${(rowIdx !== verseWords.length - 1) ? 'border-b-[1px] border-separator' : ''}`}>
                                {row.map((word, wordIdx) => (
                                    <Ayat
                                        key={wordIdx}
                                        data={word}
                                        onPress={(position) => onPressAyat(position, word)}
                                    />
                                ))}
                            </div>
                        )
                    })}
                </div>
                <div className="mt-4 flex justify-center">
                    <Button disabled={page === 1} onClick={onPageDecreased} size="sm" className="bg-info mx-1">{`<`}</Button>
                    <Button disabled={page === 604} onClick={onPageIncreased} size="sm" className="bg-info mx-1">{`>`}</Button>
                </div>
            </div>

            <ContextMenuBar 
                ref={menuDivRef}
                items={[
                    {label: "Tandai terakhir dibaca", value: "mark_latest"}
                ]}
                style={{
                    top: menuActiveData?.positionY ?? 0,
                    left: menuActiveData?.positionX ?? 0,
                }}
                isVisible={isMenuVisible}
                onPress={onPressContextMenu}
            />
        </Fragment>
    );
}