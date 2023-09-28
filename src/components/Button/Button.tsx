import { ButtonHTMLAttributes, FC } from "react";
import "./Button.css";

type variant = "primary" | "secondary";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
    label?: String
    variant?: variant
}

const Button: FC<Props> = ({label ,variant, ...props}) => {
    const style = "button_" + variant
    return (
        <button className={style} {...props}>
            {label}
        </button>
    )
};

Button.defaultProps = {
    variant: "primary",
  };

export default Button;