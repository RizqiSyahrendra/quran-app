import Header from "@/components/Header";
import Banner from "@/components/module/home/Banner";
import TabsQuran from "@/components/module/home/TabsQuran";
import { Metadata } from "next";
import { Fragment } from "react";


export const metadata: Metadata = {
    title: 'Qur\'an app - Beranda'
}

export default function Home() {

    return (
        <Fragment>
            <Header
                title="Qur&apos;an App"
                isBackButtonVisible={false}
                hideInDesktopScreen={true}
            />

            <div className="text-lg font-medium text-font-secondary mt-8">
                Assalamualaikum
            </div>

            <Banner />

            <TabsQuran />
        </Fragment>
    );
}