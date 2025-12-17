import { Children } from "react";
import "./CustomButton.scss";

const CustomButton = ({ onClick, Children }) => {
    return (
        <div className="custom-button-container" onClick={onClick}>
            {Children}
        </div>
    );
};
export default CustomButton;
