import React from 'react';
import { Text, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

function Separator() {
  return <View style={styles.separator} />;
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Calculadora</Text>
        <TextInput
        style={styles.tela}
        /*onChangeText='ss'
        value='dd'*/
      />
      </View>
      <Separator />
      <View style={styles.numeros}>

        
      <View style={styles.ladolado}>
          <TouchableOpacity
            style={styles.numero}
            onPress={(Text) => TextInput.this('1')}
          >
            <Text style={styles.btntxt}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.numero}
            onPress={() => Alert.alert('Button with adjusted color pressed')}
          >
            <Text style={styles.btntxt}>CE</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.numero}
            onPress={() => Alert.alert('Button with adjusted color pressed')}
          >
            <Text style={styles.btntxt}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.numero}
            onPress={() => Alert.alert('Button with adjusted color pressed')}
          >
            <Text style={styles.btntxt}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.ladolado}>
          <TouchableOpacity
            style={styles.numero}
            onPress={(Text) => TextInput.this('1')}
          >
            <Text style={styles.btntxt}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.numero}
            onPress={() => Alert.alert('Button with adjusted color pressed')}
          >
            <Text style={styles.btntxt}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.numero}
            onPress={() => Alert.alert('Button with adjusted color pressed')}
          >
            <Text style={styles.btntxt}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.numero}
            onPress={() => Alert.alert('Button with adjusted color pressed')}
          >
            <Text style={styles.btntxt}>-</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.ladolado}>
          <TouchableOpacity
            style={styles.numero}
            onPress={(Text) => TextInput.this('1')}
          >
            <Text style={styles.btntxt}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.numero}
            onPress={() => Alert.alert('Button with adjusted color pressed')}
          >
            <Text style={styles.btntxt}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.numero}
            onPress={() => Alert.alert('Button with adjusted color pressed')}
          >
            <Text style={styles.btntxt}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.numero}
            onPress={() => Alert.alert('Button with adjusted color pressed')}
          >
            <Text style={styles.btntxt}>*</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.ladolado}>
          <TouchableOpacity
            style={styles.numero}
            onPress={(Text) => TextInput.this('1')}
          >
            <Text style={styles.btntxt}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.numero}
            onPress={() => Alert.alert('Button with adjusted color pressed')}
          >
            <Text style={styles.btntxt}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.numero}
            onPress={() => Alert.alert('Button with adjusted color pressed')}
          >
            <Text style={styles.btntxt}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.numero}
            onPress={() => Alert.alert('Button with adjusted color pressed')}
          >
            <Text style={styles.btntxt}>/</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.ladolado}>
          <TouchableOpacity
            style={styles.numero}
            onPress={(Text) => TextInput.this('1')}
          >
            <Text style={styles.btntxt}>X</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.numero}
            onPress={() => Alert.alert('Button with adjusted color pressed')}
          >
            <Text style={styles.btntxt}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.numero}
            onPress={() => Alert.alert('Button with adjusted color pressed')}
          >
            <Text style={styles.btntxt}>,</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.numero}
            onPress={() => Alert.alert('Button with adjusted color pressed')}
          >
            <Text style={styles.btntxt}>=</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
}