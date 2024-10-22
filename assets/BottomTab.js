import React, { useEffect } from 'react';
import { View, Text, Button, TouchableOpacity, SafeAreaView, StatusBar, ScrollView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { colorStyle, useCustomFonts } from "../assets/componentStyleSheet";
import Svg, { SvgUri, SvgXml } from 'react-native-svg';
import { vw, vh, vmax, vmin } from 'react-native-expo-viewport-units';

import Home from '../screens/Home';
import PreLoad from '../screens/PreLoad';
import WifiManager from '../screens/WifiManager';
import SystemClean from '../screens/SystemClean';
import NotiCenter from '../screens/NotiCenter';

function Tab({ navigation }) {
    const Tab = createBottomTabNavigator();

    const tabBarIcon = (iconXml, focused) => {
        // const fill = focused ? colorStyle.tan1 : 'none';
        return (
            <SvgXml
                xml={iconXml}
            // fill={fill} // Set the fill color based on whether the tab is focused or not
            />
        );
    };

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarActiveTintColor: "red",
                tabBarInactiveTintColor: "black",
                tabBarStyle: [
                    {
                        display: "flex",
                        paddingTop: vw(4),
                        backgroundColor: colorStyle.white,
                    },
                    null
                ]

            }}
        >
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarIcon: ({ focused, color, size }) =>
                        tabBarIcon(
                            !focused ?
                                `<svg width="42" height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_9_597)">
                                <path d="M13.7125 25.5C13.9708 24.7681 14.4497 24.1343 15.0832 23.686C15.7168 23.2377 16.4739 22.9969 17.25 22.9969C18.0261 22.9969 18.7832 23.2377 19.4167 23.686C20.0503 24.1343 20.5292 24.7681 20.7875 25.5H33.5V28H20.7875C20.5292 28.7319 20.0503 29.3657 19.4167 29.814C18.7832 30.2623 18.0261 30.5031 17.25 30.5031C16.4739 30.5031 15.7168 30.2623 15.0832 29.814C14.4497 29.3657 13.9708 28.7319 13.7125 28H8.5V25.5H13.7125ZM21.2125 16.75C21.4708 16.0181 21.9497 15.3843 22.5833 14.936C23.2168 14.4877 23.9739 14.2469 24.75 14.2469C25.5261 14.2469 26.2832 14.4877 26.9167 14.936C27.5503 15.3843 28.0292 16.0181 28.2875 16.75H33.5V19.25H28.2875C28.0292 19.9819 27.5503 20.6157 26.9167 21.064C26.2832 21.5123 25.5261 21.7531 24.75 21.7531C23.9739 21.7531 23.2168 21.5123 22.5833 21.064C21.9497 20.6157 21.4708 19.9819 21.2125 19.25H8.5V16.75H21.2125ZM13.7125 8.00001C13.9708 7.2681 14.4497 6.6343 15.0832 6.186C15.7168 5.73769 16.4739 5.49695 17.25 5.49695C18.0261 5.49695 18.7832 5.73769 19.4167 6.186C20.0503 6.6343 20.5292 7.2681 20.7875 8.00001H33.5V10.5H20.7875C20.5292 11.2319 20.0503 11.8657 19.4167 12.314C18.7832 12.7623 18.0261 13.0031 17.25 13.0031C16.4739 13.0031 15.7168 12.7623 15.0832 12.314C14.4497 11.8657 13.9708 11.2319 13.7125 10.5H8.5V8.00001H13.7125ZM17.25 10.5C17.5815 10.5 17.8995 10.3683 18.1339 10.1339C18.3683 9.89947 18.5 9.58153 18.5 9.25001C18.5 8.91849 18.3683 8.60055 18.1339 8.36613C17.8995 8.13171 17.5815 8.00001 17.25 8.00001C16.9185 8.00001 16.6005 8.13171 16.3661 8.36613C16.1317 8.60055 16 8.91849 16 9.25001C16 9.58153 16.1317 9.89947 16.3661 10.1339C16.6005 10.3683 16.9185 10.5 17.25 10.5ZM24.75 19.25C25.0815 19.25 25.3995 19.1183 25.6339 18.8839C25.8683 18.6495 26 18.3315 26 18C26 17.6685 25.8683 17.3505 25.6339 17.1161C25.3995 16.8817 25.0815 16.75 24.75 16.75C24.4185 16.75 24.1005 16.8817 23.8661 17.1161C23.6317 17.3505 23.5 17.6685 23.5 18C23.5 18.3315 23.6317 18.6495 23.8661 18.8839C24.1005 19.1183 24.4185 19.25 24.75 19.25ZM17.25 28C17.5815 28 17.8995 27.8683 18.1339 27.6339C18.3683 27.3995 18.5 27.0815 18.5 26.75C18.5 26.4185 18.3683 26.1005 18.1339 25.8661C17.8995 25.6317 17.5815 25.5 17.25 25.5C16.9185 25.5 16.6005 25.6317 16.3661 25.8661C16.1317 26.1005 16 26.4185 16 26.75C16 27.0815 16.1317 27.3995 16.3661 27.6339C16.6005 27.8683 16.9185 28 17.25 28Z" fill="#31616B"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_9_597">
                                <rect width="30" height="30" fill="white" transform="translate(6 3)"/>
                                </clipPath>
                                </defs>
                                </svg>
                                `
                                :
                                `<svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_9_586)">
                                <mask id="path-1-inside-1_9_586" fill="white">
                                <path d="M4 5C4 2.23858 6.23858 0 9 0H41C43.7614 0 46 2.23858 46 5V38C46 40.7614 43.7614 43 41 43H9C6.23858 43 4 40.7614 4 38V5Z"/>
                                </mask>
                                <path d="M4 5C4 2.23858 6.23858 0 9 0H41C43.7614 0 46 2.23858 46 5V38C46 40.7614 43.7614 43 41 43H9C6.23858 43 4 40.7614 4 38V5Z" fill="#C9F5FF" shape-rendering="crispEdges"/>
                                <path d="M4 0H46H4ZM46 38C46 43.5228 41.5228 48 36 48H14C8.47715 48 4 43.5228 4 38C4 38 6.23858 38 9 38H41C43.7614 38 46 38 46 38ZM4 43V0V43ZM46 0V43V0Z" fill="#31616B" mask="url(#path-1-inside-1_9_586)"/>
                                <g clip-path="url(#clip0_9_586)">
                                <path d="M17.7125 25.5C17.9708 24.7681 18.4497 24.1343 19.0832 23.686C19.7168 23.2377 20.4739 22.9969 21.25 22.9969C22.0261 22.9969 22.7832 23.2377 23.4167 23.686C24.0503 24.1343 24.5292 24.7681 24.7875 25.5H37.5V28H24.7875C24.5292 28.7319 24.0503 29.3657 23.4167 29.814C22.7832 30.2623 22.0261 30.5031 21.25 30.5031C20.4739 30.5031 19.7168 30.2623 19.0832 29.814C18.4497 29.3657 17.9708 28.7319 17.7125 28H12.5V25.5H17.7125ZM25.2125 16.75C25.4708 16.0181 25.9497 15.3843 26.5833 14.936C27.2168 14.4877 27.9739 14.2469 28.75 14.2469C29.5261 14.2469 30.2832 14.4877 30.9167 14.936C31.5503 15.3843 32.0292 16.0181 32.2875 16.75H37.5V19.25H32.2875C32.0292 19.9819 31.5503 20.6157 30.9167 21.064C30.2832 21.5123 29.5261 21.7531 28.75 21.7531C27.9739 21.7531 27.2168 21.5123 26.5833 21.064C25.9497 20.6157 25.4708 19.9819 25.2125 19.25H12.5V16.75H25.2125ZM17.7125 8.00001C17.9708 7.2681 18.4497 6.6343 19.0832 6.186C19.7168 5.73769 20.4739 5.49695 21.25 5.49695C22.0261 5.49695 22.7832 5.73769 23.4167 6.186C24.0503 6.6343 24.5292 7.2681 24.7875 8.00001H37.5V10.5H24.7875C24.5292 11.2319 24.0503 11.8657 23.4167 12.314C22.7832 12.7623 22.0261 13.0031 21.25 13.0031C20.4739 13.0031 19.7168 12.7623 19.0832 12.314C18.4497 11.8657 17.9708 11.2319 17.7125 10.5H12.5V8.00001H17.7125Z" fill="#31616B"/>
                                </g>
                                </g>
                                <defs>
                                <filter id="filter0_d_9_586" x="0" y="0" width="50" height="51" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="4"/>
                                <feGaussianBlur stdDeviation="2"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_9_586"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_9_586" result="shape"/>
                                </filter>
                                <clipPath id="clip0_9_586">
                                <rect width="30" height="30" fill="white" transform="translate(10 3)"/>
                                </clipPath>
                                </defs>
                                </svg>
                                `
                            ,),
                }} />
            <Tab.Screen name="WifiManager" component={WifiManager}
                options={{
                    tabBarIcon: ({ focused, color, size }) =>
                        tabBarIcon(
                            !focused ?
                                `<svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_9_610)">
                                <path d="M7.52917 11.7463C11.528 8.50667 16.5202 6.74241 21.6667 6.75002C27.0229 6.75002 31.9417 8.62127 35.8042 11.7463L34.2342 13.6913C30.6794 10.8114 26.2416 9.24307 21.6667 9.25002C16.9054 9.25002 12.5342 10.9125 9.09917 13.6913L7.52917 11.7463ZM11.4554 16.6088C14.3437 14.2688 17.9495 12.9944 21.6667 13C25.5342 13 29.0867 14.3513 31.8779 16.6075L30.3067 18.5525C27.8627 16.5729 24.8118 15.495 21.6667 15.5C18.3942 15.5 15.3879 16.6438 13.0267 18.5525L11.4554 16.6075V16.6088ZM15.3829 21.4713C17.1602 20.0311 19.3791 19.2468 21.6667 19.25C24.0467 19.25 26.2329 20.0813 27.9504 21.47L26.3792 23.415C25.0462 22.3353 23.3821 21.7474 21.6667 21.75C19.8817 21.75 18.2417 22.3738 16.9542 23.415L15.3829 21.47V21.4713ZM19.3104 26.3338C19.9767 25.7934 20.8088 25.499 21.6667 25.5C22.5592 25.5 23.3792 25.8125 24.0229 26.3325L21.6667 29.25L19.3104 26.3325V26.3338Z" fill="#31616B"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_9_610">
                                <rect width="30" height="30" fill="white" transform="translate(6.66667 3)"/>
                                </clipPath>
                                </defs>
                                </svg>
                                `
                                :
                                `<svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_9_599)">
                                <mask id="path-1-inside-1_9_599" fill="white">
                                <path d="M4.66667 5C4.66667 2.23858 6.90525 0 9.66667 0H41.6667C44.4281 0 46.6667 2.23858 46.6667 5V38C46.6667 40.7614 44.4281 43 41.6667 43H9.66667C6.90525 43 4.66667 40.7614 4.66667 38V5Z"/>
                                </mask>
                                <path d="M4.66667 5C4.66667 2.23858 6.90525 0 9.66667 0H41.6667C44.4281 0 46.6667 2.23858 46.6667 5V38C46.6667 40.7614 44.4281 43 41.6667 43H9.66667C6.90525 43 4.66667 40.7614 4.66667 38V5Z" fill="#C9F5FF" shape-rendering="crispEdges"/>
                                <path d="M4.66667 0H46.6667H4.66667ZM46.6667 38C46.6667 43.5228 42.1895 48 36.6667 48H14.6667C9.14382 48 4.66667 43.5228 4.66667 38C4.66667 38 6.90525 38 9.66667 38H41.6667C44.4281 38 46.6667 38 46.6667 38ZM4.66667 43V0V43ZM46.6667 0V43V0Z" fill="#31616B" mask="url(#path-1-inside-1_9_599)"/>
                                <g clip-path="url(#clip0_9_599)">
                                <path d="M11.5292 11.7463C15.528 8.50667 20.5202 6.74241 25.6667 6.75002C31.0229 6.75002 35.9417 8.62127 39.8042 11.7463L37.4479 14.6625C34.1154 11.9632 29.9553 10.4933 25.6667 10.5C21.2042 10.5 17.1042 12.06 13.8854 14.6625L11.5292 11.7463ZM15.4554 16.6088C18.3437 14.2688 21.9495 12.9944 25.6667 13C29.5342 13 33.0867 14.3513 35.8779 16.6075L33.5217 19.525C31.2998 17.7253 28.526 16.7454 25.6667 16.75C22.6917 16.75 19.9592 17.79 17.8117 19.525L15.4554 16.6075V16.6088ZM19.3829 21.4713C21.1602 20.0311 23.3791 19.2468 25.6667 19.25C28.0467 19.25 30.2329 20.0813 31.9504 21.47L29.5942 24.3875C28.4832 23.4877 27.0963 22.9978 25.6667 23C24.237 22.9978 22.8502 23.4877 21.7392 24.3875L19.3829 21.47V21.4713ZM23.3104 26.3338C23.9767 25.7934 24.8088 25.499 25.6667 25.5C26.5592 25.5 27.3792 25.8125 28.0229 26.3325L25.6667 29.25L23.3104 26.3325V26.3338Z" fill="#31616B"/>
                                </g>
                                </g>
                                <defs>
                                <filter id="filter0_d_9_599" x="0.666672" y="0" width="50" height="51" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="4"/>
                                <feGaussianBlur stdDeviation="2"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_9_599"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_9_599" result="shape"/>
                                </filter>
                                <clipPath id="clip0_9_599">
                                <rect width="30" height="30" fill="white" transform="translate(10.6667 3)"/>
                                </clipPath>
                                </defs>
                                </svg>
                                `
                            ,),
                }} />
            <Tab.Screen name="SystemClean" component={SystemClean}
                options={{
                    tabBarIcon: ({ focused, color, size }) =>
                        tabBarIcon(
                            !focused ?
                                `<svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_9_601)">
                                <path d="M32.5833 6.75V9.25C32.5833 21.2837 25.8671 26.75 17.5833 26.75H12.8871C12.6833 27.89 12.5833 29.1337 12.5833 30.5H10.0833C10.0833 28.7962 10.2283 27.25 10.5158 25.835C10.2283 24.2175 10.0833 22.0225 10.0833 19.25C10.0833 12.3463 15.6796 6.75 22.5833 6.75C25.0833 6.75 27.5833 8 32.5833 6.75ZM22.5833 9.25C17.0608 9.25 12.5833 13.7275 12.5833 19.25C12.5833 19.7025 12.5871 20.1387 12.5958 20.5575C14.1633 18.085 16.4596 16.1313 19.4633 14.415L20.7033 16.585C17.1346 18.625 14.7671 20.9425 13.5533 24.25H17.5833C25.1021 24.25 29.9221 19.2837 30.0796 9.735C28.3646 9.90125 26.7708 9.795 24.8046 9.5C23.3671 9.28375 23.0846 9.25 22.5833 9.25Z" fill="#31616B"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_9_601">
                                <rect width="30" height="30" fill="white" transform="translate(6.33334 3)"/>
                                </clipPath>
                                </defs>
                                </svg>

                                `
                                :
                                `<svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_9_612)">
                                <mask id="path-1-inside-1_9_612" fill="white">
                                <path d="M4.33334 5C4.33334 2.23858 6.57192 0 9.33334 0H41.3333C44.0948 0 46.3333 2.23858 46.3333 5V38C46.3333 40.7614 44.0948 43 41.3333 43H9.33334C6.57192 43 4.33334 40.7614 4.33334 38V5Z"/>
                                </mask>
                                <path d="M4.33334 5C4.33334 2.23858 6.57192 0 9.33334 0H41.3333C44.0948 0 46.3333 2.23858 46.3333 5V38C46.3333 40.7614 44.0948 43 41.3333 43H9.33334C6.57192 43 4.33334 40.7614 4.33334 38V5Z" fill="#C9F5FF" shape-rendering="crispEdges"/>
                                <path d="M4.33334 0H46.3333H4.33334ZM46.3333 38C46.3333 43.5228 41.8562 48 36.3333 48H14.3333C8.8105 48 4.33334 43.5228 4.33334 38C4.33334 38 6.57192 38 9.33334 38H41.3333C44.0948 38 46.3333 38 46.3333 38ZM4.33334 43V0V43ZM46.3333 0V43V0Z" fill="#31616B" mask="url(#path-1-inside-1_9_612)"/>
                                <g clip-path="url(#clip0_9_612)">
                                <path d="M36.5833 6.75V9.25C36.5833 21.2837 29.8671 26.75 21.5833 26.75H19.2058C19.4708 22.985 20.6433 20.7062 23.7033 17.9987C25.2083 16.6675 25.0808 15.8988 24.3396 16.34C19.2346 19.3775 16.6996 23.4825 16.5871 30.0375L16.5833 30.5H14.0833C14.0833 28.7962 14.2283 27.25 14.5158 25.835C14.2283 24.2175 14.0833 22.0225 14.0833 19.25C14.0833 12.3463 19.6796 6.75 26.5833 6.75C29.0833 6.75 31.5833 8 36.5833 6.75Z" fill="#31616B"/>
                                </g>
                                </g>
                                <defs>
                                <filter id="filter0_d_9_612" x="0.333344" y="0" width="50" height="51" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="4"/>
                                <feGaussianBlur stdDeviation="2"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_9_612"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_9_612" result="shape"/>
                                </filter>
                                <clipPath id="clip0_9_612">
                                <rect width="30" height="30" fill="white" transform="translate(10.3333 3)"/>
                                </clipPath>
                                </defs>
                                </svg>

                                `
                            ,),
                }} />
            
            <Tab.Screen name="NotiCenter" component={NotiCenter}
                options={{
                    tabBarIcon: ({ focused, color, size }) =>
                        tabBarIcon(
                            !focused ?
                                `<svg width="42" height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_9_594)">
                                <path d="M33.5 28H8.5V25.5H9.75V16.7887C9.75 10.5538 14.7875 5.5 21 5.5C27.2125 5.5 32.25 10.5538 32.25 16.7887V25.5H33.5V28ZM12.25 25.5H29.75V16.7887C29.75 11.935 25.8325 8 21 8C16.1675 8 12.25 11.935 12.25 16.7887V25.5ZM17.875 29.25H24.125C24.125 30.0788 23.7958 30.8737 23.2097 31.4597C22.6237 32.0458 21.8288 32.375 21 32.375C20.1712 32.375 19.3763 32.0458 18.7903 31.4597C18.2042 30.8737 17.875 30.0788 17.875 29.25Z" fill="#31616B"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_9_594">
                                <rect width="30" height="30" fill="white" transform="translate(6 3)"/>
                                </clipPath>
                                </defs>
                                </svg>

                                `
                                :
                                `<svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_9_627)">
                                <mask id="path-1-inside-1_9_627" fill="white">
                                <path d="M4 5C4 2.23858 6.23858 0 9 0H41C43.7614 0 46 2.23858 46 5V38C46 40.7614 43.7614 43 41 43H9C6.23858 43 4 40.7614 4 38V5Z"/>
                                </mask>
                                <path d="M4 5C4 2.23858 6.23858 0 9 0H41C43.7614 0 46 2.23858 46 5V38C46 40.7614 43.7614 43 41 43H9C6.23858 43 4 40.7614 4 38V5Z" fill="#C9F5FF" shape-rendering="crispEdges"/>
                                <path d="M4 0H46H4ZM46 38C46 43.5228 41.5228 48 36 48H14C8.47715 48 4 43.5228 4 38C4 38 6.23858 38 9 38H41C43.7614 38 46 38 46 38ZM4 43V0V43ZM46 0V43V0Z" fill="#31616B" mask="url(#path-1-inside-1_9_627)"/>
                                <g clip-path="url(#clip0_9_627)">
                                <path d="M37.5 28H12.5V25.5H13.75V16.7887C13.75 10.5538 18.7875 5.5 25 5.5C31.2125 5.5 36.25 10.5538 36.25 16.7887V25.5H37.5V28ZM21.875 29.25H28.125C28.125 30.0788 27.7958 30.8737 27.2097 31.4597C26.6237 32.0458 25.8288 32.375 25 32.375C24.1712 32.375 23.3763 32.0458 22.7903 31.4597C22.2042 30.8737 21.875 30.0788 21.875 29.25Z" fill="#31616B"/>
                                </g>
                                </g>
                                <defs>
                                <filter id="filter0_d_9_627" x="0" y="0" width="50" height="51" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="4"/>
                                <feGaussianBlur stdDeviation="2"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_9_627"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_9_627" result="shape"/>
                                </filter>
                                <clipPath id="clip0_9_627">
                                <rect width="30" height="30" fill="white" transform="translate(10 3)"/>
                                </clipPath>
                                </defs>
                                </svg>

                                `
                            ,),
                }} />

        </Tab.Navigator>
    );
}

export default Tab;
