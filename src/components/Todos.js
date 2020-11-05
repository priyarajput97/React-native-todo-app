import React from 'react';
import { FlatList, Text, View, StyleSheet, TextInput, ScrollView } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const data = [
    {id: 0, todo: 'Wake up'},
    {id: 1, todo: 'Eat'},
    {id: 2, todo: 'Go to sleep'}
]

const Todos = () => {
    const renderItem = ({item}) => (
        <View style={styles.todo}>
            <CheckBox />
            <Text style={styles.todoText}>{item.todo}</Text>
        </View>
    );

    return (
        <ScrollView>
            <View style={styles.todoContainer}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                />
            </View>

            <TextInput 
                placeholder='Add a new todo'
                style={styles.input}
            />
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    todoContainer: {
        padding: 20,
    },
    todo: {
        marginVertical: 8
    },    
    todoText: {
        color: '#3d3d3d',
        fontSize: 20
    },
    input: {
        borderRadius: 100,
        borderColor: '#3d3d3d',
        borderWidth: 1,
        height: 40,
        margin: 20,
        padding: 10
    }
});

export default Todos;
