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
  let parent: any;

  try {
    posts = await videoApi.getAllVideo();
    parent = await videoApi.getVideoByParentId(
      "181d0bfc8c5d474b8190cd1b8b6ef89b"
    );

    posts.metaData.map((item: any) => {
      item.fullVideoInfo = parent.metaData;
    });
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
