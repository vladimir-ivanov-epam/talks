import React, {Component} from 'react';
import {View} from "react-native";

import Logo from "./Logo";
import LoginInputs from "./LoginInputs";

class LoginScreen extends Component {

    render() {
        const {container} = styles;

        return (
            <View style={container}>
                <Logo />
                <LoginInputs onChangeValue={() => {}}/>
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