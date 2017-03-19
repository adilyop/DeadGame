'use strict';

import React, { Component } from 'react';
import {
    ListView,
    View,
    Text,
    Image,
    ToastAndroid,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    ScrollView,
    ActivityIndicator,
    PanResponder, BackAndroid,
    Animated, Modal, TouchableHighlight,
    Dimensions
} from 'react-native';
var {width, height} = Dimensions.get('window');
var width_window = width;
var height_window = height-20;
let CIRCLE_RADIUS = 36;
let Window = Dimensions.get('window');
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import Icon from 'react-native-vector-icons/Ionicons';
import accueil from './accueil';
import { addScoreRow, getAllScore } from '../../services/database';
import ModalComponent from './ModalComponent';
import ModalWin from './ModalWin';
import ModalSolution from './ModalSolution';
let self;
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        });

        this.state = {
            curTime: "00:00:00",
            curTimeInfo: "00:00:00",
            roundInfo: 0,
            second: 0,
            solutionModalVisible: false,
            startModalVisible: true,
            visibleShare: false,
            winModalVisible: false,
            menuModalVisible: false,
            listNumbers: [],
            backgroundColorNumber: "grey",
            rows: 0,
            numberProposed: ["_", "_", "_", "_"],
            showDraggable: [true, true, true, true, true, true, true, true, true, true],
            dropZoneValues0: null,
            dropZoneValues1: null,
            dropZoneValues2: null,
            dropZoneValues3: null,
            pan0: new Animated.ValueXY(),   //Step 1
            pan1: new Animated.ValueXY(),   //Step 1
            pan2: new Animated.ValueXY(),  //Step 1
            pan3: new Animated.ValueXY(), //Step 1
            pan4: new Animated.ValueXY(),   //Step 1
            pan5: new Animated.ValueXY(),   //Step 1
            pan6: new Animated.ValueXY(),  //Step 1
            pan7: new Animated.ValueXY(), //Step 1
            pan8: new Animated.ValueXY(),   //Step 1
            pan9: new Animated.ValueXY(),  //Step 1
        };

        this.panResponder0 = PanResponder.create({    //Step 2
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: Animated.event([null, { //Step 3
                dx: this.state.pan0.x,
                dy: this.state.pan0.y
            }]),
            onPanResponderRelease: (e, gesture) => { this._handlenumberPosition(this.state.pan0, gesture, 0) } //Step 4
        });
        this.panResponder1 = PanResponder.create({    //Step 2
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: Animated.event([null, { //Step 3
                dx: this.state.pan1.x,
                dy: this.state.pan1.y
            }]),
            onPanResponderRelease: (e, gesture) => { this._handlenumberPosition(this.state.pan1, gesture, 1) } //Step 4
        });
        this.panResponder2 = PanResponder.create({    //Step 2
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: Animated.event([null, { //Step 3
                dx: this.state.pan2.x,
                dy: this.state.pan2.y
            }]),
            onPanResponderRelease: (e, gesture) => { this._handlenumberPosition(this.state.pan2, gesture, 2) } //Step 4
        });
        this.panResponder3 = PanResponder.create({    //Step 2
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: Animated.event([null, { //Step 3
                dx: this.state.pan3.x,
                dy: this.state.pan3.y
            }]),
            onPanResponderRelease: (e, gesture) => { this._handlenumberPosition(this.state.pan3, gesture, 3) } //Step 4
        });
        this.panResponder4 = PanResponder.create({    //Step 2
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: Animated.event([null, { //Step 3
                dx: this.state.pan4.x,
                dy: this.state.pan4.y
            }]),
            onPanResponderRelease: (e, gesture) => { this._handlenumberPosition(this.state.pan4, gesture, 4) } //Step 4
        });
        this.panResponder5 = PanResponder.create({    //Step 2
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: Animated.event([null, { //Step 3
                dx: this.state.pan5.x,
                dy: this.state.pan5.y
            }]),
            onPanResponderRelease: (e, gesture) => { this._handlenumberPosition(this.state.pan5, gesture, 5) } //Step 4
        });
        this.panResponder6 = PanResponder.create({    //Step 2
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: Animated.event([null, { //Step 3
                dx: this.state.pan6.x,
                dy: this.state.pan6.y
            }]),
            onPanResponderRelease: (e, gesture) => { this._handlenumberPosition(this.state.pan6, gesture, 6) } //Step 4
        });
        this.panResponder7 = PanResponder.create({    //Step 2
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: Animated.event([null, { //Step 3
                dx: this.state.pan7.x,
                dy: this.state.pan7.y
            }]),
            onPanResponderRelease: (e, gesture) => { this._handlenumberPosition(this.state.pan7, gesture, 7) } //Step 4
        });
        this.panResponder8 = PanResponder.create({    //Step 2
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: Animated.event([null, { //Step 3
                dx: this.state.pan8.x,
                dy: this.state.pan8.y
            }]),
            onPanResponderRelease: (e, gesture) => { this._handlenumberPosition(this.state.pan8, gesture, 8) } //Step 4
        });
        this.panResponder9 = PanResponder.create({    //Step 2
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: Animated.event([null, { //Step 3
                dx: this.state.pan9.x,
                dy: this.state.pan9.y
            }]),
            onPanResponderRelease: (e, gesture) => { this._handlenumberPosition(this.state.pan9, gesture, 9) } //Step 4
        });
    }
    componentWillMount() {
        this._timer(1000);
        var randomNumber = this.generateNumber()
        this.setState({ randomNumber: "" + randomNumber })

    }
    onCancel() {
        console.log("CANCEL")
        this.setState({ visible: false });
    }

    _share() {
        this.setState({ winModalVisible: false })
        var Actions = this.props.routes;
        Actions.share();
    }
    _secondToTime(second) {
        var date = new Date(null);
        date.setSeconds(second); // specify value for SECONDS here
        var result = date.toISOString().substr(11, 8);
        return result;
    }
    _timer(timeOut) {
        setInterval(() => {
            this.setState({
                second: this.state.second + 1,
                curTime: this._secondToTime(this.state.second + 1)
            })
        }, timeOut)
    }
    generateNumber() {
        var res = "";
        while (res.length < 4) {
            var randomdigit = Math.floor(Math.random() * 9)
            if (res.indexOf("" + randomdigit) == -1)
                res = res + "" + randomdigit
        }
        return res
    }
    setDropZoneValues0(event) {      //Step 1
        this.setState({
            dropZoneValues0: event.nativeEvent.layout
        });
    }
    setDropZoneValues1(event) {      //Step 1
        this.setState({
            dropZoneValues1: event.nativeEvent.layout
        });
    }
    setDropZoneValues2(event) {      //Step 1
        this.setState({
            dropZoneValues2: event.nativeEvent.layout
        });
    }
    setDropZoneValues3(event) {      //Step 1
        this.setState({
            dropZoneValues3: event.nativeEvent.layout
        });
    }
    _handlenumberPosition(pan, gesture, order) {
        var showDraggable = this.state.showDraggable;
        if (this.isDropZone(gesture, order).shouldRemove) { //Step 1
            showDraggable[order] = false;
            this.setState({
                showDraggable: showDraggable //Step 3
            });
        } else {
            Animated.spring(
                pan,
                { toValue: { x: 0, y: 0 } }
            ).start();
        }

    }
    _solution() {
        this._showStartModal()
    }

    _replay() {
        this.setState({
            rows: 0,
            second: 0,
            curTime: "00:00:00"
        })
        var randomNumber = this.generateNumber();
        this.setState({
            backgroundColorNumber: "grey",
            randomNumber: "" + randomNumber,
            listNumbers: []
        });
        this._recync();
    }
    _validate() {
        var numberProposed = this.state.numberProposed
        var isValide = true;
        for (var i = 0; i < numberProposed.length; i++) {
            if (numberProposed[i] == "_") {
                isValide = false
            }
        }
        if (isValide) {
            this._recync();
            var resCampare = this._campare(numberProposed)
            var listNumbers = this.state.listNumbers;
            if (resCampare.mort == 4) {
                addScoreRow(this.state.curTime, this.state.rows, (data) => {
                    this.setState({ curTimeInfo: data.time, roundInfo: data.round + 1 })
                    this._showWinModal()
                });;
            }
            listNumbers.push(resCampare);
            this.setState({
                rows: this.state.rows + 1,
                numberProposed: ["_", "_", "_", "_"],
                listNumbers: listNumbers //Step 3
            });
        } else {
            ToastAndroid.show('error: Empty digit', ToastAndroid.SHORT);
        }
    }

    _campare(guessedNumber) {
        var res = { numberProposed: guessedNumber[0] + "" + guessedNumber[1] + "" + guessedNumber[2] + "" + guessedNumber[3], mort: 0, blesse: 0 };
        var randomNumber = this.state.randomNumber
        for (var i = 0; i < randomNumber.length; i++) {
            for (var j = 0; j < guessedNumber.length; j++) {
                if (randomNumber[i] == guessedNumber[j]) {
                    if (i == j) res.mort = Number(res.mort) + 1;
                    else res.blesse = Number(res.blesse) + 1;
                }
            }
        }
        return res
    }
    _recync() {
        Animated.spring(this.state.pan0, { toValue: { x: 0, y: 0 } }).start();
        Animated.spring(this.state.pan1, { toValue: { x: 0, y: 0 } }).start();
        Animated.spring(this.state.pan2, { toValue: { x: 0, y: 0 } }).start();
        Animated.spring(this.state.pan3, { toValue: { x: 0, y: 0 } }).start();
        Animated.spring(this.state.pan4, { toValue: { x: 0, y: 0 } }).start();
        Animated.spring(this.state.pan5, { toValue: { x: 0, y: 0 } }).start();
        Animated.spring(this.state.pan6, { toValue: { x: 0, y: 0 } }).start();
        Animated.spring(this.state.pan7, { toValue: { x: 0, y: 0 } }).start();
        Animated.spring(this.state.pan8, { toValue: { x: 0, y: 0 } }).start();
        Animated.spring(this.state.pan9, { toValue: { x: 0, y: 0 } }).start();
        this.setState({
            numberProposed: ["_", "_", "_", "_"],
            showDraggable: [true, true, true, true, true, true, true, true, true, true]
        })
    }
    _recyncSolution() {
        Animated.spring(this.state.pan0, { toValue: { x: 0, y: 0 } }).start();
        Animated.spring(this.state.pan1, { toValue: { x: 0, y: 0 } }).start();
        Animated.spring(this.state.pan2, { toValue: { x: 0, y: 0 } }).start();
        Animated.spring(this.state.pan3, { toValue: { x: 0, y: 0 } }).start();
        Animated.spring(this.state.pan4, { toValue: { x: 0, y: 0 } }).start();
        Animated.spring(this.state.pan5, { toValue: { x: 0, y: 0 } }).start();
        Animated.spring(this.state.pan6, { toValue: { x: 0, y: 0 } }).start();
        Animated.spring(this.state.pan7, { toValue: { x: 0, y: 0 } }).start();
        Animated.spring(this.state.pan8, { toValue: { x: 0, y: 0 } }).start();
        Animated.spring(this.state.pan9, { toValue: { x: 0, y: 0 } }).start();
        this.setState({
            showDraggable: [true, true, true, true, true, true, true, true, true, true]
        })
    }
    isDropZone(gesture, order) {     //Step 2
        var dz0 = this.state.dropZoneValues0;
        var dz1 = this.state.dropZoneValues1;
        var dz2 = this.state.dropZoneValues2;
        var dz3 = this.state.dropZoneValues3;
        if (gesture.moveX > (dz0.x + 80) && gesture.moveX < dz0.x + dz0.height + 80) {
            var numberProposed = this.state.numberProposed;
            if (numberProposed[0] != "_")
                return { shouldRemove: false, digit: 0 }
            numberProposed[0] = order;
            this.setState({
                numberProposed: numberProposed
            })
            return { shouldRemove: true, digit: 0 }
        }
        else if (gesture.moveX > (dz1.x + 80) && gesture.moveX < dz1.x + dz1.height + 80) {
            var numberProposed = this.state.numberProposed;
            if (numberProposed[1] != "_")
                return { shouldRemove: false, digit: 1 }
            numberProposed[1] = order;
            this.setState({
                numberProposed: numberProposed
            })
            return { shouldRemove: true, digit: 1 }
        }
        else if (gesture.moveX > (dz2.x + 80) && gesture.moveX < dz2.x + dz2.height + 80) {
            var numberProposed = this.state.numberProposed;
            if (numberProposed[2] != "_")
                return { shouldRemove: false, digit: 2 }
            numberProposed[2] = order;
            this.setState({
                numberProposed: numberProposed
            })
            return { shouldRemove: true, digit: 2 }
        }
        else if (gesture.moveX > (dz3.x + 80) && gesture.moveX < dz3.x + dz3.height + 80) {
            var numberProposed = this.state.numberProposed;
            if (numberProposed[3] != "_")
                return { shouldRemove: false, digit: 3 }
            numberProposed[3] = order;
            this.setState({
                numberProposed: numberProposed
            })
            return { shouldRemove: true, digit: 3 }
        } else return { shouldRemove: false, digit: 10 }
    }

    randomRGB = () => 100 + Math.random() * 85
    getColor() {
        let r = this.randomRGB()
        let g = this.randomRGB()
        let b = this.randomRGB()
        return 'rgb(' + r + ', ' + g + ', ' + b + ')'
    }
    _renderNumbers(item, sectionID, rowID) {
        return (
            <TouchableOpacity style={styles.NumberListContainer}>
                <View style={styles.NumberListTime}>
                    <View style={styles.doubeNumberListTime}>
                        <Text style={{ color: "black", fontSize: 20 }}> {item.numberProposed} </Text>
                    </View>
                    <View style={styles.halfNumberListTime}>
                        <Text style={{ color: "black", fontSize: 20 }}> {item.mort} </Text>
                    </View>
                    <View style={styles.halfNumberListTime}>
                        <Text style={{ color: "black", fontSize: 20 }}> {item.blesse} </Text>
                    </View>
                    <View style={styles.halfNumberListTime}>
                        <Text > </Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
    _showModal() {
        this.setState({ menuModalVisible: true })
    }

    _showWinModal() {
        this.setState({ winModalVisible: true })
    }
    _showStartModal() {
        this.setState({ solutionModalVisible: true })
    }
    _toggleMenuModal() {
        this.setState((prevState, props) => {
            return {
                menuModalVisible: !prevState.menuModalVisible
            }
        });
    };
    _toggleStartModal() {
        this.setState((prevState, props) => {
            return {
                startModalVisible: !prevState.startModalVisible
            }
        });
    };
    _toggleWinModal() {
        this._replay();
        this.setState((prevState, props) => {
            return {
                winModalVisible: !prevState.winModalVisible
            }
        });
    };
    _toggleSolutionModal() {
        this._replay();
        this.setState((prevState, props) => {
            return {
                solutionModalVisible: !prevState.solutionModalVisible
            }
        });
    };
    start() {
        this.setState({ startModalVisible: false })
        this._replay();
        this._timer(1000);
    }
    render() {
        return (
            <View
                style={styles.container}
            //source={require('../../images/screenEmpty.png')}
            >

                <ModalComponent
                    visible={this.state.menuModalVisible}
                    toggleModalBalance={this._toggleMenuModal.bind(this)}
                    routes={this.props.routes}
                />
                <ModalWin
                    visible={this.state.winModalVisible}
                    toggleModalWin={this._toggleWinModal.bind(this)}
                    time={this.state.curTimeInfo}
                    round={this.state.roundInfo}
                    share={this._share.bind(this)}
                />
                <ModalSolution
                    oldRandomNumber={this.state.randomNumber}
                    visible={this.state.solutionModalVisible}
                    toggleModalSolution={this._toggleSolutionModal.bind(this)}
                />
                <View style={[styles.containerHeader]}>
                    <View style={styles.mainContainer}>
                        <View style={styles.subHeader1}>
                            <TouchableOpacity onPress={() => this._share()} style={styles.headerSettingShare}>
                                <Icon name="md-share" color='#fff' size={40} > </Icon>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this._showModal()} style={styles.headerSettingContainer} >
                                <Icon name="ios-settings" color='#fff' size={40} > </Icon>
                            </TouchableOpacity>
                        </View>



                        <View style={styles.NumberListTimeUp}>
                            <View style={styles.halfNumberListTimeUp}>
                                <View style={styles.halfNumberListTimeText}>
                                    <Text style={styles.headerTitleUp} >   Time  {this.state.curTime}   </Text>
                                </View>
                            </View>
                            <View style={styles.halfNumberListTimeUp}>
                                <View style={styles.halfNumberListTimeText}>
                                    <Text style={styles.headerTitleUp}>   Round  {this.state.rows}   </Text>
                                </View>
                            </View>
                        </View>



                        <View style={styles.NumberListTime}>
                            <View style={styles.doubeNumberListTime}>
                                <Text style={styles.headerTitleDown} >Number</Text>
                            </View>
                            <View style={styles.halfNumberListTime}>
                                <Text style={styles.headerTitleDown} >TORR</Text>
                            </View>
                            <View style={styles.halfNumberListTime}>
                                <Text style={styles.headerTitleDown} >WON</Text>
                            </View>
                            <View style={styles.halfNumberListTime}>
                                <Text > </Text>
                            </View>
                        </View>






                        <ScrollView tabLabel='numbers' style={styles.tabView}>
                            <ListView
                                style={styles.tabView}
                                enableEmptySections={true}
                                showsVerticalScrollIndicator={true}
                                dataSource={this.dataSource.cloneWithRows(this.state.listNumbers)}
                                renderRow={(rowData, sectionID, rowID) => this._renderNumbers(rowData, sectionID, rowID)}
                            />
                        </ScrollView>
                    </View>
                </View>
                <View style={[styles.containerFooter]}>
                    <View style={styles.containerFooterBox}>
                        <View style={[styles.boxButtonLeft]}>
                            <TouchableOpacity style={styles.blockOK} onPress={() => this._solution()} >
                                <Icon name="md-bulb" color='white' size={width_window / 9}> </Icon>
                                <Text style={{ color: 'white', fontSize: 10 }}>Solution</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.blockOK} onPress={() => this._replay()} >
                                <Icon name="md-refresh" color='white' size={width_window / 9}> </Icon>
                                <Text style={{ color: 'white', fontSize: 10 }}>replay</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.box]}>
                            <View style={styles.containerNumbersColumn}>
                                <View style={styles.containerNumbersRow1}>
                                    <View style={[styles.blockEmpty, { backgroundColor: this.state.backgroundColorNumber }]}
                                        onLayout={this.setDropZoneValues0.bind(this)} >
                                        <Text style={{ color: "white", fontSize: 20 }}> {this.state.numberProposed[0]} </Text>
                                    </View>
                                    <View style={[styles.blockEmpty, { backgroundColor: this.state.backgroundColorNumber }]}
                                        onLayout={this.setDropZoneValues1.bind(this)}>
                                        <Text style={{ color: "white", fontSize: 20 }}> {this.state.numberProposed[1]} </Text>
                                    </View>
                                    <View style={[styles.blockEmpty, { backgroundColor: this.state.backgroundColorNumber }]}
                                        onLayout={this.setDropZoneValues2.bind(this)}>
                                        <Text style={{ color: "white", fontSize: 20 }}> {this.state.numberProposed[2]} </Text>
                                    </View>
                                    <View style={[styles.blockEmpty, { backgroundColor: this.state.backgroundColorNumber }]}
                                        onLayout={this.setDropZoneValues3.bind(this)}>
                                        <Text style={{ color: "white", fontSize: 20 }}> {this.state.numberProposed[3]} </Text>
                                    </View>
                                </View>
                                <View style={styles.containerNumbersRow2}>
                                    {this.renderDraggable0()}
                                    {this.renderDraggable1()}
                                    {this.renderDraggable2()}
                                    {this.renderDraggable3()}
                                    {this.renderDraggable4()}
                                </View>


                                <View style={styles.containerNumbersRow3}>
                                    {this.renderDraggable5()}
                                    {this.renderDraggable6()}
                                    {this.renderDraggable7()}
                                    {this.renderDraggable8()}
                                    {this.renderDraggable9()}
                                </View>
                            </View>
                        </View>
                        <View style={[styles.boxButtonRight]}>
                            <TouchableOpacity visible={false} style={styles.blockOK} onPress={() => this._validate()} >
                                <Icon name="md-checkbox-outline" color='white' size={width_window / 9}> </Icon>
                                <Text style={{ color: 'white', fontSize: 10 }}>valid</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.blockOK} onPress={() => this._recync()} >
                                <Icon name="md-undo" color='white' size={width_window / 9}> </Icon>
                                <Text style={{ color: 'white', fontSize: 10 }}>clean</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
    renderDraggable9() {
        if (this.state.showDraggable[9]) {
            return (
                <Animated.View
                    {...this.panResponder9.panHandlers}
                    style={[this.state.pan9.getLayout(), styles.blockNumber]}>
                    <Text style={{ color: "white", fontSize: 20 }}>9</Text>
                </Animated.View>
            );
        }
    }
    renderDraggable8() {
        if (this.state.showDraggable[8]) {
            return (
                <Animated.View
                    {...this.panResponder8.panHandlers}
                    style={[this.state.pan8.getLayout(), styles.blockNumber]}>
                    <Text style={{ color: "white", fontSize: 20 }}>8</Text>
                </Animated.View>
            );
        }
    }

    renderDraggable7() {
        if (this.state.showDraggable[7]) {
            return (
                <Animated.View
                    {...this.panResponder7.panHandlers}
                    style={[this.state.pan7.getLayout(), styles.blockNumber]}>
                    <Text style={{ color: "white", fontSize: 20 }}>7</Text>
                </Animated.View>
            );
        }
    }

    renderDraggable6() {
        if (this.state.showDraggable[6]) {
            return (
                <Animated.View
                    {...this.panResponder6.panHandlers}
                    style={[this.state.pan6.getLayout(), styles.blockNumber]}>
                    <Text style={{ color: "white", fontSize: 20 }}>6</Text>
                </Animated.View>
            );
        }
    }

    renderDraggable5() {
        if (this.state.showDraggable[5]) {
            return (
                <Animated.View
                    {...this.panResponder5.panHandlers}
                    style={[this.state.pan5.getLayout(), styles.blockNumber]}>
                    <Text style={{ color: "white", fontSize: 20 }}>5</Text>
                </Animated.View>
            );
        }
    }

    renderDraggable4() {
        if (this.state.showDraggable[4]) {
            return (
                <Animated.View
                    {...this.panResponder4.panHandlers}
                    style={[this.state.pan4.getLayout(), styles.blockNumber]}>
                    <Text style={{ color: "white", fontSize: 20 }}>4</Text>
                </Animated.View>
            );
        }
    }

    renderDraggable3() {
        if (this.state.showDraggable[3]) {
            return (
                <Animated.View
                    {...this.panResponder3.panHandlers}
                    style={[this.state.pan3.getLayout(), styles.blockNumber]}>
                    <Text style={{ color: "white", fontSize: 20 }}>3</Text>
                </Animated.View>
            );
        }
    }

    renderDraggable2() {
        if (this.state.showDraggable[2]) {
            return (
                <Animated.View
                    {...this.panResponder2.panHandlers}
                    style={[this.state.pan2.getLayout(), styles.blockNumber]}>
                    <Text style={{ color: "white", fontSize: 20 }}>2</Text>
                </Animated.View>
            );
        }
    }

    renderDraggable1() {
        if (this.state.showDraggable[1]) {
            return (
                <Animated.View
                    {...this.panResponder1.panHandlers}
                    style={[this.state.pan1.getLayout(), styles.blockNumber]}>
                    <Text style={{ color: "white", fontSize: 20 }}>1</Text>
                </Animated.View>
            );
        }
    }

    renderDraggable0() {
        if (this.state.showDraggable[0]) {
            return (
                <Animated.View
                    {...this.panResponder0.panHandlers}
                    style={[this.state.pan0.getLayout(), styles.blockNumber]}>
                    <Text style={{ color: "white", fontSize: 20 }}>0</Text>
                </Animated.View>
            );
        }
    }
}

const styles = StyleSheet.create({

    headerContainerTab: {
        flexDirection: 'column',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    blockNumber: {
        backgroundColor: '#1abc9c',
        margin: 2,
        width: width_window / 9,

        height: width_window / 9,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    blockEmpty: {
        margin: 2,
        width: width_window / 9,
        height: width_window / 9,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    blockOK: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    NumberListContainer: {
        flex: 1,
        height: 30,
        borderRadius: 0,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'black'
    },
    subHeader1: {
        justifyContent: 'space-between',
        marginLeft: 5,
        marginRight: 5,
        alignItems: "center",
        flexDirection: 'row',
        height: 60,
    },

    userContainer: {
        borderWidth: 1,
        borderColor: 'black',
        marginTop: 5,
        marginBottom: 5,
        marginLeft: width_window / 2 - 25,
        borderRadius: 25,
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    headerSettingContainer: {
    },

    headerSettingShare: {

    },
    NumberListHeader: {
        height: 30,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'black'
    },
    NumberListTime: {
        marginLeft: 20,
        marginRight: 20,
        flexDirection: 'row',
        height: 30,
        backgroundColor: 'white'
    },
    NumberListTimeUp: {
        flexDirection: 'row',
        height: 50
    },
    halfNumberListTimeUp: {
        alignItems: 'center',
        flex: 1,
        height: 50
    },
    halfNumberListTime: {
        alignItems: 'center',
        flex: 1,
        height: 30
    },
    doubeNumberListTime: {
        alignItems: 'center',
        flex: 3,
        height: 30,
        backgroundColor: 'white'
    },
    halfNumberListTimeText: {
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 25,
        alignItems: 'center',
        backgroundColor: '#ffeead'
    },
    footer: {
        flex: 1,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        backgroundColor: '#964500',
        flex: 1,
        height: height,
        width: width,
        flexDirection: 'column'
    },
    containerTab: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: 'white'
    },
    containerNumbersRow1: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerNumbersRow2: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerNumbersRow3: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerNumbersColumn: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerHeader: {
        borderBottomWidth: 10,
        borderBottomColor: '#ffeead',
        borderRightWidth: 5,
        borderRightColor: '#ffeead',
        borderLeftWidth: 5,
        borderLeftColor: '#ffeead',
        height: (height_window) * 2 / 3
    },
    containerFooter: {
        backgroundColor: '#ffeead',
        height: (height_window) / 3
    },
    containerFooterBox: {
        flex: 1,
        flexDirection: 'row'
    },
    box: {
        justifyContent: 'center',
        paddingRight: 10,
        paddingLeft: 10,
        width: width_window * 2 / 3,
        backgroundColor: '#ffeead'
    },
    boxButtonRight: {
        flex: 1,
        flexDirection: 'column',
        width: width_window / 6,
        justifyContent: 'center',
        borderTopLeftRadius: 30,
        alignItems: 'center',
        backgroundColor: '#964500'
    },
    boxButtonLeft: {
        flex: 1,
        flexDirection: 'column',
        width: width_window / 6,
        borderTopRightRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#964500'
    },
    mainContainer: {
        flex: 1
    },
    text: {
        marginTop: 25,
        marginLeft: 5,
        marginRight: 5,
        textAlign: 'center',
        color: '#fff'
    },

    headerTitle: {
        fontWeight: 'bold',
        fontSize: 30,
    },
    headerTitleUp: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#000'
    },
    headerTitleDown: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    underlineStyle: {
        backgroundColor: 'white',
        height: 2
    },
    //modal 
    header: {
        justifyContent: 'center',
        alignItems: "center",

        width: width,
        height: height * 2 / 3
    },
    //modal
    modal: {
        backgroundColor: 'rgba(500,500, 500, 0.9)',
        justifyContent: 'center',
        alignItems: "center",

        width: width,
        height: height / 3
    },
    rowModale: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#eee",
    },
    containerShare: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    showHideText: {
        fontWeight: 'bold',
        color: "#000",
        fontSize: 30,
    },
});
module.exports = Dashboard;