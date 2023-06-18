import videoApi from "@/apis/video";
import MainLayout from "@/components/layout/MainLayout";
import DetailsVideo from "@/Views/DetailsVideo";

export default function Post({ post }: any) {
  return <DetailsVideo data={post} />;
}

export const getStaticPaths = async () => {
  let posts: any;

  try {
    posts = await videoApi.getAllVideo();
  } catch (error) {
    console.error("Error fetching posts:", error);
    posts = [];
  }

  const paths = posts.metaData.map((item: any) => {
    return {
      params: { postId: item.video_id },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const postId = context.params.postId;
  let posts: any, post: any;

  try {
    post = await videoApi.getVideoById(postId);
    post = post.metaData;
  } catch (error) {
    console.error("Error fetching posts:", error);
    post = {};
  }

  return {
    props: {
      post,
    },
  };
};

Post.Layout = MainLayout;
