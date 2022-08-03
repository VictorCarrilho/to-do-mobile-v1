import { StyleSheet } from "react-native";

import global from '../../global/styles';


export const styles = StyleSheet.create({
    buttonAdd: {
        width: 56,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonIcon: {
        fontSize: 24,
        color: global.COLORS["BLUE-DARK"]
    },
});