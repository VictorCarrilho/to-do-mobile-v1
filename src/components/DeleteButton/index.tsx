import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { styles } from "./styles";


type Props = TouchableOpacityProps & {
    onRemove: (id: number) => void;
}

export function DeleteButton({ onRemove, ...rest }: Props){
    return(
        <TouchableOpacity 
            onPress={(value) => onRemove(value)}
            style={styles.buttonAdd} 
            {...rest}
        >
            <MaterialCommunityIcons name="trash-can-outline" style={styles.buttonIcon} />
        </TouchableOpacity>
    )
}