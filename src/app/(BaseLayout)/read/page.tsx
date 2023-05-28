import Header from "@/components/Header";
import SeparatorCircle from "@/components/SeparatorCircle";
import SeparatorLine from "@/components/SeparatorLine";
import { IconRegistry, ImageRegistry } from "@/utils/image";
import { Metadata } from "next";
import Image from "next/image";
import { Fragment } from "react";

export const metadata: Metadata = {
    title: 'Qur\'an app - Read'
}

export default function Read() {
    return (
        <Fragment>
            <Header
                title="Al - Fatihah"
            />

            <div className="w-full relative">
                <div className="absolute w-full text-center text-font-primary pt-7">
                    <div className="font-medium text-2xl">
                        Al - Fatihah
                    </div>
                    <div className="font-medium mt-1">
                        Pembuka
                    </div>
                    <SeparatorLine color="3" fullSize={false} />
                    <div className="flex justify-center font-medium mt-4">
                        <span>MAKKIYAH</span>
                        <SeparatorCircle color="3" />
                        <span>7 Ayat</span>
                    </div>
                    <div className="mt-4 flex justify-center">
                        <Image
                            src={IconRegistry.bismillah} 
                            alt="Bismillah"
                            width={214}
                            height={48}
                        />
                    </div>
                </div>
                <Image
                    src={ImageRegistry.bgSuratSm}
                    alt="surat"
                    sizes="100vw"
                    quality={100}
                    width={0}
                    height={0}
                    className="w-full h-[257px] md:hidden"
                />
                <Image
                    src={ImageRegistry.bgSuratLg}
                    alt="surat"
                    sizes="100vw"
                    quality={100}
                    width={0}
                    height={0}
                    className="w-full h-[257px] hidden md:block"
                />
            </div>
        </Fragment>
    );
}