import CustomButton from "../components/CustomButton";
import { useNavigate } from "react-router-dom";

import logo from "../assets/imagens/logo.png";
import "./Login.scss";
const Login = () => {
    const navigate = useNavigate();

    const handleSignInClick = () => {
        navigate("/");
    };
    return (
        <div className="login-container">
            <img src={logo} alt="Emperion Barbershop" />
            <div className="button-container">
                <CustomButton onClick={handleSignInClick}>Entrar</CustomButton>
            </div>
        </div>
    );
};
export default Login;
