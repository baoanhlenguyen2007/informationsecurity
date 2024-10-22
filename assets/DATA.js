import React, { useEffect, useState } from "react";
import { AppStoreIcon, ChromeIcon, FaceTimeIcon, FacebookIcon, GoogleCalenderIcon, GoogleDriveIcon, GoogleIcon, GoogleMapsIcon, InstagramIcon, MasterCardIcon, MessagesIcon, MessengerIcon, NetflixIcon, NotitonIcon, PaypalIcon, SafariIcon, SpotifyIcon, TikTokIcon, TinderIcon, WhatsappIcon, YouTubeIcon, ZoomIcon, calendarPermission, cameraPermission, contactPermission, folderPermission, locationPermission, mediaPermission, messagePermission, microphonePermission, notiPermission, settingIcon, walletPermission, systemIcon } from "../assets/svgXml";
import { vw, vh } from "react-native-expo-viewport-units";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import componentStyle, { colorStyle, useCustomFonts } from "../assets/componentStyleSheet";
export default function DATA() {
    const navigation = useNavigation();
    const [appList, setAppList] = useState([
        {
            name: 'Instagram',
            icon: InstagramIcon(vw(6), vw(6)),
            permissionRequired: [
                {
                    perName: 'Camera',
                    isActived: false,
                    isRequired: true,
                },
                {
                    perName: 'Wallet',
                    isActived: false,
                    isRequired: false,
                },
                {
                    perName: 'Notification',
                    isActived: true,
                    isRequired: true,
                },
                {
                    perName: 'Microphone',
                    isActived: false,
                    isRequired: true,
                },
                {
                    perName: 'Location',
                    isActived: false,
                    isRequired: true,
                },
                {
                    perName: 'Media',
                    isActived: true,
                    isRequired: true,
                },
                {
                    perName: 'Contact',
                    isActived: false,
                    isRequired: true,
                },
                {
                    perName: 'Folder',
                    isActived: false,
                    isRequired: true,
                },
                {
                    perName: 'Calendar',
                    isActived: false,
                    isRequired: false,
                },
                {
                    perName: 'Message',
                    isActived: false,
                    isRequired: false,
                }
            ],
        },
        {
            name: 'Facebook',
            icon: FacebookIcon(vw(6), vw(6)),
            permissionRequired: [
                {
                    perName: 'Camera',
                    isActived: true,
                    isRequired: true,
                },
                {
                    perName: 'Wallet',
                    isActived: false,
                    isRequired: true,
                },
                {
                    perName: 'Notification',
                    isActived: true,
                    isRequired: true,
                },
                {
                    perName: 'Microphone',
                    isActived: false,
                    isRequired: true,
                },
                {
                    perName: 'Location',
                    isActived: false,
                    isRequired: true,
                },
                {
                    perName: 'Media',
                    isActived: true,
                    isRequired: true,
                },
                {
                    perName: 'Contact',
                    isActived: true,
                    isRequired: true,
                },
                {
                    perName: 'Folder',
                    isActived: false,
                    isRequired: true,
                },
                {
                    perName: 'Calendar',
                    isActived: false,
                    isRequired: true,
                },
                {
                    perName: 'Message',
                    isActived: false,
                    isRequired: false,
                }
            ],
        },
        {
            name: 'Zoom',
            icon: ZoomIcon(vw(6), vw(6)),
            permissionRequired: [
                {
                    perName: 'Camera',
                    isActived: true,
                    isRequired: true,
                },
                {
                    perName: 'Wallet',
                    isActived: false,
                    isRequired: false,
                },
                {
                    perName: 'Notification',
                    isActived: true,
                    isRequired: true,
                },
                {
                    perName: 'Microphone',
                    isActived: true,
                    isRequired: true,
                },
                {
                    perName: 'Location',
                    isActived: false,
                    isRequired: false,
                },
                {
                    perName: 'Media',
                    isActived: false,
                    isRequired: false,
                },
                {
                    perName: 'Contact',
                    isActived: true,
                    isRequired: true,
                },
                {
                    perName: 'Folder',
                    isActived: false,
                    isRequired: false,
                },
                {
                    perName: 'Calendar',
                    isActived: true,
                    isRequired: true,
                },
                {
                    perName: 'Message',
                    isActived: true,
                    isRequired: true,
                }
            ],
        },
        {
            name: 'FaceTime',
            icon: FaceTimeIcon(vw(6), vw(6)),
            permissionRequired: [
                {
                    perName: 'Camera',
                    isActived: true,
                    isRequired: true,
                },
                {
                    perName: 'Wallet',
                    isActived: false,
                    isRequired: false,
                },
                {
                    perName: 'Notification',
                    isActived: true,
                    isRequired: true,
                },
                {
                    perName: 'Microphone',
                    isActived: true,
                    isRequired: true,
                },
                {
                    perName: 'Location',
                    isActived: true,
                    isRequired: true,
                },
                {
                    perName: 'Media',
                    isActived: false,
                    isRequired: true,
                },
                {
                    perName: 'Contact',
                    isActived: true,
                    isRequired: true,
                },
                {
                    perName: 'Folder',
                    isActived: true,
                    isRequired: true,
                },
                {
                    perName: 'Calendar',
                    isActived: true,
                    isRequired: true,
                },
                {
                    perName: 'Message',
                    isActived: true,
                    isRequired: true,
                }
            ],
        },
        {
            name: 'TikTok',
            icon: TikTokIcon(vw(6), vw(6)),
            permissionRequired: [
                {
                    perName: 'Camera',
                    isActived: true,
                    isRequired: true,
                },
                {
                    perName: 'Wallet',
                    isActived: true,
                    isRequired: true,
                },
                {
                    perName: 'Notification',
                    isActived: true,
                    isRequired: true,
                },
                {
                    perName: 'Microphone',
                    isActived: false,
                    isRequired: true,
                },
                {
                    perName: 'Location',
                    isActived: false,
                    isRequired: true,
                },
                {
                    perName: 'Media',
                    isActived: false,
                    isRequired: true,
                },
                {
                    perName: 'Contact',
                    isActived: false,
                    isRequired: true,
                },
                {
                    perName: 'Folder',
                    isActived: false,
                    isRequired: true,
                },
                {
                    perName: 'Calendar',
                    isActived: false,
                    isRequired: false,
                },
                {
                    perName: 'Message',
                    isActived: false,
                    isRequired: true,
                }
            ],
        },
        {
            name: 'Messenger',
            icon: MessengerIcon(vw(6), vw(6)),
            permissionRequired: [
                {
                    perName: 'Camera',
                    isActived: true,
                    isRequired: true,
                },
                {
                    perName: 'Wallet',
                    isActived: false,
                    isRequired: false,
                },
                {
                    perName: 'Notification',
                    isActived: true,
                    isRequired: true,
                },
                {
                    perName: 'Microphone',
                    isActived: true,
                    isRequired: true,
                },
                {
                    perName: 'Location',
                    isActived: false,
                    isRequired: true,
                },
                {
                    perName: 'Media',
                    isActived: false,
                    isRequired: true,
                },
                {
                    perName: 'Contact',
                    isActived: false,
                    isRequired: true,
                },
                {
                    perName: 'Folder',
                    isActived: false,
                    isRequired: true,
                },
                {
                    perName: 'Calendar',
                    isActived: false,
                    isRequired: false,
                },
                {
                    perName: 'Message',
                    isActived: false,
                    isRequired: true,
                }
            ],
        },
        {
            name: 'Messages',
            icon: MessagesIcon(vw(6), vw(6)),
            permissionRequired: [
                {
                    perName: 'Camera',
                    isActived: false,
                    isRequired: true,
                },
                {
                    perName: 'Wallet',
                    isActived: false,
                    isRequired: false,
                },
                {
                    perName: 'Notification',
                    isActived: true,
                    isRequired: true,
                },
                {
                    perName: 'Microphone',
                    isActived: true,
                    isRequired: true,
                },
                {
                    perName: 'Location',
                    isActived: true,
                    isRequired: true,
                },
                {
                    perName: 'Media',
                    isActived: true,
                    isRequired: true,
                },
                {
                    perName: 'Contact',
                    isActived: true,
                    isRequired: true,
                },
                {
                    perName: 'Folder',
                    isActived: true,
                    isRequired: true,
                },
                {
                    perName: 'Calendar',
                    isActived: true,
                    isRequired: true,
                },
                {
                    perName: 'Message',
                    isActived: true,
                    isRequired: true,
                }
            ],
        },
        {
            name: 'Safari',
            icon: SafariIcon(vw(6), vw(6)),
            permissionRequired: [
                {
                    perName: 'Camera',
                    isActived: false,
                    isRequired: false,
                },
                {
                    perName: 'Wallet',
                    isActived: true,
                    isRequired: true,
                },
                {
                    perName: 'Notification',
                    isActived: false,
                    isRequired: true,
                },
                {
                    perName: 'Microphone',
                    isActived: false,
                    isRequired: false,
                },
                {
                    perName: 'Location',
                    isActived: false,
                    isRequired: true,
                },
                {
                    perName: 'Media',
                    isActived: true,
                    isRequired: true,
                },
                {
                    perName: 'Contact',
                    isActived: false,
                    isRequired: false,
                },
                {
                    perName: 'Folder',
                    isActived: true,
                    isRequired: true,
                },
                {
                    perName: 'Calendar',
                    isActived: false,
                    isRequired: false,
                },
                {
                    perName: 'Message',
                    isActived: false,
                    isRequired: false,
                }
            ],
        },
        {
            name: 'Google Chrome',
            icon: ChromeIcon(vw(6), vw(6)),
            permissionRequired: [
                {
                    perName: 'Camera',
                    isActived: false,
                    isRequired: false,
                },
                {
                    perName: 'Wallet',
                    isActived: true,
                    isRequired: true,
                },
                {
                    perName: 'Notification',
                    isActived: false,
                    isRequired: true,
                },
                {
                    perName: 'Microphone',
                    isActived: false,
                    isRequired: false,
                },
                {
                    perName: 'Location',
                    isActived: false,
                    isRequired: true,
                },
                {
                    perName: 'Media',
                    isActived: true,
                    isRequired: true,
                },
                {
                    perName: 'Contact',
                    isActived: false,
                    isRequired: false,
                },
                {
                    perName: 'Folder',
                    isActived: true,
                    isRequired: true,
                },
                {
                    perName: 'Calendar',
                    isActived: false,
                    isRequired: false,
                },
                {
                    perName: 'Message',
                    isActived: false,
                    isRequired: false,
                }
            ],
        },
        {
            name: 'Youtube',
            icon: YouTubeIcon(vw(6), vw(6)),
            permissionRequired: [
                {
                    perName: 'Camera',
                    isActived: false,
                    isRequired: false,
                },
                {
                    perName: 'Wallet',
                    isActived: false,
                    isRequired: false,
                },
                {
                    perName: 'Notification',
                    isActived: false,
                    isRequired: true,
                },
                {
                    perName: 'Microphone',
                    isActived: false,
                    isRequired: false,
                },
                {
                    perName: 'Location',
                    isActived: false,
                    isRequired: false,
                },
                {
                    perName: 'Media',
                    isActived: false,
                    isRequired: true,
                },
                {
                    perName: 'Contact',
                    isActived: false,
                    isRequired: false,
                },
                {
                    perName: 'Folder',
                    isActived: false,
                    isRequired: false,
                },
                {
                    perName: 'Calendar',
                    isActived: false,
                    isRequired: false,
                },
                {
                    perName: 'Message',
                    isActived: false,
                    isRequired: false,
                }
            ],
        },
        {
            name: 'Netflix',
            icon: NetflixIcon(vw(6), vw(6)),
            permissionRequired: [
                {
                    perName: 'Camera',
                    isActived: false,
                    isRequired: false,
                },
                {
                    perName: 'Wallet',
                    isActived: false,
                    isRequired: false,
                },
                {
                    perName: 'Notification',
                    isActived: false,
                    isRequired: true,
                },
                {
                    perName: 'Microphone',
                    isActived: false,
                    isRequired: true,
                },
                {
                    perName: 'Location',
                    isActived: false,
                    isRequired: true,
                },
                {
                    perName: 'Media',
                    isActived: false,
                    isRequired: false,
                },
                {
                    perName: 'Contact',
                    isActived: false,
                    isRequired: false,
                },
                {
                    perName: 'Folder',
                    isActived: false,
                    isRequired: true,
                },
                {
                    perName: 'Calendar',
                    isActived: false,
                    isRequired: false,
                },
                {
                    perName: 'Message',
                    isActived: false,
                    isRequired: false,
                }
            ],
        },
        {
            name: 'MasterCard',
            icon: MasterCardIcon(vw(6), vw(6)),
            permissionRequired: [
                {
                    perName: 'Camera',
                    isActived: true,
                    isRequired: true,
                },
                {
                    perName: 'Wallet',
                    isActived: true,
                    isRequired: true,
                },
                {
                    perName: 'Notification',
                    isActived: true,
                    isRequired: true,
                },
                {
                    perName: 'Microphone',
                    isActived: false,
                    isRequired: false,
                },
                {
                    perName: 'Location',
                    isActived: true,
                    isRequired: true,
                },
                {
                    perName: 'Media',
                    isActived: false,
                    isRequired: false,
                },
                {
                    perName: 'Contact',
                    isActived: true,
                    isRequired: true,
                },
                {
                    perName: 'Folder',
                    isActived: false,
                    isRequired: false,
                },
                {
                    perName: 'Calendar',
                    isActived: false,
                    isRequired: false,
                },
                {
                    perName: 'Message',
                    isActived: false,
                    isRequired: true,
                }
            ],
        },
        {
            name: 'Spotify',
            icon: SpotifyIcon(vw(6), vw(6)),
            permissionRequired: [
                {
                    perName: 'Camera',
                    isActived: false,
                    isRequired: false,
                },
                {
                    perName: 'Wallet',
                    isActived: false,
                    isRequired: false,
                },
                {
                    perName: 'Notification',
                    isActived: false,
                    isRequired: true,
                },
                {
                    perName: 'Microphone',
                    isActived: false,
                    isRequired: true,
                },
                {
                    perName: 'Location',
                    isActived: false,
                    isRequired: false,
                },
                {
                    perName: 'Media',
                    isActived: true,
                    isRequired: true,
                },
                {
                    perName: 'Contact',
                    isActived: false,
                    isRequired: true,
                },
                {
                    perName: 'Folder',
                    isActived: true,
                    isRequired: true,
                },
                {
                    perName: 'Calendar',
                    isActived: false,
                    isRequired: false,
                },
                {
                    perName: 'Message',
                    isActived: false,
                    isRequired: false,
                }
            ],
        },
        {
            name: 'AppStore',
            icon: AppStoreIcon(vw(6), vw(6)),
            permissionRequired: [
                {
                    perName: 'Camera',
                    isActived: false,
                    isRequired: false,
                },
                {
                    perName: 'Wallet',
                    isActived: true,
                    isRequired: true,
                },
                {
                    perName: 'Notification',
                    isActived: true,
                    isRequired: true,
                },
                {
                    perName: 'Microphone',
                    isActived: false,
                    isRequired: false,
                },
                {
                    perName: 'Location',
                    isActived: false,
                    isRequired: true,
                },
                {
                    perName: 'Media',
                    isActived: false,
                    isRequired: false,
                },
                {
                    perName: 'Contact',
                    isActived: false,
                    isRequired: false,
                },
                {
                    perName: 'Folder',
                    isActived: false,
                    isRequired: false,
                },
                {
                    perName: 'Calendar',
                    isActived: false,
                    isRequired: false,
                },
                {
                    perName: 'Message',
                    isActived: false,
                    isRequired: false,
                }
            ],
        },
        {
            name: 'Google Drive',
            icon: GoogleDriveIcon(vw(6), vw(6)),
            permissionRequired: [
                {
                    perName: 'Camera',
                    isActived: true,
                    isRequired: true,
                },
                {
                    perName: 'Wallet',
                    isActived: false,
                    isRequired: false,
                },
                {
                    perName: 'Notification',
                    isActived: false,
                    isRequired: true,
                },
                {
                    perName: 'Microphone',
                    isActived: false,
                    isRequired: false,
                },
                {
                    perName: 'Location',
                    isActived: false,
                    isRequired: false,
                },
                {
                    perName: 'Media',
                    isActived: true,
                    isRequired: true,
                },
                {
                    perName: 'Contact',
                    isActived: false,
                    isRequired: false,
                },
                {
                    perName: 'Folder',
                    isActived: true,
                    isRequired: true,
                },
                {
                    perName: 'Calendar',
                    isActived: false,
                    isRequired: false,
                },
                {
                    perName: 'Message',
                    isActived: false,
                    isRequired: false,
                }
            ],
        },
        {
            name: 'Google Calendar',
            icon: GoogleCalenderIcon(vw(6), vw(6)),
            permissionRequired: [
                {
                    perName: 'Camera',
                    isActived: false,
                    isRequired: false,
                },
                {
                    perName: 'Wallet',
                    isActived: false,
                    isRequired: false,
                },
                {
                    perName: 'Notification',
                    isActived: true,
                    isRequired: true,
                },
                {
                    perName: 'Microphone',
                    isActived: false,
                    isRequired: false,
                },
                {
                    perName: 'Location',
                    isActived: true,
                    isRequired: true,
                },
                {
                    perName: 'Media',
                    isActived: false,
                    isRequired: false,
                },
                {
                    perName: 'Contact',
                    isActived: true,
                    isRequired: true,
                },
                {
                    perName: 'Folder',
                    isActived: false,
                    isRequired: false,
                },
                {
                    perName: 'Calendar',
                    isActived: true,
                    isRequired: true,
                },
                {
                    perName: 'Message',
                    isActived: true,
                    isRequired: true,
                }
            ],
        },
        {
            name: 'Google Maps',
            icon: GoogleMapsIcon(vw(6), vw(6)),
            permissionRequired: [
                {
                    perName: 'Camera',
                    isActived: true,
                    isRequired: true,
                },
                {
                    perName: 'Wallet',
                    isActived: false,
                    isRequired: false,
                },
                {
                    perName: 'Notification',
                    isActived: true,
                    isRequired: true,
                },
                {
                    perName: 'Microphone',
                    isActived: false,
                    isRequired: false,
                },
                {
                    perName: 'Location',
                    isActived: true,
                    isRequired: true,
                },
                {
                    perName: 'Media',
                    isActived: false,
                    isRequired: false,
                },
                {
                    perName: 'Contact',
                    isActived: false,
                    isRequired: false,
                },
                {
                    perName: 'Folder',
                    isActived: false,
                    isRequired: false,
                },
                {
                    perName: 'Calendar',
                    isActived: false,
                    isRequired: false,
                },
                {
                    perName: 'Message',
                    isActived: false,
                    isRequired: false,
                }
            ],
        },
        {
            name: 'PayPal',
            icon: PaypalIcon(vw(6), vw(6)),
            permissionRequired: [
                {
                    perName: 'Camera',
                    isActived: true,
                    isRequired: true,
                },
                {
                    perName: 'Wallet',
                    isActived: true,
                    isRequired: true,
                },
                {
                    perName: 'Notification',
                    isActived: true,
                    isRequired: true,
                },
                {
                    perName: 'Microphone',
                    isActived: false,
                    isRequired: false,
                },
                {
                    perName: 'Location',
                    isActived: true,
                    isRequired: true,
                },
                {
                    perName: 'Media',
                    isActived: false,
                    isRequired: false,
                },
                {
                    perName: 'Contact',
                    isActived: true,
                    isRequired: true,
                },
                {
                    perName: 'Folder',
                    isActived: false,
                    isRequired: false,
                },
                {
                    perName: 'Calendar',
                    isActived: false,
                    isRequired: false,
                },
                {
                    perName: 'Message',
                    isActived: false,
                    isRequired: false,
                }
            ],
        },
        {
            name: 'WhatsApp',
            icon: WhatsappIcon(vw(6), vw(6)),
            permissionRequired: [
                {
                    perName: 'Camera',
                    isActived: true,
                    isRequired: true,
                },
                {
                    perName: 'Wallet',
                    isActived: false,
                    isRequired: true,
                },
                {
                    perName: 'Notification',
                    isActived: false,
                    isRequired: true,
                },
                {
                    perName: 'Microphone',
                    isActived: false,
                    isRequired: true,
                },
                {
                    perName: 'Location',
                    isActived: false,
                    isRequired: true,
                },
                {
                    perName: 'Media',
                    isActived: false,
                    isRequired: true,
                },
                {
                    perName: 'Contact',
                    isActived: false,
                    isRequired: true,
                },
                {
                    perName: 'Folder',
                    isActived: false,
                    isRequired: true,
                },
                {
                    perName: 'Calendar',
                    isActived: false,
                    isRequired: true,
                },
                {
                    perName: 'Message',
                    isActived: false,
                    isRequired: true,
                }
            ],
        },
        {
            name: 'Notion',
            icon: NotitonIcon(vw(6), vw(6)),
            permissionRequired: [
                {
                    perName: 'Camera',
                    isActived: false,
                    isRequired: false,
                },
                {
                    perName: 'Wallet',
                    isActived: false,
                    isRequired: false,
                },
                {
                    perName: 'Notification',
                    isActived: false,
                    isRequired: true,
                },
                {
                    perName: 'Microphone',
                    isActived: false,
                    isRequired: false,
                },
                {
                    perName: 'Location',
                    isActived: false,
                    isRequired: false,
                },
                {
                    perName: 'Media',
                    isActived: false,
                    isRequired: true,
                },
                {
                    perName: 'Contact',
                    isActived: false,
                    isRequired: false,
                },
                {
                    perName: 'Folder',
                    isActived: false,
                    isRequired: true,
                },
                {
                    perName: 'Calendar',
                    isActived: false,
                    isRequired: false,
                },
                {
                    perName: 'Message',
                    isActived: false,
                    isRequired: false,
                }
            ],
        },
        {
            name: 'Google',
            icon: GoogleIcon(vw(6), vw(6)),
            permissionRequired: [
                {
                    perName: 'Camera',
                    isActived: true,
                    isRequired: true,
                },
                {
                    perName: 'Wallet',
                    isActived: false,
                    isRequired: true,
                },
                {
                    perName: 'Notification',
                    isActived: false,
                    isRequired: true,
                },
                {
                    perName: 'Microphone',
                    isActived: false,
                    isRequired: true,
                },
                {
                    perName: 'Location',
                    isActived: false,
                    isRequired: true,
                },
                {
                    perName: 'Media',
                    isActived: false,
                    isRequired: true,
                },
                {
                    perName: 'Contact',
                    isActived: false,
                    isRequired: false,
                },
                {
                    perName: 'Folder',
                    isActived: false,
                    isRequired: true,
                },
                {
                    perName: 'Calendar',
                    isActived: false,
                    isRequired: true,
                },
                {
                    perName: 'Message',
                    isActived: false,
                    isRequired: false,
                }
            ],
        },
        {
            name: 'Tinder',
            icon: TinderIcon(vw(6), vw(6)),
            permissionRequired: [
                {
                    perName: 'Camera',
                    isActived: true,
                    isRequired: true,
                },
                {
                    perName: 'Wallet',
                    isActived: false,
                    isRequired: false,
                },
                {
                    perName: 'Notification',
                    isActived: false,
                    isRequired: true,
                },
                {
                    perName: 'Microphone',
                    isActived: false,
                    isRequired: true,
                },
                {
                    perName: 'Location',
                    isActived: false,
                    isRequired: true,
                },
                {
                    perName: 'Media',
                    isActived: true,
                    isRequired: true,
                },
                {
                    perName: 'Contact',
                    isActived: false,
                    isRequired: true,
                },
                {
                    perName: 'Folder',
                    isActived: false,
                    isRequired: true,
                },
                {
                    perName: 'Calendar',
                    isActived: false,
                    isRequired: false,
                },
                {
                    perName: 'Message',
                    isActived: false,
                    isRequired: false,
                }
            ],
        },
    ])

    const [notiList, setNotiList] = useState([
        {
            id: 5,
            type: 'system',
            status: 'show',
            icon: [systemIcon(vw(6), vw(6), colorStyle.darkGray),],
            title: 'Hệ thống',
            message: 'Đã diệt 4 file phát hiện virus và làm sạch 3 folder',
            time: 'Vừa xong',
            fnc: null,
            fncMessage: null,
        },
        {
            id: 4,
            type: 'app',
            status: 'show',
            icon: [InstagramIcon(vw(8), vw(8)), FacebookIcon(vw(8), vw(8)), GoogleIcon(vw(8), vw(8))],
            title: '',
            message: 'Google account, Facebook, Instagram, 3 tài khoản trên có mật khẩu trùng lặp. Cân nhắc thay đổi.',
            time: '2 giờ trước',
            fnc: null,
            fncMessage: null,
        },
        {
            id: 3,
            type: 'app',
            status: 'show',
            icon: [TikTokIcon(vw(8), vw(8)), NetflixIcon(vw(8), vw(8)), PaypalIcon(vw(8), vw(8)), MasterCardIcon(vw(8), vw(8))],
            title: '',
            message: 'Tiktok, Netflix, Paypal, Mastercard, 4 tài khoản trên mật khẩu đã cũ. Cân nhắc thay đổi.',
            time: '3 ngày trước',
            fnc: null,
            fncMessage: null,
        }, 
        {
            id: 2,
            type: 'system',
            status: 'hidden',
            icon: [systemIcon(vw(6), vw(6), colorStyle.darkGray),],
            title: 'Hệ thống',
            message: 'Bộ nhớ quá tải, làm sạch bộ nhớ ngay ?',
            time: '4 ngày trước',
            fnc: () => { navigation.navigate('SystemClean', { id: 3 }) },
            fncMessage: 'Làm sạch',
        },
        {
            id: 1,
            type: 'app',
            status: 'show',
            icon: [SpotifyIcon(vw(8), vw(8)), NotitonIcon(vw(8), vw(8)), TinderIcon(vw(8), vw(8))],
            title: '',
            message: 'Spotify, Notion, Tinder, 3 tài khoản trên có mật khẩu yếu, dễ bị xâm hại. Cân nhắc thay đổi.',
            time: '23/10/2023',
            fnc: null,
            fncMessage: null,
        },

    ])
    return { appList, setAppList, notiList, setNotiList }
}