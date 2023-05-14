"use client";

import { ListItem } from "@/components/material";
import Link from "next/link";
import QuranSvg from "../../public/assets/icons/quran.svg";
import LampSvg from "../../public/assets/icons/lamp.svg";
import BookmarkSvg from "../../public/assets/icons/bookmark.svg";

export default function BottomBar() {
    return (
        <div className="md:hidden fixed w-full flex flex-row items-center justify-between bottom-0 h-[80px] bg-secondary shadow-bottombar">
            <BottomBarItem
                img={{ src: QuranSvg }}
                href="/home"
            />
            <BottomBarItem
                img={{ src: LampSvg }}
                href="/todays-verse"
            />
            <BottomBarItem
                img={{ src: BookmarkSvg }}
                href="/bookmark"
            />
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