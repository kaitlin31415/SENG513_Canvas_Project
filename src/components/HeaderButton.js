import React from "react";
import Button from "react-bootstrap/Button";
import "../styles.scss";


class Logout extends React.Component {
    render() {
        return (
            <Button variant="primary" type="submit">
                <font color="white"> Logout </font>
            </Button>
        )
    }
}

class Home extends React.Component {
    render() {
        return (
            <Button variant="primary" type="submit">
                <font color="white"> Home </font>
            </Button>
        )
    }
}

class Import extends React.Component {
    render() {
        return (
            <Button variant="primary" type="submit">
                <font color="white"> Import </font>
            </Button>
        )
    }
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
   