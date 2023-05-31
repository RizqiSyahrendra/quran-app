"use client";

import NumberContainer from "@/components/NumberContainer";
import { IAyatProps } from "./Ayat.types";

export default function Ayat(props: IAyatProps) {
    const {
        num,
        ayatArabic,
        ayatTranslate = "",
    } = props;

    return (
        <div className="flex flex-row justify-end text-font-primary py-2 font-quran">
            <NumberContainer number={num} />
            <span className="text-xl">
                {ayatArabic}
            </span>
        </div>
    );
}