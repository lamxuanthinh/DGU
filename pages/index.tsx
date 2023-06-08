import videoApi from "@/apis/video";
import MainLayout from "@/components/layout/MainLayout";
import Home from "@/Views/Home";

const Index = ({ posts }: any) => {
  return <Home data={posts} />;
};

Index.Layout = MainLayout;

export default Index;

export async function getStaticProps() {
  const posts = await videoApi.getAllVideo();
  return {
    props: {
      posts,
    },
  };
}
