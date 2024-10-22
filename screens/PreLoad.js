import React, { useEffect, useState } from "react";
import { View, Animated, Easing, Text, Image } from "react-native";
import componentStyle, { useCustomFonts } from "../assets/componentStyleSheet";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import styles from "../assets/stylesheet";
import { colorStyle } from "../assets/componentStyleSheet";
import { SvgXml } from "react-native-svg";

function PreLoad() {
    const [fontsLoaded] = useCustomFonts();
    const navigation = useNavigation();
    const [degree, setDegree] = useState(new Animated.Value(0));

    useEffect(() => {
        if (fontsLoaded) {
            navigateToHome();
        }
        const rotationInterval = setInterval(() => {
            Animated.timing(degree, {
                toValue: degree._value + 20,
                duration: 100,
                easing: Easing.easeOutCubic,
                useNativeDriver: false, // Make sure to set useNativeDriver to false for rotate animation
            }).start();
        }, 100);

        return () => clearInterval(rotationInterval);
    }, [fontsLoaded]);

    const navigateToHome = () => {
        setTimeout(() => {
            navigation.navigate('Tab');
        }, 3000);
    };

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={[styles.w100vw, styles.h100vh, { backgroundColor: colorStyle.main3 }]}>
            <StatusBar style="light" />
            <View style={[styles.positionAbsolute, styles.w100, styles.h100, styles.flexColCenter]}>
                <Animated.View style={{ transform: [{ rotate: degree.interpolate({ inputRange: [0, 360], outputRange: ["0deg", "360deg"] }) }] }}>
                    <SvgXml
                        xml={`<svg width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 110C1.7735e-06 89.7135 5.60994 69.8222 16.2096 52.5251C26.8092 35.2281 41.9857 21.1991 60.0611 11.9893C78.1364 2.77942 98.4066 -1.25257 118.631 0.339094C138.854 1.93075 158.244 9.08406 174.656 21.0081C191.068 32.9322 203.863 49.1626 211.627 67.9048C219.39 86.6471 221.819 107.171 218.646 127.208C215.472 147.245 206.82 166.013 193.645 181.439C180.47 196.865 163.285 208.347 143.992 214.616L132.095 178.001C144.636 173.926 155.805 166.462 164.369 156.436C172.933 146.409 178.557 134.209 180.62 121.185C182.682 108.161 181.104 94.8206 176.057 82.6381C171.011 70.4557 162.695 59.9059 152.027 52.1553C141.359 44.4046 128.755 39.755 115.61 38.7204C102.464 37.6858 89.2887 40.3066 77.5397 46.293C65.7907 52.2794 55.926 61.3983 49.0362 72.6413C42.1465 83.8844 38.5 96.8138 38.5 110L0 110Z" fill="#FCFCFC"/>
                    </svg>
                    `}
                    />
                </Animated.View>
                <Text style={[styles.marginTop4vw, componentStyle.noto28DpBold, { color: colorStyle.main4 }]}>Loading...</Text>

            </View>
            <Image source={require('../assets/images/hiddenBG.jpg')} style={{ width: '100%', height: '100%', opacity: 0.2 }} />
        </View>
    );
}

export default PreLoad;
