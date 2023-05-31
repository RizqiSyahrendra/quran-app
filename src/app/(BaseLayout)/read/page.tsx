import Header from "@/components/Header";
import { IJenisSurat } from "@/components/module/home/RowSurat.types";
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
        </Fragment>
    );
}