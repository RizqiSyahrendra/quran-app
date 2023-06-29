"use client";

import { ListItem } from "@/components/material";
import Link from "next/link";
import { IconComponent } from "@/utils/image";

export default function BottomBar() {
    return (
        <div className="fixed w-full left-0 bottom-4 px-4">
            <div className="flex flex-row items-center justify-around lg:hidden h-[60px] md:px-14 bg-secondary shadow-bottombar rounded-full">
                <BottomBarItem
                    img={{ src: IconComponent.quranSvg }}
                    href="/home"
                />
                <BottomBarItem
                    img={{ src: IconComponent.lampSvg }}
                    href="/todays-verse"
                />
                <BottomBarItem
                    img={{ src: IconComponent.bookmarkSvg }}
                    href="/bookmark"
                />
            </div>
        </div>
    );
}

function BottomBarItem(props: {
    img: { src: any }
    href: string
}) {
    return (
        <Link href={props.href}>
            <ListItem className="text-menu-font focus:text-menu-font-active focus:bg-transparent hover:text-menu-font-active hover:bg-transparent active:text-menu-font-active active:bg-transparent fill-menu-font hover:fill-menu-font-active active:fill-menu-font-active focus:fill-menu-font-active">
                <props.img.src />
            </ListItem>
        </Link>
    );
}