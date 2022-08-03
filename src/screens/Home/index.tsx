import { Alert, FlatList, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

import global from '../../global/styles';
import { styles } from './styles';
import logo from '../../assets/images/Logo.png';


import { Tasks } from '../../components/Tasks';
import { EmptyList } from '../../components/EmptyList';
import { useState } from 'react';


type TasksProps = {
    'id': number;
    'description': string;
    'active': boolean; 
}


export function Home(){
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState<TasksProps[]>([]);


    function handleTaskAdd(){
        if(task == ""){ return Alert.alert('Você deve escrever o nome da tarefa!'); }
        if(tasks.find(item => item.description === task)){ return Alert.alert('Tarefa ja existe.'); }
        
        const data = {'id': new Date().getTime(), 'description': task, 'active': false};
        setTasks(prevState => [...prevState, data]);
        setTask('');
    }

    function handleCheck(id: number){
        // Pegar os arrays que estão no State \\
        const updatedTasks = tasks.map(task => ({...task}));

        // Manipular o array \\
        const foundItem = updatedTasks.find(item => item.id === id);        
        
        if(!foundItem) return;
        foundItem.active = !foundItem?.active;
        setTasks(updatedTasks);
    }

    function handleTaskRemove(id: number){
        Alert.alert("Atenção!", "Tem certeza que deseja excluir a tarefa?", [
            {
                text: 'Sim',
                onPress:() => { 
                    const updatedTasks = tasks.filter(task => task.id !== id);
                    setTasks(updatedTasks);
                }
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ]);

    }

    return(
        <View style={styles.container}>
            <View style={styles.areaLogo}>
                <Image source={logo} style={styles.logoImg} />
            </View>


            <View style={styles.buttonArea}>
                <TextInput 
                    style={styles.inputEvent} 
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor={global.COLORS['GRAY-300']}
                    onChangeText={value => setTask(value)}
                    value={task}
                />
                <TouchableOpacity style={styles.buttonAdd} onPress={handleTaskAdd}>
                    <Text style={styles.buttonText}>+</Text>   
                </TouchableOpacity>
            </View>

            <View style={styles.areaResume}>
                <View style={styles.resumeInfo}>
                    <Text style={styles.text}>
                        Criadas 
                    </Text>
                    <View style={styles.textNumber}>
                        <Text style={{ color: '#FFF', fontSize: 11}}>
                            {tasks.length}
                        </Text>
                    </View>
                </View>
                <View style={styles.resumeInfo}>
                    <Text style={styles.textConclused}>
                        <Text>Concluídas</Text>
                    </Text>
                    <View style={styles.textNumber}>
                        <Text style={{ color: '#FFF', fontSize: 11}}>
                            { 
                                tasks.filter(task => task.active === true).length
                            }
                        </Text>
                    </View>
                </View>
            </View>


            <FlatList
                data={tasks}
                keyExtractor={(item: any) => item.id}
                renderItem={
                    ({item}) => (<Tasks 
                                    description={item.description} 
                                    checked={item.active} 
                                    onChecked={value => handleCheck(item.id)}
                                    onRemove={value => handleTaskRemove(item.id)} 
                                />
                                )
                }
                ListEmptyComponent={() => (<EmptyList />)}
            />
            
        </View>
    )
}