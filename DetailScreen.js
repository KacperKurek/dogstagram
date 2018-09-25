import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View, Dimensions, Image, Animated } from 'react-native';
export default class DetailScreen extends React.Component {
    state = {
        counter: 0,
        scale: new Animated.Value(0)
    }
    componentDidMount() {
        this.setState({ counter: this.props.navigation.state.params.item.numberOfLikes })
    }
    incrementCounter() {
        Animated.sequence([
            Animated.timing(this.state.scale,{
                toValue: 1,
                duration: 100,
                useNativeDriver: true
            }),
            Animated.timing(this.state.scale, {
                toValue: 0,
                duration: 100,
                useNativeDriver: true
            })
        ]).start();
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render() {
        const { params } = this.props.navigation.state;
        const item = params ? params.item : null;
        const bouncyImage = this.state.scale.interpolate({
            inputRange:[0,1],
            outputRange: [1, 0.8],
        })
        return <View style={styles.container}>
            <TouchableWithoutFeedback onPress={() => this.incrementCounter()}><Animated.Image style={[styles.image, { transform: [{scale: bouncyImage}]}]} source={{ uri: item.imageUrl }} /></TouchableWithoutFeedback>
            <Text>{this.state.counter}</Text>
        </View>
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height / 3,
    }
});