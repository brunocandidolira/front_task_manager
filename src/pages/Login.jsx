import CustomButton from "..components/CustomButton";
import logo from "../assets/imagens/logo.png";
import "./login.scss";
const Login = () => {
    return (
        <div className="logo-container">
            <img src={logo} alt="Emperion Barbershop" />
            <div className="button-container">
                <CustomButton>Entrar</CustomButton>
            </div>
        </div>
    );
};
export default Login;
