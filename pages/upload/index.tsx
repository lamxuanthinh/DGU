import MainLayout from "@/components/layout/MainLayout";
import Upload from "@/Views/Upload";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import Router from "next/router";

export default function UploadPage() {
    const { status } = useSession();

    useEffect(() => {
        if (status === "unauthenticated") Router.replace("/login");
    }, [status]);

    return <Upload />;
}

UploadPage.Layout = MainLayout;
