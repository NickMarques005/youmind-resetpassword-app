import React, { useCallback, useState } from 'react';
import { MakeRequest } from './Request';
import { QueryParameter } from '../types/Query';

export const VerifyTokenService = () => {

    const performVerifyToken = useCallback(async (token: QueryParameter, id: QueryParameter, type: QueryParameter) => {
        try {
            const endpoint = "auth/verify-pass-token";
            const response = await MakeRequest({
                endpoint: endpoint,
                method: 'GET',
                queryParams: { token, id, type }
            });

            return response;
        } catch (err) {
            console.log(err);
            throw err;
        }
    }, []);

    return { performVerifyToken };
};