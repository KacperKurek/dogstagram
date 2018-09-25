import React from 'react';
import { StyleSheet, SafeAreaView, Text, FlatList, View, Dimensions, ActivityIndicator, Platform } from 'react-native';
import Avatar from './Avatar';
export default class HomeScreen extends React.Component {
    state = {
        data: [],
        isLoalding: true
    }
    loadImages = () => {
        fetch('https://callstagram-api.now.sh/api')
            .then(response => response.json())
            .then(data => {
                this.setState({ data: data.data, isLoalding: false })
            })
    }
    componentDidMount() {
        this.loadImages()
    }

    render() {
        const { isLoalding } = this.state;
        return (
            <SafeAreaView style={styles.container}>
                {isLoalding && (
                    <View style={styles.spinnerContainer}>
                        <ActivityIndicator size="large" />
                    </View>
                )}
                <FlatList
                    columnWrapperStyle={styles.list}
                    data={this.state.data}
                    onRefresh={() => { }}
                    refreshing={false}
                    numColumns={3}
                    keyExtractor={foo => {
                        return foo.id;
                    }}
                    ListEmptyComponent={isLoalding ? null : <Text>There are no dogs =(</Text>}
                    renderItem={({ item }) => <Avatar navigation={this.props.navigation} item={item} />}
                />
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    header: {
        textAlign: Platform.OS === 'ios' ? "center" : "left",
        fontSize: 22,
        fontWeight: "bold",
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
    },
    spinnerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    list: {
        justifyContent: "space-between",
        width: Dimensions.get("window").width,
     
    }
});
