"use client";

import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@/components/material";
import { useState } from "react";
import RowJuz from "./RowJuz";
import RowSurat from "./RowSurat";
import { IJenisSurat } from "./RowSurat.types";
import { TTabQuranName, ITabQuran } from "./TabsQuran.types";


export default function TabsQuran() {
    const [activeTab, setActiveTab] = useState<TTabQuranName>('surat')

    const tabList: ITabQuran[] = [
        {
            key: "surat",
            label: "Surat",
        },
        {
            key: "juz",
            label: "Juz",
        }
    ]

    return (
        <Tabs value={activeTab}>
            <TabsHeader
                className="rounded-none bg-transparent border-b-2 border-tab-inactive p-0 mt-16"
                indicatorProps={{
                    className: "bg-transparent border-b-2 border-tab-active shadow-none rounded-none",
                }}
            >
                {tabList.map(({ key, label }, idx) => (
                    <Tab
                        key={idx}
                        value={key}
                        onClick={() => setActiveTab(key)}
                        className={activeTab === key ? "text-font-primary" : "text-font-secondary"}
                    >
                        {label}
                    </Tab>
                ))}
            </TabsHeader>
            <TabsBody>
                <TabPanel value={"surat"} className="px-0">
                    <RowSurat
                        num={1}
                        nama="Al - Fatihah"
                        jenis={IJenisSurat.makkiyah}
                        jumlahAyat={'7'}
                        namaArabic={'الفاتحة'}
                    />
                    <RowSurat
                        num={2}
                        nama="Al - Fatihah"
                        jenis={IJenisSurat.makkiyah}
                        jumlahAyat={'7'}
                        namaArabic={'الفاتحة'}
                    />
                </TabPanel>
                <TabPanel value={"juz"} className="px-0">
                    {[...Array(30)].map((item, idx) => (
                        <RowJuz
                            key={idx}
                            num={idx + 1}
                            nama={`Juz ${idx + 1}`}
                        />
                    ))}
                </TabPanel>
            </TabsBody>
        </Tabs>
    );
}