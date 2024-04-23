import { useCallback } from 'react';
import { MakeRequest } from './Request';

export const ResetPasswordService = () => {
    
    const performResetPassword = useCallback(async (newPassword: string, token: string, id: string, type: string) => {
        try {
            const endpoint = "auth/reset-password";
            const response = await MakeRequest({
                endpoint: endpoint,
                method: 'POST',
                data: { password: newPassword },
                queryParams: { token, id, type}
            });

            if (!response.success) {
                throw new Error(response.error || "Erro desconhecido");
            }
            
            return response;
        } catch (err) {
            console.log(err);
            throw err;
        }
    }, []);

    return { performResetPassword };
};