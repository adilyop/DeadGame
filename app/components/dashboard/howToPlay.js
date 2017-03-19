
import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity,
    View,
    ScrollView,
    Image,
    Clipboard,
    ToastAndroid,
    AlertIOS,
    Dimensions,
    Platform
} from 'react-native';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
var {width, height} = Dimensions.get('window');
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
var width_window = width;
var height_window = height;

export default class HowToPlay extends Component {

    onPrevious() {
        var Actions = this.props.routes;
        if (this.props.onPrevious) {
            this.props.onPrevious();
            return;
        }
        if (this.props.navigator && this.props.navigator.getCurrentRoutes().length > 1) {
            Actions.pop();
        }
    };
    english() {
        return (
            <ScrollView >
                <Text> For example, Number to guess is :</Text>
                <View style={styles.containerNumbersRow1}>
                    <View style={[styles.blockEmpty, { backgroundColor: "green" }]}>
                        <Text style={{ color: "white", fontSize: 20 }}> 3 </Text>
                    </View>
                    <View style={[styles.blockEmpty, { backgroundColor: "green" }]}>
                        <Text style={{ color: "white", fontSize: 20 }}> 7 </Text>
                    </View>
                    <View style={[styles.blockEmpty, { backgroundColor: "green" }]}>
                        <Text style={{ color: "white", fontSize: 20 }}> 0 </Text>
                    </View>
                    <View style={[styles.blockEmpty, { backgroundColor: "green" }]}>
                        <Text style={{ color: "white", fontSize: 20 }}> 5 </Text>
                    </View>
                </View>

                <Text> let's try to find it</Text>
                <Text> in your first try you shose the number :</Text>
                <View style={styles.containerNumbersRow1}>
                    <View style={[styles.blockEmpty, { backgroundColor: "green" }]}>
                        <Text style={{ color: "white", fontSize: 20 }}> 3 </Text>
                    </View>
                    <View style={[styles.blockEmpty, { backgroundColor: "grey" }]}>
                        <Text style={{ color: "white", fontSize: 20 }}> 4 </Text>
                    </View>
                    <View style={[styles.blockEmpty, { backgroundColor: "blue" }]}>
                        <Text style={{ color: "white", fontSize: 20 }}> 5 </Text>
                    </View>
                    <View style={[styles.blockEmpty, { backgroundColor: "grey" }]}>
                        <Text style={{ color: "white", fontSize: 20 }}> 1 </Text>
                    </View>
                </View>
                <Text> the result will be mort :1 and blesse:1</Text>
                <Text> because you have found one digit and it's in the corrcet place (3)</Text>
                <Text> and one digit but it's not in the corrcet place (5)</Text>
                <Text></Text>
                <Text> Ok! one more example</Text>
                <Text> if you choose the number :</Text>
                <View style={styles.containerNumbersRow1}>
                    <View style={[styles.blockEmpty, { backgroundColor: "grey" }]}>
                        <Text style={{ color: "white", fontSize: 20 }}> 7 </Text>
                    </View>
                    <View style={[styles.blockEmpty, { backgroundColor: "grey" }]}>
                        <Text style={{ color: "white", fontSize: 20 }}> 9 </Text>
                    </View>
                    <View style={[styles.blockEmpty, { backgroundColor: "grey" }]}>
                        <Text style={{ color: "white", fontSize: 20 }}> 5 </Text>
                    </View>
                    <View style={[styles.blockEmpty, { backgroundColor: "grey" }]}>
                        <Text style={{ color: "white", fontSize: 20 }}> 2 </Text>
                    </View>
                </View>
                <Text> the result will be mort :0 and blesse:2</Text>
                <Text> because no digit is in the correct place (mort = 0)</Text>
                <Text> and you found two digits(7,5) but they aren't in the correct place (blesse=2)</Text>
                <Text> It's your turn now</Text>
                <Text> ENJOY !</Text>
            </ScrollView>
        );
    }
    render() {
        return (
            <View style={styles.containerTab} >
                <View style={styles.subHeader1}>
                    <TouchableOpacity onPress={() => this.onPrevious()} style={styles.settingShare}>
                        <Icon name="ios-arrow-back" color='#fff' size={40} > </Icon>
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>
                        HOW TO PLAY
                    </Text>
                    <TouchableOpacity  style={styles.settingShare}>
                        <Icon name="ios-arrow-back" color='#2c3e50' size={40} > </Icon>
                    </TouchableOpacity>
                </View>
                <ScrollableTabView
                    initialPage={0}
                    renderTabBar={() =>
                        <ScrollableTabBar
                            backgroundColor={'white'}
                            activeTextColor={'#2c3e50'}
                            inactiveTextColor={'grey'}
                            underlineStyle={styles.underlineStyle}
                        />
                    }
                >
                    <View tabLabel='ENGLISH' style={styles.tabView}>
                        {this.english()}
                    </View>
                    <View tabLabel='FRANCAIS' style={styles.tabView}>

                    </View>
                    <View tabLabel='ARAB' style={styles.tabView}>

                    </View>
                </ScrollableTabView>
            </View>
        );
    }
}

module.exports = HowToPlay;

const styles = StyleSheet.create({
    settingShare: {
        marginLeft: 10,
    },
    containerNumbersRow1: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    blockEmpty: {
        margin: 2,
        width: 40,
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    NumberListHeader: {
        height: 30,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'black'
    },
    footer: {
        flex: 1,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerTab: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: 'white'
    },
    containerNumbersRow2: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerNumbersRow3: {
        flex: 1,
        flexDirection: 'row'
    },
    containerNumbersColumn: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    headerTitle: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30,
    },
    underlineStyle: {
        backgroundColor: '#2c3e50',
        height: 2
    },
    subHeader1: {
        justifyContent: 'space-between',
        alignItems: "center",
        flexDirection: 'row',
        height: 60,
        backgroundColor: '#2c3e50'
    },
});