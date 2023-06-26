"use client";

import { api } from "@/utils/api/api";
import { IQuranWord } from "@/utils/api/api.types";
import { useEffect, useState } from "react";
import Ayat from "./Ayat";

export default function ContainerAyat() {
    const [rowsData, setRowsData] = useState<Record<number, Array<IQuranWord>>>({})
    const arrData = Object.values(rowsData)
    const [page, setPage] = useState(50)

    useEffect(() => {
        _fetchData()
    }, [])

    async function _fetchData() {
        const dataQuran = await api.fetchQuranByPage({ page });

        if (!!dataQuran) {
            const rows: typeof rowsData = {};
            for (const verse of dataQuran.verses) {
                for (const word of verse.words) {
                    rows[word.line_number]?.push(word) ?? (rows[word.line_number] = [word]);
                }
            }

            setRowsData(rows);
        }
    }

    return (
        <div className="container" dir="rtl">
            <div className="md:w-2/3 md:mx-auto px-1 md:px-4 mt-14 md:mt-4 rounded-lg">
                {arrData.map((row, rowIdx) => (
                    <div key={rowIdx} className={`flex justify-between flex-wrap py-2 ${(rowIdx !== arrData.length - 1) ? 'border-b-[1px] border-separator' : ''}`}>
                        {row.map((word, wordIdx) => (
                            <Ayat
                                key={wordIdx}
                                text={word.text_indopak}
                                type={word.char_type_name}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}