import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface QueryParams {
    token: string | null;
    id: string | null;
    type: string | null;
}

interface QueryContextType {
    queryParams: QueryParams;
    HandleSetQueryParams: (params: QueryParams) => void;
}

const QueryContext = createContext<QueryContextType | undefined>(undefined);

export const QueryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [queryParams, setQueryParams] = useState<QueryParams>({ token: null, id: null, type: null });

    const HandleSetQueryParams = (params: QueryParams) => {
        console.log("Query params: ", params);
        setQueryParams(params);
    }

    return (
        <QueryContext.Provider value={{queryParams, HandleSetQueryParams}}>
            {children}
        </QueryContext.Provider>
    );
};

export const UseQueryParams = () => {
    const context = useContext(QueryContext);
    if (context === undefined) {
        throw new Error('UseQueryParams precisa ser usado dentro de QueryProvider');
    }
    return context;
};