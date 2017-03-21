/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Dimensions,
    Text,
    View,
    Image,
    TouchableHighlight,
    Alert,
    ActivityIndicator
} from 'react-native';
import { Router, routerReducer, Route, Container, Animations, Schema } from 'react-native-redux-router';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import dashboard from './components/dashboard/dashboard.component';
import score from './components/dashboard/score';
import share from './components/dashboard/share';
import howToPlay from './components/dashboard/howToPlay';

let ScreenWidth = Dimensions.get("window").width;
let ScreenHeight = Dimensions.get("window").height;
let store = createStore(combineReducers({ routerReducer }));


var App = React.createClass({
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Router>
                    <Schema name="modal" sceneConfig={Animations.FlatFloatFromRight} />
                    <Schema name="default" sceneConfig={Animations.FlatFloatFromRight}  />
                    <Route name="dashboard" component={dashboard} title="dashboard"  initial={true}  />
                    <Route name="share" component={share} title="share" />
                    <Route name="score" component={score} title="score"  />
                    <Route name="howToPlay" component={howToPlay} title="howToPlay" />
                </Router>
            </View>
        );
    }
});
var HeaderView = React.createClass({
    render: function () {
        return (
            <View>
                <Text>Welcome to Community Loans</Text>
            </View>
        );
    }
});

var communityLoansMobileApp = React.createClass({
    getInitialState: function () {
        return {
            loading: true,//true
        }
    },
    componentWillMount: function () {
        this.timeOut();
    },

    timeOut() {
        var self = this;
        setTimeout(function () {
            self.setState({ loading: false })
        }, 500);
    },
    render() {
        if (this.state.loading) {
            return (
            <Image
                    style={styles.container}
                    source={require('./images/acceuil.png')}
                    >
                </Image>
            );
        } else {
            return (
                <View style={styles.flex}>
                    <View style={styles.flex} >
                        <Provider
                            store={store}>
                            <App>

                            </App>
                        </Provider>
                    </View>
                </View>
            );
        }
    },
});
var styles = StyleSheet.create({
    loadingContainer: {
        alignItems: 'center',
        backgroundColor: 'white',
        height: ScreenHeight - 80,
        top: 56
    },
    container: {
        width: ScreenWidth,
        height: ScreenHeight
    },
    flex: {
        flex: 1,
        width: ScreenWidth,
        height: ScreenHeight
    },
    actionContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        flexWrap: 'wrap',
        backgroundColor: '#F5FCFF',
    },
    actionButton: {
        flex: 1,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#16214D',
        borderRadius: 5,
        margin: 8,
    },
    actionButtonText: {
        color: '#ffffff',
    },
    message: {
        fontFamily: 'HelveticaNeue-Thin',
        fontSize: 14,
        alignSelf: 'center',
    },
    // Header View
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        paddingTop: 30,
    },
    title: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        paddingTop: 10,
        fontFamily: 'HelveticaNeue-Light',
        fontSize: 20,
    },
    logo: {
        height: 70,
        width: 191
    }
});

export default communityLoansMobileApp; 
