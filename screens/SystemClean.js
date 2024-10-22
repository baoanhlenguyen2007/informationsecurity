import React, { useEffect, useState, useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Image, SafeAreaView, ScrollView, StatusBar, Text, View, TouchableOpacity, Switch, Animated, Easing } from "react-native";
import styles from "../assets/stylesheet";
import { headerWithIcon, navTopBar } from "../assets/component";
import { fileIcon, folderIcon, settingIcon, wifiIcon } from "../assets/svgXml";
import { vw, vh } from "react-native-expo-viewport-units";
import { SvgXml } from "react-native-svg";
import componentStyle, { colorStyle, useCustomFonts } from "../assets/componentStyleSheet";
import DATA from "../assets/DATA";

export default function SystemClean(route) {

    const { notiList, setNotiList } = DATA();
    const [cleanTypeSellectd, setcleanTypeSellectd] = useState(0);
    const [isCleanning, setisCleanning] = useState(false);
    const [isCleanningTriggered, setisCleanningTriggered] = useState(false);
    const [showFileList, setshowFileList] = useState(false);
    const [startClean, setstartClean] = useState(false);
    const [cleaned, setcleaned] = useState(false);

    const rotateValue = useRef(new Animated.Value(0)).current;
    const rotate = rotateValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '180deg']
    });
    const animateRotation = (toValue) => {
        Animated.timing(rotateValue, {
            toValue,
            duration: !startClean ? 2000 : 500,
            useNativeDriver: true,
        }).start();
    };
    useEffect(() => {
        animateRotation(isCleanning ? 1 : 0);
        if (isCleanning) {
            setTimeout(() => {
                setshowFileList(true);
            }, 2000);
        }
    }, [isCleanning]);

    useEffect(() => {
        if (startClean) {
            Promise.all(
                fileList.map((item, index) => {
                    return new Promise(resolve => {
                        setTimeout(() => {
                            setfileList(prevFileList => {
                                let newFileList = [...prevFileList];
                                newFileList[index].status = true;
                                return newFileList;
                            });
                            resolve();
                        }, index * 500);
                    });
                })
            ).then(() =>
                Promise.all(
                    fileList.map((item, index) => {
                        return new Promise(resolve => {
                            setTimeout(() => {
                                setfileList(prevFileList => {
                                    let newFileList = [...prevFileList];
                                    newFileList[index].isShow = false;
                                    return newFileList;
                                });
                                resolve();
                            }, index * 500);
                        });
                    })
                )
            ).then(() => setcleaned(true));
        }
    }, [startClean]);

    useEffect(() => {
        if (cleaned) {
            const filteredItems = notiList.filter(item => item.fncMessage == 'Làm sạch');
            if (filteredItems.length > 0) {
                setNotiList(prevNotiList => {
                    let newNotiList = [...prevNotiList];
                    const itemIndex = newNotiList.findIndex(item => item.id === filteredItems[0].id);
                    if (itemIndex !== -1) {
                        newNotiList[itemIndex].status = 'hidden';
                    }
                    return newNotiList;
                });
                console.log(filteredItems[0].id);
                console.log(notiList);
            }
            setTimeout(() => {
                setisCleanning(false);
                setshowFileList(false);
                setstartClean(false);
                setcleaned(false);
                setisCleanningTriggered(false);
                fileList.map((item, index) => {
                    let newFileList = [...fileList];
                    newFileList[index].status = false;
                    setfileList(newFileList);
                })
            }, 2000);

        }
    }, [cleaned]);


    const [degree, setDegree] = useState(new Animated.Value(0));

    useEffect(() => {
        const rotationInterval = setInterval(() => {
            Animated.timing(degree, {
                toValue: degree._value + 20,
                duration: 100,
                easing: Easing.easeOutCubic,
                useNativeDriver: false, // Make sure to set useNativeDriver to false for rotate animation
            }).start();
        }, 100);

        return () => clearInterval(rotationInterval);
    }, [isCleanning]);

    const [fileList, setfileList] = useState([
        {
            name: 'Cache',
            type: 'folder',
            icon: folderIcon(vw(6), vw(6)),
            status: false,
            isShow: true,
        },
        {
            name: 'Log',
            type: 'folder',
            icon: folderIcon(vw(6), vw(6)),
            status: false,
            isShow: true,
        },
        {
            name: 'Temp',
            type: 'folder',
            icon: folderIcon(vw(6), vw(6)),
            status: false,
            isShow: true,
        },
        {
            name: 'Trash',
            type: 'folder',
            icon: folderIcon(vw(6), vw(6)),
            status: false,
            isShow: true,
        },
        {
            name: 'feedback_log',
            type: 'file',
            icon: fileIcon(vw(6), vw(6)),
            status: false,
            isShow: true,
        },
        {
            name: 'warthunder_log',
            type: 'file',
            icon: fileIcon(vw(6), vw(6)),
            status: false,
            isShow: true,
        },
        {
            name: 'launcher_log',
            type: 'file',
            icon: fileIcon(vw(6), vw(6)),
            status: false,
            isShow: true,
        }
    ]);

    return (
        <SafeAreaView style={[styles.flex1, { backgroundColor: colorStyle.main3 }]}>
            <StatusBar style="light" />
            {headerWithIcon("Quản lý Wifi", wifiIcon('100%', '100%', colorStyle.main4), colorStyle.main4)}
            <View style={[styles.flexCol, { gap: vw(5), paddingVertical: vw(4) }]}>
                <View style={[styles.flexRowEvenlyCenter, { gap: vw(4), paddingHorizontal: vw(7.5), }]}>
                    <TouchableOpacity
                        onPress={() => setcleanTypeSellectd(0)}
                        style={[styles.flexRowCenter, styles.flex1, { backgroundColor: cleanTypeSellectd == 0 ? colorStyle.main4 : colorStyle.white, gap: vw(1.5), paddingVertical: vw(2.5), borderRadius: vw(3) }]}>
                        <Text style={[componentStyle.noto16Bold, { color: cleanTypeSellectd == 0 ? colorStyle.white : colorStyle.grey }]}>Quét thư mục</Text>
                        <SvgXml xml={`<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_50_4826)"><path d="M4 5.5V19.5H20V7.5H11.586L9.586 5.5H4ZM12.414 5.5H21C21.2652 5.5 21.5196 5.60536 21.7071 5.79289C21.8946 5.98043 22 6.23478 22 6.5V20.5C22 20.7652 21.8946 21.0196 21.7071 21.2071C21.5196 21.3946 21.2652 21.5 21 21.5H3C2.73478 21.5 2.48043 21.3946 2.29289 21.2071C2.10536 21.0196 2 20.7652 2 20.5V4.5C2 4.23478 2.10536 3.98043 2.29289 3.79289C2.48043 3.60536 2.73478 3.5 3 3.5H10.414L12.414 5.5Z" fill=${cleanTypeSellectd == 0 ? colorStyle.white : colorStyle.grey}/></g><defs><clipPath id="clip0_50_4826"><rect width="24" height="24" fill="white" transform="translate(0 0.5)"/></clipPath></defs></svg>`} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setcleanTypeSellectd(1)}
                        style={[styles.flexRowCenter, styles.flex1, { backgroundColor: cleanTypeSellectd == 1 ? colorStyle.main4 : colorStyle.white, gap: vw(1.5), paddingVertical: vw(2.5), borderRadius: vw(3) }]}>
                        <Text style={[componentStyle.noto16Bold, { color: cleanTypeSellectd == 1 ? colorStyle.white : colorStyle.grey }]}>Quét ứng dụng</Text>
                        <SvgXml xml={`<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_50_4838)"><path d="M3 19.5H21V21.5H3V19.5ZM13 9.5H20L12 17.5L4 9.5H11V1.5H13V9.5Z" fill=${cleanTypeSellectd == 1 ? colorStyle.white : colorStyle.grey}/></g><defs><clipPath id="clip0_50_4838"><rect width="24" height="24" fill="white" transform="translate(0 0.5)"/></clipPath></defs></svg>`} />
                    </TouchableOpacity>
                </View>
                <View style={[{ backgroundColor: colorStyle.white, paddingHorizontal: vw(7.5), paddingVertical: vw(5) }]}>
                    <View style={[styles.positionRelative,]}>
                        <SvgXml xml={`<svg width="100%" height="100%" viewBox="0 0 352 179" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M309.199 178.85C305.452 178.85 302.408 175.823 302.408 172.096C302.408 145.13 293.94 119.463 277.897 97.7822L288.335 89.1299C306.437 113.298 316 141.953 316 172.096C316 175.823 312.946 178.85 309.209 178.85H309.199Z" fill="#008AA8"/><path d="M220.497 54.4506C206.222 49.0854 191.264 46.3678 175.995 46.3678C160.726 46.3678 145.758 49.0854 131.493 54.4506L126.912 41.722C142.664 35.8372 159.169 32.8499 175.995 32.8499C192.821 32.8499 209.336 35.8372 225.078 41.722L220.497 54.4506Z" fill="#008AA8"/><path d="M42.7908 178.85C39.0438 178.85 36 175.823 36 172.096C36 141.953 45.5634 113.298 63.6655 89.1299L74.1028 97.7822C58.0601 119.473 49.5916 145.14 49.5916 172.096C49.5916 175.823 46.5478 178.85 42.8009 178.85H42.7908Z" fill="#3DD4F5"/><path d="M65.4134 86.8418C80.7731 67.1693 101.065 51.9728 124.23 42.771L128.811 55.5097C107.896 63.9122 89.6433 77.6899 75.8507 95.4941L65.4234 86.8518L65.4134 86.8418Z" fill="#008AA8"/><path d="M276.149 95.484C262.357 77.6799 244.094 63.9022 223.189 55.4996L227.77 42.761C250.935 51.9628 271.217 67.1693 286.587 86.8317L276.159 95.474L276.149 95.484Z" fill="#008AA8"/><path d="M175.17 60.48C131.489 60.48 93.8306 86.0377 76.3 122.963H94.2132C113.445 106.183 138.608 95.9997 166.168 95.9997C211.419 95.9997 250.246 123.405 266.89 162.48H284.3C280.635 105.54 233.189 60.48 175.17 60.48Z" fill="#C9F5FF"/><path d="M3 175C3 80.0078 80.4555 3 176 3C271.545 3 349 80.0078 349 175" stroke="#008AA8" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/></svg>`}
                            height={vh(20)} style={[]} />
                        <Animated.View style={[styles.positionAbsolute, styles.bottom0, styles.alignSelfCenter, { transform: [{ rotate }] }]}>

                            <SvgXml xml={`<svg width="208" height="22" viewBox="0 0 208 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.6807 21L-4.80825e-07 11L17.6807 0.999999L22.2094 6.63533L93.8476 6.63533C95.541 2.73147 99.4371 -4.34654e-06 103.973 -4.54479e-06C110.063 -4.81101e-06 115 4.92486 115 11C115 17.0751 110.063 22 103.973 22C99.5627 22 95.7576 19.4177 93.9935 15.6863L21.951 15.6863L17.6807 21Z" fill="#008AA8"/></svg>`}
                                style={[styles.alignItemsCenter]} />
                        </Animated.View>
                    </View>
                    <TouchableOpacity
                        style={[styles.paddingV2vw, styles.paddingH4vw, styles.alignSelfCenter, { backgroundColor: colorStyle.main4, borderRadius: vw(2), marginVertical: vw(5) }]}
                        onPress={() => { setisCleanning(true); }}>
                        <Text style={[componentStyle.noto18Bold, { color: colorStyle.white }]}>{isCleanningTriggered ? 'Đang quét' : 'Bắt đầu quét'}</Text>
                    </TouchableOpacity>

                    {showFileList ?
                        fileList.filter((item) => item.isShow == true).length > 0 ?
                            !cleaned ?
                                <View style={[styles.flexRowBetweenCenter, styles.paddingV2vw, styles.paddingH4vw, { backgroundColor: colorStyle.main4, borderRadius: vw(2.5) }]}>
                                    <Text style={[componentStyle.noto16Bold, styles.flex1, { color: colorStyle.white }]}>3 folder bộ nhớ tạm cần được làm sạch</Text>
                                    {!startClean ?
                                        <TouchableOpacity
                                            onPress={() => { setstartClean(true); }}
                                            style={[styles.paddingV2vw, styles.alignItemsCenter, styles.wfit, { paddingHorizontal: vw(3.5), backgroundColor: colorStyle.white, borderRadius: vw(1.5) }]}>
                                            <Text style={[componentStyle.noto16Bold, { color: colorStyle.main4 }]}>Làm sạch</Text>
                                        </TouchableOpacity>
                                        :
                                        <Animated.View style={{ width: vw(11), height: vw(11), transform: [{ rotate: degree.interpolate({ inputRange: [0, 360], outputRange: ["0deg", "360deg"] }) }] }}>
                                            <SvgXml
                                                xml={`<svg width="100%" height="100%" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 110C1.7735e-06 89.7135 5.60994 69.8222 16.2096 52.5251C26.8092 35.2281 41.9857 21.1991 60.0611 11.9893C78.1364 2.77942 98.4066 -1.25257 118.631 0.339094C138.854 1.93075 158.244 9.08406 174.656 21.0081C191.068 32.9322 203.863 49.1626 211.627 67.9048C219.39 86.6471 221.819 107.171 218.646 127.208C215.472 147.245 206.82 166.013 193.645 181.439C180.47 196.865 163.285 208.347 143.992 214.616L132.095 178.001C144.636 173.926 155.805 166.462 164.369 156.436C172.933 146.409 178.557 134.209 180.62 121.185C182.682 108.161 181.104 94.8206 176.057 82.6381C171.011 70.4557 162.695 59.9059 152.027 52.1553C141.359 44.4046 128.755 39.755 115.61 38.7204C102.464 37.6858 89.2887 40.3066 77.5397 46.293C65.7907 52.2794 55.926 61.3983 49.0362 72.6413C42.1465 83.8844 38.5 96.8138 38.5 110L0 110Z" fill="#FCFCFC"/>
                                        </svg>
                                        `}
                                            />
                                        </Animated.View>
                                    }
                                </View> :
                                <View style={[styles.flexRowBetweenCenter, styles.paddingV2vw, styles.paddingH4vw, { backgroundColor: colorStyle.main4, borderRadius: vw(2.5) }]}>
                                    <Text style={[componentStyle.noto16Bold, styles.flex1, { color: colorStyle.white }]}>Đã dọn xong</Text>
                                    <SvgXml xml={`<svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_29_2412)"><path d="M18.3334 28.6651L35.1853 11.8113L37.7795 14.4036L18.3334 33.8498L6.66602 22.1824L9.25835 19.5901L18.3334 28.6651Z" fill="#FCFCFC"/></g><defs><clipPath id="clip0_29_2412"><rect width="44" height="44" fill="white" transform="translate(0 0.849854)"/></clipPath></defs></svg>`} />
                                </View> :
                            !cleaned ?
                                <View style={[styles.flexColCenter, styles.paddingV2vw, styles.paddingH4vw, styles.gap4vw, { backgroundColor: colorStyle.main4, borderRadius: vw(2.5) }]}>
                                    <Text style={[componentStyle.noto16Bold, { color: colorStyle.white }]}>Hệ thống của bạn đã được tối ưu</Text>
                                    <TouchableOpacity
                                        onPress={() => { setcleaned(true); }}
                                        style={[styles.paddingV2vw, styles.alignItemsCenter, styles.wfit, styles.alignSelfCenter, { paddingHorizontal: vw(3.5), backgroundColor: colorStyle.white, borderRadius: vw(1.5) }]}>
                                        <Text style={[componentStyle.noto16Bold, { color: colorStyle.main4 }]}>Đồng ý</Text>
                                    </TouchableOpacity>
                                </View>
                                :
                                <View style={[styles.flexRowBetweenCenter, styles.paddingV2vw, styles.paddingH4vw, { backgroundColor: colorStyle.main4, borderRadius: vw(2.5) }]}>
                                    <Text style={[componentStyle.noto16Bold, styles.flex1, { color: colorStyle.white }]}>Đã dọn xong</Text>
                                    <SvgXml xml={`<svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_29_2412)"><path d="M18.3334 28.6651L35.1853 11.8113L37.7795 14.4036L18.3334 33.8498L6.66602 22.1824L9.25835 19.5901L18.3334 28.6651Z" fill="#FCFCFC"/></g><defs><clipPath id="clip0_29_2412"><rect width="44" height="44" fill="white" transform="translate(0 0.849854)"/></clipPath></defs></svg>`} />
                                </View>
                        : null}
                    <ScrollView>
                        {showFileList ? fileList.filter((item) => item.isShow == true).map((item, index) => {
                            return (
                                <View key={index} style={[styles.flexRowBetweenCenter,]}>
                                    <View style={[styles.flexRowBetweenCenter, styles.gap2vw, styles.paddingV2vw, styles.paddingH4vw]}>
                                        {item.icon}
                                        <Text>{item.name}</Text>
                                    </View>
                                    {item.status ?
                                        <SvgXml xml={`<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_29_2495)"><path d="M9.99999 16.0219L19.192 6.82886L20.607 8.24286L9.99999 18.8499L3.63599 12.4859L5.04999 11.0719L9.99999 16.0219Z" fill="#31616B"/></g><defs><clipPath id="clip0_29_2495"><rect width="24" height="24" fill="white" transform="translate(0 0.849854)"/></clipPath></defs></svg>`} />
                                        : null
                                    }
                                </View>
                            )
                        })
                            : null
                        }
                    </ScrollView>
                </View>

            </View>
        </SafeAreaView >
    )
}