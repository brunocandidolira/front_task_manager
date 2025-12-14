const customInput = ({ label, value }) => {
    return (
        <div className="custon-input-container">
            <input type="text" className="custom-input" />
            {label ? (
                <label
                    className={`${
                        value.length != "" ? "shrink" : ""
                    } custom-input-label`}
                ></label>
            ) : null}
            ;
        </div>
    );
};
export default customInput;
