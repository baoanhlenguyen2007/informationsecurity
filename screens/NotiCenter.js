import React, { useEffect, useState, useRef } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { Image, SafeAreaView, ScrollView, StatusBar, Text, View, TouchableOpacity, Switch, Animated } from "react-native";
import styles from "../assets/stylesheet";
import { headerWithIcon, navTopBar } from "../assets/component";
import { FacebookIcon, GoogleIcon, InstagramIcon, MasterCardIcon, NetflixIcon, NotitonIcon, PaypalIcon, SpotifyIcon, TikTokIcon, TinderIcon, notiCenterIcon, settingIcon, systemIcon, wifiIcon } from "../assets/svgXml";
import { vw, vh } from "react-native-expo-viewport-units";
import { SvgXml } from "react-native-svg";
import componentStyle, { colorStyle, useCustomFonts } from "../assets/componentStyleSheet";
import DATA from "../assets/DATA";

export default function NotiCenter() {
    const navigation = useNavigation();
    const { notiList, setNotiList } = DATA();
    console.log(notiList);
    return (
        <SafeAreaView style={[styles.flex1, { backgroundColor: colorStyle.main3 }]}>
            <StatusBar style="light" />
            {headerWithIcon("Thông báo", notiCenterIcon('100%', '100%', colorStyle.main4), colorStyle.main4)}
            <View style={[styles.flexCol, styles.flex1, { gap: vw(5), paddingHorizontal: vw(7.5), paddingVertical: vw(4) }]}>
                <ScrollView style={[styles.flex1]}>
                    {notiList.sort((a, b) => b.id - a.id).filter(item => item.status == 'show').map((item, index) => {

                        return (
                            <View key={index} style={[styles.positionRelative, { marginBottom: vw(4) }]}>
                                <View style={[styles.flexCol, { backgroundColor: index % 2 == 1 ? colorStyle.main4 : colorStyle.white, padding: vw(4), borderRadius: vw(4), gap: vw(2) }]}>
                                    <View style={[styles.flexRowBetweenCenter]}>
                                        <View style={[styles.flexRow, { gap: vw(2) }]}>
                                            {item.icon.map((element, index) => {
                                                return (
                                                    <View key={index}>
                                                        {element}
                                                    </View>
                                                )
                                            })}
                                            {item.type == 'system' ? <Text style={[componentStyle.noto16Bold, { color: colorStyle.darkGray }]}>{item.title}</Text> : null}
                                        </View>
                                        <Text style={[componentStyle.inter12Regular, { color: colorStyle.grey }]}>{item.time}</Text>
                                    </View>
                                    <View style={[styles.flexRowBetweenCenter, styles.w100]}>
                                        <Text style={[componentStyle.inter14Regular, styles.flex1, { color: index % 2 == 1 ? colorStyle.white : colorStyle.darkGray }]}>{item.message}</Text>
                                        {item.fnc ? <TouchableOpacity onPress={item.fnc} style={{ paddingHorizontal: vw(3), paddingVertical: vw(1.5), backgroundColor: colorStyle.main4, borderRadius: vw(1.6), marginLeft: vw(2) }}>
                                            <Text style={[componentStyle.inter14Regular, { color: colorStyle.white, }]}>{item.fncMessage}</Text>
                                        </TouchableOpacity> : null}
                                    </View>
                                </View>
                                <View style={[styles.positionAbsolute, styles.w100, styles.h100, { borderRadius: vw(4), zIndex: -1, backgroundColor: index % 2 == 0 ? colorStyle.main4 : null, top: vw(0.75) }]}></View>
                            </View>
                        )

                    })}
                </ScrollView>
            </View>
        </SafeAreaView >
    )
}