import "./ErrorComponent.css";
import { ApiErrorResponse, ErrorType, RouteError } from "../../types/ResponseTypes";
import Logo from "../logo/LogoApp";

interface ErrorProps {
    error: ErrorType;
}

const ErrorComponent: React.FC<ErrorProps> = ({ error }) => {


    return (
        <div className="error-main-div" id="error-page">
            <Logo error={true}/>
            <div className="error-content-div">
                <h1>Oops!</h1>
                <div className="error-div">
                    <p>Desculpe, houve um erro inesperado...</p>
                    <p>
                        <i>{
                            (error as RouteError).statusText || (error as RouteError).message ?
                            (error as RouteError).statusText || (error as RouteError).message
                            : error as string
                        }</i>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ErrorComponent;