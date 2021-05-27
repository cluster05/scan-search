import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Camera } from 'expo-camera';

import PreviewImage from './PreviewImage/PreviewImage';
import CameraBuilder from './CameraBuilder/CameraBuilder';

const CameraLayout = ({ toggleScanMode }) => {

    const [hasPermission, setHasPermission] = useState(null);
    const [capturedImage, setCapturedImage] = useState('');
    const [showPreview, setShowPreview] = useState(false);
    const [clickedPhotoLoadingPreview, setClickedPhotoLoadingPreview] = useState(false);

    let cameraRef;


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

    const snap = async (cRef) => {
        cameraRef = cRef
        if (cameraRef) {
            console.log('[camera layout] snap function called')
            setClickedPhotoLoadingPreview(true);
            let photo = await cameraRef.takePictureAsync();
            setCapturedImage(photo.uri);
            setShowPreview(true);
        } else {
            console.log('[camera layout] camera ref not found')
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
                <PreviewImage
                    uri={capturedImage}
                    retakeImage={retakeImage}
                    processImage={processImage} />
                :
                <CameraBuilder
                    clickedPhotoLoadingPreview={clickedPhotoLoadingPreview}
                    toggleScanMode={toggleScanMode}
                    snap={snap}
                />
            }
        </View>
    )
}

export default CameraLayout

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
