import { useCallback, useEffect, useState } from 'react';
import { UseQueryParams } from '../providers/QueryContext';
import { UseHandleError } from '../providers/HandleErrorContext';
import queryString from 'query-string';
import { VerifyTokenService } from '../services/VerifyToken';
import { useLocation } from 'react-router-dom';

export const UseTokenVerification = () => {
    const location = useLocation();
    const { HandleSetQueryParams } = UseQueryParams();
    const { setApiError, setVerifying } = UseHandleError();
    const { performVerifyToken } = VerifyTokenService();
    const [prevToken, setPrevToken] = useState<string | undefined>(undefined);
    const [prevUser, setPrevUser] = useState<string | undefined>(undefined);

    const VerifyToken = useCallback(async (token?: string, user?: string) => {
        setVerifying(true);
        try {
            if (!token || !user) return setApiError("Parametros de Query inválidos para resetar a senha");
            const data = await performVerifyToken(token, user);
            HandleSetQueryParams({ token, user });
            if (!data.success) {
                setApiError(data.error || "Erro desconhecido");
            }
        } catch (error) {
            console.error("Erro ao verificar token: ", error);
            setApiError(`${error}`);
        } finally {
            setVerifying(false);
        }
    }, [performVerifyToken, setVerifying, HandleSetQueryParams, setApiError]);


    useEffect(() => {
        const queryParams = queryString.parse(location.search);
        const { token, user } = queryParams;
        const safeToken = typeof token === 'string' ? token : undefined;
        const safeUser = typeof user === 'string' ? user : undefined;
        if (safeToken && safeUser && (safeToken !== prevToken || safeUser !== prevUser)) {
            VerifyToken(safeToken, safeUser);
            setPrevToken(safeToken);
            setPrevUser(safeUser);
        }
    }, [VerifyToken, location.search, prevToken, prevUser]);

    return;
};