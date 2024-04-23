import React, { createContext, useContext, useState } from 'react';


export interface PasswordsProps {
    newPassword: string;
    confirmNewPassword: string;
}

const NewPasswordContext = createContext<{
    passwordState: PasswordsProps;
    setPasswordState: React.Dispatch<React.SetStateAction<PasswordsProps>>;
} | undefined>(undefined);

export const NewPasswordProvider: React.FC<React.PropsWithChildren<{}>> = ({children}) => {
    const [passwordState, setPasswordState] = useState<PasswordsProps>(
        {
            newPassword: '',
            confirmNewPassword: ''
        }
    );

    return (
        <NewPasswordContext.Provider value={{passwordState, setPasswordState}}>
            {children}
        </NewPasswordContext.Provider>
    );
};

export const UseNewPassword = () => {
    const context = useContext(NewPasswordContext);
    if(context === undefined)
    {
        throw new Error("UseNewPassword precisa ser usado dentro de NewPasswordProvider");
    }

    return context;
};