export interface ApiResponse {
    success: boolean;
    error?: string;
}

export interface RouteError {
    message?: string;
    statusText?: string;
}

export interface ApiErrorResponse {
    response?: {
        data: ApiResponse;
        status: number;
    }
}

export interface AxiosError {
    message?: string;
    response?: {
        data: ApiResponse;
    };
    status?: number;
}

export type ErrorType = RouteError | string;