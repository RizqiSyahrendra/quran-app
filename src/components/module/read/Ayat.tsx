"use client";

import { useRef } from "react";
import { IAyatProps } from "./Ayat.types";

export default function Ayat(props: IAyatProps) {
    const {
        data,
        onPress,
    } = props;

    const spanRef = useRef<HTMLSpanElement>(null)

    function onClickSpan() {
        if (data.type === "start") return;

        const pos = spanRef?.current?.getBoundingClientRect();
        if (!!pos) {
            onPress?.({
                positionX: pos.x,
                positionY: pos.y,
            });
        }
    }

    return (
        <>
            <span onClick={onClickSpan} ref={spanRef} className={`text-font-primary cursor-pointer ${(data.type === "word" || data.type === "start") ? "font-quranIndopak text-2xl md:text-3xl" : "font-quranLpmq text-2xl md:text-3xl"}`}>
                {data.text}
            </span>
        </>
    );
}