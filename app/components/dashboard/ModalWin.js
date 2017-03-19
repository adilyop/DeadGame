import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    ScrollView, Image,
    TextInput,
    Modal,
    ToastAndroid,
    ActivityIndicator
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './modalWin.styles';
class ModalWin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        };
    };
    share() {
        this.props.toggleModalWin();
        this.props.share();
    }
    start() {
        this.props.toggleModalWin();
    }
    render() {
        return (
            <Modal
                animationType={"fade"}
                transparent={true}
                visible={this.props.visible}
                onRequestClose={() => undefined}
            >
                <Image
                    style={styles.container}
                    source={require('../../images/artifice.png')}>
                    <View style={styles.header}>
                    </View>


                    <View style={styles.modal}>

                        <View style={styles.modalLign}>

                            <View style={styles.modalColumn}>
                                <Text style={styles.TextWin}>YOU WIN </Text>
                                <Text style={styles.TextShare}> {this.props.time} </Text>
                                <Text style={styles.TextShare}>ROUND {this.props.round} </Text>
                            </View>
                            <View style={styles.modalLign}>
                                <Image
                                    style={styles.modalImage}
                                    source={require('../../images/bravo.png')}>
                                </Image>

                            </View>
                        </View>

                        <View style={styles.modalSecondLign}>
                            <TouchableOpacity style={styles.buttonShare} onPress={() => this.share()}>
                                <Text style={styles.TextShare}>SHARE</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonRestart} onPress={() => this.start()}>
                                <Text style={styles.TextRestart}>RESTART</Text>
                            </TouchableOpacity>

                        </View>
                    </View>





                    <View style={styles.header}>
                    </View>

                </Image>
            </Modal>
        );
    };
}
module.exports = ModalWin;