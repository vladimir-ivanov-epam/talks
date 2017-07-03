import React, {Component} from 'react';
import {Image, Text, View} from "react-native";

import { Button, FormInput } from 'react-native-elements';
import Logo from "./Logo";
import LoginInputs from "./LoginInputs";
import {loginAsync} from "../../actions/LoginActions";

class LoginScreen extends Component {

    state = { error: null };

    onChangeValue = (prop, value) => {
        this.setState({ [prop]: value });
    };

    doLogin = async () => {
        const { login, password } = this.state;
        let result = await loginAsync(login, password);
        this.setState({ loggedIn: result.error === undefined, error:  result.error });
    };

    render() {
        const {container, successMessage, errorMessage} = styles;

        return (
            <View style={container}>
                <Logo />
                <LoginInputs onChangeValue={(prop, value) => this.onChangeValue(prop, value)}/>
                <Button
                    raised
                    title='LOGIN'
                    backgroundColor="#00F"
                    icon={{name: 'cached'}}
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
        flexGrow: 1
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
