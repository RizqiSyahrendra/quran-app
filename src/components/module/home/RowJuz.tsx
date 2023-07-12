"use client";

import Loader from "@/components/Loader";
import { IconRegistry } from "@/utils/image";
import Image from "next/image";
import { IRowJuzProps } from "./RowJuz.types";

export default function RowJuz(props: IRowJuzProps) {
    const {
        num,
        nama,
        isLoading = false,
        onClick
    } = props;

    return (
        <div onClick={onClick} className="flex flex-row justify-between border-b-[1px] border-separator2 pb-4 mb-2 cursor-pointer">
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
                <div className="pl-2 text-font-primary font-medium">
                    {nama}
                </div>
            </div>
            <div>
                <Loader isVisible={isLoading} />
            </div>
        </div>
    );
}