
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
    francais() {
        return (
            <ScrollView  >
            <View style={styles.info} >
                <Text>Commencer par glisser les chiffres dans les champs gris vides. Et essayer de deviner le nombre dans un minimum des essais.</Text>
                <Text></Text>
                <Text>Le nombre de "COWS" ca veut dire les chiffres trouvés mais qui nont pas dans leur place.</Text>
                <Text>Le nombre de "BULLS" ca veut dire les chiffres trouvés et qui sont dans leur place exacte.</Text>
                <Text>trouver 4 "BULLS" pour gagner!</Text>
                <Text></Text>
                <Text style={{ fontWeight: 'bold' }} >Exemple1: </Text>
                <Text>Numero a deviner est :</Text>
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

                <Text> Si vous choisissez le nombre :</Text>
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
                <Text>Le resultat sera "BULLS":1 et "COWS" :1</Text>
                <Text>Ce qui signifie que tu as trouver un chiffre et il est dans son place exacte(3)</Text>
                <Text>Et un chiffre mais n'est pas dans leu rprpre place(5)</Text>
                <Text></Text>
                <Text style={{ fontWeight: 'bold' }} >Exemple2: </Text>
                <Text>Si tu choisis le nombre: </Text>
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
                <Text>Le resultat sera "BULLS":0 et "COWS" :2</Text>
                <Text>Ce que signifie aucun chiffre n'est trouvé dans sa place exacte(BULLS = 0)</Text>
                <Text>Et tu as trouvé deux chiffres(7,5) mais qui sont pas dans leurs place exacte (COWS = 2)</Text>
                <Text>Ok! je te laisse la main, c'est ton tour !.</Text>
                <Text style={{ fontWeight: 'bold' ,color: 'red', fontSize: 15, }}>AMUSES-TOI !</Text>
            </View>
            </ScrollView>
        );
    }
    english() {
        return (
            <ScrollView  >
            <View style={styles.info} >
                <Text>Start by dragging digits to the empty grey fields. And try to guess the number in the least attempts.</Text>
                <Text></Text>
                <Text>Numbers of "COWS" means correct digits selected but wrong place.</Text>
                <Text>Numbers of "BULLS" means correct digits selected in theire right place.</Text>
                <Text>Get 4 "BULLS" to win!</Text>
                <Text></Text>
                <Text style={{ fontWeight: 'bold' }} >Example1: </Text>
                <Text>Number to guess is :</Text>
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

                <Text> let's try to find it ...</Text>
                <Text> In your first attempt you shose the number :</Text>
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
                <Text>the result will be BULLS :1 and COWS :1</Text>
                <Text>witch means you have found one digit and it's in the right place (3)</Text>
                <Text>and one digit but it's not in the right place (5)</Text>
                <Text></Text>
                <Text style={{ fontWeight: 'bold' }} >Example2: </Text>
                <Text>if you choose the number :</Text>
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
                <Text>the result will be BULLS :0 and COWS :2</Text>
                <Text>witch mean no digit is in the correct place (BULLS = 0)</Text>
                <Text>And you found two digits(7,5) but they aren't in the correct place (COWS = 2)</Text>
                <Text>It's your turn now.</Text>
                <Text style={{ fontWeight: 'bold' ,color: 'red', fontSize: 15, }}>ENJOY !</Text>
            </View>
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
                        {this.francais()}
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
    info: {
        margin: 10,
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
        color: '#90949c',
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