import React, { useEffect, useState } from 'react';
import Content from '../components/content/Content';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import axios from 'axios';
import { ApiErrorResponse, ApiResponse } from '../types/ServiceTypes';
import ErrorPage from './PageError';

export interface PasswordsProps {
    newPassword: string;
    confirmNewPassword: string;
}


const PageResetPass: React.FC = () => {
    const location = useLocation();
    const [errorMessage, setErrorMessage] = useState<string>("");

    const verifyToken = async () => {

        try {
            const { token, id, type } = queryString.parse(location.search)
            const api_url = process.env.API_URL;
            console.log(location.search);
            const { data } = await axios.get<ApiResponse>(`${api_url}verifyPassToken?token=${token}&id=${id}&type=${type}`);

            if (!data.success) {
                const showErrors = data.errors?.join(', ') || "Erro desconhecido";
                setErrorMessage(showErrors);
            }

        } catch (err) {
            const error = err as ApiErrorResponse;
            if (error.response?.data) {
                const { data } = error.response;
                if (!data.success) {
                    const showErrors = data.errors?.join(', ') || "Erro desconhecido";
                    console.log("SHOW ERROR: ",showErrors);
                    setErrorMessage(showErrors);
                }
                return console.log(error.response.data);
            }
            console.log("Erro ao verificar token: ", err);
        }

    }

    useEffect(() => {
        verifyToken();
    }, []);

    return (
        <>
            {
                errorMessage ?
                    <div>
                        <ErrorPage api_errors={errorMessage}/>
                    </div>
                    :
                    <>
                        <Header />
                        <Content />
                        <Footer />
                    </>
            }
        </>
    )
}

export default PageResetPass;