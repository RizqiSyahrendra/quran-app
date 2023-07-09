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
                <Spinner className={`text-blue-500/10 ${className}`} />
            </div>
        );
    }

    return <Spinner className={`text-blue-500/10 ${className}`} />;
}