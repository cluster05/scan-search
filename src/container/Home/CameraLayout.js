import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { Camera } from 'expo-camera';
import { Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const PreviewImage = ({ uri, processImage, retakeImage }) => {

    return (
        <View style={styles.previewContainer}>
            <Image style={styles.previewImage} source={{ uri }} />
            <View style={styles.previewButtons}>
                <View style={styles.previewBackButton}>
                    <TouchableOpacity
                        onPress={processImage}
                    >
                        <Feather name="chevron-left" size={24} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={styles.previewGoButton}>
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

const CameraLayout = ({ toggleScanMode }) => {

    const [hasPermission, setHasPermission] = useState(null);
    const [capturedImage, setCapturedImage] = useState('');
    const [showPreview, setShowPreview] = useState(false);
    const [clickedPhotoLoadingPreview, setClickedPhotoLoadingPreview] = useState(false);

    let camera;

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    const snap = async () => {
        if (camera) {
            setClickedPhotoLoadingPreview(true);
            let photo = await camera.takePictureAsync();
            setCapturedImage(photo.uri);
            setShowPreview(true);
        }
    };

    const retakeImage = () => {
        setCapturedImage('');
        setShowPreview(false);
        setClickedPhotoLoadingPreview(false);

    }

    const processImage = () => {
        setCapturedImage('');
        setShowPreview(false);
        setClickedPhotoLoadingPreview(false);
    }

    return (
        <View style={styles.container}>
            { showPreview ?
                <PreviewImage uri={capturedImage} retakeImage={retakeImage} processImage={processImage} />
                :
                <Camera
                    style={styles.camera}
                    type="back"
                    autoFocus
                    zoom={0.2}
                    ratio="2:1"
                    ref={ref => {
                        camera = ref;
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
                                        onPress={snap}
                                    >
                                        <Feather name="aperture" size={50} color="#7868e6" />
                                    </TouchableOpacity>
                            }

                        </View>
                    </View>

                </Camera>
            }
        </View>
    )
}

export default CameraLayout

const styles = StyleSheet.create({
    container: {
        width: windowWidth,
        height: windowHeight
    },
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
    },
    previewContainer: {
        width: windowWidth,
        height: windowHeight
    },
    previewImage: {
        width: windowWidth,
        height: windowHeight
    },
    previewButtons: {
        position: 'absolute',
        bottom: 40,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    previewBackButton: {
        backgroundColor: 'tomato',
        borderRadius: 10,
        padding: 10,
    },
    previewGoButton: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
    }

});
