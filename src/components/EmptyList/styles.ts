import { StyleSheet } from "react-native";
import global from '../../global/styles';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 15,
        color: global.COLORS["GRAY-300"],
        fontWeight: 'bold',
        marginBottom: 3
    },
    text: {
        fontSize: 15,
        color: global.COLORS["GRAY-300"]
    },
    icon: {
        color: global.COLORS["GRAY-300"],
        marginBottom: 10
    }
});