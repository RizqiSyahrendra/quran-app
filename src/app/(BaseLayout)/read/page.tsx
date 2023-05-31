import Header from "@/components/Header";
import { IJenisSurat } from "@/components/module/home/RowSurat.types";
import Ayat from "@/components/module/read/Ayat";
import CardHeaderSurat from "@/components/module/read/CardHeaderSurat";
import { Metadata } from "next";
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

            <CardHeaderSurat
                nama="Al - Fatihah"
                arti="Pembuka"
                jenis={IJenisSurat.makkiyah}
                jumlahAyat="7"
            />

            <div className="flex flex-row flex-wrap justify-end py-6">
                <Ayat 
                    num="1"
                    ayatArabic="الْحَمْدُ لِلَّهِ رَبِّ الْعٰلَمِينَ"
                />
            </div>
        </Fragment>
    );
}