"use client";

import ContainerAyat from "@/components/module/read/ContainerAyat";
import HeaderContainerAyat from "@/components/module/read/HeaderContainerAyat";
import { Fragment } from "react";


export default function Read() {
    return (
        <Fragment>
            <HeaderContainerAyat 
                halaman="1"
                juz="1"
                surat="Al - Baqarah"
            />
            <ContainerAyat />
        </Fragment>
    );
}