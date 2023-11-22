"use client";

import { Spinner } from "@/components/material";
import { ILoaderProps } from "./Loader.types";

export default function Loader(props: ILoaderProps) {
    const {
        className,
        useContainer = false,
        isVisible = false,
    } = props

    if (!isVisible) return <></>;

    if (useContainer) {
        return (
            <div className="flex justify-center">
                <Spinner className={`text-loader ${className}`} />
            </div>
        );
    }

    return <Spinner className={`text-loader ${className}`} />;
}