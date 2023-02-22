import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { COLORS, assets, SHADOWS, SIZES, FONTS, titleSize } from '../../constants';
import { TextInputField, RectButton, CircleButton, } from '../../components';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Login({ navigation }) {
    return (
        <View style={styles.container} >
            <View style={{ padding: 20 }}>
                <Text style={{
                    fontFamily: FONTS.bold,
                    fontSize: 30,
                    color: COLORS.white,
                    marginTop: -50
                }}>SIGN IN</Text>

                <Text style={{
                    fontFamily: FONTS.regular,
                    fontSize: 20,
                    color: COLORS.white,
                    marginVertical: 30
                }}>Sign In with email address</Text>
                <Text></Text>
                <View>
                    <TextInputField

                    />
                    <RectButton
                        backgroundColor={COLORS.secondary}
                        borderRadius={12}
                        buttonText="Login"
                    />
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text style={{
                    fontFamily: FONTS.regular,
                    fontSize: SIZES.medium,
                    color: COLORS.white,
                    marginVertical: 30,
                    alignSelf: 'center'
                }}>New Here? Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primary,
        justifyContent: 'center'
    }
})