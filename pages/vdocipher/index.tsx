import videoApi from "@/apis/video";
import MainLayout from "@/components/layout/MainLayout";
import VDoCipher from "@/Views/VDoCipher";

export default function VDoCipherPage({ posts }: any) {
    return <VDoCipher data={posts}/>;
}

VDoCipherPage.Layout = MainLayout;

export async function getStaticProps() {
    let posts: any;

    try {
        posts = await videoApi.getAllVideo();

        for (let i = 0; i < posts.metaData.length; i++) {
            const parentId = posts.metaData[i].parent_id;
            const parentResponse: any = await videoApi.getVideoById(parentId);
            posts.metaData[i].fullVideoInfo = parentResponse.metaData;
        }
    } catch (error) {
        console.error("Error fetching posts:", error);
        posts = [];
    }

    return {
        props: {
            posts,
        },
    };
}
