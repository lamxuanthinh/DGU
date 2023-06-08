import axiosClient from "./axiosClient";
const videoApi = {
  getAllVideo: () => {
    return axiosClient.get("/api/video");
  },
};
export default videoApi;
