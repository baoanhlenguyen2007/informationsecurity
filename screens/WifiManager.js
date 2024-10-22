import React, { useEffect, useState, useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Image, SafeAreaView, ScrollView, StatusBar, Text, View, TouchableOpacity, Switch, Animated } from "react-native";
import styles from "../assets/stylesheet";
import { headerWithIcon, navTopBar } from "../assets/component";
import { settingIcon, wifiIcon } from "../assets/svgXml";
import { vw, vh } from "react-native-expo-viewport-units";
import { Svg, SvgXml } from "react-native-svg";
import componentStyle, { colorStyle, useCustomFonts } from "../assets/componentStyleSheet";

export default function WifiManager() {

    const [wifiTypeSellected, setWifiTypeSellected] = useState(0);
    const [isShowOtherPrivateWifi, setIsShowOtherPrivateWifi] = useState(false);

    const rotateValue = useRef(new Animated.Value(0)).current;
    const rotate = rotateValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '-180deg']
    });
    const animateRotation = (toValue) => {
        Animated.timing(rotateValue, {
            toValue,
            duration: 500,
            useNativeDriver: true,
        }).start();
    };
    useEffect(() => {
        animateRotation(isShowOtherPrivateWifi ? 1 : 0);
    }, [isShowOtherPrivateWifi]);

    const wifiList = {
        private: [
            'Cty Wifi',
            'Le Anh 2.4GHz',
            'House Wifi',
        ],
        public: [
            'Mana Cofee',
            'Starbucks',
            'KFC Nguyen Thi Dinh',
        ]
    }

    const deviceList = [
        {
            name: 'Teaz iPhone',
            type: 'phone'
        },
        {
            name: 'Teaz iPad',
            type: 'phone'
        },
        {
            name: 'Macbook Pro cua AN',
            type: 'pc'
        },
        {
            name: 'Laptop Dell 159NGK3810',
            type: 'pc'
        },
    ]

    return (
        <SafeAreaView style={[styles.flex1, { backgroundColor: colorStyle.main3 }]}>
            <StatusBar style="light" />
            {headerWithIcon("Quản lý Wifi", wifiIcon('100%', '100%', colorStyle.main4), colorStyle.main4)}
            <View style={[styles.flexCol, { gap: vw(5), paddingHorizontal: vw(7.5), paddingVertical: vw(4) }]}>
                <View style={[styles.flexRowEvenlyCenter, { gap: vw(4) }]}>
                    <TouchableOpacity
                        onPress={() => setWifiTypeSellected(0)}
                        style={[styles.flexRowCenter, styles.flex1, { backgroundColor: wifiTypeSellected == 0 ? colorStyle.main4 : colorStyle.white, gap: vw(1.5), paddingVertical: vw(2.5), borderRadius: vw(3) }]}>
                        <Text style={[componentStyle.noto16Bold, { color: wifiTypeSellected == 0 ? colorStyle.white : colorStyle.grey }]}>Mạng nội bộ</Text>
                        <SvgXml xml={`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_50_4731)"><path d="M3.33331 18.3334C3.33331 16.5653 4.03569 14.8696 5.28593 13.6193C6.53618 12.3691 8.23187 11.6667 9.99998 11.6667C11.7681 11.6667 13.4638 12.3691 14.714 13.6193C15.9643 14.8696 16.6666 16.5653 16.6666 18.3334H15C15 17.0073 14.4732 15.7355 13.5355 14.7978C12.5978 13.8602 11.3261 13.3334 9.99998 13.3334C8.6739 13.3334 7.40213 13.8602 6.46445 14.7978C5.52676 15.7355 4.99998 17.0073 4.99998 18.3334H3.33331ZM9.99998 10.8334C7.23748 10.8334 4.99998 8.59587 4.99998 5.83337C4.99998 3.07087 7.23748 0.833374 9.99998 0.833374C12.7625 0.833374 15 3.07087 15 5.83337C15 8.59587 12.7625 10.8334 9.99998 10.8334ZM9.99998 9.16671C11.8416 9.16671 13.3333 7.67504 13.3333 5.83337C13.3333 3.99171 11.8416 2.50004 9.99998 2.50004C8.15831 2.50004 6.66665 3.99171 6.66665 5.83337C6.66665 7.67504 8.15831 9.16671 9.99998 9.16671Z" fill=${wifiTypeSellected == 0 ? colorStyle.white : colorStyle.grey}/></g><defs><clipPath id="clip0_50_4731"><rect width="20" height="20" fill="white"/></clipPath></defs></svg>`} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setWifiTypeSellected(1)}
                        style={[styles.flexRowCenter, styles.flex1, { backgroundColor: wifiTypeSellected == 1 ? colorStyle.main4 : colorStyle.white, gap: vw(1.5), paddingVertical: vw(2.5), borderRadius: vw(3) }]}>
                        <Text style={[componentStyle.noto16Bold, { color: wifiTypeSellected == 1 ? colorStyle.white : colorStyle.grey }]}>Mạng công cộng</Text>
                        <SvgXml xml={`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_50_4734)"><path d="M1.66669 18.3334C1.66669 16.5653 2.36907 14.8696 3.61931 13.6193C4.86955 12.3691 6.56524 11.6667 8.33335 11.6667C10.1015 11.6667 11.7972 12.3691 13.0474 13.6193C14.2976 14.8696 15 16.5653 15 18.3334H13.3334C13.3334 17.0073 12.8066 15.7355 11.8689 14.7978C10.9312 13.8602 9.65944 13.3334 8.33335 13.3334C7.00727 13.3334 5.7355 13.8602 4.79782 14.7978C3.86014 15.7355 3.33335 17.0073 3.33335 18.3334H1.66669ZM8.33335 10.8334C5.57085 10.8334 3.33335 8.59587 3.33335 5.83337C3.33335 3.07087 5.57085 0.833374 8.33335 0.833374C11.0959 0.833374 13.3334 3.07087 13.3334 5.83337C13.3334 8.59587 11.0959 10.8334 8.33335 10.8334ZM8.33335 9.16671C10.175 9.16671 11.6667 7.67504 11.6667 5.83337C11.6667 3.99171 10.175 2.50004 8.33335 2.50004C6.49169 2.50004 5.00002 3.99171 5.00002 5.83337C5.00002 7.67504 6.49169 9.16671 8.33335 9.16671ZM15.2367 12.2525C16.4078 12.78 17.4017 13.6344 18.0988 14.7131C18.796 15.7919 19.1668 17.049 19.1667 18.3334H17.5C17.5002 17.37 17.2221 16.4271 16.6993 15.618C16.1764 14.8089 15.4309 14.1681 14.5525 13.7725L15.2359 12.2525H15.2367ZM14.6634 2.84421C15.503 3.19029 16.2208 3.77799 16.7259 4.53273C17.2309 5.28748 17.5004 6.17524 17.5 7.08337C17.5004 8.22698 17.0731 9.3294 16.3021 10.1741C15.5312 11.0187 14.4722 11.5446 13.3334 11.6484V9.97087C13.9508 9.88244 14.5236 9.59839 14.9678 9.16042C15.4119 8.72246 15.7039 8.15364 15.801 7.53749C15.898 6.92133 15.795 6.29029 15.507 5.737C15.219 5.18372 14.7612 4.73733 14.2009 4.46337L14.6634 2.84421Z" fill=${wifiTypeSellected == 1 ? colorStyle.white : colorStyle.grey}/></g><defs><clipPath id="clip0_50_4734"><rect width="20" height="20" fill="white"/></clipPath></defs></svg>`} />
                    </TouchableOpacity>
                </View>
                <View>
                    <View style={[styles.flexRowBetweenCenter]}>
                        <Text style={[componentStyle.noto18Bold]}>Đang kết nối</Text>
                        <View style={[styles.flexRowCenter, { paddingVertical: vw(1), paddingHorizontal: vw(2.5), borderRadius: vw(1.5), gap: vw(2), backgroundColor: colorStyle.white, borderWidth: vw(0.25), borderColor: colorStyle.main4 }]}>
                            <Text style={[componentStyle.inter14Regular, { color: colorStyle.main4 }]}>Le Anh 5GHz</Text>
                            {wifiIcon(vw(6), vw(6), colorStyle.main4)}
                        </View>
                    </View>
                    <View style={[styles.marginTop2vw, styles.paddingV4vw, { backgroundColor: colorStyle.white, borderRadius: vw(4) }]}>
                        <TouchableOpacity
                            style={[styles.flexRowBetweenCenter, { backgroundColor: colorStyle.white, paddingHorizontal: vw(4), borderRadius: vw(4) }]}
                            onPress={() => setIsShowOtherPrivateWifi(!isShowOtherPrivateWifi)}
                        >
                            <Text style={[componentStyle.inter16Bold]}>Mạng nội bộ khác</Text>
                            <Animated.View style={{ transform: [{ rotate }] }}>
                                <SvgXml xml={
                                    `<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_159_118)"><path d="M15 20L7.5 12.5H22.5L15 20Z" fill="#31616B"/></g><defs><clipPath id="clip0_159_118"><rect width="30" height="30" fill="white"/></clipPath></defs></svg>`
                                } />
                            </Animated.View>
                        </TouchableOpacity>
                        {isShowOtherPrivateWifi ?
                            wifiList.private.map((item, index) => {
                                return (
                                    <View style={[styles.flexRowBetweenCenter, styles.paddingH4vw,]}>
                                        <View key={index} style={[styles.flexRow, styles.alignItemsCenter, styles.paddingV2vw, styles.gap2vw]}>
                                            {wifiIcon(vw(6), vw(6), colorStyle.main4)}
                                            <Text style={[componentStyle.inter14Regular, { color: colorStyle.main4 }]}>{item}</Text>
                                        </View>
                                        <SvgXml xml={`<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="1" width="23" height="23" rx="11.5" stroke="#31616B" stroke-width="2"/><path d="M13.636 14.734H11.278L10.846 6.148H14.068L13.636 14.734ZM10.846 17.74C10.846 17.188 11.002 16.804 11.314 16.588C11.626 16.36 12.004 16.246 12.448 16.246C12.88 16.246 13.246 16.36 13.546 16.588C13.858 16.804 14.014 17.188 14.014 17.74C14.014 18.268 13.858 18.652 13.546 18.892C13.246 19.12 12.88 19.234 12.448 19.234C12.004 19.234 11.626 19.12 11.314 18.892C11.002 18.652 10.846 18.268 10.846 17.74Z" fill="#31616B"/></svg>`} />
                                    </View>
                                )
                            })
                            : null
                        }
                    </View>
                </View>
                <View>
                    <Text style={[componentStyle.noto16Bold, { color: colorStyle.main4 }]}>Thiết bị đang truy cập</Text>
                    <View style={[styles.flexCol, styles.gap4vw, styles.marginTop2vw, { backgroundColor: colorStyle.white, padding: vw(4), borderRadius: vw(4) }]}>
                        {deviceList.map((item, index) => {
                            return (
                                <View style={[styles.flexRowBetweenCenter, { borderBottomWidth: vw(0.25), borderColor: colorStyle.main4 }]}>
                                    <View style={[styles.flexRow, styles.alignItemsCenter, styles.gap4vw, styles.padding1vw,]}>
                                        {item.type == 'phone' ?
                                            <SvgXml xml={`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_29_2667)">
                                            <path d="M7 4V20H17V4H7ZM6 2H18C18.2652 2 18.5196 2.10536 18.7071 2.29289C18.8946 2.48043 19 2.73478 19 3V21C19 21.2652 18.8946 21.5196 18.7071 21.7071C18.5196 21.8946 18.2652 22 18 22H6C5.73478 22 5.48043 21.8946 5.29289 21.7071C5.10536 21.5196 5 21.2652 5 21V3C5 2.73478 5.10536 2.48043 5.29289 2.29289C5.48043 2.10536 5.73478 2 6 2ZM12 17C12.2652 17 12.5196 17.1054 12.7071 17.2929C12.8946 17.4804 13 17.7348 13 18C13 18.2652 12.8946 18.5196 12.7071 18.7071C12.5196 18.8946 12.2652 19 12 19C11.7348 19 11.4804 18.8946 11.2929 18.7071C11.1054 18.5196 11 18.2652 11 18C11 17.7348 11.1054 17.4804 11.2929 17.2929C11.4804 17.1054 11.7348 17 12 17Z" fill="#31616B"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_29_2667">
                                            <rect width="24" height="24" fill="white"/>
                                            </clipPath>
                                            </defs>
                                            </svg>
                                            `} />
                                            :
                                            <SvgXml xml={`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_29_2666)">
                                            <path d="M4 5V16H20V5H4ZM2 4.007C2 3.451 2.455 3 2.992 3H21.008C21.556 3 22 3.449 22 4.007V18H2V4.007ZM1 19H23V21H1V19Z" fill="#31616B"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_29_2666">
                                            <rect width="24" height="24" fill="white"/>
                                            </clipPath>
                                            </defs>
                                            </svg>
                                            `} />
                                        }
                                        <Text style={[componentStyle.inter14Regular]}>{item.name}</Text>
                                    </View>
                                    <TouchableOpacity>

                                    </TouchableOpacity>
                                </View>
                            )
                        })}
                    </View>
                </View>

            </View>
        </SafeAreaView >
    )
}