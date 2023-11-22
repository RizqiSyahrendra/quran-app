"use client";

import { Button } from "@/components/material";
import { latestReadState } from "@/utils/store/latestReadState";
import { useRecoilStateWrapper } from "@/utils/hooks/useRecoilStateWrapper";
import { IconRegistry, ImageRegistry } from "@/utils/image";
import { routeNames } from "@/utils/routes";
import Image from "next/image";
import Link from "next/link";

export default function Banner() {
    const [latestRead, setLatestRead] = useRecoilStateWrapper(latestReadState)
    const page = latestRead?.page ?? 1
    const ayatNum = latestRead?.ayat?.verse_key?.split(":")?.[1] ?? '-'

    return (
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
                className="hidden md:block w-full md:h-[131px] lg:h-[131px]"
                quality={100}
            />

            {!!latestRead && (
                <div className="absolute top-0 text-image-font ml-5 mt-3">
                    <div className="flex flex-row font-semibold mb-1">
                        <Image
                            src={IconRegistry.book}
                            alt="last read"
                            width={20}
                            height={20}
                        />
                        <span className="ml-2 text-sm">Terakhir dibaca</span>
                    </div>
                    <div className="text-lg font-semibold">
                        {latestRead?.chapter?.name_simple}
                    </div>
                    <div className="text-sm">
                        Ayat no: {ayatNum}
                    </div>
                    <div className="mt-2">
                        <Link href={routeNames("read", {startPage: page})} prefetch={false}>
                            <Button className="bg-info" size="sm">
                                Lanjutkan
                            </Button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}