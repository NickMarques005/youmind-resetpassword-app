import { useCallback, useEffect } from 'react';
import { UseQueryParams } from '../providers/QueryContext';
import { UseHandleError } from '../providers/HandleErrorContext';
import queryString from 'query-string';
import { VerifyTokenService } from '../services/VerifyToken';
import { useLocation } from 'react-router-dom';

export const UseTokenVerification = () => {
    const location = useLocation();
    const { HandleSetQueryParams } = UseQueryParams();
    const { setApiError, setErrorMessage, setVerifying } = UseHandleError();
    const { performVerifyToken } = VerifyTokenService();

    const VerifyToken = useCallback(async (token?: string, id?: string, type?: string) => {
        setVerifying(true);
        try {
            if (!token || !id || !type) return setErrorMessage("Parametros de Query inválidos para resetar a senha");
            const data = await performVerifyToken(token, id, type);
            HandleSetQueryParams({ token, id, type });
            if (!data.success) {
                setApiError(data.error || "Erro desconhecido");
            }
        } catch (error) {
            console.error("Erro ao verificar token: ", error);
            setApiError(`${error}`);
        } finally {
            setVerifying(false);
        }
    }, [performVerifyToken, setVerifying, setErrorMessage, HandleSetQueryParams, setApiError]);


    useEffect(() => {
        const { token, id, type } = queryString.parse(location.search);
        const safeToken = typeof token === 'string' ? token : undefined;
        const safeId = typeof id === 'string' ? id : undefined;
        const safeType = typeof type === 'string' ? type : undefined;
        VerifyToken(safeToken, safeId, safeType);
    }, [VerifyToken, location.search]);

    return;
};