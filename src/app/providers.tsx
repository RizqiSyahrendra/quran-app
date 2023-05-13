'use client';

import { ThemeProvider } from "@/components/material";
import { ReactNode } from "react";

export interface ProvidersProps {
    children: ReactNode
}

export default function Providers(props: ProvidersProps) {

    return (
        <ThemeProvider>
            {props.children}
        </ThemeProvider>
    );
}