import { useState } from "react";
import Avatar from "../../components/Avatar/Avatar";
import "./Profile.css";

interface ProfileModel {
    name: string;
    email: string;
}

const Profile = () => {
    const data: ProfileModel = {
        name: "John Doe",
        email: "John@gmail.com"
    };

    const [profile] = useState<ProfileModel>(data);
    return (
        <div className="profile">
            <div className="profile_container">
                <Avatar
                    label="John Doe"
                    url="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGh1bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
                <div className="profile_label">
                    <h1>{profile.name}</h1>
                    <h3>{profile.email}</h3>
                </div>
            </div>
        </div>
    )
};

export default Profile;