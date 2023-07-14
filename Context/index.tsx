import React, { createContext, useState, useContext, Dispatch, SetStateAction } from 'react';

interface AppContextType {
     dataEditVideo: string | undefined;
     setDataEditVideo: Dispatch<SetStateAction<string | undefined>>,
     dataImage: string | undefined;
     setDataImage: Dispatch<SetStateAction<string | undefined>>,
     isLoading: boolean;
     setIsLoading: Dispatch<SetStateAction<boolean>>,
}
interface IAppProviderProps {
     children: React.ReactNode
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: IAppProviderProps) => {
     const [dataEditVideo, setDataEditVideo] = useState<string | undefined>(undefined);
     const [dataImage, setDataImage] = useState<string | undefined>(undefined);
     const [isLoading, setIsLoading] = useState < boolean>(false);

     return (
          <AppContext.Provider value={{ dataEditVideo, setDataEditVideo, dataImage, setDataImage, isLoading, setIsLoading }}>
               {children}
          </AppContext.Provider>
     );
};

export const useAppContext = (): AppContextType => {
     const context = useContext(AppContext);
     if (!context) {
          throw new Error('useAppContext must be used within AppProvider');
     }
     return context;
};

export default AppContext;
