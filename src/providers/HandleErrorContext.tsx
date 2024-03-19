import React, { createContext, useContext, useState, ReactNode } from 'react';

interface HandleErrorContextProps {
    errorMessage: string;
    setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
    apiError: string;
    setApiError: React.Dispatch<React.SetStateAction<string>>;
    resetSuccess: boolean;
    setResetSuccess: React.Dispatch<React.SetStateAction<boolean>>;
    verifying: boolean;
    setVerifying: React.Dispatch<React.SetStateAction<boolean>>;
}

const HandleErrorContext = createContext<HandleErrorContextProps | undefined>(undefined);

export const HandleErrorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [apiError, setApiError] = useState<string>("")
    const [verifying, setVerifying] = useState<boolean>(true);
    const [resetSuccess, setResetSuccess] = useState<boolean>(false);
    
    return (
        <HandleErrorContext.Provider value={{ errorMessage, setErrorMessage, apiError, setApiError, resetSuccess, setResetSuccess, verifying, setVerifying }}>
            {children}
        </HandleErrorContext.Provider>
    );
};

export const UseHandleError = () => {
    const context = useContext(HandleErrorContext);
    if (context === undefined) {
        throw new Error('UseHandleError precisa ser usado dentro de HandleErrorProvider');
    }
    return context;
};