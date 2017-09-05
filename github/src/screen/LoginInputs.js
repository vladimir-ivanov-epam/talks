
import React from 'react';
import { FormInput } from 'react-native-elements';
import {View} from "react-native";

export default LoginInputs = ({ onChangeLogin, onChangePassword }) => (
    <View style={{ margin: 16 }}>
        <FormInput
            placeholder='login'
            onChangeText={(value) => {
                onChangeLogin(value);
            }}
        />
        <FormInput
            secureTextEntry
            placeholder='password'
            onChangeText={(value) => {
                onChangePassword(value);
            }}
        />
    </View>
);
