import React from 'react';
import Content from '../components/content/Content';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import ErrorPage from './PageError';
import { UseHandleError } from '../providers/HandleErrorContext';
import ErrorMessage from '../components/error/ErrorMessage';
import SuccessPage from './PageSuccess';
import Loading from '../components/loading/Loading';
import { UseTokenVerification } from '../hooks/UseTokenVerification';
import { UseSubmitNewPassword } from '../hooks/UseSubmitNewPassword';
import { UseLoading } from '../hooks/UseLoading';
import Form from '../components/form/Form';
import Title from '../components/title/Title';
import UseForm from '../hooks/UseForm';
import Container from '../components/container/Container';
import { ContainerMainStyle } from '../components/container/ContainerMain';
import { ContainerInfoStyle } from '../components/container/ContainerInfo';

export interface PasswordsProps {
    newPassword: string;
    confirmNewPassword: string;
}

const PageResetPass: React.FC = () => {
    const { apiError, errorMessage, resetSuccess, verifying } = UseHandleError();
    UseTokenVerification();
    const { loading, setLoading } = UseLoading();
    const { SubmitNewPassword } = UseSubmitNewPassword(setLoading);
    const { values, HandleChange, HandleSubmit } = UseForm({
        initialValues: { newPassword: '', confirmNewPassword: '' },
        onSubmit: SubmitNewPassword
    })

    const style_main = ContainerMainStyle();
    const style_info = ContainerInfoStyle();

    return (
        <>
            {
                resetSuccess ?
                    <SuccessPage />
                    :
                    verifying ?
                        <>
                            <Loading />
                        </>
                        :
                        apiError ?
                            <>
                                <ErrorPage api_errors={apiError} />
                            </>
                            :
                            <Container style={style_main}>
                                <Header />
                                <Container style={style_info}>
                                    <ErrorMessage errorMessage={errorMessage} />
                                    <Content>
                                        <Title title="Redefina sua senha" subtitle="Por favor, insira sua nova senha abaixo" />
                                        <Form formData={values} onChange={HandleChange} onSubmit={HandleSubmit} loading={loading} />
                                    </Content>
                                    <Footer />
                                </Container>
                            </Container>
            }
        </>
    )
}

export default PageResetPass;