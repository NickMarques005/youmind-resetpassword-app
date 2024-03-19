import React, { useEffect, useState } from 'react';
import Content from '../components/content/Content';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import axios from 'axios';
import { ApiErrorResponse, ApiResponse } from '../types/ServiceTypes';
import ErrorPage from './PageError';
import { UseNewPassword } from '../providers/NewPasswordContext';
import { UseHandleError } from '../providers/HandleErrorContext';
import ErrorMessage from '../components/error/ErrorMessage';
import SuccessPage from './PageSuccess';
import { QueryParams, UseQueryParams } from '../providers/QueryContext';
import Loading from '../components/loading/Loading';

export interface PasswordsProps {
    newPassword: string;
    confirmNewPassword: string;
}



const PageResetPass: React.FC = () => {
    const location = useLocation();
    const { apiError, setApiError, errorMessage, resetSuccess, verifying, setVerifying } = UseHandleError();
    const { HandleSetQueryParams } = UseQueryParams();

    const verifyToken = async () => {

        try {
            const { token, id, type } = queryString.parse(location.search)
            const api_url = process.env.REACT_APP_API_URL;
            console.log(api_url);
            console.log(location.search);
            const { data } = await axios.get<ApiResponse>(`${api_url}verifyPassToken?token=${token}&id=${id}&type=${type}`);

            if (!data.success) {
                const showErrors = data.errors?.join(', ') || "Erro desconhecido";
                setApiError(showErrors);
            }

            console.log(data);
            HandleSetQueryParams({
                token: token, 
                id: id, 
                type: type} as QueryParams);

            setVerifying(false);

        } catch (err) {
            const error = err as ApiErrorResponse;
            if (error.response?.data) {
                const { data } = error.response;
                if (!data.success) {
                    const showErrors = data.errors?.join(', ') || "Erro desconhecido";
                    console.log("SHOW ERROR: ", showErrors);
                    setApiError(showErrors);
                }
                setVerifying(false);
                return console.log(error.response.data);
            }
            console.log("Erro ao verificar token: ", err);
            setVerifying(false);
        }
    }

    useEffect(() => {
        verifyToken();
    }, []);

    return (
        <>
            {
                resetSuccess ?
                    <SuccessPage />
                    :
                    apiError ?
                        <div>
                            <ErrorPage api_errors={apiError} />
                        </div>
                        :
                        verifying ?
                            <>
                                <Loading/>
                            </>
                            :
                            <>
                                <Header />
                                <ErrorMessage errorMessage={errorMessage}/>
                                <Content />
                                <Footer />
                            </>
            }
        </>
    )
}

export default PageResetPass;