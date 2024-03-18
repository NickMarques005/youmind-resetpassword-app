import React from 'react';
import Button from '../button/Button';
import Input from '../input/Input';
import "./Content.css";
import { UseNewPassword } from '../../providers/NewPasswordContext';
import axios from 'axios';
import { UseQueryParams } from '../../providers/QueryContext';


const Content: React.FC = () => {

    const { passwordState, setPasswordState } = UseNewPassword();
    const { queryParams } = UseQueryParams();
    const HandleSendNewPass = (pass: string) => {
        console.log("Nova senha: ", pass);
    }

    const HandleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        console.log(value);
        setPasswordState({...passwordState, [name]: value});
    }

    const HandleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const {newPassword, confirmNewPassword } = passwordState;
        if(newPassword.trim.length < 8 || newPassword.trim.length > 25){
            console.log("Erro ao redefinir senha: Precisa ser entre 8 à 25 caracteres!");
            return 
        }

        if(newPassword !== confirmNewPassword)
        {
            return console.log("Erro ao redefinir senha: As senhas precisam ser iguais!")
        }

        try{
            const {token, id, type} = queryParams;

            if(!token || !id || !type) return console.log("Houve um erro parametros não especificados!", queryParams);

            const { data } = await axios.post(
                `${process.env.REACT_APP_API_URL}reset-password?token=${token}&id=${id}&type=${type}`,
                { password: newPassword }
            )
        }
        catch (err)
        {
            console.log(err);
        }
    }


    return (
        <div className="content-container">
            <div className="title-div">
                <h2>Redefina sua senha</h2>
                <p>Por favor, insira sua nova senha abaixo</p>
            </div>
            <form className="newpassword-form">
                <div className="inputs-div">
                    <Input placeholder={"Nova Senha"} type={"password"} hasButton={true} name={"newPassword"} onChange={HandleOnChange}/>
                    <Input placeholder={"Confirmar Nova Senha"} type={"password"} hasButton={true} name={"confirmNewPassword"} onChange={ HandleOnChange } />
                </div>
                <div className="button-div">
                    <Button text="Enviar" buttonFunc={HandleSendNewPass}/>
                </div>
            </form>

        </div>
    )
}

export default Content;