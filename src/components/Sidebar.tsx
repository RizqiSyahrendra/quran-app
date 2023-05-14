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
        <Card className="hidden md:block fixed h-screen md:w-[200px] lg:w-[250px] bg-transparent rounded-none border-r-[1px] border-separator border-opacity-[0.35]">
            <div className="mb-2 p-4 font-bold text-header-font">
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
            <ListItem className="text-menu-font focus:text-menu-font-active focus:bg-transparent hover:text-menu-font-active hover:bg-transparent active:text-menu-font-active active:bg-transparent fill-menu-font hover:fill-menu-font-active active:fill-menu-font-active focus:fill-menu-font-active">
                <ListItemPrefix>
                    <props.img.src />
                </ListItemPrefix>
                {props.title}
            </ListItem>
        </Link>
    );
}