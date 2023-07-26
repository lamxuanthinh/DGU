import React, { createContext, useState, useContext, Dispatch, SetStateAction } from 'react';

interface AppContextType {
     srcVideoEdit: string | undefined;
     setSrcVideoEdit: Dispatch<SetStateAction<string | undefined>>,
     thumbVideoEdit: string | undefined;
     setThumbVideoEdit: Dispatch<SetStateAction<string | undefined>>,
     isLoading: boolean;
     setIsLoading: Dispatch<SetStateAction<boolean>>,
}

interface IAppProviderProps {
     children: React.ReactNode
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: IAppProviderProps) => {
     const [srcVideoEdit, setSrcVideoEdit] = useState<string | undefined>(undefined);
     const [thumbVideoEdit, setThumbVideoEdit] = useState<string | undefined>(undefined);
     const [isLoading, setIsLoading] = useState<boolean>(false);

     return (
          <AppContext.Provider value={{ srcVideoEdit, setSrcVideoEdit, thumbVideoEdit, setThumbVideoEdit, isLoading, setIsLoading }}>
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
