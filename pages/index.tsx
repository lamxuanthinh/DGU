import videoShortApi from "@/apis/videoshort";
import MainLayout from "@/components/layout/MainLayout";
import Home from "@/Views/Home";
import Head from "next/head";
import { useEffect } from "react";

const Index = ({ posts }: any) => {
    
    useEffect(() => {
        const setFullHeight = () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty("--vh", `${vh}px`);
        };

        setFullHeight();
        window.addEventListener("resize", setFullHeight);

        return () => window.removeEventListener("resize", setFullHeight);
    }, []);

    return (
        <>
            <Head>
                <title>DGU</title>
                <link rel="icon" href="/icon?<generated>" type="image/<generated>" sizes="<generated>" />
                <link
                    rel="shortcut icon"
                    href="https://res.cloudinary.com/dqa5ffq01/image/upload/v1692990728/Public/Logo/logo_qu2mwg.png"
                />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Home data={posts} />
        </>
    );
};

Index.Layout = MainLayout;

export default Index;

export async function getStaticProps() {
    let posts: any;

    const extractVideoData = (data: any[]) => {
        return data.map((item) => {
            const numbers = item.split(":").map(Number);
            const point = numbers[0];
            const duration = numbers[1] - numbers[0];

            return {
                point,
                duration,
            };
        });
    };

    const extractStringVideoData = (item: string) => {
        const numbers = item.split(":").map(Number);
        const point = numbers[0];
        const duration = numbers[1] - numbers[0];

        return {
            point,
            duration,
        };
    };

    try {
        const { metaData } = await videoShortApi.getAllVideoShort();

        posts = metaData.shortList.slice(0, 2);

        for (let i = 0; i < posts.length; i++) {
            const parentId = posts[i].videoPublicId;
            posts[i].controlData = extractStringVideoData(posts[i].shortTimeLine);

            const { metaData } = await videoShortApi.getVideoById(parentId);

            posts[i].fullVideoInfo = metaData.publicVideo;

            posts[i].fullVideoInfo.controlData = extractVideoData(posts[i].fullVideoInfo.shortTimeLine);
        }
    } catch (error) {
        console.log("Error during video home:", error);
        posts = [];
    }

    return {
        props: {
            posts,
        },
        revalidate: 60,
    };
}
