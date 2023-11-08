import videoShortApi from "@/apis/videoshort";
import MainLayout from "@/components/layout/MainLayout";
import DetailsVideo from "@/Views/DetailsVideo";

export default function Post({ post }: any) {
    return <DetailsVideo data={post} />;
}

export const getStaticPaths = async () => {
    try {
        const { metaData } = await videoShortApi.getAllPublicVideo();
        const paths =
            metaData?.PublicVideoList.slice(0,5).map((item) => {
                return {
                    params: { postId: item._id },
                };
            }) || [];
        return {
            paths,
            fallback: false,
        };
    } catch (error) {
        console.log("Error during video:", error);
    }
};

export const getStaticProps = async (context: any) => {
    const postId = context.params.postId;

    let post: any;

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

    try {
        post = await videoShortApi.getVideoById(postId);

        post = post.metaData.publicVideo;
        post.controlData = extractVideoData(post.shortTimeLine);
        const parentId = post._id;
        const { metaData } = await videoShortApi.getVideoById(parentId);

        post.fullVideoInfo = metaData.publicVideo;
        post.fullVideoInfo.controlData = extractVideoData(post.shortTimeLine);
    } catch (error) {
        console.log("Error during video by id:", error);
        post = {};
    }

    return {
        props: {
            post,
        },
    };
};

Post.Layout = MainLayout;
