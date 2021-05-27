import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const PreviewImage = ({ uri, processImage, retakeImage }) => {

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri }} />
            <View style={styles.buttons}>
                <View style={styles.backButton}>
                    <TouchableOpacity
                        onPress={processImage}
                    >
                        <Feather name="chevron-left" size={24} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={styles.goButton}>
                    <TouchableOpacity
                        onPress={retakeImage}
                    >
                        <Feather name="chevron-right" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default PreviewImage

const styles = StyleSheet.create({
    container: {
        width: windowWidth,
        height: windowHeight
    },
    image: {
        width: windowWidth,
        height: windowHeight
    },
    buttons: {
        position: 'absolute',
        bottom: 40,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    backButton: {
        backgroundColor: 'tomato',
        borderRadius: 10,
        padding: 10,
    },
    goButton: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
    }
})
