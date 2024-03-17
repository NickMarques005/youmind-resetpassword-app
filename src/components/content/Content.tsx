import React from 'react';
import Button from '../button/Button';
import Input from '../input/Input';
import "./Content.css";

const Content: React.FC = () => {

    const HandleSendNewPass = (pass: string) => {
        console.log("Nova senha: ", pass);
    }


    return (
        <div className="content-container">
            <div className="title-div">
                <h2>Redefina sua senha</h2>
                <p>Por favor, insira sua nova senha abaixo</p>
            </div>
            <div className="inputs-button-div">
                <div className="inputs-div">
                    <Input placeholder={"Nova Senha"} type={"password"} hasButton={true}/>
                    <Input placeholder={"Confirmar Nova Senha"} type={"password"} hasButton={true} />
                </div>
                <div className="button-div">
                    <Button text="Enviar" buttonFunc={HandleSendNewPass}/>
                </div>
            </div>

        </div>
    )
}

export default Content;