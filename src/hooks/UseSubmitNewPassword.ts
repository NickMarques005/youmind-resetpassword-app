import { UseHandleError } from '../providers/HandleErrorContext';
import { UseQueryParams } from '../providers/QueryContext';
import { SetLoading } from '../types/LoadingTypes';
import { ResetPasswordService } from '../services/ResetPasswod';


export const UseSubmitNewPassword = (setLoading: SetLoading) => {
    const { setResetSuccess, setErrorMessage } = UseHandleError();
    const { performResetPassword } = ResetPasswordService();
    const { queryParams } = UseQueryParams();

    const HandlePasswordValidation = ({ newPassword, confirmNewPassword }: { newPassword: string; confirmNewPassword: string }) => {
        if(!newPassword || !confirmNewPassword ) return "Preencha todos os campos para poder resetar sua senha";
        
        if (newPassword  !== confirmNewPassword ) return "As senhas precisam ser iguais!";
        else if (newPassword.length < 8 || newPassword.length > 25) return "A senha precisa ter entre 8 e 25 caracteres.";
            
        return true;
    }

    const SubmitNewPassword = async ({ newPassword, confirmNewPassword }: { newPassword: string; confirmNewPassword: string }) => {
        const PasswordValidation = HandlePasswordValidation({ newPassword, confirmNewPassword});
        if(PasswordValidation !== true)
        {
            return setErrorMessage(PasswordValidation);
        }

        setLoading(true);
        try {
            const { token, id, type } = queryParams;
            if (!token || !id || !type) return setErrorMessage("Parametros de Query inválidos para resetar a senha");
            const data = await performResetPassword(newPassword, token, id, type);

            if (data.success) {
                setResetSuccess(true);
            } else {
                setErrorMessage(data.error || "Erro desconhecido");
            }
        } catch (err) {
            console.error("Erro ao submeter nova senha: ", err);
            setErrorMessage(`${err}`);
        }
        finally {
            setLoading(false);
        }
    };

    return { SubmitNewPassword };
};