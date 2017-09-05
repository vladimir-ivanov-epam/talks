
import React from 'react';
import { FormInput } from 'react-native-elements';
import {View} from "react-native";

export default LoginInputs = ({ onChangeValue }) => (
    <View style={{ margin: 16 }}>
        <FormInput
            placeholder='login'
            onChangeText={(value) => {
                onChangeValue('login', value);
            }}
        />
        <FormInput
            secureTextEntry
            placeholder='password'
            onChangeText={(value) => {
                onChangeValue('password', value);
            }}
        />
    </View>
);
