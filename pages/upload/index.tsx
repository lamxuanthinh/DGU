import MainLayout from "@/components/layout/MainLayout";
import Upload from "@/Views/Upload";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import Router from "next/router";

export default function Index() {
    const { status } = useSession();

    useEffect(() => {
        if (status === "unauthenticated") Router.replace("/signin");
    }, [status]);

    if (status === "authenticated") {
        return <Upload />;
    }
}

Index.Layout = MainLayout;
