"use client";

import { IAyatProps } from "./Ayat.types";

export default function Ayat(props: IAyatProps) {
    const {
        text,
        type
    } = props;

    return (
        <>
            <span className={`text-font-primary cursor-pointer ${(type === "word" || type === "start") ? "font-quranIndopak text-md md:text-2xl" : "font-quranLpmq text-xl md:text-2xl"}`}>
                {text}
            </span>
        </>
    );
}