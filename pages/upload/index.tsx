import MainLayout from "@/components/layout/MainLayout";
import Upload from "@/Views/Upload";

export default function index({ posts }: any) {
    return <Upload data={posts} />;
}

index.Layout = MainLayout;

export async function getStaticProps() {
    let posts: any;
    // var userId = localStorage.getItem("userId");
    try {
        //   posts = await courseApi.getVideoById();
        // console.log(userId);
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
