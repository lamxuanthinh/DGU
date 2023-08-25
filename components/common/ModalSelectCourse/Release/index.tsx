import { useAppContext } from "@/Context";
import Button from "../../Button";

const Release = () => {
    const { listDataSplitVideo, myCourseData, srcVideoEdit, fileVideoUpload } = useAppContext();
    console.log("list data split video", typeof listDataSplitVideo[0].thumbImageFile);
    console.log("file video upload", fileVideoUpload);

    console.log("my course data", myCourseData);
    console.log("src video edit", srcVideoEdit);

    const handleCallApi = () => {
        if (srcVideoEdit) {
            var file = URL.revokeObjectURL(srcVideoEdit);
            console.log(file);
        }
    };

    return (
        <div>
            <Button onClick={handleCallApi}>Test</Button>
            <h1>Release</h1>
        </div>
    );
};
export default Release;
