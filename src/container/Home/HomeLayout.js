import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const HomeLayout = ({ toggleScaneMode }) => {
    return (
        <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            height: '100%'
        }}>
            <Text style={{
                fontSize: 25,
                fontWeight: 'bold'
            }}> Hello Ajay Kumbhar 👏</Text>
            <View
                style={{
                    marginVertical: 20
                }}>
                <Text style={{
                    fontSize: 50,
                    fontWeight: 'bold'
                }}>What do you</Text>
                <Text style={{
                    fontSize: 50,
                    fontWeight: 'bold'
                }}>need to know </Text>
            </View>
            <TouchableOpacity
                onPress={toggleScaneMode}
                style={{
                    marginTop: 20
                }}>

                <View style={{
                    borderRadius: 40,
                    width: 250,
                    alignItems: "center",
                    borderWidth: 10,
                    borderColor: "#b8b5ff",
                }}>
                    <Text
                        style={{
                            color: "#7868e6",
                            paddingVertical: 15,
                            fontWeight: "bold",
                            fontSize: 18,
                        }}>SCAN & SEARCH</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default HomeLayout

const styles = StyleSheet.create({

})
