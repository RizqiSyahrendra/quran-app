"use client";

import Image from "next/image";
import { IRowJuzProps } from "./RowJuz.types";

export default function RowJuz(props: IRowJuzProps) {
    const {
        num,
        nama,
    } = props;

    return (
        <div className="flex flex-row justify-between border-b-[1px] border-separator2 pb-4 mb-2">
            <div className="flex flex-row">
                <div className="text-font-primary font-medium flex items-center justify-center px-4 relative">
                    {num}
                    <Image
                        src="/assets/icons/number-container.png"
                        alt="number container"
                        width={36}
                        height={36}
                        quality={100}
                        className="absolute"
                    />
                </div>
                <div className="pl-2 text-font-primary font-medium">
                    {nama}
                </div>
            </div>
            <div className="flex items-center font-bold text-font-info text-lg">
            </div>
        </div>
    );
}