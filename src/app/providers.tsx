'use client';

import { ThemeProvider } from "@/components/material";
import { RecoilRoot } from "recoil";
import { ReactNode } from "react";

export interface ProvidersProps {
    children: ReactNode
}

export default function Providers(props: ProvidersProps) {
    return (
        <ThemeProvider>
            <RecoilRoot>
                {props.children}
            </RecoilRoot>
        </ThemeProvider>
    );
}