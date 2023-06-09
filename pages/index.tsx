import videoApi from "@/apis/video";
import MainLayout from "@/components/layout/MainLayout";
import Home from "@/Views/Home";

const Index = ({ posts }: any) => {
  return <Home data={posts} />;
};

Index.Layout = MainLayout;

export default Index;

export async function getStaticProps() {
  let posts;

  try {
    posts = await videoApi.getAllVideo();
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
