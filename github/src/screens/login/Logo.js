import React from 'react';
import {Image, View} from "react-native";

export default Logo = () => (
    <View style={{alignItems: 'center'}}>
        <Image
            style={{alignItems: 'center'}}
            source={require('./../../../GitHub-Logo.png')}
        />
    </View>
);
