import Header from "@/components/Header";
import { Metadata } from "next";
import { Fragment } from "react";

export const metadata: Metadata = {
    title: 'Qur\'an app - Read'
}

export default function Read() {
    return (
        <Fragment>
            <Header 
                title="Al - Fatihah"
            />

            
        </Fragment>
    );
}