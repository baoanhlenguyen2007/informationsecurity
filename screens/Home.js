import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Image, SafeAreaView, ScrollView, StatusBar, Text, View, TouchableOpacity, Switch } from "react-native";
import styles from "../assets/stylesheet";
import { headerWithIcon, marginBottomForScrollView, navTopBar } from "../assets/component";
import { settingIcon, calendarPermission, cameraPermission, contactPermission, folderPermission, locationPermission, mediaPermission, messagePermission, microphonePermission, notiPermission, walletPermission } from "../assets/svgXml";
import { vw, vh } from "react-native-expo-viewport-units";
import { SvgXml } from "react-native-svg";
import componentStyle, { colorStyle, useCustomFonts } from "../assets/componentStyleSheet";
import DATA from "../assets/DATA";

export default function HomeScreen() {

    // const [isActive, setIsActive] = useState(false);
    // const [color, setColor] = useState([]);
    const [permissionSelected, setPermissionSelected] = useState([]);
    const { appList, setAppList } = DATA();

    const [permissionList, setPermissionList] = useState([
        {
            name: 'Camera',
            iconInactived: cameraPermission(vw(6), vw(6), colorStyle.main4),
            iconActived: cameraPermission(vw(6), vw(6), colorStyle.white),
            select: true,
        },
        {
            name: 'Wallet',
            iconInactived: walletPermission(vw(6), vw(6), colorStyle.main4),
            iconActived: walletPermission(vw(6), vw(6), colorStyle.white),
            select: false,
        },
        {
            name: 'Notification',
            iconInactived: notiPermission(vw(6), vw(6), colorStyle.main4),
            iconActived: notiPermission(vw(6), vw(6), colorStyle.white),
            select: false,
        },
        {
            name: 'Microphone',
            iconInactived: microphonePermission(vw(6), vw(6), colorStyle.main4),
            iconActived: microphonePermission(vw(6), vw(6), colorStyle.white),
            select: false,
        },
        {
            name: 'Location',
            iconInactived: locationPermission(vw(6), vw(6), colorStyle.main4),
            iconActived: locationPermission(vw(6), vw(6), colorStyle.white),
            select: false,
        },
        {
            name: 'Media',
            iconInactived: mediaPermission(vw(6), vw(6), colorStyle.main4),
            iconActived: mediaPermission(vw(6), vw(6), colorStyle.white),
            select: false,
        },
        {
            name: 'Contact',
            iconInactived: contactPermission(vw(6), vw(6), colorStyle.main4),
            iconActived: contactPermission(vw(6), vw(6), colorStyle.white),
            select: false,
        },
        {
            name: 'Folder',
            iconInactived: folderPermission(vw(6), vw(6), colorStyle.main4),
            iconActived: folderPermission(vw(6), vw(6), colorStyle.white),
            select: false,
        },
        {
            name: 'Calendar',
            iconInactived: calendarPermission(vw(6), vw(6), colorStyle.main4),
            iconActived: calendarPermission(vw(6), vw(6), colorStyle.white),
            select: false,
        },
        {
            name: 'Message',
            iconInactived: messagePermission(vw(6), vw(6), colorStyle.main4),
            iconActived: messagePermission(vw(6), vw(6), colorStyle.white),
            select: false,
        }
    ]);

    return (
        <SafeAreaView style={[styles.flex1, { backgroundColor: colorStyle.main3 }]}>
            <StatusBar style="light" />
            {headerWithIcon("Quản lý hệ thống", settingIcon('100%', '100%', colorStyle.main4), colorStyle.main4)}
            <View style={[styles.flex1,]}>
                <View style={[styles.shadowW0H1Black, { backgroundColor: colorStyle.white, paddingVertical: vw(2.5), }]}>
                    <View style={[styles.flexRow, styles.alignItemsCenter, styles.gap2vw, { paddingLeft: vw(7.5), }]}>
                        <SvgXml xml={`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_57_1163)"><path d="M4 15H6V20H18V4H6V9H4V3C4 2.73478 4.10536 2.48043 4.29289 2.29289C4.48043 2.10536 4.73478 2 5 2H19C19.2652 2 19.5196 2.10536 19.7071 2.29289C19.8946 2.48043 20 2.73478 20 3V21C20 21.2652 19.8946 21.5196 19.7071 21.7071C19.5196 21.8946 19.2652 22 19 22H5C4.73478 22 4.48043 21.8946 4.29289 21.7071C4.10536 21.5196 4 21.2652 4 21V15ZM10 11V8L15 12L10 16V13H2V11H10Z" fill="#31616B"/></g><defs><clipPath id="clip0_57_1163"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>`}
                        />
                        <Text style={[componentStyle.inter16Bold, { color: colorStyle.main4 }]}>Quyền truy cập</Text>
                    </View>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        {permissionList.map((item, index) => {
                            return (
                                <TouchableOpacity
                                    key={index}
                                    onPress={() => {
                                        const updatedPermissionList = permissionList.map((item, innerIndex) => {
                                            if (innerIndex === index) {
                                                return { ...item, select: !item.select };
                                            } else {
                                                return { ...item, select: false };
                                            }
                                        });
                                        setPermissionList(updatedPermissionList);
                                    }}
                                    style={[styles.flexRow, styles.alignItemsCenter, styles.wfit, styles.marginTop2vw, { marginRight: vw(3), paddingHorizontal: vw(2.5), paddingVertical: vw(1.5), gap: vw(1.5), backgroundColor: permissionList[index].select ? colorStyle.main4 : colorStyle.white, borderWidth: vw(0.25), borderColor: colorStyle.main4, borderRadius: vw(2), marginLeft: index == 0 ? vw(7.5) : null, }]}>
                                    {item.select ? item.iconActived : item.iconInactived}
                                    <Text style={[componentStyle.inter14Regular, styles.padding1vw, { color: !permissionList[index].select ? colorStyle.main4 : colorStyle.white, }]}>{item.name}</Text>
                                </TouchableOpacity>
                            )
                        })}
                    </ScrollView>
                </View>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    style={[{ padding: vw(7.5), backgroundColor: 'rgba(255,255,255,0.7)' }]}
                >
                    {permissionList.map((element, index) => {
                        if (element.select == true) {
                            let x = appList.filter(item => {
                                return item.permissionRequired.some(item1 => {
                                    return item1.perName == element.name && item1.isRequired == true;
                                });
                            });

                            return x.map((item2, appIndex) => {
                                return (
                                    <View
                                        key={appIndex}
                                        style={[styles.flexRowBetweenCenter, styles.paddingV2vw, { borderBottomWidth: vw(0.25), borderBottomColor: colorStyle.main4, }]}
                                    >
                                        <View style={[styles.flexRow, styles.alignItemsCenter, { gap: vw(2.5) }]}>
                                            {item2.icon}
                                            <Text style={[componentStyle.inter18Bold, styles.padding1vw]}>{item2.name}</Text>
                                        </View>
                                        <Switch
                                            trackColor={{ false: colorStyle.grey, true: colorStyle.main4 }}
                                            thumbColor={{ false: colorStyle.grey, true: colorStyle.blue1 }}
                                            ios_backgroundColor={colorStyle.blue3}
                                            onValueChange={() => {
                                                const updatedAppList = appList.map((item, innerIndex) => {
                                                    if (item.name === item2.name) {
                                                        return { ...item, permissionRequired: item.permissionRequired.map(item1 => item1.perName == element.name ? { ...item1, isActived: !item1.isActived } : item1) };
                                                    } else {
                                                        return item;
                                                    }
                                                });
                                                setAppList(updatedAppList);
                                            }}
                                            value={item2.permissionRequired.filter(item3 => item3.perName == element.name)[0].isActived}
                                        />
                                    </View>
                                );
                            });
                        }
                    })}

                    {marginBottomForScrollView()}
                    {marginBottomForScrollView()}
                </ScrollView>
            </View>
            <Image source={require('../assets/images/hiddenBG.jpg')} style={{ position: 'absolute', width: '100%', height: '100%', opacity: 0.2, zIndex: -10 }} />
        </SafeAreaView >
    )
}