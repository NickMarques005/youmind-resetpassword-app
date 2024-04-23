import axios from 'axios';
import { ApiResponse, ApiErrorResponse } from '../types/ResponseTypes';
import queryString from 'query-string';

export type REQUEST_METHOD = 'GET' | 'POST' | 'PUT' | 'DELETE';

export interface RequestOptions {
    method: REQUEST_METHOD;
    endpoint: string;
    queryParams: Record<string, any>;
    data?: any;
}

export const MakeRequest = async ({
    method,
    endpoint,
    queryParams,
    data,
}: RequestOptions): Promise<ApiResponse> => {
    try {
        const url = `${process.env.REACT_APP_API_URL}${endpoint}`;
        const params = `?${queryString.stringify(queryParams)}`;
        const fullUrl = `${url}${params}`;

        const response = await axios({
            method: method,
            url: fullUrl,
            data: data,
        });

        return response.data;
    } catch (err) {
        const error = err as ApiErrorResponse;
        if (error.response) {
            throw new Error(error.response.data.error || 'Unknown error');
        } else {
            throw new Error('Network error');
        }
    }
};