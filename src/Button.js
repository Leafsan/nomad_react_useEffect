import PropTypes from "prop-types";
import styles from "./Buttton.module.css";

function Button({text, onClick}) {
    return (
        <button className={styles.btn}
                onClick={onClick}
        >
            {text}
        </button>
    );
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Button;
