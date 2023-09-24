import { ILessonData, IMyCourseData } from "@/model/course";
import { IListDataSplitVideo } from "@/model/editVideo";
import React, { createContext, useState, useContext, Dispatch, SetStateAction } from "react";

interface AppContextType {
    srcVideoEdit: string | undefined;
    setSrcVideoEdit: Dispatch<SetStateAction<string>>;
    isLoading: boolean;
    setIsLoading: Dispatch<SetStateAction<boolean>>;
    courseSelected: IMyCourseData;
    setCourseSelected: React.Dispatch<React.SetStateAction<IMyCourseData>>;
    lessonCreated: ILessonData | undefined;
    setLessonCreated: React.Dispatch<React.SetStateAction<ILessonData | undefined>>;
    myCourseData: IMyCourseData[] | undefined;
    setMyCourseData: React.Dispatch<React.SetStateAction<IMyCourseData[] | undefined>>;
    thumbVideoEdit: string;
    setThumbVideoEdit: Dispatch<SetStateAction<string>>;
    stepSelected: number;
    setStepSelected: Dispatch<SetStateAction<number>>;
    isRenderSelectCourse: boolean;
    setRenderSelectCourse: Dispatch<SetStateAction<boolean>>;
    listDataSplitVideo: IListDataSplitVideo;
    setListDataSplitVideo: Dispatch<SetStateAction<IListDataSplitVideo>>;
    fileVideoUpload: File | undefined;
    setFileVideoUpload: Dispatch<SetStateAction<File | undefined>>;
    fileThumbVideoUpload: File | null;
    setFileThumbVideoUpload: Dispatch<SetStateAction<File | null>>;
    isProcessPlayVideo: string;
    setProcessPlayVideo: React.Dispatch<React.SetStateAction<string>>;
}

interface IAppProviderProps {
    children: React.ReactNode;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: IAppProviderProps) => {
    const [srcVideoEdit, setSrcVideoEdit] = useState<string>("");
    const [thumbVideoEdit, setThumbVideoEdit] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [lessonCreated, setLessonCreated] = useState<ILessonData>();
    const [courseSelected, setCourseSelected] = useState<IMyCourseData>({
        title: "",
        thumbnail: "",
        level: "",
        price: 0,
        author: "",
    });
    const [myCourseData, setMyCourseData] = useState<Array<IMyCourseData> | undefined>([]);
    const [stepSelected, setStepSelected] = useState<number>(0);
    const [isRenderSelectCourse, setRenderSelectCourse] = useState<boolean>(false);
    const [listDataSplitVideo, setListDataSplitVideo] = useState<IListDataSplitVideo>([]);
    const [fileVideoUpload, setFileVideoUpload] = useState<File | undefined>(undefined);
    const [fileThumbVideoUpload, setFileThumbVideoUpload] = useState<File | null>(null);
    const [isProcessPlayVideo, setProcessPlayVideo] = useState("NA");

    return (
        <AppContext.Provider
            value={{
                courseSelected,
                setCourseSelected,
                lessonCreated,
                setLessonCreated,
                srcVideoEdit,
                setSrcVideoEdit,
                thumbVideoEdit,
                setThumbVideoEdit,
                isLoading,
                setIsLoading,
                myCourseData,
                setMyCourseData,
                stepSelected,
                setStepSelected,
                isRenderSelectCourse,
                setRenderSelectCourse,
                listDataSplitVideo,
                setListDataSplitVideo,
                fileVideoUpload,
                setFileVideoUpload,
                fileThumbVideoUpload,
                setFileThumbVideoUpload,
                isProcessPlayVideo,
                setProcessPlayVideo,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = (): AppContextType => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext must be used within AppProvider");
    }

    return context;
};

export default AppContext;
