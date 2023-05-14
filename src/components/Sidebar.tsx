"use client";

import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
} from "@/components/material";
import QuranSvg from "../../public/assets/icons/quran.svg";
import LampSvg from "../../public/assets/icons/lamp.svg";
import BookmarkSvg from "../../public/assets/icons/bookmark.svg";
import Link from "next/link";

export default function Sidebar() {
    return (
        <Card className="fixed h-screen bg-transparent rounded-none border-r-[1px] border-separator border-opacity-[0.35] text-font-primary">
            <div className="mb-2 p-4 font-bold">
                <Typography variant="h5">
                    Qur'an App
                </Typography>
            </div>
            <List className="text-font-primary font-medium">
                <SidebarItem
                    title="Beranda"
                    img={{ src: QuranSvg }}
                    href="/home"
                />
                <SidebarItem
                    title="Ayat hari ini"
                    img={{ src: LampSvg }}
                    href="/todays-verse"
                />
                <SidebarItem
                    title="Tersimpan"
                    img={{ src: BookmarkSvg }}
                    href="/bookmark"
                />
            </List>
        </Card>
    );
}

function SidebarItem(props: {
    title: string
    img: { src: any }
    href: string
}) {
    return (
        <Link href={props.href}>
            <ListItem className="focus:text-font-info focus:bg-transparent hover:text-font-info hover:bg-transparent active:text-font-info active:bg-transparent fill-font-primary hover:fill-font-info active:fill-font-info focus:fill-font-info">
                <ListItemPrefix>
                    <div className="text-black focus:hidden">
                        <props.img.src />
                    </div>
                </ListItemPrefix>
                {props.title}
            </ListItem>
        </Link>
    );
}