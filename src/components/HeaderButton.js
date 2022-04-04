import React from "react";
import Button from "react-bootstrap/Button";
import "../styles.scss";
import { useNavigate } from "react-router-dom";

// Logout button
const Logout = () => {
    let navigate = useNavigate();

    // goto login page
    const handleLogout = () => {
        navigate('/')
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

/* class Logout extends React.Component {

    let navigate = useNavigate();

    handleLogout(e) {
        // e.preventDefault();
        navigate('/');
    }

    render() {
        return (
            <Button variant="primary" type="submit">
                <font color="white"> Logout </font>
            </Button>
        )
    }
} */

/* class Home extends React.Component {
    render() {
        return (
            <Button variant="primary" type="submit">
                <font color="white"> Home </font>
            </Button>
        )
    }
} */

const Import = (props) => {
    return (
        <Button variant="primary" onClick={() => props.setShowImportCanvasModal(true)}>
            <font color="white"> Import </font>
        </Button>
    )
}

class Export extends React.Component {
    render() {
        return (
            <Button variant="primary" type="submit">
                <font color="white"> Export </font>
            </Button>
        )
    }
}

class Share extends React.Component {
    render() {
        return (
            <Button variant="primary" type="submit">
                <font color="white"> Share </font>
            </Button>
        )
    }
}


export {
    Logout,
    Home,
    Import,
    Export,
    Share,
}
   