import React, { useState } from 'react';
import { Text, TouchableOpacity, View, StyleSheet, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const WeightConverter = (props) => {
    const [inputValue, setInputValue] = useState(0);
    const [inputUnit, setInputUnit] = useState('Kg');
    const [outputUnit, setOutputUnit] = useState('Gm');
    const [submitted, SetSubmitted] = useState(false);

    const handleInputValueChange = (value) => {
        setInputValue(value);
    };
    const handleInputUnitChange = (unit) => {
        setInputUnit(unit);
    };

    const handleOutputUnitChange = (unit) => {
        setOutputUnit(unit);
    };

    const convert = (value, fromUnit, toUnit) => {
        if (fromUnit === toUnit) {
            return value;
        }

        if (fromUnit === 'Kg') {
            if (toUnit === 'Gm') {
                return value * 1000;
            }
        }

        if (fromUnit === 'Gm') {
            if (toUnit === 'Kg') {
                return value / 1000;
            }
        }
    };

    const onPressHandler = () => {
        SetSubmitted(!submitted);
    }

    const outputValue = convert(inputValue, inputUnit, outputUnit);


    return (
        <View style={styles.container}>
            <Text style={styles.text}>Weight Converter</Text>
            <TextInput
                style={styles.input}
                onChangeText={handleInputValueChange}
                placeholder='enter value'
            />
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.text1}> From: </Text>
                <Text>      </Text>
                <Picker
                    selectedValue={inputUnit}
                    onValueChange={handleInputUnitChange}
                    style={styles.picker1}
                >
                    <Picker.Item label="Kg" value="Kg" />
                    <Picker.Item label="Gm" value="Gm" />
                </Picker>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.text1}> To: </Text>
                <Text>            </Text>
                <Picker
                    selectedValue={outputUnit}
                    onValueChange={handleOutputUnitChange}
                    style={styles.picker}
                >
                    <Picker.Item label="Kg" value="Kg" />
                    <Picker.Item label="Gm" value="Gm" />
                </Picker>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text3} onPress={() => props.navigation.navigate('LengthConverter')} >Length Converter</Text>
                </TouchableOpacity>
                <Text>     </Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text3} onPress={() => props.navigation.navigate('TempConverter')} >Temp Converter</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button1}>
                <Text style={styles.text2} onPress={onPressHandler} >Answer</Text>
            </TouchableOpacity>

            {submitted ?
                <Text style={styles.output}>
                    {inputValue} {inputUnit} = {outputValue} {outputUnit}
                </Text>
                :
                null}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffff'
    },
    text: {
        fontSize: 25,
        color: '#000',
        marginTop: 20
    },
    input: {
        width: 200,
        borderWidth: 1,
        borderColor: '#555',
        borderRadius: 5,
        textAlign: 'center',
        fontSize: 15,
        marginTop: 15,
        fontStyle: 'italic',
        color: '#000'
    },
    text1: {
        fontSize: 18,
        marginHorizontal: 15,
        color: '#000',
        marginTop: 10,

    },
    picker1: {
        margin: -3,
        marginHorizontal: 8,
        height: 30,
        width: 110
    },
    picker: {
        margin: -3,
        marginHorizontal: 2,
        height: 30,
        width: 110,
    },
    text2: {
        color: '#ffff',
        marginHorizontal: 20,
        fontSize: 25,

    },
    text3: {
        fontSize: 15,
        marginHorizontal: 15,
        marginTop: 2,
    },
    output: {
        marginTop: -5,
        fontSize: 20,
        color: '#000'
    },
    button1: {
        backgroundColor: '#5d57ff',
        top: 90,
        borderRadius: 10
    },
    button: {
        backgroundColor: '#FFFAFA',
        top: 390,
        marginLeft: 5,
        borderRadius: 5
    },
});

export default WeightConverter;