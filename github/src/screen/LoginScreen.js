import React, {Component} from 'react';
import {Text, View} from "react-native";

import Logo from "./Logo";
import LoginInputs from "./LoginInputs";
import {Button} from "react-native-elements";
import {loginAsync} from "../actions/LoginActions";

class LoginScreen extends Component {

    state = { error: null }

    changeLogin = (login) => {
        this.setState({ 'login': login });
    };

    changePassword = (password) => {
        this.setState({ 'password': password });
    };

    doLogin = async () => {
        this.setState({ error: null, loggedIn: false });
        const { login, password } = this.state;
        try {
            let result = await loginAsync(login, password);
            this.setState({ loggedIn: result.user !== undefined, error: result.error });
        } catch (error) {
            this.setState({ error: error });
        }
    };

    render() {
        const {container, successMessage, errorMessage} = styles;

        console.log("[LoginScreen] state = " + JSON.stringify(this.state));

        return (
            <View style={container}>
                <Logo />
                <LoginInputs
                    onChangeLogin={(login) => this.changeLogin(login)}
                    onChangePassword={(password) => this.changePassword(password)}
                />
                <Button
                    raised
                    title='LOGIN'
                    backgroundColor="#00F"
                    onPress={this.doLogin}
                />
                {this.state.loggedIn && <Text style={successMessage}>Logged in!</Text>}
                {this.state.error && <Text style={errorMessage}>{this.state.error}</Text>}
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
    },
    successMessage: {
        margin: 16,
        justifyContent: 'center',
        color: '#00F',
        fontSize: 18,
        textAlign: 'center'
    },
    errorMessage: {
        margin: 16,
        justifyContent: 'center',
        color: '#F00',
        fontSize: 18,
        textAlign: 'center'
    }
};

export default LoginScreen;