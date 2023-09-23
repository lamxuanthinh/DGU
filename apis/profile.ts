import axiosClient from "./axiosClient";

const profile = {
    getAllMyCourse: (id: number | string) => {
        return axiosClient.get(`/courses/${id}`);
    },
    getCourseDetail: (id: string | string[]) => {
        return axiosClient.get(`/publicvideo/course/${id}`).then((res) => res.data);
    },
};

export default profile;
