import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

import { styles } from "./styles";


type Props = TouchableOpacityProps & {
    checked: boolean;
    onChecked: (id: number) => void;
}

export function MarkButton({ checked, onChecked, ...rest }: Props){
    return(
        <TouchableOpacity style={styles.buttonAdd} onPress={value => onChecked(value)} {...rest}>
            {
                checked ? <MaterialIcons name="radio-button-checked" style={styles.buttonIcon} />
                        : <MaterialIcons name="radio-button-unchecked" style={styles.buttonIcon} />
            }
            
        </TouchableOpacity>
    )
}

//