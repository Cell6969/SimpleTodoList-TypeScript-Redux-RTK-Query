import { FC, InputHTMLAttributes } from "react";
type typeInput = "text" | "number" | "password" | "email";
interface Props extends InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
    value?: number | string;
    type?: typeInput;
}
const Input: FC<Props> = ({ placeholder, type, value, ...props }) => {
    return (
        <>
            <input className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type={type} placeholder={placeholder} value={value} {...props} />
        </>
    );
};
Input.defaultProps = { placeholder: "Masukan Data", type: "text" };
export default Input;