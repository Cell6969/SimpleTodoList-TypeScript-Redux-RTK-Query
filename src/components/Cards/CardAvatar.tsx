import { FC } from "react";
import Avatar from "../Avatar/Avatar";


interface Props {
    name?: string;
    age?: number;
    image?: string;
};

const CardAvatar : FC <Props> = ({name, age, image}) => {
    return (
        <>
            <div style={{display:'flex', marginBottom: 10, alignItems:'center'}}>
                <div>
                    <Avatar label={name} url={image} size="sm"/>
                </div>
                <div style={{marginLeft: 10}}>
                    <h3 style={{padding:0, margin:0}}>{name}</h3>
                    <h4 style={{padding:0, margin:0}}>Umur: {age}</h4>
                </div>
            </div>
        </>
    )
};

export default CardAvatar;