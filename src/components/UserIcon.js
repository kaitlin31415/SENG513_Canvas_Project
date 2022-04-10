import React from "react";

const UserIcon = (props) => {

    const username = props.user;
    const color = props.color

    return (
        <div style={{ height: 50, width: 35, marginLeft: "1vw" }}>
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="50" fill={color} />
            </svg>
            {username}
        </div>
    );
};

export default UserIcon;
