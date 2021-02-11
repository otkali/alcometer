import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, Button, Platform } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import RadioForm from 'react-native-simple-radio-button';

export default function App() {
  const [weight, setWeight] = useState('');
  const [bottles, setBottles] = useState(1);
  const [time, setTime] = useState(1);
  const [gender, setGender] = useState('male');
  const [promilles, setPromilles] = useState(0);

  function calculate() {
    let result = 0;
    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let burning = weight / 10;
    let gramsL = grams - burning * time

    if (gender === 'male') {
      result = gramsL / (weight * 0.7);
    } else {
      result = gramsL / (weight * 0.6);
    }

    if (result < 0 ) {
      result = 0
    }
    
    setPromilles(result);
  }
  

  return (
    <View style={styles.container}>
      <View style={styles.field}>
        <Text>Weight</Text>
        <TextInput style={styles.input} 
        keyboardType="number-pad" 
        placeholder="Enter weight"
        value={weight}
        onChangeText={text => setWeight(text)}
        >
        </TextInput>
      </View>

      <View style={styles.field, (Platform.OS !== 'android' && {
            zIndex: 6000 })}>
        <Text style={{marginLeft: 10}}>Bottles</Text>
        <DropDownPicker style={{zIndex: 5000}} items={[
          { label: '1 bottle', value: 1 },
          { label: '2 bottles', value: 2 },
          { label: '3 bottles', value: 3 },
          { label: '4 bottles', value: 4 },
          { label: '5 bottles', value: 5 },
          { label: '6 bottles', value: 6 },
          { label: '7 bottles', value: 7 },
          { label: '8 bottles', value: 8 },
          { label: '9 bottles', value: 9 },
          { label: '10 bottles', value: 10 },
          { label: '11 bottles', value: 11 },
          { label: '12 bottles', value: 12 },
          { label: '13 bottles', value: 13 },
          { label: '14 bottles', value: 14 },
          { label: '15 bottles', value: 15 },
          { label: '16 bottles', value: 16 },
          { label: '17 bottles', value: 17 },
          { label: '18 bottles', value: 18 },
          { label: '19 bottles', value: 19 },
          { label: '20 bottles', value: 20 },
          { label: '21 bottles', value: 21 },
          { label: '22 bottles', value: 22 },
          { label: '23 bottles', value: 23 },
          { label: '24 bottles', value: 24 }
        ]}
          containerStyle={{ height: 40 }}
          defaultValue={bottles}
          onChangeItem={item => setBottles(item.value)}
          style={{marginLeft: 10}}
          labelStyle={{color: '#000'}}
        >
        </DropDownPicker>
      </View>

      <View style={styles.field, (Platform.OS !== 'android' && {
            zIndex: 5000
        })}>
        <Text style={{marginLeft: 10}}>Time</Text>
        <DropDownPicker style={{zIndex: 5000}} items={[
          { label: '1 hour', value: 1 },
          { label: '2 hours', value: 2 },
          { label: '3 hours', value: 3 },
          { label: '4 hours', value: 4 },
          { label: '5 hours', value: 5 },
          { label: '6 hours', value: 6 },
          { label: '7 hours', value: 7 },
          { label: '8 hours', value: 8 },
          { label: '9 hours', value: 9 },
          { label: '10 hours', value: 10 }
        ]}
          containerStyle={{ height: 40 }}
          defaultValue={time}
          onChangeItem={item => setTime(item.value)}
          style={{marginLeft: 10}}
          labelStyle={{color: '#000'}}
        >
        </DropDownPicker>
      </View>

      <View style={styles.field}>
        <Text>Gender</Text>
        <RadioForm
          radio_props={[
            { label: 'Male', value: 'male' },
            { label: 'Female', value: 'female' }
          ]}
          onPress={(value) => {setGender(value)}}
        >
        </RadioForm>
      </View>

      <View style={styles.field}>
        <Text>Promilles</Text>
        <Text>{promilles.toFixed(2)}</Text>
        <Button onPress={calculate} title="Calculate"></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
    marginRight: 20,
  },
  input: {
    marginTop: 10,
  },
  field: {
    margin: 10,
  }
});
