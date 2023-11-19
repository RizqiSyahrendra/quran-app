"use client";

import { IAyatProps } from "./Ayat.types";

export default function Ayat(props: IAyatProps) {
    const {
        text,
        type
    } = props;

    return (
        <>
            <span className={`text-font-primary cursor-pointer ${(type === "word" || type === "start") ? "font-quranIndopak text-2xl md:text-3xl" : "font-quranLpmq text-2xl md:text-3xl"}`}>
                {text}
            </span>
        </>
    );
}