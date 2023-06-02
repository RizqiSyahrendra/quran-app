"use client";

import { convertNumToArabic } from "@/utils/helper";
import { IAyatProps } from "./Ayat.types";

export default function Ayat(props: IAyatProps) {
    const {
        num,
        ayatArabic,
        ayatTranslate = "",
    } = props;

    return (
        <>
            <span className="text-font-primary text-xl font-quran cursor-pointer">
                {ayatArabic}
            </span>
            <span className="mx-2 h-2 rounded-full font-quran text-font-primary text-4xl">
                {convertNumToArabic(num)}
            </span>
        </>
    );
}