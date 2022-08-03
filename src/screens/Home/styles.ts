import { StyleSheet } from "react-native";
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import global from '../../global/styles';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: global.COLORS["GRAY-700"],
        paddingHorizontal: 24,
        paddingTop: getStatusBarHeight(true) + 16
    },
    areaLogo: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 24
    },
    logoImg: {
        width: 110,
        height: 32
    },
    buttonArea:{
        width: '100%',
        flexDirection: 'row',
        marginTop: 16,
        marginBottom: 42
    },
    buttonAdd: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: global.COLORS["BLUE-DARK"],
        alignItems: 'center',
        justifyContent: 'center'        
    },
    buttonText: {
        fontSize: 24,
        color: global.COLORS["GRAY-100"]
    },
    inputEvent: {
        flex: 1,
        height: 56,
        backgroundColor: global.COLORS["GRAY-500"],
        borderRadius: 5,
        color: global.COLORS["GRAY-100"],
        padding: 16,
        fontSize: 16,
        borderColor: global.COLORS["BLUE-DARK"],
        borderWidth: 2,
        marginRight: 7
    },


    areaResume: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: global.COLORS["GRAY-500"],
        paddingBottom: 20,
        marginBottom: 10
    },
    resumeInfo: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        color: global.COLORS["BLUE-DARK"],
        fontWeight: 'bold',
        fontSize: 15
    },
    textConclused: {
        color: global.COLORS["PURPLE-DARK"],
        fontWeight: 'bold',
        fontSize: 15
    },
    textNumber: {
        marginLeft: 7,
        backgroundColor: global.COLORS["GRAY-400"],
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    }
});
  