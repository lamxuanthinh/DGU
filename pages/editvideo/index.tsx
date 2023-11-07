import EditVideo from "@/Views/EditVideo";
import { GetStaticProps } from "next";
import React from "react";

export default function EditVideoPage() {
    return <EditVideo />;
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            messages: (await import(`../../messages/${locale}.json`)).default,
        },
    };
};
