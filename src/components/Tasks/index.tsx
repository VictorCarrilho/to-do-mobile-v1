import { Text, View } from 'react-native';
import { DeleteButton } from '../DeleteButton';
import { MarkButton } from '../MarkButton';
import { styles } from './styles';

type Props = {
    description: string;
    checked: boolean;
    onChecked: (id: number) => void;
    onRemove: (id: number) => void;
}

export function Tasks({ checked, description, onChecked, onRemove }: Props ){
    return(
        <View style={styles(checked).container}>
            <MarkButton checked={checked} onChecked={value => onChecked(value)} />
            <Text style={styles({checked}).text}> {description} </Text>
            <DeleteButton onRemove={value => onRemove(value)} />
        </View>
    )
}