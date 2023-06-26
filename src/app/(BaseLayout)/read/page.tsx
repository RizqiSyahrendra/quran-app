"use client";

import ContainerAyat from "@/components/module/read/ContainerAyat";
import HeaderContainerAyat from "@/components/module/read/HeaderContainerAyat";
import { Fragment, useState } from "react";

export default function Read() {
    const [page, setPage] = useState(1)

    return (
        <Fragment>
            <HeaderContainerAyat
                halaman="1"
                juz="1"
                surat="Al - Baqarah"
            />
            <ContainerAyat
                page={page}
                onPageChanged={(p) => setPage(p)}
            />
        </Fragment>
    );
}