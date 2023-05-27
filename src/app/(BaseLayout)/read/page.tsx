import Header from "@/components/Header";
import { ImageRegistry } from "@/utils/image";
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
                <div className="text-font-primary flex justify-center">
                    <div>
                        Al - Fatihah
                    </div>
                </div>
                <div className="absolute">
                    <Image
                        src={ImageRegistry.bgSuratSm}
                        alt="surat"
                        sizes="100vw"
                        quality={100}
                        width={0}
                        height={0}
                        className="w-full h-[265px]"
                    />
                </div>
            </div>
        </Fragment>
    );
}