import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Dimensions } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { Camera } from 'expo-camera';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const CameraBuilder = ({ clickedPhotoLoadingPreview, toggleScanMode, snap }) => {

    let cameraRef;


    return (
        <Camera
            style={styles.camera}
            type="back"
            autoFocus
            zoom={0.2}
            ratio="2:1"
            ref={ref => {
                cameraRef = ref;
            }}
        >

            <TouchableOpacity
                style={styles.close}
                onPress={toggleScanMode}
            >
                <Feather name="x" size={24} color="white" />
            </TouchableOpacity>
            <View style={styles.capture}>
                <View style={styles.caputreView}>
                    {
                        clickedPhotoLoadingPreview ?
                            null :
                            <TouchableOpacity
                                style={styles.captureButton}
                                onPress={() => snap(cameraRef)}
                            >
                                <Feather name="aperture" size={50} color="#7868e6" />
                            </TouchableOpacity>
                    }

                </View>
            </View>

        </Camera>
    )
}

export default CameraBuilder

const styles = StyleSheet.create({

    camera: {
        width: windowWidth,
        height: windowHeight
    },
    close: {
        position: 'absolute',
        top: 10,
        right: 5,
        backgroundColor: 'tomato',
        borderRadius: 20,
        padding: 5
    },
    capture: {
        position: 'absolute',
        bottom: 40,
        width: '100%',
    },
    caputreView: {
        backgroundColor: 'white',
        alignSelf: 'center',
        borderRadius: 10,
        padding: 10,
        borderColor: '#b8b5ff'
    }
})
