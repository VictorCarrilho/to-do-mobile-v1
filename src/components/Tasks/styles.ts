import { StyleSheet } from "react-native";

import global from '../../global/styles';


export const styles = ({ checked }: any) => StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: global.COLORS["GRAY-400"],
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        marginBottom: 10,
        paddingVertical: 10
    },
    text: {
        flex: 1,
        fontSize: 16,
        color: global.COLORS["GRAY-100"],
        textDecorationLine: checked == true ? 'line-through' : 'none'
    }
});