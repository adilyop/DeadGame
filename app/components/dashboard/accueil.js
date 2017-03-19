import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  ListView,
  Image,
  StyleSheet,
  ToastAndroid,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  PanResponder,
  Animated,
  Dimensions
} from 'react-native';

var {width, heigh} = Dimensions.get('window');
var width_window = 320;
var height_window = 508;
let CIRCLE_RADIUS = 36;
let Window = Dimensions.get('window');

import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import Icon from 'react-native-vector-icons/Ionicons';
export default class accueil extends Component {

  componentWillMount() {
  }

  render() {
    return (
      <View style={styles.subHeader1}>
        <TouchableOpacity onPress={() => this.share()} style={styles.settingShare}>
          <Icon name="ios-settings" color='#fff' size={50} > </Icon>
        </TouchableOpacity>
      </View>

    )
  }

}

const styles = StyleSheet.create({
  blockNumber: {
    backgroundColor: '#1abc9c',
    margin: 2,
    width: 40,
    height: 40,
    borderRadius: 10,
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
  blockOK: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  NumberListContainer: {
    height: 30,
    borderRadius: 0,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'black'
  },
  NumberListHeader: {
    height: 30,
    borderRadius: 0,
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
  body: {
    width: 200,
    height: 370
  },
  container: {
    flex: 1,
    flexDirection: 'column'
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
    flexDirection: 'row'
  },
  containerNumbersColumn: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerHeader: {
    height: height_window * 2 / 3,
    backgroundColor: '#2c3e50'
  },
  containerFooter: {
    height: height_window / 3,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderColor: 'black'
  },
  containerFooterBox: {
    flex: 1,
    flexDirection: 'row'
  },
  box: {
    justifyContent: 'center',
    paddingRight: 10,
    paddingLeft: 10,
    width: width_window * 3 / 4,
    backgroundColor: 'white'
  },
  boxButton: {
    flex: 1,
    flexDirection: 'column',
    width: width_window / 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    borderTopWidth: 1,
    borderTopColor: 'white',
    borderBottomWidth: 5,
    borderBottomColor: 'white'
  },
  mainContainer: {
    flex: 1
  },
  dropZone: {
    height: 50,
    backgroundColor: '#2c3e50'
  },
  text: {
    marginTop: 25,
    marginLeft: 5,
    marginRight: 5,
    textAlign: 'center',
    color: '#fff'
  },
  draggableContainer: {
    position: 'absolute',
    top: Window.height / 2 - CIRCLE_RADIUS,
    left: Window.width / 2 - CIRCLE_RADIUS,
  },
  circle: {
    backgroundColor: '#1abc9c',
    width: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS * 2,
    borderRadius: CIRCLE_RADIUS
  }
});








/*<TouchableOpacity style={styles.blockOK} onPress={() => this._validate()} > 
        <Text> adil </Text>
        </TouchableOpacity>


<SortableGrid 
        blockTransitionDuration      = { 400 }
        activeBlockCenteringDuration = { 200 }
        itemsPerRow                  = { 4 }
        dragActivationTreshold       = { 200 }
        onDragRelease                = { (itemOrder) => this.setState({itemOrder: itemOrder.itemOrder}) }
        onDragStart                  = { ()          => console.log("Some block is being dragged now!") }
        onDeleteItem                 = { (item)      => console.log("Item was deleted:", item) }
      >
        {
          this.alphabets.map( (letter, index) =>
            <View key={index} style={[styles.blockNumber, { backgroundColor: index > 3 ? this.getColor():"white" }]}>
              <Text style={{color:"white", fontSize: 35}}>{letter}</Text>
            </View>
          )
        }
      </SortableGrid> */