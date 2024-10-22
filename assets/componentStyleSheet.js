import { StyleSheet } from 'react-native';
import { vw, vh } from 'react-native-expo-viewport-units';
import { useFonts } from 'expo-font';

import {
    NotoSans_100Thin,
    NotoSans_100Thin_Italic,
    NotoSans_200ExtraLight,
    NotoSans_200ExtraLight_Italic,
    NotoSans_300Light,
    NotoSans_300Light_Italic,
    NotoSans_400Regular,
    NotoSans_400Regular_Italic,
    NotoSans_500Medium,
    NotoSans_500Medium_Italic,
    NotoSans_600SemiBold,
    NotoSans_600SemiBold_Italic,
    NotoSans_700Bold,
    NotoSans_700Bold_Italic,
    NotoSans_800ExtraBold,
    NotoSans_800ExtraBold_Italic,
    NotoSans_900Black,
    NotoSans_900Black_Italic,
} from '@expo-google-fonts/noto-sans';

import {
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
} from '@expo-google-fonts/inter';

export const useCustomFonts = () => {
    return useFonts({
        NotoSans_100Thin,
        NotoSans_100Thin_Italic,
        NotoSans_200ExtraLight,
        NotoSans_200ExtraLight_Italic,
        NotoSans_300Light,
        NotoSans_300Light_Italic,
        NotoSans_400Regular,
        NotoSans_400Regular_Italic,
        NotoSans_500Medium,
        NotoSans_500Medium_Italic,
        NotoSans_600SemiBold,
        NotoSans_600SemiBold_Italic,
        NotoSans_700Bold,
        NotoSans_700Bold_Italic,
        NotoSans_800ExtraBold,
        NotoSans_800ExtraBold_Italic,
        NotoSans_900Black,
        NotoSans_900Black_Italic,
        Inter_100Thin,
        Inter_200ExtraLight,
        Inter_300Light,
        Inter_400Regular,
        Inter_500Medium,
        Inter_600SemiBold,
        Inter_700Bold,
        Inter_800ExtraBold,
        Inter_900Black,
        // 'anuphanBold': require('../assets/fonts/Anuphan-Bold.ttf'),
        // 'anuphanLight': require('../assets/fonts/Anuphan-Light.ttf'),
        // 'anuphanMedium': require('../assets/fonts/Anuphan-Medium.ttf'),
        // 'anuphanSemiBold': require('../assets/fonts/Anuphan-SemiBold.ttf'),
        // 'anuphanThin': require('../assets/fonts/Anuphan-Thin.ttf'),
        // 'anuphanRegular': require('../assets/fonts/Anuphan-Regular.ttf'),
    });
};

export const colorStyle = StyleSheet.create({
    white: '#FCFCFC',
    grey: '#CDCDCD',
    darkGray: '#383838',
    black: '#3C3C3C',
    main1: '#3DD4F5',
    main2: '#3DF5B3',
    main3: '#C9F5FF',
    main4: '#31616B',
});

const componentStyle = StyleSheet.create({
    // font
    noto16DpBold: {
        fontFamily: 'NotoSans_800ExtraBold',
        fontSize: vw(4),
    },

    noto18DpBold: {
        fontFamily: 'NotoSans_800ExtraBold',
        fontSize: vw(4.5),
    },

    noto20DpBold: {
        fontFamily: 'NotoSans_800ExtraBold',
        fontSize: vw(5),
    },

    noto24DpBold: {
        fontFamily: 'NotoSans_800ExtraBold',
        fontSize: vw(6),
    },

    noto28DpBold: {
        fontFamily: 'NotoSans_800ExtraBold',
        fontSize: vw(7),
    },

    noto32DpBold: {
        fontFamily: 'NotoSans_800ExtraBold',
        fontSize: vw(8),
    },

    noto12Medium: {
        fontFamily: 'NotoSans_500Medium',
        fontSize: vw(3),
    },

    noto14Medium: {
        fontFamily: 'NotoSans_500Medium',
        fontSize: vw(3.5),
    },

    noto16Medium: {
        fontFamily: 'NotoSans_500Medium',
        fontSize: vw(4),
    },

    noto18Medium: {
        fontFamily: 'NotoSans_500Medium',
        fontSize: vw(4.5),
    },

    noto20Medium: {
        fontFamily: 'NotoSans_500Medium',
        fontSize: vw(5),
    },

    noto12Bold: {
        fontFamily: 'NotoSans_700Bold',
        fontSize: vw(3),
    },

    noto14Bold: {
        fontFamily: 'NotoSans_700Bold',
        fontSize: vw(3.5),
    },

    noto16Bold: {
        fontFamily: 'NotoSans_700Bold',
        fontSize: vw(4),
    },

    noto18Bold: {
        fontFamily: 'NotoSans_700Bold',
        fontSize: vw(4.5),
    },

    noto20Bold: {
        fontFamily: 'NotoSans_700Bold',
        fontSize: vw(5),
    },

    noto24Bold: {
        fontFamily: 'NotoSans_700Bold',
        fontSize: vw(6),
    },

    noto10Regular: {
        fontFamily: 'NotoSans_400Regular',
        fontSize: vw(2.5),
    },

    noto12Regular: {
        fontFamily: 'NotoSans_400Regular',
        fontSize: vw(3),
    },

    noto14Regular: {
        fontFamily: 'NotoSans_400Regular',
        fontSize: vw(3.5),
    },

    noto16Regular: {
        fontFamily: 'NotoSans_400Regular',
        fontSize: vw(4),
    },

    // Font Inter
    inter12Medium: {
        fontFamily: 'Inter_500Medium',
        fontSize: vw(3),
    },

    inter14Medium: {
        fontFamily: 'Inter_500Medium',
        fontSize: vw(3.5),
    },

    inter16Medium: {
        fontFamily: 'Inter_500Medium',
        fontSize: vw(4),
    },

    inter18Medium: {
        fontFamily: 'Inter_500Medium',
        fontSize: vw(4.5),
    },

    inter20Medium: {
        fontFamily: 'Inter_500Medium',
        fontSize: vw(5),
    },

    inter12Bold: {
        fontFamily: 'Inter_700Bold',
        fontSize: vw(3),
    },

    inter14Bold: {
        fontFamily: 'Inter_700Bold',
        fontSize: vw(3.5),
    },

    inter16Bold: {
        fontFamily: 'Inter_700Bold',
        fontSize: vw(4),
    },

    inter18Bold: {
        fontFamily: 'Inter_700Bold',
        fontSize: vw(4.5),
    },

    inter20Bold: {
        fontFamily: 'Inter_700Bold',
        fontSize: vw(5),
    },

    inter24Bold: {
        fontFamily: 'Inter_700Bold',
        fontSize: vw(6),
    },

    inter10Regular: {
        fontFamily: 'Inter_400Regular',
        fontSize: vw(2.5),
    },

    inter12Regular: {
        fontFamily: 'Inter_400Regular',
        fontSize: vw(3),
    },

    inter14Regular: {
        fontFamily: 'Inter_400Regular',
        fontSize: vw(3.5),
    },

    inter16Regular: {
        fontFamily: 'Inter_400Regular',
        fontSize: vw(4),
    },

    // shadow
    shadowW0H1: {
        shadowColor: 'black',
        shadowOffset: { width: vw(0), height: vw(1) },
        shadowOpacity: 0.25,
    },

    shadowW1H1: {
        shadowColor: 'black',
        shadowOffset: { width: vw(1), height: vw(1) },
        shadowOpacity: 0.25,
    },

    shadowW0H1B1S0: {
        shadowColor: 'black',
        shadowOffset: { width: vw(0), height: vw(1) },
        shadowOpacity: 0.25,
        shadowRadius: vw(1),
    },

    shadowBtn: {
        borderBottomColor: colorStyle.main4,
        borderBottomWidth: vw(0.5),
        backgroundColor: colorStyle.main2,
    },

    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: vw(4),
        width: '90%',
        marginLeft: '5%'
    },

    loginInput: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: vw(2.5),
        borderRadius: vw(4),
        paddingHorizontal: vw(5),
        width: '100%',
    },

    loginInputText: {
        fontSize: vw(3.5),
        lineHeight: vw(4.5),
        paddingVertical: vw(4),
        paddingHorizontal: vw(2),
        width: '100%',
        height: '100%',
    },

    submitBtn: {
        borderWidth: 2,
        borderRadius: vw(4),
        width: '90%',
        marginLeft: '5%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'auto'
    },

    submitBtnText: {
        fontSize: vw(4.5),
        lineHeight: vw(4.5),
        paddingVertical: vw(4.5),
    },

});

export default componentStyle;