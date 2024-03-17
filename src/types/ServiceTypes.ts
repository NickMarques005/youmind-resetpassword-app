export interface ApiResponse {
    success: boolean;
    errors?: string[];
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

export type ErrorType = RouteError | string;