import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


const Item =(props)=>{
    return(
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.splash}></View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.statusItem}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFFFFF',
        padding: 20,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 30,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    splash: {
        width: 53,
        height: 11,
        backgroundColor: '#555', /*For testing purposes*/
        marginRight: 15,
    },
    itemText: {
        maxWidth: '80%'
    },
    statusItem: {
        width: 35,
        height: 35,
        left: 15,
        backgroundColor: '#F23030',
        borderRadius: 50,
    },
});

export default Item;