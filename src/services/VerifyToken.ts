import { useCallback } from 'react';
import { MakeRequest } from './Request';
import { QueryParameter } from '../types/Query';

export const VerifyTokenService = () => {

    const performVerifyToken = useCallback(async (token: QueryParameter, user: QueryParameter) => {
        try {
            const endpoint = "auth/verify-pass-token";
            const response = await MakeRequest({
                endpoint: endpoint,
                method: 'GET',
                queryParams: { token, user }
            });
            console.log(response);
            return response;
        } catch (err) {
            console.log(err);
            throw err;
        }
    }, []);

    return { performVerifyToken };
};