import logo from "../assets/imagens/logo.png";
import CustomButton from "./CustomButton";

import "./sidebar.scss";

const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <div className="logo">
                <img src={logo} alt="Emperion Barbershop" />
            </div>
            <div className="sine-out">
                <CustomButton>Sair</CustomButton>
            </div>
        </div>
    );
};
export default Sidebar;
