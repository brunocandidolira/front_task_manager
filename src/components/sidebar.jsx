import logo from "../assets/imagens/logo.png";
import CustomButton from "./CustomButton";
import { useNavigate } from "react-router-dom";
import "./sidebar.scss";

const Sidebar = () => {
    const navigate = useNavigate();
    const hadleSignInClick = () => {
        navigate("/login");
    };
    return (
        <div className="sidebar-container">
            <div className="logo">
                <img src={logo} alt="Emperion Barbershop" />
            </div>
            <div className="sine-out">
                <CustomButton onClick={hadleSignInClick}>Sair</CustomButton>
            </div>
        </div>
    );
};
export default Sidebar;
