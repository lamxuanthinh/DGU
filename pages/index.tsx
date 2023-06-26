import videoApi from "@/apis/video";
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
    posts = await videoApi.getAllVideo();

    for (let i = 0; i < posts.metaData.length; i++) {
      const parentId = posts.metaData[i].parent_id;
      const parentResponse: any = await videoApi.getVideoByParentId(parentId);
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
