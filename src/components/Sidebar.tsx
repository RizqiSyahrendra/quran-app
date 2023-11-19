"use client";

import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
} from "@/components/material";
import Link from "next/link";
import { IconComponent } from "@/utils/image";
import { routeNames } from "@/utils/routes";

export default function Sidebar() {
    return (
        <Card className="hidden lg:block fixed h-screen md:w-[180px] lg:w-[250px] bg-transparent rounded-none border-r-[1px] border-separator">
            <div className="mb-2 px-4 pt-10 font-bold text-header-font text-center">
                <Typography variant="h5">
                    Qur&apos;an App
                </Typography>
            </div>
            <List className="text-font-primary font-medium">
                <SidebarItem
                    title="Beranda"
                    img={{ src: IconComponent.homeSvg }}
                    href={routeNames("home")}
                />
                <SidebarItem
                    title="Baca"
                    img={{ src: IconComponent.quranSvg }}
                    href={routeNames("read")}
                />
                <SidebarItem
                    title="Ayat hari ini"
                    img={{ src: IconComponent.lampSvg }}
                    href={routeNames("todays_verse")}
                />
                <SidebarItem
                    title="Tersimpan"
                    img={{ src: IconComponent.bookmarkSvg }}
                    href={routeNames("bookmark")}
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