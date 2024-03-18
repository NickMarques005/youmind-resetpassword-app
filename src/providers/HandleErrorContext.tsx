import React, { createContext, useContext, useState, ReactNode } from 'react';

interface HandleErrorContextProps {
    errorMessage: string;
    setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
    verifying: boolean;
    setVerifying: React.Dispatch<React.SetStateAction<boolean>>;
}

const HandleErrorContext = createContext<HandleErrorContextProps | undefined>(undefined);

export const HandleErrorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [verifying, setVerifying] = useState<boolean>(true);

    return (
        <HandleErrorContext.Provider value={{ errorMessage, setErrorMessage, verifying, setVerifying }}>
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