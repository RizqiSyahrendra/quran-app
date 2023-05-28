"use client";

import SeparatorCircle from "@/components/SeparatorCircle";
import { IconRegistry } from "@/utils/image";
import Image from "next/image";
import { IRowSuratProps } from "./RowSurat.types";

export default function RowSurat(props: IRowSuratProps) {
    const {
        num,
        nama,
        namaArabic,
        jenis,
        jumlahAyat,
    } = props;

    return (
        <div className="flex flex-row justify-between border-b-[1px] border-separator2 pb-4 mb-2">
            <div className="flex flex-row">
                <div className="text-font-primary font-medium flex items-center justify-center px-4 relative">
                    {num}
                    <Image
                        src={IconRegistry.numberContainer}
                        alt="number container"
                        width={36}
                        height={36}
                        quality={100}
                        className="absolute"
                    />
                </div>
                <div className="pl-2">
                    <div className="text-font-primary font-medium">
                        {nama}
                    </div>
                    <div className="flex flex-row text-font-secondary font-medium text-xs uppercase">
                        {jenis}
                        <SeparatorCircle />
                        {jumlahAyat} Ayat
                    </div>
                </div>
            </div>
            <div className="flex items-center font-bold text-font-info text-lg">
                {namaArabic}
            </div>
        </div>
    );
}