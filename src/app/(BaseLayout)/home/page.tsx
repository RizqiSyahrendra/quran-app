import Header from "@/components/Header";
import TabsQuran from "@/components/module/home/TabsQuran";
import { IconRegistry, ImageRegistry } from "@/utils/image";
import { Metadata } from "next";
import Image from "next/image";
import { Fragment } from "react";


export const metadata: Metadata = {
    title: 'Qur\'an app - Beranda'
}

export default function Home() {

    return (
        <Fragment>
            <Header 
                title="Qur'an App"
                isBackButtonVisible={false}
                hideInDesktopScreen={true}
            />

            <div className="text-lg font-medium text-font-secondary">
                Assalamualaikum
            </div>

            {/* Banner */}
            <div className="mt-6 relative">
                {/* Image for mobile */}
                <Image
                    src={ImageRegistry.lastReadSm}
                    alt="last read"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="md:hidden w-full h-auto"
                    quality={100}
                />

                {/* Image for desktop */}
                <Image
                    src={ImageRegistry.lastReadLg}
                    alt="last read"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="hidden md:block w-full md:h-[112px] lg:h-[131px]"
                    quality={100}
                />

                <div className="absolute bottom-0 text-image-font ml-5 mb-4">
                    <div className="flex flex-row font-semibold mb-6 md:mb-4 lg:mb-6">
                        <Image
                            src={IconRegistry.book}
                            alt="last read"
                            width={20}
                            height={20}
                        />
                        <span className="ml-2 text-sm">Terakhir dibaca</span>
                    </div>
                    <div className="text-lg font-semibold">
                        Al - Fatihah
                    </div>
                    <div className="text-sm">
                        Ayat no: 1
                    </div>
                </div>
            </div>

            <TabsQuran />
        </Fragment>
    );
}