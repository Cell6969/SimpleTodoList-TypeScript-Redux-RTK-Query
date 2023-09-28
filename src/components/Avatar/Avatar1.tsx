import { FC } from "react";

type size = "lg" | "sm" | "md";

interface Props {
    url?: string;
    label?: string;
    size?: size;
}

const Avatar1: FC<Props> = ({ url, label, size }) => {
    function sizeClass(): string {
        if (size == "lg") {
            return "h-[140px] w-[140px]";
        } else if (size == "sm") {
            return "h-[70px] w-[70px]";
        }
        return "h-[100px] w-[100px]";
    }
    return (
        <div className={
            "flex items-center justify-center bg-gray-400 rounded-full overflow-hidden " +
            sizeClass()
        }>
            {url && <img src={url} alt={label} className="rounded-full" />}
        </div>
    );
};

Avatar1.defaultProps = { size: "md" };

export default Avatar1;