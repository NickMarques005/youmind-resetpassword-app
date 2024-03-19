import React from 'react';
import Button from '../button/Button';
import Input from '../input/Input';
import "./Content.css";
import { UseNewPassword } from '../../providers/NewPasswordContext';
import axios from 'axios';
import { UseQueryParams } from '../../providers/QueryContext';
import { UseHandleError } from '../../providers/HandleErrorContext';
import { ApiErrorResponse, ApiResponse } from '../../types/ServiceTypes';


const Content: React.FC = () => {

    const { passwordState, setPasswordState } = UseNewPassword();
    const { queryParams } = UseQueryParams();
    const { errorMessage, setErrorMessage, setResetSuccess, setVerifying } = UseHandleError();

    const HandleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        console.log(value);
        setPasswordState({...passwordState, [name]: value});
    }

    const HandleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        console.log("HANDLE SUBMIT!");
        event.preventDefault();
        const {newPassword, confirmNewPassword } = passwordState;
    
        if(newPassword.trim().length < 8 || newPassword.trim().length > 25){
            const msg = "Erro ao redefinir senha: Precisa ser entre 8 à 25 caracteres!";
            console.log(msg);
            return setErrorMessage(msg);
        }

        if(newPassword !== confirmNewPassword)
        {
            const msg = "Erro ao redefinir senha: As senhas precisam ser iguais!"
            console.log(msg);
            return setErrorMessage(msg);
        }

        try{
            setVerifying(true);
            const {token, id, type} = queryParams;
            console.log(queryParams);
            if(!token || !id || !type) return setErrorMessage("Houve um erro parametros não especificados!");

            const response = await axios.post<ApiResponse>(
                `${process.env.REACT_APP_API_URL}reset-password?token=${token}&id=${id}&type=${type}`,
                { password: newPassword }
            )

            console.log(response);

            if(!response.data.success)
            {
                const showErrors = response.data.errors?.join(', ') || "Erro desconhecido";
                setErrorMessage(showErrors);
                return;
            }

            setVerifying(false);
            setResetSuccess(true);
        }
        catch (err)
        {
            const error = err as ApiErrorResponse;
            if (error.response?.data) {
                const { data } = error.response;
                if (!data.success) {
                    const showErrors = data.errors?.join(', ') || "Erro desconhecido";
                    console.log("SHOW ERROR: ", showErrors);
                    setErrorMessage(showErrors);
                }
                setVerifying(false);
                return console.log(error.response.data);
            }
            console.log("Erro ao verificar token: ", err);
            setVerifying(false);
        }
    }


    return (
        <div className="content-container">
            <div className="title-div">
                <h2>Redefina sua senha</h2>
                <p>Por favor, insira sua nova senha abaixo</p>
            </div>
            <form onSubmit={HandleSubmit} className="newpassword-form">
                <div className="inputs-div">
                    <Input placeholder={"Nova Senha"} type={"password"} hasButton={true} name={"newPassword"} onChange={HandleOnChange}/>
                    <Input placeholder={"Confirmar Nova Senha"} type={"password"} hasButton={true} name={"confirmNewPassword"} onChange={ HandleOnChange } />
                </div>
                <div className="button-div">
                    <Button text="Enviar" buttonFunc={undefined} type={"submit"}/>
                </div>
            </form>
        </div>
    )
}

export default Content;