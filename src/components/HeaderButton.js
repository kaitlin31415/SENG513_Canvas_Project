import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import "../styles.scss";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/user";

// Logout button
const Logout = () => {
    let navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);

    // goto login page
    const handleLogout = () => {
        setUser("");
        navigate('/');
    }

    return (
        <Button style={{ color: 'white' }} variant="primary" type="submit" onClick={handleLogout}>
            Logout
        </Button>
    )
}

// Home button
const Home = () => {
    let navigate = useNavigate();

    // goto login page
    const handleGoHome = () => {
        navigate('/allcanvases')
    }

    return (
        <Button style={{ color: 'white' }} variant="primary" type="submit" onClick={handleGoHome}>
            Home
        </Button>
    )
}

const Export = (props) => {
    return (
        <Button variant="primary" onClick={() => props.setShowExportCanvasModal(true)}>
            <font color="white"> Export </font>
        </Button>
    )
}

const Share = (props) => {
    return (
        <Button variant="primary" onClick={() => props.setShowShareCanvasModal(true)}>
            <font color="white"> Share </font>
        </Button>
    )
}


export {
    Logout,
    Home,
    Export,
    Share,
}
   