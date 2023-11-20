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
import { convertNumToArabic } from "@/utils/helper";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import RowJuz from "./RowJuz";
import RowSurat from "./RowSurat";
import { IJenisSurat } from "./RowSurat.types";
import { TTabQuranName, ITabQuran } from "./TabsQuran.types";
import { routeNames } from "@/utils/routes";

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
    const [isLoading, setLoading] = useState(true)
    const [chapters, setChapters] = useState<IChapter[]>([])
    const [juzLoading, setJuzLoading] = useState<Record<number, boolean>>({})
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
        router.push(routeNames("read", {
            startPage: chapter.pages?.[0] ?? 1
        }));
    }

    async function onClickRowJuz(juz: number) {
        const tempJuzLoading = { ...juzLoading };
        if (!!tempJuzLoading?.[juz]) return;
        tempJuzLoading[juz] = true;
        setJuzLoading(tempJuzLoading);

        const juzInfoRequest = await api.fetchJuzInfo({ juz });
        tempJuzLoading[juz] = false;
        setJuzLoading(tempJuzLoading);
        if (!!juzInfoRequest && ((juzInfoRequest?.verses?.length ?? 0) > 0)) {
            const { verses } = juzInfoRequest;
            const page = verses?.[0]?.page_number ?? 1;
            router.push(routeNames("read", {
                startPage: page
            }));
        }
    }

    if (isLoading) {
        return (
            <Loader
                className="h-10 w-10 mt-10"
                useContainer={true}
                isVisible={true}
            />
        )
    }

    return (
        <Tabs value={activeTab}>
            <TabsHeader
                className="rounded-none bg-transparent border-b-2 border-tab-inactive p-0 mt-12"
                indicatorProps={{
                    className: "bg-gray-900/10 border-b-2 border-tab-active shadow-none rounded-none bg-transparent",
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
                    {chapters.map((chap, idx) => (
                        <RowSurat
                            key={idx}
                            num={idx + 1}
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
                            nama={`Juz ${convertNumToArabic(`${idx + 1}`)}`}
                            isLoading={!!juzLoading?.[idx + 1]}
                            onClick={() => onClickRowJuz(idx + 1)}
                        />
                    ))}
                </TabPanel>
            </TabsBody>
        </Tabs>
    );
}