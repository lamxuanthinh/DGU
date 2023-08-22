import videoNormalApi from "@/apis/apiVideoNormal";
import MainLayout from "@/components/layout/MainLayout";
import Home from "@/Views/Home";

const Index = ({ posts }: any) => {
    return <Home data={posts} />;
};

Index.Layout = MainLayout;

export default Index;

export async function getStaticProps() {
    let posts: any;

    try {
        posts = await videoNormalApi.getAllApiVideoNormal();
        console.log(posts);
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
