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
        fontSize: 20,
        color: global.COLORS["GRAY-300"]
    },
});