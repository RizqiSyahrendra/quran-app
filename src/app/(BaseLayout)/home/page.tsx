import Header from "@/components/Header";
import Banner from "@/components/module/home/Banner";
import TabsQuran from "@/components/module/home/TabsQuran";
import { Fragment } from "react";


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