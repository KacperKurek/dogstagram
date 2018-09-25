import React from 'react';
import { StyleSheet, Image, Dimensions, TouchableOpacity} from 'react-native';

const Avatar = ({ item, navigation }) => {
    return <TouchableOpacity onPress={() => navigation.navigate('Detail',{item:item})}
><Image style={styles.image} source={{ uri: item.imageUrl }} /></TouchableOpacity>
}
export default Avatar
const spacing = 5
const styles = StyleSheet.create({
    image:{
        height: Dimensions.get("window").width / 3 - spacing ,
        width: Dimensions.get("window").width / 3 - spacing,
        marginBottom: spacing * 1.5
    }
});