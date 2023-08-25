import videoApi from "@/apis/video";
import MainLayout from "@/components/layout/MainLayout";
import VDoCipher from "@/Views/VDoCipher";

export default function VDoCipherPage({ posts }: any) {
    return <VDoCipher data={posts} />;
}

VDoCipherPage.Layout = MainLayout;

export async function getStaticProps() {
    let posts: any;

    try {
        posts = await videoApi.getAllVideo();
        posts = posts.metaData;

        for (let i = 0; i < posts.length; i++) {
            const parentId = posts[i].parent_id;
            const parentResponse: any = await videoApi.getVideoById(parentId);
            posts[i].fullVideoInfo = parentResponse.metaData;
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
