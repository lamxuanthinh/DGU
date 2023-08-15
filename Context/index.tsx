import { ILessonData, IMyCourseData } from "@/model/course";
import React, { createContext, useState, useContext, Dispatch, SetStateAction } from "react";

interface AppContextType {
    srcVideoEdit: string | undefined;
    setSrcVideoEdit: Dispatch<SetStateAction<string | undefined>>;
    thumbVideoEdit: string | undefined;
    setThumbVideoEdit: Dispatch<SetStateAction<string | undefined>>;
    isLoading: boolean;
    setIsLoading: Dispatch<SetStateAction<boolean>>;
    courseSelected: IMyCourseData | undefined;
    setCourseSelected: React.Dispatch<React.SetStateAction<IMyCourseData | undefined>>;
    lessonCreated: ILessonData | undefined;
    setLessonCreated: React.Dispatch<React.SetStateAction<ILessonData | undefined>>;
    myCourseData: IMyCourseData[] | undefined;
    setMyCourseData: React.Dispatch<React.SetStateAction<IMyCourseData[] | undefined>>;
}

interface IAppProviderProps {
    children: React.ReactNode;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: IAppProviderProps) => {
    const [srcVideoEdit, setSrcVideoEdit] = useState<string | undefined>(undefined);
    const [thumbVideoEdit, setThumbVideoEdit] = useState<string | undefined>(undefined);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [lessonCreated, setLessonCreated] = useState<ILessonData>();
    const [courseSelected, setCourseSelected] = useState<IMyCourseData>();
    const [myCourseData, setMyCourseData] = useState<Array<IMyCourseData> | undefined>([]);

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
