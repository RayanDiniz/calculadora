import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight + 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    header: {
        position: 'absolute',
        top: 25,
        width: '100%',
        alignItems: 'center',
    },
    title: {
        color: '#fff',
        fontSize: 25,
    },
    tela: {
        width: '100%',
        height: 100,
        borderColor: 'gray',
        borderWidth: 1,
    },
    numeros: {
        position: 'absolute',
        left: 0,
        right: 0,
        width: '100%'
    },
    numero: {
        backgroundColor: "#FFA500",
        paddingHorizontal: 0,
        paddingVertical: 5,
        borderRadius: 3,
        width: '25%',
        alignItems: 'center',
    },
    btntxt: {
        fontSize: 40,
        fontWeight: '400',
        color: "#fff",
    },
    ladolado: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
});