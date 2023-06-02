import { ICardHeaderSuratProps } from "./CardHeaderSurat.types";
import SeparatorCircle from "@/components/SeparatorCircle";
import SeparatorLine from "@/components/SeparatorLine";
import { IconRegistry, ImageRegistry } from "@/utils/image";
import Image from "next/image";

export default function CardHeaderSurat(props: ICardHeaderSuratProps) {
    const {
        nama,
        jenis,
        arti,
        jumlahAyat,
    } = props;

    return (
        <div className="w-full relative">
            <div className="absolute w-full text-center text-font-primary pt-2">
                <div className="font-medium text-2xl">
                    {nama}
                </div>
                <div className="font-medium mt-1">
                    {arti}
                </div>
                <SeparatorLine color="3" fullSize={false} />
                <div className="flex justify-center font-medium mt-2">
                    <span>{jenis}</span>
                    <SeparatorCircle color="1" />
                    <span>{jumlahAyat} Ayat</span>
                </div>
                <div className="mt-2 flex justify-center">
                    <Image
                        src={IconRegistry.bismillah}
                        alt="Bismillah"
                        width={180}
                        height={0}
                    />
                </div>
            </div>
            <Image
                src={ImageRegistry.bgSuratSm}
                alt="surat"
                quality={100}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-[180px] md:hidden"
            />
            <Image
                src={ImageRegistry.bgSuratLg}
                alt="surat"
                quality={100}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-[170px] hidden md:block"
            />
        </div>
    );
}