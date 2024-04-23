import React from 'react';
import Input from '../input/Input';
import Button from '../button/Button';
import "./Form.css"; 
import { Loading } from '../../types/LoadingTypes';

interface FormProps {
    formData: { newPassword: string, confirmNewPassword: string },
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
    loading: Loading;
    
}

const Form: React.FC<FormProps> = ({ formData, onChange, onSubmit, loading }) => {
    return (
        <form onSubmit={onSubmit} className="form">
            <div className="inputs-div">
                <Input
                    placeholder="Nova Senha"
                    type="password"
                    name="newPassword"
                    onChange={onChange}
                    value={formData.newPassword}
                    hasButton={true}
                    disabled={loading}
                    loading={loading}
                />
                <Input
                    placeholder="Confirmar Nova Senha"
                    type="password"
                    name="confirmNewPassword"
                    onChange={onChange}
                    value={formData.confirmNewPassword}
                    hasButton={true}
                    disabled={loading}
                    loading={loading}
                />
            </div>
            <div className="button-div">
                <Button
                    text="Enviar"
                    type="submit"
                    loaderColor={"#FFFFFF"}
                    loaderSize={32}
                    disabled={loading}
                    loading={loading}
                />
            </div>
        </form>
    );
}

export default Form;