import React from 'react';
import { StyleSheet, Image, Dimensions, TouchableNativeFeedback } from 'react-native';

const Avatar = ({ imageUrl, navigation }) => {
    return <TouchableNativeFeedback><Image style={styles.image} source={{ uri: imageUrl }} /></TouchableNativeFeedback>
}
export default Avatar
const spacing = 5
const styles = StyleSheet.create({
    image: {
        height: Dimensions.get("window").width / 3 - spacing,
        width: Dimensions.get("window").width / 3 - spacing,
        marginBottom: spacing * 1.5
    }
});