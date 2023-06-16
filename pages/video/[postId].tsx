import videoApi from "@/apis/video";

export default function Post({ post }: any) {
  return <div>{post.video_id}</div>;
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
    posts = await videoApi.getAllVideo();
    post = posts.metaData.find((item: any) => {
      return item.video_id == postId;
    });
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
