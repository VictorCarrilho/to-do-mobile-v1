import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, View } from 'react-native';

import { styles } from './styles';

export function EmptyList(){
    return(
        <View style={styles.container}>
            <MaterialCommunityIcons name="format-list-numbered" style={styles.icon} size={70} />
            <Text style={styles.title}>Você ainda não tem tarefas cadastradas.</Text>
            <Text style={styles.text}>Crie tarefas e organize seus itens a fazer</Text>
        </View>
    )
}