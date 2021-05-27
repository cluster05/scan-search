import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import CameraLayout from '../container/Home/CameraLayout';
import HomeLayout from '../container/Home/HomeLayout';


const Home = () => {

    const [scanMode, setScanMode] = React.useState(false);

    return (
        <SafeAreaView>
            {
                scanMode ?
                    <CameraLayout toggleScanMode={() => setScanMode(false)} /> :
                    <HomeLayout toggleScanMode={() => setScanMode(true)} />

            }
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({})
