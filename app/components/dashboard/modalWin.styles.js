import { StyleSheet, Dimensions } from 'react-native';
let {width, height} = Dimensions.get('window');

export default styles = StyleSheet.create({

    //Header
    header: {
        justifyContent: 'center',
        alignItems: "center",
        
        width: width,
        height: height/4
    },
    headerSolution: {
        justifyContent: 'center',
        alignItems: "center",
        
        width: width,
        height: height*2/3
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
    //modal
    modal: {
            backgroundColor:'rgba(500, 500, 500, 0.5)',
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 20,
        margin: 10,
        flexDirection: 'column',
        width: width-20,
        height: height/2
    },
    modalSolution: {
            backgroundColor:'rgba(500, 500, 500, 0.5)',
        justifyContent: 'center',
        alignItems: "center",
        flexDirection: 'column',
        width: width,
        height: height/3
    },
    modalImage: {
        height:100,
        width: 60
    },
    modalLign: {
        justifyContent: 'center',
        alignItems: "center",
        flexDirection: 'row',
        flex:1
    },
    modalSecondLign: {
        justifyContent: 'center',
        alignItems: "center",
        flex:1
    },
    modalColumn: {
        justifyContent: 'center',
        alignItems: "center",
    },
    row: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#eee",
    },
    column: {
        width: width / 2
    },
    modalContent: {
        alignSelf: 'center'
    },
    showHideTextHeader: {
        fontWeight: 'bold',
        color: "#000",
        fontSize: 40,
    },
    TextShare: {
        fontWeight: 'bold',
        color: "#000",
        fontSize: 15,
    },
    TextRestart: {
        fontWeight: 'bold',
        color: "#000",
        fontSize: 25,
    },
    TextWin: {
        fontWeight: 'bold',
        color: "red",
        fontSize: 30,
    },
    contentHiden: {
        margin: 0,
        height: 0,
        width: 0,
        opacity: 0
    },
    input: {
        borderColor: "#eee",
        borderWidth: 0.5,
        borderRadius: 2,
        color: "#999",
        fontSize: 16,
        fontWeight: 'bold'
    },
    buttonRestart: {
        backgroundColor: "blue",
        height: 60,
        width: 150,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,

    },
    buttonShare: {
        backgroundColor: "grey",
        height: 50,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    h3: {
        color: "#999",
        fontSize: 18,
        fontWeight: 'bold'
    },
    centerElement: {
        alignItems: "center",
    },
    modalPart:{

    }
});