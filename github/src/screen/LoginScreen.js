import React, {Component} from 'react';
import {View} from "react-native";

import Logo from "./Logo";
import LoginInputs from "./LoginInputs";

class LoginScreen extends Component {

    changeLogin = (login) => {
        this.setState({ 'login': login });
    };

    changePassword = (password) => {
        this.setState({ 'password': password });
    };

    render() {
        const {container} = styles;

        console.log("[LoginScreen] state = " + JSON.stringify(this.state));

        return (
            <View style={container}>
                <Logo />
                <LoginInputs
                    onChangeLogin={(login) => this.changeLogin(login)}
                    onChangePassword={(password) => this.changePassword(password)}
                />
            </View>
        )
    }
}

const styles = {
    container: {
        padding: 32,
        justifyContent: 'center',
        backgroundColor: 'white',
        flexGrow: 1,
        flex: 1
    }
};

export default LoginScreen;