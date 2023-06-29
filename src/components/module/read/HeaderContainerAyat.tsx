"use client";

import { convertNumToArabic } from "@/utils/helper";
import { IconRegistry } from "@/utils/image";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { IHeaderContainerAyatProps } from "./HeaderContainerAyat.types";

export default function HeaderContainerAyat(props: IHeaderContainerAyatProps) {
    const {
        halaman = '1',
        juz = '1',
        surat = '',
    } = props;

    const router = useRouter()

    function onPressBack() {
        router.back();
    }

    return (
        <div className="bg-primary fixed top-0 left-0 lg:left-[250px] w-full lg:w-[calc(100%-250px)] px-6 md:px-14 lg:px-20 py-6">
            <div className="hidden md:flex justify-between text-font-primary font-semibold">
                <div className="flex-1 flex">
                    <Image
                        src={IconRegistry.back}
                        alt="back"
                        width={24}
                        height={24}
                        quality={100}
                        className="self-center mr-4 cursor-pointer"
                        onClick={onPressBack}
                    />
                    <div>
                        {!!juz && `Juz ${convertNumToArabic(juz)}`}
                    </div>
                </div>
                <div className="flex-1 text-center">
                    {convertNumToArabic(halaman)}
                </div>
                <div className="flex-1 text-right">
                    {surat}
                </div>
            </div>
            <div className="md:hidden text-font-primary text-xs font-semibold relative">
                <div className="flex">
                    <div className="flex-1 flex">
                        <Image
                            src={IconRegistry.back}
                            alt="back"
                            width={24}
                            height={24}
                            quality={100}
                            className="self-center mr-4 cursor-pointer"
                        />
                        <div>
                            {!!juz && `Juz ${convertNumToArabic(juz)}`}
                        </div>
                    </div>
                    <div className="flex-1 text-right">
                        {surat}
                    </div>
                </div>
                <div className="text-center absolute top-0 left-1/2">
                    {convertNumToArabic(halaman)}
                </div>
            </div>
        </div>
    );
}