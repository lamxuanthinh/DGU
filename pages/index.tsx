import videoShortApi from "@/apis/videoshort";
import MainLayout from "@/components/layout/MainLayout";
import Home from "@/Views/Home";

const Index = ({ posts }: any) => {
    console.log(posts);
    return <Home data={posts} />;
};

Index.Layout = MainLayout;

export default Index;

export async function getStaticProps() {
    let posts: any;

    try {
        posts = await videoShortApi.getAllVideoShort();
        posts = posts.metaData.shortList;

        for (let i = 0; i < posts.length; i++) {
            const parentId = posts[i].videoPublicId;
            const parentResponse: any = await videoShortApi.getVideoById(parentId);
            posts[i].fullVideoInfo = parentResponse.metaData.publicVideo;
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
