import videoShortApi from "@/apis/videoshort";
import MainLayout from "@/components/layout/MainLayout";
import Home from "@/Views/Home";

const Index = ({ posts }: any) => {
    return <Home data={posts} />;
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
        posts = await videoShortApi.getAllVideoShort();
        posts = posts.metaData.shortList;

        for (let i = 0; i < posts.length; i++) {
            const parentId = posts[i].videoPublicId;
            posts[i].controlData = extractStringVideoData(posts[i].shortTimeLine);

            const parentResponse: any = await videoShortApi.getVideoById(parentId);
            posts[i].fullVideoInfo = parentResponse.metaData.publicVideo;

            posts[i].fullVideoInfo.controlData = extractVideoData(posts[i].fullVideoInfo.shortTimeLine);
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
