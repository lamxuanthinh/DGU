import EditVideo from "@/Views/EditVideo";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

export default function EditVideoPage() {
    return <EditVideo />;
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale ?? "vi", ["editvideo", "common"])),
        },
    };
};
