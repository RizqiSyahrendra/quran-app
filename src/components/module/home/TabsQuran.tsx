"use client";

import Loader from "@/components/Loader";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@/components/material";
import { api } from "@/utils/api/api";
import { IChapter } from "@/utils/api/api.types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import RowJuz from "./RowJuz";
import RowSurat from "./RowSurat";
import { IJenisSurat } from "./RowSurat.types";
import { TTabQuranName, ITabQuran } from "./TabsQuran.types";

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

export default function TabsQuran() {
    const [activeTab, setActiveTab] = useState<TTabQuranName>('surat')
    const [isLoading, setLoading] = useState(false)
    const [chapters, setChapters] = useState<IChapter[]>([])
    const router = useRouter()

    useEffect(() => {
        _fetchData();
    }, [])


    async function _fetchData() {
        setLoading(true);
        const data = await api.fetchChapters();
        setLoading(false);

        if (!!data) {
            setChapters(data.chapters);
        }
    }

    function onClickRowSurat(chapter: IChapter) {
        router.push(`/read/?page=${chapter.pages?.[0] ?? 1}`);
    }

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
                    <Loader
                        className="h-10 w-10 mt-5"
                        useContainer={true}
                        isVisible={isLoading}
                    />

                    {chapters.map((chap, idx) => (
                        <RowSurat
                            key={idx}
                            num={idx+1}
                            nama={chap.name_complex}
                            jenis={chap.revelation_place === "makkah" ? IJenisSurat.makkiyah : IJenisSurat.madaniyah}
                            jumlahAyat={`${chap.verses_count}`}
                            namaArabic={chap.name_arabic}
                            onClick={() => onClickRowSurat(chap)}
                        />
                    ))}
                </TabPanel>
                <TabPanel value={"juz"} className="px-0">
                    {chapters.length > 0 && [...Array(30)].map((item, idx) => (
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