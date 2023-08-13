import axiosClient from "./axiosClient";

const courseApi = {
    getCourseById: (id: number | string) => {
        return axiosClient.get(`/api/course/${id}`).then((res) => res.data);
    },
};

export default courseApi;
